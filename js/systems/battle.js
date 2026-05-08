import { SKILLS } from "../data/skills.js";
import { ITEMS } from "../data/items.js";
import { byId, randInt, chance, addLog, clamp, choice } from "../core/utils.js";
import { computeStats, syncResourcesToStats } from "./leveling.js";
import { applyStatus, damageModsFromStatuses, getElementMultiplier, isTurnSkipped, tickStatuses } from "./effects.js";
import { grantBattleRewards } from "./rewards.js";
import { useItem } from "./inventory.js";
import { getGeneratedLoot } from "./loot.js";
import { endRunDefeat } from "./run-manager.js";
import { trackQuestProgress } from "./quests.js";
import { trackLegendAbilityUse, trackLegendWeaponUse } from "./legend-engine.js";

function createEnemyIntent(enemy, combat = null) {
  if (enemy.bossMechanics && combat?.round && combat.round % 4 === 0) {
    return { type: "bossCharge", name: "Boss Charge", element: enemy.element ?? "fire", text: `${enemy.name} is charging a boss mechanic. Guard, burst, or exploit a weakness now.` };
  }
  const skillId = choice(enemy.skills ?? []);
  const skill = byId(SKILLS, skillId);
  if (skill && chance(72)) {
    const statusEffect = (skill.effects ?? []).find(effect => effect.type === "status");
    return {
      type: "skill",
      skillId: skill.id,
      name: skill.name,
      element: skill.element,
      text: statusEffect
        ? `${enemy.name} is preparing ${skill.name} and may inflict ${statusEffect.status}.`
        : `${enemy.name} is preparing ${skill.name}.`
    };
  }
  return { type: "attack", name: "Basic Attack", element: "fire", text: `${enemy.name} intends to attack directly.` };
}

export function startBattle(state, enemy, battleType = "normal") {
  syncResourcesToStats(state.player);
  state.combat = {
    type: battleType,
    enemy,
    turn: "player",
    round: 1,
    enemyIntent: createEnemyIntent(enemy, null),
    modifier: state.run?.battleModifier ?? null,
    bossPhaseFlags: {},
    message: `${enemy.name} blocks the path!`
  };
  state.ui.battleTab = "recommended";
  state.ui.battleResult = null;
  state.screen = "battle";
  addLog(state, `<strong>${battleType.toUpperCase()} battle:</strong> ${enemy.name} appears.`);
  if (state.combat.modifier) addLog(state, `<strong>Battle Modifier:</strong> ${state.combat.modifier.name} is active.`);
}

export function playerBasicAttack(state) {
  if (!state.combat || state.combat.turn !== "player") return;
  const playerStats = computeStats(state.player);
  const enemy = state.combat.enemy;
  const base = randInt(4, 8) + playerStats.attack;
  const damage = dealDamage(state.player, enemy, base, "physical", playerStats, enemy.stats, state.combat.modifier);
  trackLegendWeaponUse(state);
  addLog(state, `<span class="player-name">${state.player.name}</span> attacks for <strong>${damage}</strong> damage.`);
  afterPlayerAction(state);
}

export function playerDefend(state) {
  if (!state.combat || state.combat.turn !== "player") return;
  const stats = computeStats(state.player);
  applyStatus(state.player, "guard", 2);
  state.player.stamina = clamp((state.player.stamina ?? 0) + 14, 0, stats.maxStamina);
  state.player.mana = clamp((state.player.mana ?? 0) + 4, 0, stats.maxMana);
  addLog(state, `<strong>${state.player.name} defends.</strong> Guard is active and stamina recovers.`);
  afterPlayerAction(state);
}

export function playerFlee(state) {
  if (!state.combat || state.combat.turn !== "player") return;
  const enemyName = state.combat.enemy?.name ?? "the enemy";
  state.run && (state.run.danger = Math.min(100, (state.run.danger ?? 0) + 10));
  state.combat = null;
  state.ui.battleResult = {
    outcome: "Escaped",
    enemyName,
    battleType: "flee",
    xp: 0,
    danger: state.run?.danger ?? 0,
    runActive: Boolean(state.run),
    message: `You escaped from ${enemyName}. The dungeon danger rises.`,
    logLines: (state.log ?? []).slice(0, 6).map(l => l.text)
  };
  state.screen = "battle-result";
  addLog(state, `<strong>Flee:</strong> You escape from ${enemyName}, but the dungeon grows more dangerous.`);
}

