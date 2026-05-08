import { LEGEND_QUEST_FRAMES, LEGEND_ACHIEVEMENT_FRAMES, LEGEND_REWARD_ITEMS, LEGEND_TITLE_PREFIXES, LEGEND_TITLE_SUFFIXES } from "../data/legend-engine.js";
import { ITEMS } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { addInventory, addLog, byId, choice, randInt, titleCase } from "../core/utils.js";
import { gainXp, getTotalLevel } from "./leveling.js";

const ACTIVE_LEGEND_QUESTS = 6;
const ACTIVE_LEGEND_ACHIEVEMENTS = 6;

const DEFAULT_ENGINE = () => ({
  generatedQuestCount: 0,
  generatedAchievementCount: 0,
  quests: [],
  achievements: [],
  claimedQuests: [],
  unlockedAchievements: [],
  completedQuestKeys: [],
  completedAchievementKeys: [],
  completedQuestHistory: [],
  completedAchievementHistory: [],
  lastProfileKey: ""
});

export function ensureLegendEngineState(state) {
  state.legendEngine ??= DEFAULT_ENGINE();
  state.legendEngine.generatedQuestCount ??= 0;
  state.legendEngine.generatedAchievementCount ??= 0;
  state.legendEngine.quests ??= [];
  state.legendEngine.achievements ??= [];
  state.legendEngine.claimedQuests ??= [];
  state.legendEngine.unlockedAchievements ??= [];
  state.legendEngine.completedQuestKeys ??= [];
  state.legendEngine.completedAchievementKeys ??= [];
  state.legendEngine.completedQuestHistory ??= [];
  state.legendEngine.completedAchievementHistory ??= [];
  state.legendEngine.lastProfileKey ??= "";
  state.meta ??= {};
  state.meta.abilityUses ??= {};
  state.meta.elementUses ??= {};
  state.meta.skillKindUses ??= {};
  state.meta.weaponBattles ??= {};
  if (state.player) {
    state.player.legendTitles ??= [];
    state.player.achievements ??= [];
  }
  return state.legendEngine;
}

function allRaceData() { return [...RACES, ...RACE_PATHS]; }
function allJobData() { return [...JOBS, ...JOB_PATHS]; }

function safeText(value) {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value).trim();
  if (typeof value === "object") {
    if (value.name) return String(value.name).trim();
    if (value.id) return String(value.id).trim();
    if (value.primary) return safeList(value.primary).join(", ");
    if (value.note) return String(value.note).trim();
  }
  return "";
}

function safeList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap(safeList).filter(Boolean);
  if (typeof value === "object") {
    const gathered = [
      ...safeList(value.primary),
      ...safeList(value.backup),
      ...safeList(value.preferredWeapons),
      ...safeList(value.recommendedWeaponTypes),
      ...safeList(value.preferredElements),
      ...safeList(value.recommendedAbilityIds),
      ...safeList(value.basicAbilities),
      safeText(value.role),
      safeText(value.note)
    ];
    return gathered.filter(Boolean);
  }
  return String(value)
    .split(/[,/|]/)
    .map(v => v.trim())
    .filter(Boolean)
    .filter(v => v.toLowerCase() !== "[object object]");
}

function cleanToken(value, fallback = "legend") {
  const text = safeText(value).toLowerCase();
  if (!text || text === "[object object]") return fallback;
  return text.replace(/[^a-z0-9 _-]/g, "").trim() || fallback;
}

function currentRace(state) {
  const entry = state.player?.raceLevels?.at(-1);
  return byId(allRaceData(), entry?.id) ?? null;
}

function currentJob(state) {
  const entry = state.player?.jobLevels?.at(-1);
  return byId(allJobData(), entry?.id) ?? null;
}

function knownMasteries(player) {
  const out = [];
  for (const id of player?.skills ?? []) {
    const skill = byId(SKILLS, id);
    if (skill?.grantsElementMastery) out.push(String(skill.grantsElementMastery).toLowerCase());
  }
  return [...new Set(out)];
}

