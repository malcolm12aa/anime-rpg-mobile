import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { ITEMS, SET_BONUSES } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { SYNERGIES } from "../data/synergies.js";
import { ACHIEVEMENTS } from "../data/achievements.js";
import { getGeneratedLoot } from "./loot.js";
import { addLog, byId, clamp } from "../core/utils.js";
import { canUnlockPath, getUnlockableAdvancements, getUnlockStatus, getClassDataById } from "./unlocks.js";
import { emptyBasicAbilities, legacyStatsToBasicAbilities, addBasicAbilityPoints, buildBasicAbilityPacket, scaleDerivedStatsFromBasicAbilities } from "./basic-abilities.js";
import { getRacePassiveBonus, getJobMasteryBonus } from "./passive-scaling.js";

export function getTotalLevel(player) {
  if (!player) return 0;
  return [...player.raceLevels, ...player.jobLevels].reduce((sum, cls) => sum + cls.level, 0);
}

export function xpToNext(player) {
  const lvl = getTotalLevel(player);
  return Math.floor(55 + lvl * 26 + Math.pow(lvl, 1.22));
}

function allClassData() {
  return [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS];
}

function getClassData(id) {
  return getClassDataById(id);
}

function addStats(target, source = {}, multiplier = 1) {
  for (const [key, value] of Object.entries(source)) target[key] = (target[key] ?? 0) + value * multiplier;
}

export function getActiveSynergies(player) {
  if (!player) return [];
  const raceIds = new Set((player.raceLevels ?? []).map(cls => cls.id));
  const jobIds = new Set((player.jobLevels ?? []).map(cls => cls.id));
  return SYNERGIES.filter(synergy =>
    (synergy.raceIds ?? []).some(id => raceIds.has(id)) &&
    (synergy.jobIds ?? []).some(id => jobIds.has(id))
  );
}


export function getEquippedTitleBonus(player) {
  if (!player?.title) return null;
  const achievement = ACHIEVEMENTS.find(item => item.title === player.title);
  if (achievement) {
    return {
      title: achievement.title,
      achievementId: achievement.id,
      difficulty: achievement.difficulty ?? "common",
      stats: achievement.bonus ?? {},
      description: achievement.description ?? ""
    };
  }
  const legendTitle = (player.legendTitles ?? []).find(item => item.title === player.title);
  if (!legendTitle) return null;
  return {
    title: legendTitle.title,
    achievementId: legendTitle.achievementId,
    difficulty: legendTitle.difficulty ?? "dynamic",
    stats: legendTitle.stats ?? {},
    description: legendTitle.description ?? "Legend Engine generated title."
  };
}

export function getEquippedSetBonuses(player) {
  const counts = {};
  for (const itemId of Object.values(player?.equipment ?? {})) {
    const item = byId(ITEMS, itemId);
    if (item?.set) counts[item.set] = (counts[item.set] ?? 0) + 1;
  }
  const active = [];
  for (const set of SET_BONUSES) {
    const pieces = counts[set.id] ?? 0;
    for (const threshold of set.thresholds ?? []) {
      if (pieces >= threshold.pieces) active.push({ ...threshold, setId: set.id, setName: set.name, pieces });
    }
  }
  return active;
}