export function playerUseSkill(state, skillId) {
  if (!state.combat || state.combat.turn !== "player") return;
  const skill = byId(SKILLS, skillId);
  if (!skill) return addLog(state, "That skill is not available yet.");
  if (!(state.player.skills ?? []).includes(skill.id)) return addLog(state, `${skill.name} has not been learned.`);
  if (skill.kind === "passive" || skill.resource === "none") return addLog(state, `${skill.name} is a passive ability and cannot be activated directly.`);
  const requirement = getSkillRequirementFailure(state.player, skill);
  if (requirement) return addLog(state, requirement);
  if ((state.player.cooldowns?.[skill.id] ?? 0) > 0) return addLog(state, `${skill.name} is still on cooldown.`);
  if (!payResource(state.player, skill)) return addLog(state, `Not enough ${skill.resource}.`);
  state.player.cooldowns[skill.id] = skill.cooldown;
  trackLegendAbilityUse(state, skill);
  executeSkill(state, state.player, state.combat.enemy, skill, true);
  afterPlayerAction(state);
}

export function playerUseItem(state, itemId) {
  if (!state.combat || state.combat.turn !== "player") return;
  const item = byId(ITEMS, itemId);
  if (!item || item.type !== "consumable") return;
  if (useItem(state, itemId, true)) afterPlayerAction(state);
}

function getKnownElementMasteries(player) {
  const known = new Set(player?.skills ?? []);
  const masteries = new Set();
  for (const skillId of known) {
    const skill = byId(SKILLS, skillId);
    if (skill?.grantsElementMastery) masteries.add(String(skill.grantsElementMastery).toLowerCase());
  }
  return masteries;
}

function resolveEquippedBattleItem(player, itemRef) {
  if (typeof itemRef === "string" && itemRef.startsWith("loot:")) return getGeneratedLoot(player, itemRef);
  return byId(ITEMS, itemRef);
}

function equippedWeaponTypes(player) {
  const out = new Set();
  for (const itemRef of Object.values(player?.equipment ?? {})) {
    const item = resolveEquippedBattleItem(player, itemRef);
    if (!item) continue;
    if (item.weaponType) out.add(String(item.weaponType).toLowerCase());
    for (const tag of item.tags ?? []) out.add(String(tag).toLowerCase());
    const text = `${item.name ?? ""} ${item.kind ?? ""} ${item.slot ?? ""}`.toLowerCase();
    if (text.includes("sword") || text.includes("blade") || text.includes("katana")) out.add("sword");
    if (text.includes("bow")) out.add(text.includes("crossbow") ? "crossbow" : "bow");
    if (text.includes("dagger")) out.add("dagger");
    if (text.includes("rapier")) out.add("rapier");
    if (text.includes("staff")) out.add("staff");
    if (text.includes("wand")) out.add("wand");
    if (text.includes("shield")) out.add("shield");
    if (text.includes("mace") || text.includes("maul") || text.includes("hammer")) out.add("mace");
    if (text.includes("spear") || text.includes("pike") || text.includes("lance")) out.add("spear");
    if (text.includes("axe")) out.add("axe");
    if (text.includes("catalyst") || text.includes("orb") || text.includes("grimoire")) out.add("catalyst");
  }
  return out;
}

function getSkillRequirementFailure(player, skill) {
  if (skill.requiredMastery) {
    const element = String(skill.requiredMastery).toLowerCase();
    if (!getKnownElementMasteries(player).has(element)) {
      const mastery = byId(SKILLS, skill.masterySkillId ?? `mastery_${element}`);
      return `${skill.name} requires ${mastery?.name ?? `${element} Element Mastery`}. Buy or learn that mastery first.`;
    }
  }
  if ((skill.requiresWeaponType ?? []).length) {
    const equipped = equippedWeaponTypes(player);
    const allowed = (skill.requiresWeaponType ?? []).map(type => String(type).toLowerCase());
    if (!allowed.some(type => equipped.has(type))) {
      return `${skill.name} requires an equipped ${skill.requiresWeaponType.slice(0, 3).join(" / ")}.`;
    }
  }
  return "";
}

function afterPlayerAction(state) {
  if (checkBattleEnd(state)) return;
  partyAct(state);
  if (checkBattleEnd(state)) return;
  state.combat.turn = "enemy";
  enemyTurn(state);
}

