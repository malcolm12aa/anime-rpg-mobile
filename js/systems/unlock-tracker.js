import { SKILLS } from "../data/skills.js";
import { ABILITY_EVOLUTION_CHAINS } from "../data/ability-evolution-chains.js";
import { byId, titleCase } from "../core/utils.js";
import { getAvailableAdvancements } from "./leveling.js";

function classProgress(list = []) {
  return list.map(cls => ({
    id: cls.id,
    name: cls.name,
    current: cls.level ?? 0,
    required: cls.maxLevel ?? 1,
    pct: Math.floor(((cls.level ?? 0) / Math.max(1, cls.maxLevel ?? 1)) * 100),
    text: `${cls.name} ${cls.level ?? 0}/${cls.maxLevel ?? 1}`
  }));
}

function abilityChainProgress(state, chain) {
  const known = new Set(state.player?.skills ?? []);
  const missingInputs = (chain.inputs ?? []).filter(id => !known.has(id));
  const req = chain.requirements ?? {};
  const missingReqs = [];
  if (req.gold && (state.player?.gold ?? 0) < req.gold) missingReqs.push(`${req.gold} gold`);
  if (req.bossKills && (state.meta?.bossKills ?? 0) < req.bossKills) missingReqs.push(`${req.bossKills} boss kill(s)`);
  if (req.relicDust && (state.meta?.relicDust ?? 0) < req.relicDust) missingReqs.push(`${req.relicDust} Relic Dust`);
  const total = (chain.inputs?.length ?? 0) + Object.keys(req).length;
  const complete = total - missingInputs.length - missingReqs.length;
  return {
    id: chain.id,
    name: chain.name,
    description: chain.description,
    output: byId(SKILLS, chain.output)?.name ?? titleCase(chain.output),
    current: complete,
    required: Math.max(1, total),
    pct: Math.floor((complete / Math.max(1, total)) * 100),
    missing: [
      ...missingInputs.map(id => `Learn ${byId(SKILLS, id)?.name ?? titleCase(id)}`),
      ...missingReqs
    ]
  };
}

export function getUnlockTracker(state) {
  const raceStages = classProgress(state.player?.raceLevels).filter(item => item.pct < 100).slice(0, 3);
  const jobStages = classProgress(state.player?.jobLevels).filter(item => item.pct < 100).slice(0, 3);
  const validRaceUpgrades = getAvailableAdvancements(state, "race").slice(0, 5).map(path => ({
    id: path.id,
    name: path.name,
    description: path.description,
    current: 1,
    required: 1,
    pct: 100,
    missing: []
  }));
  const validJobUpgrades = getAvailableAdvancements(state, "job").slice(0, 5).map(path => ({
    id: path.id,
    name: path.name,
    description: path.description,
    current: 1,
    required: 1,
    pct: 100,
    missing: []
  }));
  const abilityChains = ABILITY_EVOLUTION_CHAINS
    .map(chain => abilityChainProgress(state, chain))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 8);

  const specialExamples = [
    {
      id: "world_flame_sigil",
      name: "World Flame Sigil",
      description: "Example tracker for a fire build: requires Firebolt/Fireball-style fire magic and repeated Burn applications.",
      current: Math.min(25, (state.meta?.burnApplications ?? 0) + ((state.player?.skills ?? []).some(id => /fire|flame|burn/i.test(id)) ? 5 : 0)),
      required: 25,
      pct: Math.floor((Math.min(25, (state.meta?.burnApplications ?? 0) + ((state.player?.skills ?? []).some(id => /fire|flame|burn/i.test(id)) ? 5 : 0)) / 25) * 100),
      missing: ["Learn a fire spell", "Apply Burn 25 times"]
    },
    {
      id: "phantom_step_art",
      name: "Phantom Step Art",
      description: "Example tracker for speed builds: requires step/evasion skill use and high Agility.",
      current: Math.min(20, (state.meta?.stepUses ?? 0) + ((state.player?.skills ?? []).some(id => /step|shadow|dash/i.test(id)) ? 5 : 0)),
      required: 20,
      pct: Math.floor((Math.min(20, (state.meta?.stepUses ?? 0) + ((state.player?.skills ?? []).some(id => /step|shadow|dash/i.test(id)) ? 5 : 0)) / 20) * 100),
      missing: ["Use step/evasion skills", "Raise Agility through job/race growth"]
    }
  ];

  return { raceStages, jobStages, validRaceUpgrades, validJobUpgrades, abilityChains, specialExamples };
}