export function computeStats(player) {
  const stats = { ...player.baseStats };
  const totalBasic = emptyBasicAbilities();
  const currentBasic = emptyBasicAbilities();
  const externalBasic = emptyBasicAbilities();
  const overall = getTotalLevel(player);
  const passiveBonuses = [];

  // Base body/soul foundation contributes only to hidden stacked power.
  addBasicAbilityPoints(totalBasic, legacyStatsToBasicAbilities(player.baseStats ?? {}, 0.45));

  const raceTrack = player.raceLevels ?? [];
  const jobTrack = player.jobLevels ?? [];
  const currentRace = raceTrack.at(-1)?.id;
  const currentJob = jobTrack.at(-1)?.id;

  for (const entry of [
    ...raceTrack.map(cls => ({ cls, track: "race" })),
    ...jobTrack.map(cls => ({ cls, track: "job" }))
  ]) {
    const { cls, track } = entry;
    const data = getClassData(cls.id);
    if (!data) continue;

    // Keep legacy stats for compatibility with older systems and filters.
    addStats(stats, data.stats ?? {});
    addStats(stats, data.levelGrowth ?? {}, Math.max(0, cls.level - 1));

    // Unique leveling passives: every race stage has a Passive Trait and every job stage has a Mastery Bonus.
    // These scale from the class stage level plus the player's total character level.
    const passive = track === "race"
      ? getRacePassiveBonus(data, cls.level, overall)
      : getJobMasteryBonus(data, cls.level, overall);
    addStats(stats, passive.stats ?? {});
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(passive.stats ?? {}, 0.85));
    passiveBonuses.push({ ...passive, className: cls.name, track });

    // Falna-style Basic Abilities: every class stage has its own visible growth.
    // Previous stages stay in the hidden stacked total; the current race/job stage is what the Status screen shows.
    const classLegacy = {};
    addStats(classLegacy, data.stats ?? {}, 0.35);
    addStats(classLegacy, data.levelGrowth ?? {}, Math.max(0, cls.level - 1));
    const classBasic = legacyStatsToBasicAbilities(classLegacy, 0.26);
    addBasicAbilityPoints(totalBasic, classBasic);

    if (cls.id === currentRace || cls.id === currentJob) {
      const currentLegacy = {};
      addStats(currentLegacy, data.levelGrowth ?? {}, Math.max(0, cls.level - 1));
      addBasicAbilityPoints(currentBasic, legacyStatsToBasicAbilities(currentLegacy, 0.26));
    }
  }

  for (const synergy of getActiveSynergies(player)) {
    addStats(stats, synergy.stats ?? {});
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(synergy.stats ?? {}, 0.7));
  }
  for (const itemRef of Object.values(player.equipment ?? {})) {
    const item = typeof itemRef === "string" && itemRef.startsWith("loot:") ? getGeneratedLoot(player, itemRef) : byId(ITEMS, itemRef);
    if (!item?.stats) continue;
    const upgrade = typeof itemRef === "string" && !itemRef.startsWith("loot:") ? (player.itemUpgrades?.[itemRef] ?? {}) : {};
    const upgradeStats = {};
    for (const [key, value] of Object.entries(item.stats ?? {})) {
      upgradeStats[key] = Math.ceil((upgrade.level ?? 0) * (Math.max(1, Math.abs(value)) * 0.25 + 1)) + Math.ceil((upgrade.scaling ?? 0) * (Math.max(1, Math.abs(value)) * 0.4 + 1));
    }
    if (upgrade.runeSlots) upgradeStats.int = (upgradeStats.int ?? 0) + upgrade.runeSlots;
    addStats(stats, item.stats);
    addStats(stats, upgradeStats);
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(item.stats, 0.7));
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(upgradeStats, 0.7));
  }
  for (const bonus of getEquippedSetBonuses(player)) {
    addStats(stats, bonus.stats ?? {});
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(bonus.stats ?? {}, 0.7));
  }
  const titleBonus = getEquippedTitleBonus(player);
  if (titleBonus) {
    addStats(stats, titleBonus.stats ?? {});
    addBasicAbilityPoints(externalBasic, legacyStatsToBasicAbilities(titleBonus.stats ?? {}, 0.7));
  }

  // v1.1.3: learned abilities can now grant flat Basic Ability bonuses using
  // Strength / Endurance / Dexterity / Agility / Magic instead of old INT/WIS/etc. labels.
  for (const skillId of player.skills ?? []) {
    const skill = byId(SKILLS, skillId);
    const abilityBonus = skill?.basicAbilityBonus ?? skill?.bonusStats ?? {};
    addBasicAbilityPoints(externalBasic, abilityBonus, 1);
  }

  const basicAbilities = buildBasicAbilityPacket({ total: totalBasic, current: currentBasic, external: externalBasic });
  const derived = scaleDerivedStatsFromBasicAbilities(basicAbilities, overall);
  Object.assign(stats, derived);
  stats.basicAbilities = basicAbilities;
  stats.passiveBonuses = passiveBonuses;
  stats.scalingModel = "Basic Abilities + Leveling Passives";
  return stats;
}

