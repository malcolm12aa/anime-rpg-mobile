import { ABILITY_NAME_RULES, abilityNamingGuidance } from "../data/ability-name-rules.js";
import { rankOrder } from "../data/ability-taxonomy.js";

export function getAbilityNamingProfile(skill) {
  const rank = skill?.rank ?? "Common";
  return {
    rank,
    order: rankOrder(rank),
    rule: ABILITY_NAME_RULES[rank] ?? ABILITY_NAME_RULES.Common,
    guidance: abilityNamingGuidance(rank)
  };
}

export function abilityNameScore(skill) {
  const profile = getAbilityNamingProfile(skill);
  const words = String(skill?.name ?? "").split(/\s+/).filter(Boolean).length;
  return profile.order * 10 + words;
}
