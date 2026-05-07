import { MAPS } from "../data/maps.js";
import { ENEMIES, ELITES, BOSSES } from "../data/enemies.js";
import { EVENTS } from "../data/events.js";
import { SHOPS } from "../data/shops.js";
import { BATTLE_MODIFIERS } from "../data/battle-modifiers.js";
import { DUNGEON_BIOMES, DUNGEON_NODE_TEMPLATES, DUNGEON_RUN_GOALS } from "../data/dungeon-map.js";
import { byId, choice, deepClone, randInt, weightedChoice, addLog, clamp, chance, addInventory, titleCase } from "../core/utils.js";
import { startBattle } from "./battle.js";
import { grantEventReward } from "./rewards.js";
import { applyStatus } from "./effects.js";
import { gainXp, computeStats, getTotalLevel } from "./leveling.js";
import { getEnemyIdentity } from "./identity.js";
import { trackQuestProgress } from "./quests.js";

const SUPPLY_LABELS = { torchlight: "Torchlight", keys: "Keys", rations: "Rations", scoutTokens: "Scout Tokens", wardStones: "Ward Stones", lockpicks: "Lockpicks" };

export function ensureDungeonRunState(state) {
  if (!state.run) return null;
  state.run.routeStep ??= 0;
  state.run.danger = clamp(state.run.danger ?? 15, 0, 100);
  state.run.routeNodes ??= [];
  state.run.currentNode ??= null;
  state.run.supplies ??= { torchlight: 3, keys: 1, rations: 2, scoutTokens: 1, wardStones: 1, lockpicks: 2 };
  state.run.summary = {
    nodesCleared: 0,
    battlesWon: 0,
    elitesDefeated: 0,
    bossesDefeated: 0,
    eventsResolved: 0,
    treasuresOpened: 0,
    secretsFound: 0,
    highDangerClears: 0,
    nodesWithoutRest: 0,
    goldEarned: 0,
    xpEarned: 0,
    itemsFound: 0,
    lastResult: "Run active",
    ...(state.run.summary ?? {})
  };
  if (!state.run.goals?.length) state.run.goals = createRunGoals(state);
  state.run.biomeId = getDungeonBiome(state.run.floor + 1).id;
  if (!state.run.routeNodes.length && !state.combat && state.screen !== "event") state.run.routeNodes = generateDungeonNodes(state);
  return state.run;
}

export function getDungeonBiome(floor = 1) {
  return DUNGEON_BIOMES.find(biome => floor >= biome.floors[0] && floor <= biome.floors[1]) ?? DUNGEON_BIOMES.at(-1);
}

export function getDangerLabel(value = 0) {
  if (value >= 80) return { label: "Extreme", tone: "extreme", text: "Ambushes, curses, and elite routes are likely. Rewards are much better." };
  if (value >= 60) return { label: "High", tone: "high", text: "Danger is high. Expect tougher enemies and better treasure." };
  if (value >= 35) return { label: "Medium", tone: "medium", text: "The dungeon is alert, but still manageable." };
  return { label: "Low", tone: "low", text: "The route is stable. Good time to build resources." };
}

export function getActiveDungeonNodes(state) {
  return ensureDungeonRunState(state)?.routeNodes ?? [];
}

export function getRunGoals(state) {
  const run = ensureDungeonRunState(state);
  if (!run) return [];
  return (run.goals ?? []).map(goal => {
    const current = getRunMetric(run, goal.metric);
    const required = goal.required ?? 1;
    return { ...goal, current, pct: Math.min(100, Math.floor((current / required) * 100)), complete: current >= required };
  });
}

function createRunGoals(state) {
  const totalLevel = getTotalLevel(state.player ?? {});
  const pool = DUNGEON_RUN_GOALS.map(goal => ({ ...goal, weight: goal.id === "boss_gate" && totalLevel < 8 ? 1 : 3 }));
  const goals = [];
  while (goals.length < 3 && pool.length) {
    const picked = weightedChoice(pool);
    goals.push(deepClone(picked));
    pool.splice(pool.findIndex(goal => goal.id === picked.id), 1);
  }
  return goals;
}

function getRunMetric(run, metric) {
  return run?.summary?.[metric] ?? 0;
}