export function computeCreationPreview(raceId, jobId) {
  const race = byId(RACES, raceId) ?? RACES[0];
  const job = byId(JOBS, jobId) ?? JOBS[0];
  const synergies = SYNERGIES.filter(s => (s.raceIds ?? []).includes(race.id) && (s.jobIds ?? []).includes(job.id));
  const skillIds = [...new Set([...(race.startingSkills ?? []), ...(job.startingSkills ?? []), ...synergies.flatMap(s => s.skills ?? []), "basic_focus"])]
    .filter(id => id === "basic_focus" || byId(SKILLS, id));

  const previewPlayer = {
    name: "Preview",
    title: "Wanderer",
    baseStats: { str: 4, dex: 4, int: 4, wis: 4, con: 4, cha: 4 },
    raceLevels: [{ id: race.id, name: race.name, tier: race.tier, level: 1, maxLevel: race.maxLevel }],
    jobLevels: [{ id: job.id, name: job.name, tier: job.tier, level: 1, maxLevel: job.maxLevel }],
    equipment: {},
    skills: skillIds,
    party: [],
    achievements: [],
    statusEffects: []
  };
  const stats = computeStats(previewPlayer);
  return { race, job, stats, synergies, skillIds };
}

export function syncResourcesToStats(player) {
  const stats = computeStats(player);
  player.hp = clamp(player.hp, 0, stats.maxHp);
  player.mana = clamp(player.mana, 0, stats.maxMana);
  player.stamina = clamp(player.stamina, 0, stats.maxStamina);
  return stats;
}

export function getCurrentClass(player, trackName) {
  const track = trackName === "race" ? (player?.raceLevels ?? []) : (player?.jobLevels ?? []);
  return track.at(-1) ?? null;
}

export function isCurrentClassMaxed(player, trackName) {
  const current = getCurrentClass(player, trackName);
  return Boolean(current && (current.level ?? 0) >= (current.maxLevel ?? 1));
}

export function getAvailableBasicClasses(state, trackName) {
  const player = state?.player;
  if (!player || !isCurrentClassMaxed(player, trackName)) return [];
  if (getTotalLevel(player) >= CONFIG.maxOverallLevel) return [];
  const baseList = trackName === "race" ? RACES : JOBS;
  const owned = new Set((trackName === "race" ? player.raceLevels : player.jobLevels).map(cls => cls.id));
  return baseList
    .filter(entry => String(entry.tier ?? "base").toLowerCase() === "base")
    .filter(entry => entry.registryVisible !== false && !entry.deprecatedOverlap)
    .filter(entry => !owned.has(entry.id));
}

export function addBasicClass(state, trackName, classId) {
  const player = state.player;
  if (!player) return;
  const current = getCurrentClass(player, trackName);
  if (!current) return addLog(state, `No current ${trackName} class found.`);
  if ((current.level ?? 0) < (current.maxLevel ?? 1)) {
    addLog(state, `Max your current ${trackName} stage first: ${current.name} Lv. ${current.level}/${current.maxLevel}.`);
    return;
  }
  if (getTotalLevel(player) >= CONFIG.maxOverallLevel) {
    addLog(state, `Overall level cap reached. You cannot add another ${trackName} class.`);
    return;
  }
  const list = trackName === "race" ? RACES : JOBS;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const entry = byId(list, classId);
  if (!entry || String(entry.tier ?? "base").toLowerCase() !== "base") {
    addLog(state, `That is not a valid basic ${trackName}.`);
    return;
  }
  if (track.some(cls => cls.id === entry.id)) {
    addLog(state, `${entry.name} is already part of your ${trackName} path.`);
    return;
  }
  track.push({ id: entry.id, name: entry.name, tier: entry.tier, level: 1, maxLevel: entry.maxLevel });
  for (const skillId of entry.startingSkills ?? []) {
    if (!player.skills.includes(skillId)) player.skills.push(skillId);
  }
  syncResourcesToStats(player);
  addLog(state, `<strong>New basic ${trackName} added:</strong> ${entry.name}. Level this stage before adding another path.`);
}