function knownElements(player) {
  const elements = (player?.skills ?? [])
    .map(id => byId(SKILLS, id)?.element)
    .filter(Boolean)
    .map(element => String(element).toLowerCase())
    .filter(element => element !== "physical" && element !== "neutral");
  return [...new Set(elements)];
}

function equippedWeaponTypes(player) {
  const out = new Set();
  for (const itemId of Object.values(player?.equipment ?? {})) {
    if (!itemId || String(itemId).startsWith("loot:")) continue;
    const item = byId(ITEMS, itemId);
    if (!item) continue;
    if (item.weaponType) out.add(String(item.weaponType).toLowerCase());
    for (const tag of item.tags ?? []) out.add(String(tag).toLowerCase());
    const text = `${item.name ?? ""} ${item.kind ?? ""} ${item.slot ?? ""}`.toLowerCase();
    for (const token of ["sword", "blade", "bow", "crossbow", "dagger", "rapier", "staff", "wand", "shield", "mace", "maul", "hammer", "spear", "pike", "lance", "axe", "catalyst", "orb", "grimoire"]) {
      if (text.includes(token)) out.add(token === "blade" ? "sword" : token === "maul" || token === "hammer" ? "mace" : token === "pike" || token === "lance" ? "spear" : token === "orb" || token === "grimoire" ? "catalyst" : token);
    }
  }
  return [...out];
}

export function getLegendProfile(state) {
  const player = state.player;
  const race = currentRace(state);
  const job = currentJob(state);
  const raceFocus = race?.buildFocus ?? race?.focus ?? "balanced";
  const jobFocus = job?.buildFocus ?? job?.focus ?? "balanced";
  const weaponPrescriptions = [
    ...safeList(race?.weaponPrescription),
    ...safeList(race?.weaponPrescriptions),
    ...safeList(job?.weaponPrescription),
    ...safeList(job?.weaponPrescriptions),
    ...safeList(job?.preferredWeapons)
  ];
  const abilityPrescriptions = [
    ...safeList(race?.abilityPrescription),
    ...safeList(race?.abilityPrescriptions),
    ...safeList(job?.abilityPrescription),
    ...safeList(job?.abilityPrescriptions)
  ];
  const elements = knownElements(player);
  const masteries = knownMasteries(player);
  const weapons = equippedWeaponTypes(player);
  const totalLevel = getTotalLevel(player);
  return {
    raceName: race?.name ?? player?.raceLevels?.at(-1)?.name ?? "Unknown Race",
    jobName: job?.name ?? player?.jobLevels?.at(-1)?.name ?? "Unknown Job",
    raceFocus: String(raceFocus).toLowerCase(),
    jobFocus: String(jobFocus).toLowerCase(),
    totalLevel,
    highestRaceLevel: Math.max(0, ...(player?.raceLevels ?? []).map(cls => cls.level ?? 0)),
    highestJobLevel: Math.max(0, ...(player?.jobLevels ?? []).map(cls => cls.level ?? 0)),
    weaponPrescriptions: [...new Set(weaponPrescriptions)].slice(0, 6),
    abilityPrescriptions: [...new Set(abilityPrescriptions)].slice(0, 6),
    equippedWeapons: weapons,
    knownElements: elements,
    masteries,
    keyElement: cleanToken(elements[0] ?? masteries[0] ?? abilityPrescriptions.find(v => String(v).match(/fire|ice|lightning|wind|earth|water|arcane|light|dark/i)) ?? "arcane", "arcane"),
    keyWeapon: cleanToken(weapons[0] ?? weaponPrescriptions.find(v => !String(v).match(/build around|scaling|ability|magic|strength|dexterity|endurance/i)) ?? "weapon", "weapon"),
    profileKey: [race?.id, job?.id, totalLevel, elements.slice(0, 2).join("-"), weapons.slice(0, 2).join("-"), weaponPrescriptions.slice(0, 2).join("-")].join("|")
  };
}

function titleWordFromProfile(profile) {
  const focus = profile.jobFocus || profile.raceFocus || "balanced";
  if (focus.includes("magic")) return "Arcane";
  if (focus.includes("defense")) return "Iron";
  if (focus.includes("speed")) return "Storm";
  if (focus.includes("support")) return "Guild";
  if (focus.includes("physical")) return "Blade";
  return choice(LEGEND_TITLE_PREFIXES);
}