function generateDungeonNodes(state) {
  const run = state.run;
  const map = byId(MAPS, run.mapId) ?? MAPS[0];
  if ((run.floor ?? 0) >= map.maxFloor) return [];
  const nextFloor = Math.min(map.maxFloor, (run.floor ?? 0) + 1);
  const biome = getDungeonBiome(nextFloor);
  if ((map.bossFloors ?? []).includes(nextFloor)) {
    return [makeDungeonNode(state, DUNGEON_NODE_TEMPLATES.find(t => t.type === "boss"), 0, nextFloor, biome)];
  }

  const count = run.danger >= 65 ? 4 : 3;
  const pool = DUNGEON_NODE_TEMPLATES
    .filter(t => t.type !== "boss")
    .map(t => ({ ...t, weight: adjustedNodeWeight(t, run, biome) }));
  const nodes = [];
  const used = new Set();
  while (nodes.length < count && used.size < pool.length) {
    const template = weightedChoice(pool.filter(t => !used.has(t.type)));
    used.add(template.type);
    nodes.push(makeDungeonNode(state, template, nodes.length, nextFloor, biome));
  }
  return nodes;
}

function adjustedNodeWeight(template, run, biome) {
  let weight = template.weight ?? 1;
  if (run.danger >= 60 && ["elite", "cursed_altar", "secret"].includes(template.type)) weight += 5;
  if (run.danger >= 70 && template.type === "rest") weight += 3;
  if (run.danger <= 25 && template.type === "battle") weight += 4;
  if (biome.id.includes("library") && ["shrine", "class_trial"].includes(template.type)) weight += 4;
  if (biome.id.includes("vault") && ["treasure", "elite"].includes(template.type)) weight += 4;
  if (biome.id.includes("labyrinth") && ["secret", "cursed_altar"].includes(template.type)) weight += 5;
  return Math.max(1, weight);
}

function makeDungeonNode(state, template, index, floor, biome) {
  const danger = clamp((template.danger ?? 5) + Math.floor((floor - 1) * 0.8) + randInt(-3, 4), -20, 60);
  const label = nodeName(template.type, biome, floor);
  const recommended = nodeRecommendation(template, state, biome);
  const rewardPreview = rewardPreviewFor(template, biome, floor);
  return {
    id: `node_${floor}_${index}_${template.type}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 5)}`,
    type: template.type,
    icon: template.icon,
    label: template.label,
    name: label,
    floor,
    biomeId: biome.id,
    danger,
    dangerLabel: danger >= 30 ? "High" : danger >= 15 ? "Medium" : danger <= 0 ? "Safe" : "Low",
    rewardPreview,
    recommended,
    warning: warningForNode(template.type, biome),
    summary: template.summary,
    lane: index
  };
}

function nodeName(type, biome, floor) {
  const biomeWord = biome.name.split(" ")[0];
  const names = {
    battle: [`${biomeWord} Patrol`, `${biomeWord} Ambush`, `Floor ${floor} Warband`],
    elite: [`Elite: ${biomeWord} Warden`, `Elite: Ironhide Champion`, `Elite: ${biomeWord} Gatebreaker`],
    boss: [`Boss Gate: Floor ${floor} Sovereign`, `Boss Gate: ${biomeWord} Tyrant`, `Boss Gate: The Iron Maw`],
    treasure: [`${biomeWord} Treasure Cache`, `Locked Relic Chest`, `Old Guild Strongbox`],
    merchant: [`Wandering Merchant`, `${biomeWord} Supply Cart`, `Lantern Broker`],
    rest: [`Quiet Camp`, `Guild Rest Site`, `${biomeWord} Safe Room`],
    shrine: [`Ancient ${biomeWord} Shrine`, `Cracked Blessing Stone`, `Silent Offering Hall`],
    cursed_altar: [`Cursed Altar`, `Black Flame Altar`, `${biomeWord} Blood Seal`],
    training: [`Training Master`, `Weapon Lesson Room`, `Old Guild Instructor`],
    race_trial: [`Race Trial Chamber`, `Bloodline Mirror`, `${biomeWord} Evolution Test`],
    class_trial: [`Class Trial Chamber`, `Job Oath Trial`, `${biomeWord} Mastery Seal`],
    secret: [`Secret Path`, `Hidden Door`, `${biomeWord} False Wall`],
    forge: [`Abandoned Forge`, `Cold Anvil Room`, `${biomeWord} Smith Cache`],
    alchemy: [`Alchemy Grove`, `Hidden Herb Garden`, `${biomeWord} Reagent Pool`]
  };
  return choice(names[type] ?? [`${biomeWord} Room`]);
}

