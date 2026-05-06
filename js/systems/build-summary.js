import { SKILLS } from "../data/skills.js";
import { byId, titleCase } from "../core/utils.js";
import { computeStats, getActiveSynergies, getTotalLevel } from "./leveling.js";
import { getRaceIdentity, getJobIdentity } from "./identity.js";

const BASIC = ["strength", "endurance", "dexterity", "agility", "magic"];

export function getBuildSummary(state) {
  const player = state.player;
  const stats = computeStats(player);
  const racePath = (player.raceLevels ?? []).map(cls => cls.name).join(" → ");
  const jobPath = (player.jobLevels ?? []).map(cls => cls.name).join(" → ");
  const currentRace = player.raceLevels?.at(-1) ?? {};
  const currentJob = player.jobLevels?.at(-1) ?? {};
  const jobIdentity = getJobIdentity(currentJob);
  const raceIdentity = getRaceIdentity(currentRace);
  const rows = stats.basicAbilities?.rows ?? [];
  const sorted = [...rows].sort((a, b) => b.totalValue - a.totalValue);
  const strongest = sorted.slice(0, 2).map(row => `${row.name} ${row.totalDisplay}`).join(", ") || "None";
  const weakest = sorted.slice(-2).map(row => `${row.name} ${row.totalDisplay}`).join(", ") || "None";
  const knownSkills = (player.skills ?? []).map(id => byId(SKILLS, id)).filter(Boolean);
  const uniqueAbilities = knownSkills.filter(skill => /unique/i.test(skill.rank ?? "")).map(skill => skill.name);
  const ultimateAbilities = knownSkills.filter(skill => /ultimate/i.test(skill.rank ?? "")).map(skill => skill.name);
  const mainSkillType = jobIdentity.allowedSkillTypes?.[0] ?? "General Skills";
  const mainSpellSchool = jobIdentity.preferredSpellSchools?.[0] ?? "Universal";
  const weaponType = jobIdentity.preferredWeapons?.[0] ?? "Simple Weapon";
  const synergies = getActiveSynergies(player).map(s => s.name);
  const nextGoals = [];
  if ((player.unspentClassLevels ?? 0) > 0) nextGoals.push("Spend unspent class level points on your current race/job stage.");
  if ((currentRace.level ?? 0) < (currentRace.maxLevel ?? 15)) nextGoals.push(`Raise ${currentRace.name} to level ${currentRace.maxLevel} for race evolution options.`);
  if ((currentJob.level ?? 0) < (currentJob.maxLevel ?? 15)) nextGoals.push(`Raise ${currentJob.name} to level ${currentJob.maxLevel} for job upgrade options.`);
  if ((state.meta?.bossKills ?? 0) < 1) nextGoals.push("Defeat the first boss to reveal stronger hidden upgrade routes.");
  if ((state.meta?.relicDust ?? 0) < 3) nextGoals.push("Collect Relic Dust from elites, bosses, and secret map events.");
  if (!ultimateAbilities.length) nextGoals.push("Use the Ability Evolution Lab to work toward a Unique or Ultimate ability.");
  return {
    totalLevel: getTotalLevel(player),
    racePath,
    jobPath,
    mainRole: jobIdentity.mainRole,
    weaponType,
    mainSkillType,
    mainSpellSchool,
    strongest,
    weakest,
    uniqueAbilities,
    ultimateAbilities,
    synergies,
    raceIdentity,
    jobIdentity,
    nextGoals: nextGoals.slice(0, 6)
  };
}
