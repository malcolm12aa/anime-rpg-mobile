import { titleCase } from "../core/utils.js";

const FOCUS_PROFILES = {
  physical: { label: "Physical", primary: "str", secondary: "dex", tertiary: "con", flavor: "weapon pressure and decisive melee tempo", rankTag: "Blade" },
  magic: { label: "Magic", primary: "int", secondary: "wis", tertiary: "cha", flavor: "mana control and spell formula stability", rankTag: "Aether" },
  defense: { label: "Defense", primary: "con", secondary: "wis", tertiary: "str", flavor: "survival, guard value, and pressure resistance", rankTag: "Aegis" },
  speed: { label: "Speed", primary: "dex", secondary: "cha", tertiary: "str", flavor: "initiative, precision, and momentum turns", rankTag: "Gale" },
  support: { label: "Support", primary: "wis", secondary: "cha", tertiary: "int", flavor: "party utility, recovery timing, and control support", rankTag: "Oath" },
  balanced: { label: "Balanced", primary: "str", secondary: "int", tertiary: "con", flavor: "all-round growth without locking the build into one route", rankTag: "Crown" }
};

const RACE_WORDS = [
  "Hearthmark", "Trueblood", "Echobone", "Starvein", "Ironroot", "Moonbrand", "Stormhide", "Dawnscale",
  "Nightseed", "Runeheart", "Goldfang", "Mistmantle", "Gravespark", "Sunmarrow", "Frostpulse", "Emberline",
  "Cloudstep", "Stonewake", "Spiritcoil", "Voidhalo", "Wildsong", "Silverclaw", "Ashcrown", "Deepwarden"
];

const JOB_WORDS = [
  "Discipline", "Doctrine", "Form", "Manual", "Creed", "Oath", "Engine", "Tempo",
  "Rhythm", "Method", "Command", "Path", "Axiom", "Rite", "Stance", "Circuit",
  "Mandate", "Technique", "Protocol", "Art", "Edict", "Standard", "Formula", "Vow"
];

const RACE_VERBS = ["awakens", "refines", "anchors", "sharpens", "stabilizes", "fortifies", "quickens", "harmonizes"];
const JOB_VERBS = ["converts", "channels", "compresses", "cycles", "weaves", "focuses", "reinforces", "multiplies"];