function nodeRecommendation(template, state, biome) {
  const race = state.player?.raceLevels?.at(-1)?.name ?? "Race";
  const job = state.player?.jobLevels?.at(-1)?.name ?? "Job";
  const byType = {
    battle: "Any stable build",
    elite: "Bring healing, guard, or burst damage",
    boss: `Exploit ${biome.counterElements.join(" / ")} and bring your best gear`,
    treasure: "Dexterity, keys, or lockpicks",
    merchant: "Gold and inventory space",
    rest: "Long-run resource recovery",
    shrine: "Magic, support, or ward stones",
    cursed_altar: "Defense, dark resist, or high HP",
    training: `${job} class growth`,
    race_trial: `${race} identity and evolution progress`,
    class_trial: `${job} mastery progress`,
    secret: "Agility, Magic, torchlight, or scout tokens",
    forge: "Physical builds, armor users, smith paths",
    alchemy: "Magic/support builds and potion users"
  };
  return byType[template.type] ?? template.recommended ?? "Any Build";
}

function rewardPreviewFor(template, biome, floor) {
  const base = [...(template.rewards ?? [])];
  if (floor >= 10 && !base.includes("Better Loot")) base.push("Better Loot");
  if (["treasure", "elite", "boss", "secret"].includes(template.type)) base.push(biome.lootTheme);
  return base.slice(0, 4).join(" · ");
}

function warningForNode(type, biome) {
  const warnings = {
    battle: `Enemy theme: ${biome.enemyTheme}`,
    elite: "Elite enemies have higher HP, damage, and better drops.",
    boss: `Known mechanics: shield phase, cleanse phase, enrage phase. Weakness hints: ${biome.counterElements.join(" / ")}`,
    treasure: "Opening by force raises danger.",
    merchant: "Leaving the shop returns you to the dungeon map.",
    rest: "Resting lowers danger but breaks no-rest run goals.",
    shrine: "Blessings can fail if you choose a risky offering.",
    cursed_altar: "Power comes with danger, damage, or curses.",
    training: "Training gives growth, not direct loot.",
    race_trial: "Race identity trials support evolution paths.",
    class_trial: "Job trials support upgrade paths and ability goals.",
    secret: "Secret paths are risky but can lead to rare rewards.",
    forge: "Good for weapon and armor crafting materials.",
    alchemy: "Good for consumables and reagent stock."
  };
  return warnings[type] ?? "The dungeon shifts around this room.";
}

export function exploreNextFloor(state) {
  const nodes = getActiveDungeonNodes(state);
  if (!nodes.length) return addLog(state, "No route is available. Start a new run from the Hub.");
  enterDungeonNode(state, nodes[0].id);
}

export function enterDungeonNode(state, nodeId) {
  const run = ensureDungeonRunState(state);
  if (!run?.active) return;
  const node = run.routeNodes.find(n => n.id === nodeId) ?? run.routeNodes[0];
  if (!node) return addLog(state, "The route board has not formed yet.");
  advanceDungeonStep(state, node);
  addLog(state, `<strong>Dungeon Route:</strong> Entered ${node.name}.`);

  if (node.type === "battle") {
    prepareBattleRoom(state, run.floor);
    startBattle(state, createEnemyForFloor(run.floor), "normal");
    return;
  }
  if (node.type === "elite") {
    prepareBattleRoom(state, run.floor);
    startBattle(state, createElite(run.floor), "elite");
    return;
  }
  if (node.type === "boss") {
    prepareBattleRoom(state, run.floor);
    startBattle(state, createBoss(run.floor), "boss");
    return;
  }
  if (node.type === "merchant") {
    completeDungeonNode(state, node, { eventsResolved: 1 });
    state.ui.selectedShop = choice(SHOPS).id;
    state.screen = "shop";
    addLog(state, "A temporary dungeon merchant opens their stock.");
    return;
  }
  if (node.type === "rest") {
    restAtCamp(state);
    run.danger = clamp(run.danger - 18, 0, 100);
    run.summary.nodesWithoutRest = 0;
    completeDungeonNode(state, node, { eventsResolved: 1 });
    state.screen = "map";
    return;
  }
  state.ui.currentEvent = createDungeonEvent(node, state);
  state.screen = "event";
}