function questAmount(frame, profile) {
  const levelBump = Math.floor((profile.totalLevel ?? 1) / 12);
  if (frame.targetType === "totalLevel") return Math.max(2, Math.min(8, 2 + Math.floor((profile.totalLevel ?? 1) / 20)));
  if (frame.targetType === "highestRaceLevel" || frame.targetType === "highestJobLevel") return Math.max(2, Math.min(8, 2 + Math.floor((profile.totalLevel ?? 1) / 25)));
  if (frame.targetType === "bossKills") return Math.max(1, Math.min(5, 1 + Math.floor((profile.totalLevel ?? 1) / 25)));
  return Math.max(1, frame.baseAmount + levelBump);
}

function buildQuestName(frame, profile, index) {
  const part = frame.nameParts[index % frame.nameParts.length];
  if (frame.targetType === "elementUses") return `${titleCase(profile.keyElement)} Study: ${part}`;
  if (frame.targetType === "weaponBattles") return `${titleCase(profile.keyWeapon)} Trial: ${part}`;
  if (frame.targetType === "highestRaceLevel") return `${profile.raceName}: ${part}`;
  if (frame.targetType === "totalLevel") return `${profile.jobName}: ${part}`;
  return `${frame.tone}: ${part}`;
}

function buildQuestDescription(frame, profile, amount) {
  const raceJob = `${profile.raceName} / ${profile.jobName}`;
  switch (frame.targetType) {
    case "weaponBattles": return `Win ${amount} battles while using an equipped ${titleCase(profile.keyWeapon)} or related weapon path. Tuned for ${raceJob}.`;
    case "elementUses": return `Use ${titleCase(profile.keyElement)} abilities ${amount} times to advance your elemental training.`;
    case "totalLevel": return `Gain ${amount} total race/job level(s) from this contract.`;
    case "highestRaceLevel": return `Raise any race stage by ${amount} level(s) and strengthen your bloodline identity.`;
    case "enemyKills": return `Defeat ${amount} enemies across dungeon runs.`;
    case "bossKills": return `Defeat ${amount} boss enemy to prove the build can handle mechanics.`;
    case "roomsCleared": return `Clear ${amount} dungeon rooms or encounters in your career.`;
    case "inventoryCount": return `Hold at least ${amount} total inventory items for guild preparation.`;
    default: return `Complete a build-based challenge for ${raceJob}.`;
  }
}

function buildQuestRewards(frame, amount, profile) {
  const rewards = {};
  const level = Math.max(1, profile.totalLevel ?? 1);
  if (["gold", "balanced", "supplies"].includes(frame.reward)) rewards.gold = 55 + amount * 12 + level * 3;
  if (["xp", "balanced", "magic", "relic", "supplies"].includes(frame.reward)) rewards.xp = 60 + amount * 14 + level * 5;
  if (frame.reward === "relic" || amount >= 15) rewards.relicDust = 1;
  if (frame.reward === "supplies") rewards.items = { [choice(LEGEND_REWARD_ITEMS)]: 1 };
  if (!Object.keys(rewards).length) rewards.gold = 75;
  return rewards;
}

function legendKeyFor(frame, profile) {
  return `${frame.id}:${frame.targetType === "elementUses" ? profile.keyElement : ""}:${frame.targetType === "weaponBattles" ? profile.keyWeapon : ""}`;
}

function questKey(quest = {}) {
  return `${quest.frameId}:${quest.target?.element ?? ""}:${quest.target?.weapon ?? ""}`;
}

function achievementKey(achievement = {}) {
  return `${achievement.frameId}:${achievement.target?.element ?? ""}:${achievement.target?.weapon ?? ""}`;
}

function trimHistory(engine) {
  engine.completedQuestKeys = [...new Set(engine.completedQuestKeys ?? [])].slice(-24);
  engine.completedAchievementKeys = [...new Set(engine.completedAchievementKeys ?? [])].slice(-24);
  engine.completedQuestHistory = (engine.completedQuestHistory ?? []).slice(-20);
  engine.completedAchievementHistory = (engine.completedAchievementHistory ?? []).slice(-20);
}