function partyAct(state) {
  const tactic = state.ui?.allyTactic ?? "auto";
  if (tactic === "guard" && (state.player.party ?? []).length) {
    applyStatus(state.player, "guard", 1);
    addLog(state, "Allies tighten formation and help you Guard.");
  }
  for (const member of state.player.party ?? []) {
    if (state.combat.enemy.hp <= 0) return;
    const skill = byId(SKILLS, member.skill) ?? byId(SKILLS, "power_strike");
    const stats = member.stats;
    const tacticDamage = tactic === "burst" ? 1.22 : tactic === "guard" ? 0.82 : 1;
    const base = Math.floor(((skill.power ?? 10) * 0.65 + (stats.str ?? 2) + (stats.dex ?? 2) + (stats.int ?? 0)) * tacticDamage);
    const damage = dealDamage(member, state.combat.enemy, base, skill.element, stats, state.combat.enemy.stats, state.combat.modifier);
    addLog(state, `${member.name} uses ${skill.name} for ${damage} damage.`);
    const supportBoost = tactic === "support" ? 20 : 0;
    if (skill.effects?.some(e => e.type === "heal") && chance(40 + supportBoost)) {
      const playerStats = computeStats(state.player);
      const heal = Math.floor(playerStats.maxHp * (tactic === "support" ? 0.24 : 0.18));
      state.player.hp = clamp(state.player.hp + heal, 0, playerStats.maxHp);
      addLog(state, `${member.name} heals you for ${heal} HP.`);
    }
    if (member.role === "Support" && chance(30 + supportBoost)) {
      applyStatus(state.player, "focus", tactic === "support" ? 3 : 2);
      addLog(state, `${member.name}'s support grants Focus.`);
    }
  }
}

function enemyTurn(state) {
  const enemy = state.combat.enemy;
  const player = state.player;
  const playerStats = computeStats(player);
  for (const msg of tickStatuses(enemy, { maxHp: enemy.maxHp })) addLog(state, msg);
  if (checkBattleEnd(state)) return;
  const skip = isTurnSkipped(enemy);
  if (skip) {
    addLog(state, `${enemy.name} is ${skip} and loses the turn.`);
    startPlayerTurn(state);
    return;
  }
  applyBossMechanics(state, enemy);
  const intent = state.combat.enemyIntent ?? createEnemyIntent(enemy, state.combat);
  if (intent.type === "bossCharge") {
    const base = randInt(10, 18) + Math.floor((enemy.stats.str ?? enemy.stats.int ?? 4) * 2.2);
    const damage = dealDamage(enemy, player, base, enemy.element ?? "fire", enemy.stats, playerStats, state.combat.modifier);
    addLog(state, `<strong>${enemy.name}'s charged mechanic lands</strong> for ${damage} damage.`);
  } else if (intent.type === "skill") {
    const skill = byId(SKILLS, intent.skillId);
    if (skill) executeSkill(state, enemy, player, skill, false);
  } else {
    const base = randInt(3, 7) + Math.floor((enemy.stats.str ?? 2) * 1.8);
    let damage = dealDamage(enemy, player, base, "physical", enemy.stats, playerStats, state.combat.modifier);
    const tank = (player.party ?? []).find(member => member.role === "Tank");
    if (tank && chance(35)) {
      const blocked = Math.max(1, Math.floor(damage * 0.18));
      player.hp = clamp(player.hp + blocked, 0, playerStats.maxHp);
      damage -= blocked;
      addLog(state, `${tank.name} intercepts ${blocked} damage.`);
    }
    addLog(state, `<span class="enemy-name">${enemy.name}</span> attacks for <strong>${damage}</strong> damage.`);
  }
  for (const msg of tickStatuses(player, playerStats)) addLog(state, msg);
  if (checkBattleEnd(state)) return;
  startPlayerTurn(state);
}

function startPlayerTurn(state) {
  for (const key of Object.keys(state.player.cooldowns ?? {})) {
    state.player.cooldowns[key] = Math.max(0, state.player.cooldowns[key] - 1);
  }
  state.player.stamina = clamp(state.player.stamina + 8, 0, computeStats(state.player).maxStamina);
  state.combat.turn = "player";
  state.combat.round += 1;
  state.combat.enemyIntent = createEnemyIntent(state.combat.enemy, state.combat);
}