function advanceDungeonStep(state, node) {
  const run = state.run;
  const map = byId(MAPS, run.mapId) ?? MAPS[0];
  run.floor = Math.min(map.maxFloor, node.floor ?? (run.floor + 1));
  run.highestFloor = Math.max(run.highestFloor ?? 0, run.floor);
  state.meta.highestFloor = Math.max(state.meta.highestFloor ?? 0, run.floor);
  run.routeStep = (run.routeStep ?? 0) + 1;
  run.currentNode = node;
  run.routeNodes = [];
  run.biomeId = getDungeonBiome(run.floor).id;
  run.danger = clamp((run.danger ?? 15) + Math.floor((node.danger ?? 0) * 0.55), 0, 100);
}

function completeDungeonNode(state, node = state.run?.currentNode, increments = {}) {
  if (!state.run) return;
  state.run.roomsCleared = (state.run.roomsCleared ?? 0) + 1;
  state.meta.roomsCleared = (state.meta.roomsCleared ?? 0) + 1;
  trackQuestProgress(state, "room", 1);
  const summary = state.run.summary;
  summary.nodesCleared = (summary.nodesCleared ?? 0) + 1;
  summary.nodesWithoutRest = (summary.nodesWithoutRest ?? 0) + 1;
  if ((state.run.danger ?? 0) >= 50) summary.highDangerClears = (summary.highDangerClears ?? 0) + 1;
  for (const [key, value] of Object.entries(increments)) summary[key] = (summary[key] ?? 0) + value;
  summary.lastResult = node?.name ?? "Dungeon node cleared";
  if (node?.type === "treasure" && !("treasuresOpened" in increments)) summary.treasuresOpened = (summary.treasuresOpened ?? 0) + 1;
  if (node?.type === "secret" && !("secretsFound" in increments)) summary.secretsFound = (summary.secretsFound ?? 0) + 1;
  state.run.currentNode = null;
}