function createQuestFromFrame(state, frame, profile, index) {
  const amount = questAmount(frame, profile);
  const engine = ensureLegendEngineState(state);
  engine.generatedQuestCount += 1;
  const target = {
    type: frame.targetType,
    amount,
    element: frame.targetType === "elementUses" ? profile.keyElement : undefined,
    weapon: frame.targetType === "weaponBattles" ? profile.keyWeapon : undefined
  };
  target.start = currentForTarget(state, target);
  return {
    id: `legend_q_${frame.id}_${engine.generatedQuestCount}`,
    frameId: frame.id,
    key: legendKeyFor(frame, profile),
    dynamic: true,
    category: frame.category,
    name: buildQuestName(frame, profile, index),
    description: buildQuestDescription(frame, profile, amount),
    target,
    rewards: buildQuestRewards(frame, amount, profile),
    profile: {
      raceName: profile.raceName,
      jobName: profile.jobName,
      focus: `${profile.raceFocus}/${profile.jobFocus}`,
      keyElement: profile.keyElement,
      keyWeapon: profile.keyWeapon
    },
    createdAt: Date.now()
  };
}

export function generateLegendQuests(state, count = 3, options = {}) {
  const engine = ensureLegendEngineState(state);
  if (!state.player) return [];
  const profile = getLegendProfile(state);
  const active = engine.quests.filter(q => !engine.claimedQuests.includes(q.id));
  const existingKeys = new Set(active.map(q => q.key ?? questKey(q)));
  const completedKeys = new Set(engine.completedQuestKeys ?? []);
  const preferred = [...LEGEND_QUEST_FRAMES].sort((a, b) => {
    const aMatch = a.targetType === "elementUses" && profile.knownElements.length ? -2 : a.targetType === "weaponBattles" && (profile.equippedWeapons.length || profile.weaponPrescriptions.length) ? -1 : 0;
    const bMatch = b.targetType === "elementUses" && profile.knownElements.length ? -2 : b.targetType === "weaponBattles" && (profile.equippedWeapons.length || profile.weaponPrescriptions.length) ? -1 : 0;
    return aMatch - bMatch;
  });
  const added = [];

  function tryFill(ignoreCompleted = false) {
    for (const frame of preferred) {
      if (added.length >= count) break;
      const key = legendKeyFor(frame, profile);
      if (existingKeys.has(key)) continue;
      if (!ignoreCompleted && completedKeys.has(key)) continue;
      const quest = createQuestFromFrame(state, frame, profile, active.length + added.length);
      added.push(quest);
      existingKeys.add(key);
    }
  }

  tryFill(false);
  if (added.length < count && completedKeys.size >= LEGEND_QUEST_FRAMES.length) {
    engine.completedQuestKeys = [];
    completedKeys.clear();
    tryFill(true);
  }
  if (added.length < count) tryFill(true);

  if (added.length) {
    engine.quests.unshift(...added);
    engine.quests = engine.quests.filter(q => !engine.claimedQuests.includes(q.id)).slice(0, ACTIVE_LEGEND_QUESTS);
    engine.lastProfileKey = profile.profileKey;
    if (!options.silent) addLog(state, `<strong>Legend Engine:</strong> Added ${added.length} build-based quest contract(s) to the Quest Board.`);
  }
  trimHistory(engine);
  return added;
}

