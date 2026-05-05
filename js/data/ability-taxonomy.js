// v0.8.0 Ability Taxonomy
// Inspired by high-rank skill/class systems, but written as original Build Your Legend data.

export const ABILITY_RANKS = [
  { id: "Intrinsic", order: 0, shopTier: "bloodline", description: "Race-born or evolution-born abilities that express a species, bloodline, body, soul, or monster trait." },
  { id: "Common", order: 1, shopTier: "basic", description: "Reliable starter techniques and spells that any compatible build can learn." },
  { id: "Extra", order: 2, shopTier: "advanced", description: "Refined abilities obtained through training, advanced classes, special shops, or ability fusion." },
  { id: "Unique", order: 3, shopTier: "rare", description: "Personalized powers that reflect a build identity, rare condition, or major progression choice." },
  { id: "Ultimate", order: 4, shopTier: "ultimate", description: "Authority-class abilities with legendary names, large cooldowns, and build-defining effects." },
  { id: "Resist", order: 5, shopTier: "defense", description: "Passive tolerance, resistance, nullification, or immunity-style abilities." }
];

export const ABILITY_KINDS = ["skill", "spell", "passive", "intrinsic", "resist"];
export const ABILITY_ORIGINS = ["race", "job", "shop", "evolution", "fusion", "boss", "secret"];
export const ABILITY_ACQUISITION_TYPES = ["Starting", "Shop", "Class Learn", "Evolution", "Fusion", "Boss Reward", "Secret Unlock"];

export function rankOrder(rank = "Common") {
  return ABILITY_RANKS.find(item => item.id === rank)?.order ?? 1;
}