function createDungeonEvent(node, state) {
  const biome = getDungeonBiome(node.floor);
  const common = { id: node.id, name: node.name, text: node.summary, dungeonNode: node, biome, choices: [] };
  const hpCost = Math.max(6, 8 + Math.floor((node.floor ?? 1) * 1.4));
  if (node.type === "treasure") {
    common.text = "A chest waits in a side chamber. The lock looks old, but the trap mechanism is still awake.";
    common.choices = [
      { id: "use_key", label: "Use 1 Key", requirement: "key", text: "Open safely for gold and loot.", effects: { supply: { keys: -1 }, gold: [45, 95], items: ["camp_ration"], lootDrop: 1, danger: -2, summary: { treasuresOpened: 1, itemsFound: 1 } } },
      { id: "pick_lock", label: "Pick the Lock", requirement: "lockpick", text: "Use 1 lockpick. Better reward, small danger risk.", effects: { supply: { lockpicks: -1 }, gold: [55, 125], materials: { iron_ore: 2, rune_shard: 1 }, lootDrop: 1, danger: 4, summary: { treasuresOpened: 1, itemsFound: 2 } } },
      { id: "force_open", label: "Force It Open", text: "No supply cost, but danger rises.", effects: { gold: [25, 80], materialDrop: 1, danger: 14, damage: [4, hpCost], summary: { treasuresOpened: 1, itemsFound: 1 } } },
      { id: "leave", label: "Leave It", text: "Avoid the trap and move on.", effects: { danger: -3 } }
    ];
  } else if (node.type === "shrine") {
    common.text = `The shrine hums with ${biome.element} energy. It reacts to your current race, job, and element masteries.`;
    common.choices = [
      { id: "pray", label: "Pray for Guidance", text: "Gain Focus and a little EXP.", effects: { xp: 35 + node.floor * 3, status: "focus", statusDuration: 4, danger: -4 } },
      { id: "offer_gold", label: "Offer 75 Gold", text: "Buy a safer blessing.", effects: { costGold: 75, status: "guard", statusDuration: 4, relicDustChance: 25, danger: -8 } },
      { id: "touch_core", label: "Touch the Core", text: "Risk a curse for better progress.", effects: { xp: 60 + node.floor * 4, relicDustChance: 40, statusChance: { good: "haste", bad: "weakened" }, danger: 8 } },
      { id: "leave", label: "Leave", text: "Do not disturb the shrine.", effects: { danger: -1 } }
    ];
  } else if (node.type === "cursed_altar") {
    common.text = "A black flame burns without fuel. The altar offers power, dust, or a violent answer.";
    common.choices = [
      { id: "offer_blood", label: "Offer Blood", text: "Lose HP, gain Focus, and chance for Relic Dust.", effects: { damage: [hpCost, hpCost + 12], status: "focus", statusDuration: 5, relicDustChance: 55, danger: 10 } },
      { id: "offer_ward", label: "Use 1 Ward Stone", requirement: "ward", text: "Seal the curse safely.", effects: { supply: { wardStones: -1 }, relicDust: 1, danger: -15, summary: { eventsResolved: 1 } } },
      { id: "destroy", label: "Destroy the Altar", text: "Start an elite battle for a bigger reward.", effects: { danger: 16, battle: "elite" } },
      { id: "leave", label: "Leave", text: "Walk away from the flame.", effects: { danger: -2 } }
    ];
  } else if (node.type === "training" || node.type === "class_trial" || node.type === "race_trial") {
    const isRace = node.type === "race_trial";
    common.text = isRace ? "A mirror of bloodline memory tests your race path." : node.type === "class_trial" ? "A trial seal tests your current job path." : "A master teaches a brutal but useful lesson.";
    common.choices = [
      { id: "train", label: isRace ? "Face Bloodline Trial" : "Accept Training", text: "Gain EXP and class growth progress.", effects: { xp: 70 + node.floor * 4, classPoint: 1, danger: 4, status: "focus", statusDuration: 3 } },
      { id: "study", label: "Study the Lesson", text: "Safer progress and unlock clues.", effects: { xp: 45 + node.floor * 3, danger: -3 } },
      { id: "hard_mode", label: "Demand a Hard Trial", text: "Take damage for more growth and Relic Dust chance.", effects: { xp: 95 + node.floor * 6, classPoint: 1, damage: [6, hpCost + 10], relicDustChance: 30, danger: 10 } },
      { id: "leave", label: "Leave", text: "Save your resources.", effects: { danger: -1 } }
    ];
  } else if (node.type === "secret") {
    common.text = "A hidden path bends away from the main route. Something valuable is behind the wall.";
    common.choices = [
      { id: "torch", label: "Use 1 Torchlight", requirement: "torch", text: "Reveal the path safely.", effects: { supply: { torchlight: -1 }, gold: [35, 90], materials: { rune_shard: 1 }, relicDustChance: 35, danger: -4, summary: { secretsFound: 1, itemsFound: 1 } } },
      { id: "scout", label: "Use 1 Scout Token", requirement: "scout", text: "Find the best chamber.", effects: { supply: { scoutTokens: -1 }, gold: [60, 140], lootDrop: 1, relicDustChance: 45, danger: 2, summary: { secretsFound: 1, itemsFound: 2 } } },
      { id: "squeeze", label: "Force Through", text: "Risk damage and danger for a reward.", effects: { damage: [6, hpCost + 8], gold: [25, 100], materialDrop: 1, danger: 12, summary: { secretsFound: 1, itemsFound: 1 } } },
      { id: "leave", label: "Ignore It", text: "Avoid the risk.", effects: { danger: -2 } }
    ];
  } else if (node.type === "forge") {
    common.text = "The forge is cold, but the storage racks still hold metal and old tools.";
    common.choices = [
      { id: "salvage", label: "Salvage Materials", text: "Gain ore and ingots.", effects: { materials: { iron_ore: 3, steel_ingot: 1 }, danger: 2, summary: { itemsFound: 2 } } },
      { id: "repair", label: "Repair Your Gear", text: "Recover HP and gain Guard.", effects: { status: "guard", statusDuration: 4, healPct: 0.18, danger: -4 } },
      { id: "overheat", label: "Overheat the Forge", text: "Risk burn for extra materials.", effects: { materials: { steel_ingot: 2, ember_gem: 1 }, damage: [5, hpCost], danger: 10, summary: { itemsFound: 3 } } }
    ];
  } else if (node.type === "alchemy") {
    common.text = "Glowing herbs grow around cracked bottles and old notes.";
    common.choices = [
      { id: "gather", label: "Gather Reagents", text: "Gain herbs and jelly.", effects: { materials: { alchemy_herb: 3, slime_jelly: 2 }, danger: 2, summary: { itemsFound: 2 } } },
      { id: "brew", label: "Brew Supplies", text: "Gain useful consumables.", effects: { items: ["minor_potion", "mana_vial", "stamina_tonic"], danger: 4, summary: { itemsFound: 3 } } },
      { id: "taste", label: "Taste Unknown Elixir", text: "Risk a bad status for a strong buff.", effects: { statusChance: { good: "haste", bad: "poison" }, healPct: 0.12, danger: 8 } }
    ];
  }
  return common;
}