function currentForTarget(state, target = {}) {
  const meta = state.meta ?? {};
  const player = state.player;
  switch (target.type) {
    case "weaponBattles": return target.weapon ? (meta.weaponBattles?.[String(target.weapon).toLowerCase()] ?? 0) : Object.values(meta.weaponBattles ?? {}).reduce((a, b) => a + Number(b ?? 0), 0);
    case "elementUses": return target.element ? (meta.elementUses?.[String(target.element).toLowerCase()] ?? 0) : Object.values(meta.elementUses ?? {}).reduce((a, b) => a + Number(b ?? 0), 0);
    case "spellUses": return meta.skillKindUses?.spell ?? 0;
    case "skillUses": return meta.skillKindUses?.skill ?? 0;
    case "roomsCleared": return meta.roomsCleared ?? 0;
    case "enemyKills": return meta.enemyKills ?? 0;
    case "bossKills": return meta.bossKills ?? 0;
    case "eliteKills": return meta.eliteKills ?? 0;
    case "highestFloor": return meta.highestFloor ?? 0;
    case "inventoryCount": return Object.values(player?.inventory ?? {}).reduce((sum, qty) => sum + Number(qty ?? 0), 0);
    case "highestRaceLevel": return Math.max(0, ...(player?.raceLevels ?? []).map(cls => cls.level ?? 0));
    case "highestJobLevel": return Math.max(0, ...(player?.jobLevels ?? []).map(cls => cls.level ?? 0));
    case "totalLevel": return getTotalLevel(player);
    case "masteriesKnown": return knownMasteries(player).length;
    default: return 0;
  }
}

export function getLegendQuestProgress(state, quest) {
  const rawCurrent = currentForTarget(state, quest.target);
  const start = Number(quest.target?.start ?? 0);
  const current = Math.max(0, rawCurrent - start);
  const required = quest.target?.amount ?? 1;
  return { current, required, complete: current >= required, pct: Math.max(0, Math.min(100, Math.floor((current / Math.max(1, required)) * 100))) };
}

export function getLegendQuests(state, options = {}) {
  let engine = ensureLegendEngineState(state);
  if (state.player && options.prime !== false) {
    const activeCount = engine.quests.filter(q => !engine.claimedQuests.includes(q.id)).length;
    if (activeCount < ACTIVE_LEGEND_QUESTS || engine.quests.some(q => getLegendQuestProgress(state, q).complete)) {
      ensureLegendEngineRotation(state, { silent: true });
      engine = ensureLegendEngineState(state);
    }
  }
  return engine.quests.map(quest => ({
    ...quest,
    progress: getLegendQuestProgress(state, quest),
    claimed: engine.claimedQuests.includes(quest.id)
  }));
}

export function claimLegendQuestReward(state, questId) {
  const engine = ensureLegendEngineState(state);
  const quest = engine.quests.find(q => q.id === questId);
  if (!quest) return addLog(state, "Legend Engine quest not found.");
  const progress = getLegendQuestProgress(state, quest);
  if (!progress.complete) return addLog(state, `${quest.name} is not complete yet.`);
  if (engine.claimedQuests.includes(quest.id)) return addLog(state, "Legend Engine reward already claimed.");
  applyLegendQuestRewards(state, quest);
  engine.claimedQuests.push(quest.id);
  const key = quest.key ?? questKey(quest);
  if (!engine.completedQuestKeys.includes(key)) engine.completedQuestKeys.push(key);
  engine.completedQuestHistory.push({ id: quest.id, name: quest.name, key, completedAt: Date.now() });
  engine.quests = engine.quests.filter(q => q.id !== quest.id);
  addLog(state, `<strong>Legend Engine Quest Complete:</strong> ${quest.name}. Rewards claimed and replaced.`);
  ensureLegendEngineRotation(state);
}

function achievementName(frame, profile, index) {
  if (frame.targetType === "elementUses") return `${titleCase(profile.keyElement)} ${choice(["Adept", "Caller", "Scholar", "Invoker"])}`;
  if (frame.targetType === "weaponBattles") return `${titleCase(profile.keyWeapon)} ${choice(["Disciple", "Veteran", "Warden", "Bearer"])}`;
  return `${profile.jobName} ${choice(["Record", "Milestone", "Proof", "Ledger"])} ${index + 1}`;
}

function achievementTitle(frame, profile, index) {
  const listed = frame.titles?.[index % frame.titles.length];
  if (listed && frame.targetType !== "elementUses") return listed;
  if (frame.targetType === "elementUses") return `${titleCase(profile.keyElement)} ${choice(LEGEND_TITLE_SUFFIXES)}`;
  return `${titleWordFromProfile(profile)} ${choice(LEGEND_TITLE_SUFFIXES)}`;
}