function executeSkill(state, attacker, defender, skill, isPlayer) {
  const attackerStats = isPlayer ? computeStats(attacker) : attacker.stats;
  const defenderStats = isPlayer ? defender.stats : computeStats(defender);
  let totalDamage = 0;
  if (skill.power > 0) {
    const offensive = skill.kind === "spell" ? (attackerStats.magic ?? attackerStats.int ?? 3) : (attackerStats.attack ?? attackerStats.str ?? 3);
    const scalingBonus = statusScalingBonus(skill, attackerStats);
    const base = randInt(2, 8) + skill.power + Math.floor(offensive * 0.9) + scalingBonus;
    totalDamage = dealDamage(attacker, defender, base, skill.element, attackerStats, defenderStats, state.combat?.modifier);
    const scalingText = scalingBonus ? ` <span class="small">(+${scalingBonus} status scaling)</span>` : "";
    addLog(state, `${attacker.name} uses <strong>${skill.name}</strong> for <strong>${totalDamage}</strong> ${skill.element} damage.${scalingText}`);
  } else {
    addLog(state, `${attacker.name} uses <strong>${skill.name}</strong>.`);
  }
  for (const effect of skill.effects ?? []) {
    if (effect.type === "status" && chance(effect.chance ?? 100)) {
      applyStatus(defender, effect.status, effect.duration ?? 2);
      addLog(state, `${defender.name} is afflicted with ${effect.status}.`);
    }
    if (effect.type === "statusSelf" && chance(effect.chance ?? 100)) {
      applyStatus(attacker, effect.status, effect.duration ?? 2);
      addLog(state, `${attacker.name} gains ${effect.status}.`);
    }
    if (effect.type === "heal") {
      const targetStats = isPlayer ? computeStats(attacker) : attacker.stats;
      const maxHp = targetStats.maxHp ?? attacker.maxHp ?? 80;
      const heal = Math.floor(maxHp * effect.scale);
      attacker.hp = clamp(attacker.hp + heal, 0, maxHp);
      addLog(state, `${attacker.name} heals for ${heal} HP.`);
    }
    if (effect.type === "drain" && totalDamage > 0) {
      const maxHp = isPlayer ? computeStats(attacker).maxHp : attacker.maxHp;
      const heal = Math.floor(totalDamage * effect.ratio);
      attacker.hp = clamp(attacker.hp + heal, 0, maxHp);
      addLog(state, `${attacker.name} drains ${heal} HP.`);
    }
    if (effect.type === "restore") {
      const stats = isPlayer ? computeStats(attacker) : attacker.stats;
      const max = effect.resource === "mana" ? stats.maxMana : stats.maxStamina;
      attacker[effect.resource] = clamp((attacker[effect.resource] ?? 0) + effect.amount, 0, max ?? 999);
      addLog(state, `${attacker.name} restores ${effect.amount} ${effect.resource}.`);
    }
  }
}

function statusScalingBonus(skill, stats = {}) {
  const scaling = skill.scaling ?? skill.statusScaling ?? null;
  if (!scaling) return 0;
  const totals = stats.basicAbilities?.total ?? {};
  let bonus = 0;
  for (const [ability, ratio] of Object.entries(scaling)) {
    const value = Number(totals[ability] ?? stats[ability] ?? 0);
    const scale = Number(ratio ?? 0);
    if (Number.isFinite(value) && Number.isFinite(scale)) bonus += value * scale;
  }
  return Math.max(0, Math.floor(bonus));
}

function applyBossMechanics(state, enemy) {
  if (!enemy.bossMechanics || !state.combat) return;
  state.combat.bossPhaseFlags ??= {};
  const hpPct = enemy.hp / Math.max(1, enemy.maxHp ?? 1);
  if (hpPct <= 0.7 && !state.combat.bossPhaseFlags.shield_phase) {
    applyStatus(enemy, "guard", 3);
    state.combat.bossPhaseFlags.shield_phase = true;
    addLog(state, `<strong>Boss Mechanic:</strong> ${enemy.name} enters Shield Phase.`);
  }
  if (hpPct <= 0.5 && !state.combat.bossPhaseFlags.cleanse_phase) {
    enemy.statusEffects = (enemy.statusEffects ?? []).filter(s => ["guard", "focus", "haste"].includes(s.id));
    state.combat.bossPhaseFlags.cleanse_phase = true;
    addLog(state, `<strong>Boss Mechanic:</strong> ${enemy.name} cleanses negative status effects.`);
  }
  if (hpPct <= 0.3 && !state.combat.bossPhaseFlags.enrage_phase) {
    applyStatus(enemy, "focus", 4);
    state.combat.bossPhaseFlags.enrage_phase = true;
    addLog(state, `<strong>Boss Mechanic:</strong> ${enemy.name} enters Enrage Phase.`);
  }
}