export function chooseDungeonEventOption(state, optionId) {
  const event = state.ui.currentEvent;
  const node = event?.dungeonNode ?? state.run?.currentNode;
  const option = (event?.choices ?? []).find(choice => choice.id === optionId);
  if (!state.run || !event || !option) return;
  if (!meetsOptionRequirement(state, option)) return;
  addLog(state, `<strong>${event.name}:</strong> ${option.label}.`);
  const battleType = applyDungeonOptionEffects(state, option.effects ?? {});
  state.ui.currentEvent = null;
  if (battleType === "elite") {
    prepareBattleRoom(state, state.run.floor);
    startBattle(state, createElite(state.run.floor), "elite");
    return;
  }
  if (battleType === "normal") {
    prepareBattleRoom(state, state.run.floor);
    startBattle(state, createEnemyForFloor(state.run.floor), "ambush");
    return;
  }
  completeDungeonNode(state, node, { eventsResolved: 1, ...(option.effects?.summary ?? {}) });
  state.screen = "map";
}

function meetsOptionRequirement(state, option) {
  const supplies = state.run?.supplies ?? {};
  const req = option.requirement;
  const map = { key: "keys", lockpick: "lockpicks", ward: "wardStones", torch: "torchlight", scout: "scoutTokens", ration: "rations" };
  if (req && (supplies[map[req] ?? req] ?? 0) <= 0) {
    addLog(state, `You need ${SUPPLY_LABELS[map[req] ?? req] ?? titleCase(req)} for that choice.`);
    return false;
  }
  if ((option.effects?.costGold ?? 0) > (state.player?.gold ?? 0)) {
    addLog(state, `You need ${option.effects.costGold} gold for that choice.`);
    return false;
  }
  return true;
}

function applyDungeonOptionEffects(state, effects) {
  const beforeGold = state.player.gold ?? 0;
  if (effects.costGold) state.player.gold = Math.max(0, state.player.gold - effects.costGold);
  for (const [key, amount] of Object.entries(effects.supply ?? {})) {
    state.run.supplies[key] = Math.max(0, (state.run.supplies[key] ?? 0) + amount);
  }
  if (effects.damage) {
    const damage = Array.isArray(effects.damage) ? randInt(effects.damage[0], effects.damage[1]) : Number(effects.damage);
    state.player.hp = Math.max(1, (state.player.hp ?? 1) - damage);
    addLog(state, `The room deals ${damage} damage.`);
  }
  if (effects.healPct) {
    const stats = computeStats(state.player);
    const heal = Math.floor(stats.maxHp * effects.healPct);
    state.player.hp = clamp(state.player.hp + heal, 1, stats.maxHp);
    addLog(state, `Recovered ${heal} HP.`);
  }
  if (effects.status) applyStatus(state.player, effects.status, effects.statusDuration ?? 3);
  if (effects.statusChance) {
    const picked = chance(65) ? effects.statusChance.good : effects.statusChance.bad;
    applyStatus(state.player, picked, effects.statusDuration ?? 3);
    addLog(state, `The dungeon inflicts ${picked}.`);
  }
  if (effects.classPoint) {
    state.player.unspentClassLevels = (state.player.unspentClassLevels ?? 0) + effects.classPoint;
    addLog(state, `Gained ${effects.classPoint} unspent class level point.`);
  }
  if (effects.relicDustChance && chance(effects.relicDustChance)) effects.relicDust = (effects.relicDust ?? 0) + 1;
  grantEventReward(state, effects);
  if (effects.danger) state.run.danger = clamp((state.run.danger ?? 0) + effects.danger, 0, 100);
  const goldGained = Math.max(0, (state.player.gold ?? 0) - beforeGold);
  if (goldGained) state.run.summary.goldEarned = (state.run.summary.goldEarned ?? 0) + goldGained;
  if (effects.items?.length) state.run.summary.itemsFound = (state.run.summary.itemsFound ?? 0) + effects.items.length;
  if (effects.materials) state.run.summary.itemsFound = (state.run.summary.itemsFound ?? 0) + Object.keys(effects.materials).length;
  if (effects.battle) return effects.battle;
  return "";
}