export function gainXp(state, amount) {
  const player = state.player;
  if (!player || getTotalLevel(player) >= CONFIG.maxOverallLevel) return;
  player.xp += amount;
  let gained = 0;
  while (player.xp >= xpToNext(player) && getTotalLevel(player) + player.unspentClassLevels < CONFIG.maxOverallLevel) {
    player.xp -= xpToNext(player);
    player.unspentClassLevels += 1;
    gained += 1;
  }
  if (gained > 0) addLog(state, `<strong>Level points gained:</strong> +${gained}. Spend them on Race/Job Progression.`);
}

export function spendClassPoint(state, trackName, index) {
  const player = state.player;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const cls = track[Number(index)];
  const currentIndex = track.length - 1;
  if (!cls || player.unspentClassLevels <= 0) return addLog(state, "No class point available.");
  if (Number(index) !== currentIndex) return addLog(state, `Only your current ${trackName} stage can be leveled. Current stage: ${track[currentIndex]?.name ?? "unknown"}.`);
  if (cls.level >= cls.maxLevel) return addLog(state, `${cls.name} is already maxed.`);
  cls.level += 1;
  player.unspentClassLevels -= 1;
  unlockClassSkills(state, cls.id, cls.level);
  const stats = computeStats(player);
  player.hp = stats.maxHp;
  player.mana = stats.maxMana;
  player.stamina = stats.maxStamina;
  addLog(state, `<strong>${cls.name}</strong> increased to level ${cls.level}. Overall Level is now ${getTotalLevel(player)}.`);
}

export function unlockClassSkills(state, classId, level) {
  const data = getClassData(classId);
  if (!data) return;
  const learnList = data.learns ?? [];
  for (const learn of learnList) {
    if (learn.level === level && !state.player.skills.includes(learn.skillId)) {
      state.player.skills.push(learn.skillId);
      const skill = byId(SKILLS, learn.skillId);
      addLog(state, `<strong>New skill learned:</strong> ${skill?.name ?? learn.skillId}`);
    }
  }
}

export function getAvailableAdvancements(state, trackName) {
  // v0.4.0: progression now shows only class/race paths that are actually valid
  // to unlock right now. Locked future paths remain in the Registry/Tree, while
  // hidden paths stay concealed until their requirements are fully satisfied.
  return getUnlockableAdvancements(state, trackName);
}

export function addAdvancedClass(state, trackName, pathId) {
  const player = state.player;
  const paths = trackName === "race" ? RACE_PATHS : JOB_PATHS;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const path = byId(paths, pathId);
  if (!path) return;
  const source = track.find(cls => cls.id === path.from);
  const status = getUnlockStatus(state, trackName, path);
  if (!source) {
    addLog(state, "That path belongs to a class you do not own yet.");
    return;
  }
  const current = track.at(-1);
  if (current?.id !== source.id) {
    addLog(state, `You can only evolve or upgrade from your current ${trackName} stage: ${current?.name ?? "unknown"}.`);
    return;
  }
  if ((source.level ?? 0) < (source.maxLevel ?? 1)) {
    addLog(state, `Max ${source.name} first before choosing an evolution or upgrade: Lv. ${source.level}/${source.maxLevel}.`);
    return;
  }
  if (getTotalLevel(player) >= CONFIG.maxOverallLevel) {
    addLog(state, "Overall level cap reached. You cannot add another class path.");
    return;
  }
  if (track.some(cls => cls.id === path.id)) {
    addLog(state, `${path.name} is already part of your build.`);
    return;
  }
  if (!canUnlockPath(state, trackName, path)) {
    const missing = status.missing?.map(item => item.label).join(", ") || "unknown requirement";
    addLog(state, `Requirements are not met for ${path.name}: ${missing}.`);
    return;
  }
  if (path.requirements?.gold) player.gold -= path.requirements.gold;
  if (path.requirements?.relicDust) state.meta.relicDust -= path.requirements.relicDust;
  track.push({ id: path.id, name: path.name, tier: path.tier, level: 1, maxLevel: path.maxLevel });
  for (const skillId of path.startingSkills ?? []) {
    if (!player.skills.includes(skillId)) player.skills.push(skillId);
  }
  syncResourcesToStats(player);
  addLog(state, `<strong>New ${trackName} path unlocked:</strong> ${path.name}.`);
}

export function getKnownClassData(id) {
  return getClassData(id);
}
