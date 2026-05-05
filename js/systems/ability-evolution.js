import { ABILITY_EVOLUTION_CHAINS } from "../data/ability-evolution-chains.js";
import { SKILLS } from "../data/skills.js";
import { byId, addLog } from "../core/utils.js";
import { gainXp } from "./leveling.js";

function hasSkill(player, id) {
  return (player?.skills ?? []).includes(id);
}

function requirementStatus(state, req = {}) {
  const rows = [];
  const player = state.player;
  if (req.gold) rows.push({ key: "gold", label: `${req.gold} gold`, current: player?.gold ?? 0, required: req.gold, met: (player?.gold ?? 0) >= req.gold });
  if (req.relicDust) rows.push({ key: "relicDust", label: `${req.relicDust} Relic Dust`, current: state.meta?.relicDust ?? 0, required: req.relicDust, met: (state.meta?.relicDust ?? 0) >= req.relicDust });
  if (req.bossKills) rows.push({ key: "bossKills", label: `${req.bossKills} boss kills`, current: state.meta?.bossKills ?? 0, required: req.bossKills, met: (state.meta?.bossKills ?? 0) >= req.bossKills });
  if (req.highestFloor) rows.push({ key: "highestFloor", label: `Reach floor ${req.highestFloor}`, current: state.meta?.highestFloor ?? 0, required: req.highestFloor, met: (state.meta?.highestFloor ?? 0) >= req.highestFloor });
  return { rows, met: rows.every(row => row.met) };
}

export function getAbilityEvolutionOptions(state) {
  const player = state.player;
  if (!player) return [];
  return ABILITY_EVOLUTION_CHAINS.map(chain => {
    const outputSkill = byId(SKILLS, chain.output);
    const inputSkills = (chain.inputs ?? []).map(id => byId(SKILLS, id) ?? { id, name: id });
    const missingInputs = (chain.inputs ?? []).filter(id => !hasSkill(player, id));
    const req = requirementStatus(state, chain.requirements ?? {});
    const alreadyKnown = hasSkill(player, chain.output);
    return {
      ...chain,
      outputSkill,
      inputSkills,
      missingInputs,
      requirementRows: req.rows,
      requirementsMet: req.met,
      alreadyKnown,
      canEvolve: !alreadyKnown && missingInputs.length === 0 && req.met
    };
  });
}

export function evolveAbility(state, chainId) {
  const chain = getAbilityEvolutionOptions(state).find(item => item.id === chainId);
  if (!chain) return addLog(state, "Ability evolution chain not found.");
  if (chain.alreadyKnown) return addLog(state, `${chain.outputSkill?.name ?? chain.output} is already known.`);
  if (chain.missingInputs.length) return addLog(state, `Missing input abilities: ${chain.missingInputs.join(", ")}.`);
  if (!chain.requirementsMet) return addLog(state, "Ability evolution requirements are not met yet.");
  const req = chain.requirements ?? {};
  if (req.gold) state.player.gold -= req.gold;
  if (req.relicDust) state.meta.relicDust -= req.relicDust;
  state.player.skills.push(chain.output);
  gainXp(state, chain.outputSkill?.rank === "Ultimate" ? 260 : 120);
  addLog(state, `<strong>Ability evolved:</strong> ${chain.outputSkill?.name ?? chain.output}.`);
}