export function createEnemyForFloor(floor) {
  const choices = ENEMIES.filter(enemy => enemy.minFloor <= floor).map(enemy => ({ ...enemy, weight: enemy.weight ?? 1 }));
  const template = deepClone(weightedChoice(choices));
  const enemy = scaleEnemy(template, floor, 1);
  enemy.enemyType = pickEnemyType(enemy, floor);
  return enemy;
}

function findModifier(id) {
  return BATTLE_MODIFIERS.find(mod => mod.id === id) ?? BATTLE_MODIFIERS.find(mod => mod.name?.toLowerCase().replace(/\s+/g, "_") === id) ?? BATTLE_MODIFIERS[0];
}

function prepareBattleRoom(state, floor) {
  const biome = getDungeonBiome(floor);
  const weighted = BATTLE_MODIFIERS.map(mod => {
    const text = `${mod.name} ${mod.description}`.toLowerCase();
    const biomeHit = (biome.boostedElements ?? []).some(el => text.includes(el));
    return { ...mod, weight: (mod.weight ?? 1) + (biomeHit ? 4 : 0) };
  });
  const modifier = deepClone(weightedChoice(weighted));
  state.run.battleModifier = modifier;
  addLog(state, `<strong>Battlefield:</strong> ${modifier.name} — ${modifier.description}`);
}

function pickEnemyType(enemy, floor) {
  const text = `${enemy.name} ${enemy.element}`.toLowerCase();
  if (floor >= 10) return "Veteran";
  if (/wisp|mage|lich|arcane|rune/.test(text)) return "Caster";
  if (/guard|knight|stone|ogre|mauler/.test(text)) return "Armored";
  if (/wolf|goblin|bandit|imp/.test(text)) return "Skirmisher";
  return "Monster";
}

function createElite(floor) {
  const elite = choice(ELITES);
  const base = deepClone(byId(ENEMIES, elite.base) ?? ENEMIES[0]);
  const enemy = scaleEnemy(base, floor, elite.multiplier);
  enemy.id = elite.id;
  enemy.name = elite.name;
  enemy.skills = [...new Set([...(enemy.skills ?? []), elite.bonusSkill])];
  enemy.rewardDust = elite.rewardDust;
  enemy.enemyType = "Elite";
  enemy.enemyIdentity = getEnemyIdentity(enemy, floor);
  return enemy;
}

function createBoss(floor) {
  const boss = deepClone(BOSSES.find(b => b.floor === floor) ?? BOSSES.at(-1));
  const enemy = scaleEnemy(boss, floor, 1);
  enemy.enemyType = "Boss";
  enemy.enemyIdentity = getEnemyIdentity(enemy, floor);
  enemy.bossMechanics ??= defaultBossMechanics(enemy, floor);
  return enemy;
}

function defaultBossMechanics(enemy, floor) {
  return [
    { id: "shield_phase", name: "Shield Phase", trigger: 0.7, description: "At 70% HP, the boss gains Guard and reduces incoming damage for a short time." },
    { id: "cleanse_phase", name: "Status Cleanse", trigger: 0.5, description: "At 50% HP, the boss cleanses negative status effects and shifts tactics." },
    { id: "enrage_phase", name: "Enrage Phase", trigger: 0.3, description: "At 30% HP, the boss gains Focus and its intentions become more aggressive." },
    { id: "charge_attack", name: "Charge Attack", trigger: "round", description: "Every few rounds, the boss prepares a stronger telegraphed attack." }
  ];
}

function scaleEnemy(enemy, floor, multiplier = 1) {
  const scale = 1 + floor * 0.09;
  enemy.maxHp = Math.floor((enemy.stats.hp ?? 50) * scale * multiplier);
  enemy.hp = enemy.maxHp;
  for (const key of ["str", "dex", "int", "wis", "con", "cha"]) enemy.stats[key] = Math.floor((enemy.stats[key] ?? 1) * (1 + floor * 0.045) * multiplier);
  enemy.xp = Math.floor((enemy.xp ?? 30) * (1 + floor * 0.08) * multiplier);
  enemy.gold = enemy.gold?.map(v => Math.floor(v * (1 + floor * 0.05) * multiplier));
  enemy.statusEffects = [];
  enemy.enemyIdentity = getEnemyIdentity(enemy, floor);
  enemy.enemyType ??= pickEnemyType(enemy, floor);
  enemy.raceLevels = [{ id: enemy.enemyIdentity.race.toLowerCase().replace(/\s+/g, "_"), name: enemy.enemyIdentity.race, level: Math.max(1, Math.floor(floor * 0.55)), maxLevel: 15 }];
  enemy.jobLevels = [{ id: enemy.enemyIdentity.job.toLowerCase().replace(/\s+/g, "_"), name: enemy.enemyIdentity.job, level: Math.max(1, Math.floor(floor * 0.45)), maxLevel: 15 }];
  enemy.totalLevel = enemy.raceLevels[0].level + enemy.jobLevels[0].level;
  return enemy;
}