function hashString(text = "") {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function choiceFor(list, seed, offset = 0) {
  return list[(seed + offset) % list.length];
}

function normalizeFocus(item = {}) {
  const focus = String(item.buildFocus ?? "").toLowerCase();
  if (FOCUS_PROFILES[focus]) return focus;
  const text = `${item.name ?? ""} ${item.category ?? ""} ${(item.tags ?? []).join(" ")} ${(item.strengths ?? []).join(" ")} ${item.description ?? ""}`.toLowerCase();
  if (/heal|support|bard|cleric|priest|oracle|tamer|summon|saint|spirit/.test(text)) return "support";
  if (/guard|shield|fortress|dwarf|golem|plate|armor|stone|guardian|warden/.test(text)) return "defense";
  if (/rogue|assassin|ranger|scout|beast|sylph|wind|ninja|archer|wolf|quick/.test(text)) return "speed";
  if (/mage|magic|spell|arcane|rune|witch|sorcer|dragon|demon|undead|sage|elf/.test(text)) return "magic";
  if (/fighter|warrior|knight|sword|blade|berserk|monk|orc|ogre|titan|weapon/.test(text)) return "physical";
  return "balanced";
}

function statLabel(key) {
  return ({ str: "Strength", dex: "Dexterity", int: "Magic", wis: "Wisdom", con: "Endurance", cha: "Presence" })[key] ?? titleCase(key);
}

function statsText(stats = {}) {
  const entries = Object.entries(stats).filter(([, value]) => value);
  return entries.length ? entries.map(([key, value]) => `+${value} ${statLabel(key)}`).join(" · ") : "No bonus yet";
}

function scaledStats(item, stageLevel = 1, totalLevel = 1, mode = "race") {
  const focus = normalizeFocus(item);
  const profile = FOCUS_PROFILES[focus] ?? FOCUS_PROFILES.balanced;
  const seed = hashString(`${mode}:${item?.id ?? item?.name ?? "unknown"}`);
  const stage = Math.max(1, Number(stageLevel) || 1);
  const total = Math.max(stage, Number(totalLevel) || stage);
  const tierBoost = ({ base: 0, advanced: 1, specialist: 1, rare: 2, hidden: 3 })[String(item?.tier ?? "base").toLowerCase()] ?? 0;
  const base = mode === "race" ? 1 : 0;
  const primary = base + tierBoost + Math.floor((stage + (seed % 3)) / 4) + Math.floor(total / 30);
  const secondary = Math.floor((stage + (seed % 5)) / 6) + Math.floor(total / 45);
  const tertiary = Math.floor((stage + tierBoost) / 9) + ((seed % 11 === 0 && total >= 20) ? 1 : 0);
  const stats = {};
  stats[profile.primary] = (stats[profile.primary] ?? 0) + Math.max(0, primary);
  stats[profile.secondary] = (stats[profile.secondary] ?? 0) + Math.max(0, secondary);
  if (tertiary > 0) stats[profile.tertiary] = (stats[profile.tertiary] ?? 0) + tertiary;
  if (focus === "balanced") {
    const spread = 1 + Math.floor(stage / 10) + Math.floor(total / 60);
    for (const key of ["str", "dex", "int", "wis", "con", "cha"]) stats[key] = Math.max(stats[key] ?? 0, spread);
  }
  return { stats, focus, profile, seed, stage, total };
}

function makeRacePassive(item, stageLevel = 1, totalLevel = 1) {
  const data = scaledStats(item, stageLevel, totalLevel, "race");
  const name = item?.name ?? "Unknown Race";
  const word = choiceFor(RACE_WORDS, data.seed, 3);
  const verb = choiceFor(RACE_VERBS, data.seed, 7);
  const traitName = `${name} ${word} Trait`;
  const category = titleCase(item?.category ?? "Origin");
  return {
    id: `${item?.id ?? name}_passive_trait`,
    name: traitName,
    kind: "race-passive",
    stageLevel: data.stage,
    totalLevel: data.total,
    focus: data.focus,
    stats: data.stats,
    bonusText: statsText(data.stats),
    scalingText: `Scales with ${name} stage level ${data.stage} and character total level ${data.total}. Every few stage levels strengthen its ${data.profile.label.toLowerCase()} bonus, and total level adds background growth.`,
    summary: `${traitName} ${verb} ${category.toLowerCase()} instincts into ${data.profile.flavor}. It is unique to ${name}, keeps improving as the character levels, and continues to matter even after the build branches into new race stages.`
  };
}

function makeJobMastery(item, stageLevel = 1, totalLevel = 1) {
  const data = scaledStats(item, stageLevel, totalLevel, "job");
  const name = item?.name ?? "Unknown Job";
  const word = choiceFor(JOB_WORDS, data.seed, 11);
  const verb = choiceFor(JOB_VERBS, data.seed, 13);
  const masteryName = `${name} ${data.profile.rankTag} ${word}`;
  const role = titleCase(item?.mainRole ?? item?.roleIdentity ?? data.focus);
  return {
    id: `${item?.id ?? name}_mastery_bonus`,
    name: masteryName,
    kind: "job-mastery",
    stageLevel: data.stage,
    totalLevel: data.total,
    focus: data.focus,
    stats: data.stats,
    bonusText: statsText(data.stats),
    scalingText: `Scales with ${name} job level ${data.stage} and character total level ${data.total}. Higher job level improves the core mastery, while total level adds veteran refinement.`,
    summary: `${masteryName} ${verb} ${role.toLowerCase()} training into ${data.profile.flavor}. It is a one-of-a-kind mastery for ${name}, rewarding players who keep investing in the job rather than treating it as a throwaway class.`
  };
}

export function getRacePassiveInfo(race, stageLevel = 1, totalLevel = stageLevel) {
  return makeRacePassive(race, stageLevel, totalLevel);
}

export function getJobMasteryInfo(job, stageLevel = 1, totalLevel = stageLevel) {
  return makeJobMastery(job, stageLevel, totalLevel);
}

export function getRacePassiveBonus(race, stageLevel = 1, totalLevel = stageLevel) {
  return getRacePassiveInfo(race, stageLevel, totalLevel);
}

export function getJobMasteryBonus(job, stageLevel = 1, totalLevel = stageLevel) {
  return getJobMasteryInfo(job, stageLevel, totalLevel);
}

export function passiveBonusSummary(passive) {
  if (!passive) return "No passive bonus";
  return `${passive.name}: ${passive.bonusText}`;
}