function applyBattleModifierDamage(damage, element, modifier, skillKind = "") {
  const effects = modifier?.effects ?? {};
  let mod = 1;
  if ((effects.elementsBoosted ?? []).includes(element)) mod += 0.18;
  if ((effects.elementsWeakened ?? []).includes(element)) mod -= 0.18;
  if (skillKind === "spell" && effects.spellBoost) mod += effects.spellBoost;
  return Math.max(1, Math.floor(damage * mod));
}

function payResource(player, skill) {
  if (!skill.resource || skill.resource === "none") return true;
  if ((player[skill.resource] ?? 0) < skill.cost) return false;
  player[skill.resource] -= skill.cost;
  return true;
}

function dealDamage(attacker, defender, base, element, attackerStats, defenderStats, modifier = null) {
  const defense = Math.floor((defenderStats.defense ?? defenderStats.con ?? 0) * 0.6);
  let damage = Math.max(1, base - defense);
  damage *= getElementMultiplier(element, defender);
  damage *= damageModsFromStatuses(attacker, defender);
  damage = applyBattleModifierDamage(damage, element, modifier);
  damage = Math.max(1, Math.floor(damage));
  defender.hp = clamp(defender.hp - damage, 0, defender.maxHp ?? defenderStats.maxHp ?? 9999);
  return damage;
}

function checkBattleEnd(state) {
  const enemy = state.combat.enemy;
  if (enemy.hp <= 0) {
    addLog(state, `<strong>${enemy.name} defeated.</strong>`);
    state.meta.enemyKills = (state.meta.enemyKills ?? 0) + 1;
    state.meta.roomsCleared = (state.meta.roomsCleared ?? 0) + 1;
    trackQuestProgress(state, "enemy", 1);
    trackQuestProgress(state, "room", 1);
    if (state.combat.type === "elite") state.meta.eliteKills = (state.meta.eliteKills ?? 0) + 1;
    if (state.combat.type === "boss") {
      state.meta.bossKills += 1;
      if (!state.player.defeatedBosses.includes(enemy.id)) state.player.defeatedBosses.push(enemy.id);
      addLog(state, `<strong>Boss defeated:</strong> secret class requirements may have changed.`);
    }
    grantBattleRewards(state, enemy);
    const resultLogLines = (state.log ?? []).slice(0, 8).map(l => l.text);
    if (state.run?.summary) {
      state.run.summary.nodesCleared = (state.run.summary.nodesCleared ?? 0) + 1;
      state.run.summary.nodesWithoutRest = (state.run.summary.nodesWithoutRest ?? 0) + 1;
      state.run.summary.battlesWon = (state.run.summary.battlesWon ?? 0) + 1;
      if ((state.run.danger ?? 0) >= 50) state.run.summary.highDangerClears = (state.run.summary.highDangerClears ?? 0) + 1;
      if (state.combat.type === "elite") state.run.summary.elitesDefeated = (state.run.summary.elitesDefeated ?? 0) + 1;
      if (state.combat.type === "boss") state.run.summary.bossesDefeated = (state.run.summary.bossesDefeated ?? 0) + 1;
      state.run.summary.lastResult = `${enemy.name} defeated`;
      state.run.currentNode = null;
    }
    state.run.roomsCleared += 1;
    state.run.danger = Math.max(0, Math.min(100, (state.run.danger ?? 0) + (state.combat.type === "boss" ? -18 : state.combat.type === "elite" ? 8 : 4)));
    const runActive = Boolean(state.run);
    state.ui.battleResult = {
      outcome: state.combat.type === "boss" ? "Boss Victory" : "Victory",
      enemyName: enemy.name,
      battleType: state.combat.type,
      xp: enemy.xp ?? 25,
      danger: state.run?.danger ?? 0,
      runActive,
      message: `${enemy.name} was defeated. Review rewards and continue when ready.`,
      logLines: resultLogLines,
      runSummary: state.run?.summary ? { ...(state.run.summary ?? {}) } : null
    };
    state.combat = null;
    state.screen = "battle-result";
    return true;
  }
  if (state.player.hp <= 0) {
    endRunDefeat(state);
    return true;
  }
  return false;
}
