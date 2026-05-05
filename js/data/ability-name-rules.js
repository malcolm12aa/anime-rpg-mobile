// v0.8.0 Ability Name Rules
// Higher ranks use more identity-heavy naming.

export const ABILITY_NAME_RULES = {
  Common: {
    pattern: "Direct + readable",
    examples: ["Power Slash", "Minor Heal", "Fire Bolt", "Quick Shot"],
    guidance: "Common abilities should tell the player exactly what they do."
  },
  Extra: {
    pattern: "Technique + style descriptor",
    examples: ["Iron Fang Counter", "Crimson Spiral Flare", "Moonlit Recovery"],
    guidance: "Extra abilities should sound trained, specialized, and class-flavored."
  },
  Unique: {
    pattern: "Personal authority or rare build concept",
    examples: ["King's Gamble", "Soul Ledger", "Zero-Point Instinct"],
    guidance: "Unique abilities should feel like they belong to a specific build identity."
  },
  Ultimate: {
    pattern: "Ultimate Skill/Spell/Art/Authority + legendary title",
    examples: ["Ultimate Art: Heaven-Severing Worldline", "Ultimate Authority: Divine Arsenal Mandate"],
    guidance: "Ultimate abilities should be rare, expensive, and memorable."
  },
  Intrinsic: {
    pattern: "Lineage Art / Bloodline Spell / Species Trait",
    examples: ["Lineage Art: Dragonheart Furnace", "Species Trait: Threaded Body"],
    guidance: "Intrinsic abilities should clearly connect to race choice or race evolution."
  },
  Resist: {
    pattern: "Tolerance / Resistance / Null Guard / Immunity wording",
    examples: ["Flame Tolerance", "Dark Null Guard", "Poison Resistance"],
    guidance: "Resist abilities should be passive and clear about what they protect against."
  }
};

export function abilityNamingGuidance(rank) {
  return ABILITY_NAME_RULES[rank]?.guidance ?? ABILITY_NAME_RULES.Common.guidance;
}