function achievementDescription(frame, profile, amount) {
  switch (frame.targetType) {
    case "weaponBattles": return `Win ${amount} battles while using your preferred weapon path.`;
    case "spellUses": return `Cast ${amount} spell abilities.`;
    case "elementUses": return `Use ${titleCase(profile.keyElement)} abilities ${amount} times.`;
    case "roomsCleared": return `Clear ${amount} rooms across dungeon runs.`;
    case "enemyKills": return `Defeat ${amount} enemies across your career.`;
    case "bossKills": return `Defeat ${amount} bosses.`;
    case "totalLevel": return `Reach Total Level ${amount}.`;
    case "masteriesKnown": return `Learn ${amount} Element Mastery abilities.`;
    default: return `Complete a dynamic legend milestone.`;
  }
}

function createAchievementFromFrame(state, frame, profile, index) {
  const engine = ensureLegendEngineState(state);
  engine.generatedAchievementCount += 1;
  const amount = frame.targetType === "elementUses" ? Math.max(frame.amount, 15 + Math.floor(profile.totalLevel / 2)) : frame.amount;
  const target = {
    type: frame.targetType,
    amount,
    element: frame.targetType === "elementUses" ? profile.keyElement : undefined,
    weapon: frame.targetType === "weaponBattles" ? profile.keyWeapon : undefined
  };
  target.start = currentForTarget(state, target);
  return {
    id: `legend_a_${frame.id}_${engine.generatedAchievementCount}`,
    frameId: frame.id,
    key: legendKeyFor(frame, profile),
    dynamic: true,
    name: achievementName(frame, profile, index),
    title: achievementTitle(frame, profile, index),
    difficulty: frame.difficulty,
    bonus: frame.bonus,
    description: achievementDescription(frame, profile, amount),
    target,
    createdAt: Date.now()
  };
}

export function generateLegendAchievements(state, count = 3, options = {}) {
  const engine = ensureLegendEngineState(state);
  if (!state.player) return [];
  const profile = getLegendProfile(state);
  const active = engine.achievements.filter(a => !engine.unlockedAchievements.includes(a.id) && !state.player?.achievements?.includes(a.id));
  const existing = new Set(active.map(a => a.key ?? achievementKey(a)));
  const completedKeys = new Set(engine.completedAchievementKeys ?? []);
  const added = [];

  function tryFill(ignoreCompleted = false) {
    for (const frame of LEGEND_ACHIEVEMENT_FRAMES) {
      if (added.length >= count) break;
      const key = legendKeyFor(frame, profile);
      if (existing.has(key)) continue;
      if (!ignoreCompleted && completedKeys.has(key)) continue;
      const achievement = createAchievementFromFrame(state, frame, profile, active.length + added.length);
      added.push(achievement);
      existing.add(key);
    }
  }

  tryFill(false);
  if (added.length < count && completedKeys.size >= LEGEND_ACHIEVEMENT_FRAMES.length) {
    engine.completedAchievementKeys = [];
    completedKeys.clear();
    tryFill(true);
  }
  if (added.length < count) tryFill(true);

  if (added.length) {
    engine.achievements.unshift(...added);
    engine.achievements = engine.achievements
      .filter(a => !engine.unlockedAchievements.includes(a.id) && !state.player?.achievements?.includes(a.id))
      .slice(0, ACTIVE_LEGEND_ACHIEVEMENTS);
    if (!options.silent) addLog(state, `<strong>Legend Engine:</strong> Added ${added.length} achievement/title milestone(s) to Achievements.`);
  }
  trimHistory(engine);
  return added;
}

export function getLegendAchievements(state, options = {}) {
  let engine = ensureLegendEngineState(state);
  if (state.player && options.prime !== false) {
    const activeCount = engine.achievements.filter(a => !engine.unlockedAchievements.includes(a.id) && !state.player?.achievements?.includes(a.id)).length;
    if (activeCount < ACTIVE_LEGEND_ACHIEVEMENTS || engine.achievements.some(a => getLegendQuestProgress(state, a).complete)) {
      ensureLegendEngineRotation(state, { silent: true });
      engine = ensureLegendEngineState(state);
    }
  }
  return engine.achievements
    .filter(achievement => !engine.unlockedAchievements.includes(achievement.id) && !state.player?.achievements?.includes(achievement.id))
    .map(achievement => ({
      ...achievement,
      progress: getLegendQuestProgress(state, achievement),
      unlocked: false
    }));
}