export function restAtCamp(state) {
  const stats = computeStats(state.player);
  state.player.hp = clamp(state.player.hp + Math.floor(stats.maxHp * 0.45), 1, stats.maxHp);
  state.player.mana = clamp(state.player.mana + Math.floor(stats.maxMana * 0.45), 0, stats.maxMana);
  state.player.stamina = clamp(state.player.stamina + Math.floor(stats.maxStamina * 0.55), 0, stats.maxStamina);
  addLog(state, "You find a safe camp and recover some HP, mana, and stamina.");
}

export function resolveRandomEvent(state) {
  const event = deepClone(weightedChoice(EVENTS));
  state.ui.currentEvent = event;
  addLog(state, `<strong>${event.name}:</strong> ${event.text}`);
  if (event.type === "risk") {
    const damage = randInt(event.damage[0], event.damage[1]);
    state.player.hp = Math.max(1, state.player.hp - damage);
    if (event.status) applyStatus(state.player, event.status, 3);
    addLog(state, `The danger deals ${damage} damage, but you still claim the reward.`);
  }
  if (event.type === "restore") {
    const stats = computeStats(state.player);
    state.player.hp = clamp(state.player.hp + (event.restore.hp ?? 0), 1, stats.maxHp);
    state.player.mana = clamp(state.player.mana + (event.restore.mana ?? 0), 0, stats.maxMana);
    state.player.stamina = clamp(state.player.stamina + (event.restore.stamina ?? 0), 0, stats.maxStamina);
  }
  if (event.type === "xp") gainXp(state, event.xp ?? 25);
  if (event.type === "blessing") {
    if (chance(65)) {
      applyStatus(state.player, event.goodStatus ?? "focus", 4);
      addLog(state, "The shrine blesses you for the next few rooms.");
    } else {
      applyStatus(state.player, event.badStatus ?? "weakened", 3);
      addLog(state, "The shrine rejects your touch and leaves a curse behind.");
    }
  }
  if (event.type === "portal") {
    const damage = event.damage ? randInt(event.damage[0], event.damage[1]) : 0;
    state.player.hp = Math.max(1, state.player.hp - damage);
    state.run.floor = Math.min((byId(MAPS, state.run.mapId) ?? MAPS[0]).maxFloor, state.run.floor + (event.skipFloors ?? 1));
    state.run.highestFloor = Math.max(state.run.highestFloor, state.run.floor);
    state.meta.highestFloor = Math.max(state.meta.highestFloor ?? 0, state.run.floor);
    addLog(state, `The portal throws you to floor ${state.run.floor}${damage ? ` and deals ${damage} damage` : ""}.`);
  }
  if (event.type === "weather") {
    state.run.battleModifier = findModifier(event.modifierId);
    addLog(state, `<strong>Weather changed:</strong> ${state.run.battleModifier.name} will affect the next battle.`);
  }
  if (event.type === "training" || event.type === "library" || event.type === "warning") {
    if (event.type === "training") state.player.unspentClassLevels = (state.player.unspentClassLevels ?? 0) + 1;
    addLog(state, event.type === "training" ? "Training grants +1 unspent class level point." : "You record new unlock clues in your tracker.");
  }
  grantEventReward(state, event);
  if (event.type === "ambush") {
    prepareBattleRoom(state, state.run.floor);
    startBattle(state, createEnemyForFloor(state.run.floor), "ambush");
    return;
  }
  if (event.type === "shop") {
    state.ui.selectedShop = event.shopId ?? choice(SHOPS).id;
    state.screen = "shop";
  } else if (event.type === "recruit") state.screen = "recruit";
  else state.screen = "event";
}