export function checkLegendAchievements(state) {
  if (!state.player) return [];
  const engine = ensureLegendEngineState(state);
  const unlocked = [];
  for (const achievement of engine.achievements) {
    if (engine.unlockedAchievements.includes(achievement.id)) continue;
    const progress = getLegendQuestProgress(state, achievement);
    if (!progress.complete) continue;
    engine.unlockedAchievements.push(achievement.id);
    const key = achievement.key ?? achievementKey(achievement);
    if (!engine.completedAchievementKeys.includes(key)) engine.completedAchievementKeys.push(key);
    engine.completedAchievementHistory.push({ id: achievement.id, name: achievement.name, title: achievement.title, key, completedAt: Date.now() });
    state.player.achievements ??= [];
    if (!state.player.achievements.includes(achievement.id)) state.player.achievements.push(achievement.id);
    state.player.legendTitles ??= [];
    if (!state.player.legendTitles.some(title => title.achievementId === achievement.id)) {
      state.player.legendTitles.push({
        achievementId: achievement.id,
        title: achievement.title,
        difficulty: achievement.difficulty,
        stats: achievement.bonus ?? {},
        description: achievement.description
      });
    }
    if (!state.player.title || state.player.title === "Wanderer") state.player.title = achievement.title;
    unlocked.push(achievement);
    addLog(state, `<strong>Legend Engine Achievement:</strong> ${achievement.name}. Title gained: ${achievement.title}.`);
  }
  return unlocked;
}

export function getLegendTitleByAchievementId(state, id) {
  ensureLegendEngineState(state);
  const savedTitle = (state.player?.legendTitles ?? []).find(title => title.achievementId === id);
  if (savedTitle) return savedTitle;
  const achievement = state.legendEngine.achievements.find(a => a.id === id);
  if (!achievement) return null;
  return null;
}


function applyLegendQuestRewards(state, quest) {
  const rewards = quest.rewards ?? {};
  if (rewards.gold) state.player.gold += rewards.gold;
  if (rewards.xp) gainXp(state, rewards.xp);
  if (rewards.relicDust) state.meta.relicDust = (state.meta.relicDust ?? 0) + rewards.relicDust;
  for (const [itemId, qty] of Object.entries(rewards.items ?? {})) addInventory(state.player, itemId, qty);
}

function rotateCompletedLegendQuests(state) {
  const engine = ensureLegendEngineState(state);
  const completed = [];
  for (const quest of engine.quests) {
    if (engine.claimedQuests.includes(quest.id)) continue;
    const progress = getLegendQuestProgress(state, quest);
    if (!progress.complete) continue;
    applyLegendQuestRewards(state, quest);
    engine.claimedQuests.push(quest.id);
    const key = quest.key ?? questKey(quest);
    if (!engine.completedQuestKeys.includes(key)) engine.completedQuestKeys.push(key);
    engine.completedQuestHistory.push({ id: quest.id, name: quest.name, key, completedAt: Date.now() });
    completed.push(quest);
    addLog(state, `<strong>Background Quest Complete:</strong> ${quest.name}. Rewards granted and a new contract will replace it.`);
  }
  if (completed.length) engine.quests = engine.quests.filter(q => !engine.claimedQuests.includes(q.id));
  trimHistory(engine);
  return completed;
}

function archiveUnlockedLegendAchievements(state) {
  const engine = ensureLegendEngineState(state);
  const before = engine.achievements.length;
  engine.achievements = engine.achievements.filter(achievement => !engine.unlockedAchievements.includes(achievement.id) && !state.player?.achievements?.includes(achievement.id));
  trimHistory(engine);
  return Math.max(0, before - engine.achievements.length);
}

export function ensureLegendEngineRotation(state, options = {}) {
  if (!state.player) return { questsAdded: 0, achievementsAdded: 0, questsCompleted: 0, achievementsCompleted: 0 };
  const engine = ensureLegendEngineState(state);
  if (engine._rotationLock) return { questsAdded: 0, achievementsAdded: 0, questsCompleted: 0, achievementsCompleted: 0 };
  engine._rotationLock = true;
  try {
  let questsCompleted = rotateCompletedLegendQuests(state).length;
  let achievementsCompleted = checkLegendAchievements(state).length;
  let archivedAchievements = archiveUnlockedLegendAchievements(state);
  let questsAdded = 0;
  let achievementsAdded = 0;

  for (let safety = 0; safety < 4; safety += 1) {
    const activeQuestCount = engine.quests.filter(q => !engine.claimedQuests.includes(q.id)).length;
    const activeAchievementCount = engine.achievements.filter(a => !engine.unlockedAchievements.includes(a.id) && !state.player?.achievements?.includes(a.id)).length;
    questsAdded += generateLegendQuests(state, Math.max(0, ACTIVE_LEGEND_QUESTS - activeQuestCount), { silent: true }).length;
    achievementsAdded += generateLegendAchievements(state, Math.max(0, ACTIVE_LEGEND_ACHIEVEMENTS - activeAchievementCount), { silent: true }).length;

    const newQuestCompletions = rotateCompletedLegendQuests(state).length;
    const newAchievementCompletions = checkLegendAchievements(state).length;
    const newlyArchived = archiveUnlockedLegendAchievements(state);
    questsCompleted += newQuestCompletions;
    achievementsCompleted += newAchievementCompletions;
    archivedAchievements += newlyArchived;

    const fullQuests = engine.quests.filter(q => !engine.claimedQuests.includes(q.id)).length >= ACTIVE_LEGEND_QUESTS;
    const fullAchievements = engine.achievements.filter(a => !engine.unlockedAchievements.includes(a.id) && !state.player?.achievements?.includes(a.id)).length >= ACTIVE_LEGEND_ACHIEVEMENTS;
    if (fullQuests && fullAchievements && !newQuestCompletions && !newAchievementCompletions && !newlyArchived) break;
  }

  const changed = questsCompleted + achievementsCompleted + archivedAchievements + questsAdded + achievementsAdded;
  if (changed && !options.silent) {
    const parts = [];
    if (questsCompleted) parts.push(`${questsCompleted} quest(s) completed`);
    if (achievementsCompleted) parts.push(`${achievementsCompleted} achievement/title goal(s) unlocked`);
    if (questsAdded) parts.push(`${questsAdded} quest(s) added`);
    if (achievementsAdded) parts.push(`${achievementsAdded} achievement goal(s) added`);
    addLog(state, `<strong>Legend Engine:</strong> ${parts.join(" · ")}.`);
  }
  return { questsAdded, achievementsAdded, questsCompleted, achievementsCompleted };
  } finally {
    delete engine._rotationLock;
  }
}

export function trackLegendAbilityUse(state, skill) {
  if (!skill) return;
  ensureLegendEngineState(state);
  state.meta.abilityUses[skill.id] = (state.meta.abilityUses[skill.id] ?? 0) + 1;
  const kind = String(skill.kind ?? "ability").toLowerCase();
  state.meta.skillKindUses[kind] = (state.meta.skillKindUses[kind] ?? 0) + 1;
  if (skill.kind === "spell" || skill.resource === "mana") state.meta.skillKindUses.spell = (state.meta.skillKindUses.spell ?? 0) + 1;
  const element = String(skill.element ?? "physical").toLowerCase();
  state.meta.elementUses[element] = (state.meta.elementUses[element] ?? 0) + 1;
  const weapons = equippedWeaponTypes(state.player);
  for (const weapon of weapons) state.meta.weaponBattles[weapon] = (state.meta.weaponBattles[weapon] ?? 0) + 1;
}

export function trackLegendWeaponUse(state) {
  ensureLegendEngineState(state);
  const weapons = equippedWeaponTypes(state.player);
  for (const weapon of weapons.length ? weapons : ["weapon"]) {
    state.meta.weaponBattles[weapon] = (state.meta.weaponBattles[weapon] ?? 0) + 1;
  }
}
