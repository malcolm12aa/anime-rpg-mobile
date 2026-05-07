// v0.9.8 — Simplified ability text, Basic Ability scaling, weapon requirements, and Element Mastery gates.
export const ABILITY_FILTER_OPTIONS = {
  "libraries": [
    "all",
    "advanced_skill_library",
    "advanced_spell_library",
    "dragonkin_dragon_evolution",
    "dragonkin_dragon_race",
    "skill_library",
    "starter_skill_skill_library",
    "starter_spell_skill_library",
    "v26_ability_shop",
    "v50_magic_shop",
    "v50_physical_shop"
  ],
  "kinds": [
    "all",
    "hybrid",
    "intrinsic",
    "passive",
    "skill",
    "spell",
    "support"
  ],
  "ranks": [
    "all",
    "Common",
    "Extra",
    "Hidden",
    "Intrinsic",
    "Rare",
    "Ultimate",
    "Unique"
  ]
};

export const SKILLS = [
  {
    "id": "human_resolve",
    "name": "Lineage Art: Iron Human Resolve",
    "kind": "intrinsic",
    "rank": "Intrinsic",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Iron Human Resolve restores HP. Scales with Endurance × 0.026 + Magic × 0.019.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Human Resolve",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "elf_spark",
    "name": "Aether Elf Spark",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 11,
    "description": "Aether Elf Spark deals Arcane damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "previousName": "Elf Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "dwarf_guard",
    "name": "Fang Dwarf Guard",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Fang Dwarf Guard grants Guard. Scales with Endurance × 0.022 + Magic × 0.016.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Dwarf Guard",
    "scaling": {
      "endurance": 0.022,
      "magic": 0.016
    },
    "statusScaling": {
      "endurance": 0.022,
      "magic": 0.016
    }
  },
  {
    "id": "beast_claw",
    "name": "Valor Beast Claw",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Valor Beast Claw deals Physical damage and may inflict Bleed. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 35
      }
    ],
    "previousName": "Beast Claw",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "ember_breath",
    "name": "Lineage Art: Solar Ember Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Lineage Art: Solar Ember Breath deals Fire damage and may inflict Burn. Scales with Magic × 0.038 + Agility × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 35
      }
    ],
    "previousName": "Ember Breath",
    "scaling": {
      "magic": 0.0384,
      "agility": 0.012
    },
    "statusScaling": {
      "magic": 0.0384,
      "agility": 0.012
    }
  },
  {
    "id": "gale_cut",
    "name": "Skyrend Gale Cut",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 10,
    "description": "Skyrend Gale Cut deals Wind damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "previousName": "Gale Cut",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "grave_drain",
    "name": "Lineage Art: Umbral Grave Drain",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Lineage Art: Umbral Grave Drain deals Dark damage and drains HP. Scales with Magic × 0.038 + Agility × 0.012.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.45
      }
    ],
    "previousName": "Grave Drain",
    "scaling": {
      "magic": 0.0384,
      "agility": 0.012
    },
    "statusScaling": {
      "magic": 0.0384,
      "agility": 0.012
    }
  },
  {
    "id": "impish_hex",
    "name": "Grave Impish Hex",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 8,
    "description": "Grave Impish Hex deals Dark damage and may inflict Weakened. Scales with Magic × 0.032 + Agility × 0.010.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ],
    "previousName": "Impish Hex",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "stone_slam",
    "name": "Granite Stone Slam",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 13,
    "description": "Granite Stone Slam deals Earth damage and may inflict Stunned. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ],
    "previousName": "Stone Slam",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "star_mend",
    "name": "Lineage Art: Seraphic Star Mend",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 11,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Seraphic Star Mend restores HP. Scales with Magic × 0.038 + Agility × 0.012.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.7
      }
    ],
    "previousName": "Star Mend",
    "scaling": {
      "magic": 0.0384,
      "agility": 0.012
    },
    "statusScaling": {
      "magic": 0.0384,
      "agility": 0.012
    }
  },
  {
    "id": "power_strike",
    "name": "Rift Power Strike",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 13,
    "description": "Rift Power Strike deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "previousName": "Power Strike",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "firebolt",
    "name": "Ember Firebolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 13,
    "description": "Ember Firebolt deals Fire damage and may inflict Burn. Scales with Magic × 0.032 + Agility × 0.010.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "previousName": "Firebolt",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "quick_stab",
    "name": "Iron Quick Stab",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Iron Quick Stab deals Physical damage. Scales with Dexterity × 0.032 + Agility × 0.014.",
    "previousName": "Quick Stab",
    "scaling": {
      "dexterity": 0.032,
      "agility": 0.014
    },
    "statusScaling": {
      "dexterity": 0.032,
      "agility": 0.014
    }
  },
  {
    "id": "mend",
    "name": "Halo Mend",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Halo Mend restores HP. Scales with Magic × 0.032 + Agility × 0.010.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.65
      }
    ],
    "previousName": "Mend",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "aimed_shot",
    "name": "Fang Aimed Shot",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Fang Aimed Shot deals Physical damage. Scales with Dexterity × 0.032 + Agility × 0.014.",
    "previousName": "Aimed Shot",
    "scaling": {
      "dexterity": 0.032,
      "agility": 0.014
    },
    "statusScaling": {
      "dexterity": 0.032,
      "agility": 0.014
    }
  },
  {
    "id": "shield_bash",
    "name": "Valor Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Valor Shield Bash deals Physical damage and may inflict Stunned. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 30
      }
    ],
    "previousName": "Shield Bash",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "mana_edge",
    "name": "Glyph Mana Edge",
    "kind": "hybrid",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 12,
    "description": "Glyph Mana Edge deals Arcane damage. Scales with Strength × 0.022 + Magic × 0.022.",
    "previousName": "Mana Edge",
    "scaling": {
      "strength": 0.022,
      "magic": 0.022
    },
    "statusScaling": {
      "strength": 0.022,
      "magic": 0.022
    }
  },
  {
    "id": "brew_tonic",
    "name": "Steel Brew Tonic",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Steel Brew Tonic restores HP. Scales with Endurance × 0.022 + Magic × 0.016.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.5
      },
      {
        "type": "restore",
        "resource": "mana",
        "amount": 8
      }
    ],
    "previousName": "Brew Tonic",
    "scaling": {
      "endurance": 0.022,
      "magic": 0.016
    },
    "statusScaling": {
      "endurance": 0.022,
      "magic": 0.016
    }
  },
  {
    "id": "iron_palm",
    "name": "Blade Iron Palm",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 11,
    "description": "Blade Iron Palm deals Physical damage and may inflict Stunned. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ],
    "previousName": "Iron Palm",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "inspire",
    "name": "Halo Inspire",
    "kind": "support",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Halo Inspire grants Focus. Scales with Endurance × 0.022 + Magic × 0.016.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ],
    "previousName": "Inspire",
    "scaling": {
      "endurance": 0.022,
      "magic": 0.016
    },
    "statusScaling": {
      "endurance": 0.022,
      "magic": 0.016
    }
  },
  {
    "id": "heroic_surge",
    "name": "Heroic Surge — Fang Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "Heroic Surge — Fang Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Heroic Surge",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "rune_bolt",
    "name": "Rune Bolt — Mana Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 17,
    "description": "Rune Bolt — Mana Form deals Arcane damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "previousName": "Rune Bolt",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "moon_lance",
    "name": "Moon Lance — Sun Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Moon Lance — Sun Form deals Light damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "previousName": "Moon Lance",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "verdant_barrier",
    "name": "Verdant Barrier — Obsidian Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Verdant Barrier — Obsidian Form restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 0.35
      }
    ],
    "previousName": "Verdant Barrier",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required",
    "tags": [
      "requires-earth-mastery"
    ]
  },
  {
    "id": "rune_guard",
    "name": "Rune Guard — Stone Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Rune Guard — Stone Form grants Guard. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Rune Guard",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required",
    "tags": [
      "requires-earth-mastery"
    ]
  },
  {
    "id": "forge_roar",
    "name": "Forge Roar — Inferno Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Forge Roar — Inferno Form deals Fire damage and may inflict Weakened. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 55
      }
    ],
    "previousName": "Forge Roar",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required",
    "tags": [
      "requires-fire-mastery"
    ]
  },
  {
    "id": "dire_pounce",
    "name": "Dire Pounce — Fang Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "Dire Pounce — Fang Form deals Physical damage and may inflict Bleed. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 55
      }
    ],
    "previousName": "Dire Pounce",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "lunar_rend",
    "name": "Lunar Rend — Seraphic Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 16,
    "description": "Lunar Rend — Seraphic Form deals Light damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "previousName": "Lunar Rend",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery",
      "weapon-required"
    ],
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "wyvern_flame",
    "name": "Wyvern Flame — Solar Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 20,
    "description": "Wyvern Flame — Solar Form deals Fire damage and may inflict Burn. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Wyvern Flame",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required",
    "tags": [
      "requires-fire-mastery"
    ]
  },
  {
    "id": "scale_aegis",
    "name": "Scale Aegis — Steel Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Scale Aegis — Steel Form grants Guard. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Scale Aegis",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "storm_jolt",
    "name": "Storm Jolt — Thunder Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 17,
    "description": "Storm Jolt — Thunder Form deals Lightning damage and may inflict Stunned. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ],
    "previousName": "Storm Jolt",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery required",
    "tags": [
      "requires-lightning-mastery"
    ]
  },
  {
    "id": "mist_step",
    "name": "Mist Step — Zephyr Form",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "wind",
    "target": "self",
    "power": 0,
    "description": "Mist Step — Zephyr Form grants Haste. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Mist Step",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required",
    "tags": [
      "requires-wind-mastery"
    ]
  },
  {
    "id": "soul_leech",
    "name": "Soul Leech — Eclipse Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 16,
    "description": "Soul Leech — Eclipse Form deals Dark damage and drains HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.65
      }
    ],
    "previousName": "Soul Leech",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "tags": [
      "requires-dark-mastery"
    ]
  },
  {
    "id": "grave_charge",
    "name": "Grave Charge — Night Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 17,
    "description": "Grave Charge — Night Form deals Dark damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "previousName": "Grave Charge",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "tags": [
      "requires-dark-mastery"
    ]
  },
  {
    "id": "hellbrand_mark",
    "name": "Hellbrand Mark — Solar Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Hellbrand Mark — Solar Form deals Fire damage and may inflict Burn. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 50
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "previousName": "Hellbrand Mark",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required",
    "tags": [
      "requires-fire-mastery"
    ]
  },
  {
    "id": "binding_clause",
    "name": "Binding Clause — Nocturne Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Binding Clause — Nocturne Form deals Dark damage and may inflict Weakened. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Binding Clause",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "tags": [
      "requires-dark-mastery"
    ]
  },
  {
    "id": "mithril_pulse",
    "name": "Mithril Pulse — Runic Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "Mithril Pulse — Runic Form deals Arcane damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "previousName": "Mithril Pulse",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "colossus_stomp",
    "name": "Colossus Stomp — Root Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 19,
    "description": "Colossus Stomp — Root Form deals Earth damage and may inflict Stunned. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ],
    "previousName": "Colossus Stomp",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required",
    "tags": [
      "requires-earth-mastery"
    ]
  },
  {
    "id": "seraphic_ray",
    "name": "Seraphic Ray — Dawn Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Seraphic Ray — Dawn Form deals Light damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "previousName": "Seraphic Ray",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "omen_mend",
    "name": "Omen Mend — Seraphic Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Omen Mend — Seraphic Form restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Omen Mend",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "ice_lance",
    "name": "Ice Lance — Crystal Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "description": "Ice Lance — Crystal Form deals Ice damage and may inflict Frozen. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "previousName": "Ice Lance",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required",
    "tags": [
      "requires-ice-mastery"
    ]
  },
  {
    "id": "arcane_missile",
    "name": "Arcane Missile — Starseal Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 15,
    "description": "Arcane Missile — Starseal Form deals Arcane damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "previousName": "Arcane Missile",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "mana_shield",
    "name": "Mana Shield — Runic Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Mana Shield — Runic Form grants Guard. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 8
      }
    ],
    "previousName": "Mana Shield",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "venom_stab",
    "name": "Venom Stab — Viper Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "poison",
    "target": "enemy",
    "power": 12,
    "description": "Venom Stab — Viper Form deals Poison damage and may inflict Poison. Scales with Dexterity × 0.046 + Agility × 0.020.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 65
      }
    ],
    "previousName": "Venom Stab",
    "scaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "statusScaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "requiredMastery": "poison",
    "masterySkillId": "mastery_poison",
    "masteryRequirementText": "Poison Element Mastery required",
    "tags": [
      "requires-poison-mastery",
      "weapon-required"
    ],
    "requiresWeaponType": [
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "shadowstep",
    "name": "Shadowstep — Eclipse Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 15,
    "description": "Shadowstep — Eclipse Form deals Dark damage. Scales with Dexterity × 0.046 + Agility × 0.020.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Shadowstep",
    "scaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "statusScaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "tags": [
      "requires-dark-mastery"
    ]
  },
  {
    "id": "lucky_find",
    "name": "Oath of the Valor Lucky Find: Support Vow",
    "kind": "support",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Oath of the Valor Lucky Find: Support Vow grants Lucky. Scales with Endurance × 0.041 + Magic × 0.030.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "lucky",
        "duration": 5,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 10
      }
    ],
    "previousName": "Lucky Find",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    }
  },
  {
    "id": "greater_mend",
    "name": "Greater Mend — Sun Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Greater Mend — Sun Form restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "heal",
        "scale": 1.05
      }
    ],
    "previousName": "Greater Mend",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "banish",
    "name": "Banish — Aureate Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 18,
    "description": "Banish — Aureate Form deals Light damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "previousName": "Banish",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "radiant_smite",
    "name": "Radiant Smite — Halo Form",
    "kind": "hybrid",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Radiant Smite — Halo Form deals Light damage. Scales with Strength × 0.032 + Magic × 0.032.",
    "previousName": "Radiant Smite",
    "scaling": {
      "strength": 0.0319,
      "magic": 0.0319
    },
    "statusScaling": {
      "strength": 0.0319,
      "magic": 0.0319
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "piercing_shot",
    "name": "Piercing Shot — Blade Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 17,
    "description": "Piercing Shot — Blade Form deals Physical damage. Scales with Dexterity × 0.046 + Agility × 0.020.",
    "previousName": "Piercing Shot",
    "scaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "statusScaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "requiresWeaponType": [
      "Bow",
      "Crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "tags": [
      "weapon-required"
    ]
  },
  {
    "id": "pack_call",
    "name": "Pack Call — Fang Form",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Pack Call — Fang Form grants Focus. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Pack Call",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "thorn_field",
    "name": "Thorn Field — Mountain Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "Thorn Field — Mountain Form deals Earth damage and may inflict Bleed. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Thorn Field",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required",
    "tags": [
      "requires-earth-mastery"
    ]
  },
  {
    "id": "iron_wall",
    "name": "Iron Wall — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Iron Wall — Rift Form grants Guard. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Iron Wall",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "protective_oath",
    "name": "Oath of the Aureate Protective Oath: Support Vow",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 14,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Oath of the Aureate Protective Oath: Support Vow grants Guard. Scales with Endurance × 0.041 + Magic × 0.030.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Protective Oath",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "fire_bomb",
    "name": "Fire Bomb — Cinder Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "description": "Fire Bomb — Cinder Form deals Fire damage and may inflict Burn. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Fire Bomb",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required",
    "tags": [
      "requires-fire-mastery"
    ]
  },
  {
    "id": "patchwork_aid",
    "name": "Patchwork Aid — Aether Form",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Patchwork Aid — Aether Form restores HP. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ],
    "previousName": "Patchwork Aid",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "toxic_cloud",
    "name": "Toxic Cloud — Plague Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "poison",
    "target": "enemy",
    "power": 13,
    "description": "Toxic Cloud — Plague Form deals Poison damage and may inflict Poison. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Toxic Cloud",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "poison",
    "masterySkillId": "mastery_poison",
    "masteryRequirementText": "Poison Element Mastery required",
    "tags": [
      "requires-poison-mastery"
    ]
  },
  {
    "id": "ki_burst",
    "name": "Ki Burst — Mana Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "Ki Burst — Mana Form deals Arcane damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "previousName": "Ki Burst",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "stunning_palm",
    "name": "Stunning Palm — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Stunning Palm — Rift Form deals Physical damage and may inflict Stunned. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ],
    "previousName": "Stunning Palm",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "war_chant",
    "name": "War Chant — Aureate Form",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "War Chant — Aureate Form grants Focus. Scales with Endurance × 0.032 + Magic × 0.023.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 10
      }
    ],
    "previousName": "War Chant",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required",
    "tags": [
      "requires-light-mastery"
    ]
  },
  {
    "id": "dirge_of_dread",
    "name": "Dirge Of Dread — Umbral Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 12,
    "description": "Dirge Of Dread — Umbral Form deals Dark damage and may inflict Weakened. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 70
      }
    ],
    "previousName": "Dirge of Dread",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "tags": [
      "requires-dark-mastery"
    ]
  },
  {
    "id": "exploit_lore",
    "name": "Oath of the Aether Exploit Lore: Support Vow",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 10,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 10,
    "description": "Oath of the Aether Exploit Lore: Support Vow deals Arcane damage and may inflict Weakened. Scales with Endurance × 0.041 + Magic × 0.030.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ],
    "previousName": "Exploit Lore",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "tags": [
      "requires-arcane-mastery"
    ]
  },
  {
    "id": "perfect_form",
    "name": "Oath of the Fang Perfect Form: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "Oath of the Fang Perfect Form: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "previousName": "Perfect Form",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "rage_cleave",
    "name": "Rage Cleave — Valor Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 20,
    "description": "Rage Cleave — Valor Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "previousName": "Rage Cleave",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "guarding_cut",
    "name": "Guarding Cut — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 15,
    "description": "Guarding Cut — Rift Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Guarding Cut",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "tags": [
      "weapon-required"
    ]
  },
  {
    "id": "iaido_starfall",
    "name": "Iaido: Starfall of the Starseal Crown",
    "kind": "hybrid",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 32,
    "description": "Iaido: Starfall of the Starseal Crown deals Arcane damage. Scales with Strength × 0.024 + Magic × 0.024.",
    "previousName": "Iaido: Starfall",
    "scaling": {
      "strength": 0.0242,
      "magic": 0.0242
    },
    "statusScaling": {
      "strength": 0.0242,
      "magic": 0.0242
    }
  },
  {
    "id": "void_fist",
    "name": "Secret Art: Runic Void Fist",
    "kind": "skill",
    "rank": "Hidden",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Secret Art: Runic Void Fist deals Arcane damage and may inflict Weakened. Scales with Strength × 0.035 + Dexterity × 0.013.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 80
      }
    ],
    "previousName": "Void Fist",
    "scaling": {
      "strength": 0.0352,
      "dexterity": 0.0132
    },
    "statusScaling": {
      "strength": 0.0352,
      "dexterity": 0.0132
    }
  },
  {
    "id": "eclipse_edict",
    "name": "Secret Art: Aether Eclipse Edict",
    "kind": "spell",
    "rank": "Hidden",
    "resource": "mana",
    "cost": 25,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Secret Art: Aether Eclipse Edict deals Arcane damage and may inflict Weakened. Scales with Magic × 0.035 + Agility × 0.011.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.5
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ],
    "previousName": "Eclipse Edict",
    "scaling": {
      "magic": 0.0352,
      "agility": 0.011
    },
    "statusScaling": {
      "magic": 0.0352,
      "agility": 0.011
    }
  },
  {
    "id": "basic_focus",
    "name": "Fang Basic Focus",
    "kind": "support",
    "rank": "Common",
    "resource": "stamina",
    "cost": 0,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Fang Basic Focus grants Focus. Scales with Endurance × 0.022 + Magic × 0.016.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 18
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Basic Focus",
    "scaling": {
      "endurance": 0.022,
      "magic": 0.016
    },
    "statusScaling": {
      "endurance": 0.022,
      "magic": 0.016
    }
  },
  {
    "id": "sk_armor_breaker",
    "name": "Armor Breaker — Valor Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Armor Breaker — Valor Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Break",
      "Melee",
      "Damage",
      "Vulnerable",
      "Debuff",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 219,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Armor Breaker",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "sk_bleeding_crescent",
    "name": "Bleeding Crescent — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Bleeding Crescent — Rift Form deals Physical damage and may inflict Bleed. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Melee",
      "Damage",
      "Bleed",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 219,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Bleeding Crescent",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "sk_war_cry",
    "name": "War Cry — Steel Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "War Cry — Steel Form supports your build. Scales with Endurance × 0.032 + Magic × 0.023.",
    "tags": [
      "Physical",
      "Taunt",
      "Bravery",
      "Buff",
      "Support",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 207,
    "starting": false,
    "previousName": "War Cry",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "sk_iron_counter",
    "name": "Iron Counter — Blade Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Iron Counter — Blade Form grants Guard. Scales with Endurance × 0.032 + Magic × 0.023.",
    "tags": [
      "Physical",
      "Counter",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 194,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Iron Counter",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "sk_twin_fang_rush",
    "name": "Twin Fang Rush — Blade Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "Twin Fang Rush — Blade Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Multi-Hit",
      "Combo",
      "Active",
      "weapon-required"
    ],
    "source": "Advanced Skill Library",
    "price": 197,
    "starting": false,
    "previousName": "Twin Fang Rush",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "sp_shadow_mark",
    "name": "Shadow Mark — Eclipse Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 5,
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 26,
    "description": "Shadow Mark — Eclipse Form deals Dark damage and may inflict Weakened. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Marked",
      "Vulnerable",
      "Debuff",
      "Active",
      "requires-dark-mastery"
    ],
    "source": "Advanced Spell Library",
    "price": 250,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Shadow Mark",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "sp_chain_lightning",
    "name": "Chain Lightning — Seraphic Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 24,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Chain Lightning — Seraphic Form deals Light damage and may inflict Stunned. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Damage",
      "Paralysis",
      "Multi-Hit",
      "Active",
      "requires-light-mastery"
    ],
    "source": "Advanced Spell Library",
    "price": 237,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ],
    "previousName": "Chain Lightning",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "sp_frost_prison",
    "name": "Frost Prison — Crystal Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 22,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "Frost Prison — Crystal Form deals Ice damage and may inflict Frozen. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Ice",
      "Control",
      "Freeze",
      "Debuff",
      "Active",
      "requires-ice-mastery"
    ],
    "source": "Advanced Spell Library",
    "price": 231,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 45
      }
    ],
    "previousName": "Frost Prison",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required"
  },
  {
    "id": "sp_regeneration",
    "name": "Regeneration — Steel Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Regeneration — Steel Form restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Healing",
      "Regeneration",
      "Support",
      "Buff",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 225,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ],
    "previousName": "Regeneration",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    }
  },
  {
    "id": "sp_fireball",
    "name": "Fireball — Cinder Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 7,
    "resource": "mana",
    "cost": 20,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 22,
    "description": "Fireball — Cinder Form deals Fire damage and may inflict Burn. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Fire",
      "AoE",
      "Damage",
      "Burn",
      "Burst",
      "Active",
      "requires-fire-mastery"
    ],
    "source": "Advanced Spell Library",
    "price": 209,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Fireball",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "in_predator_instinct",
    "name": "Lineage Art: Blade Predator Instinct",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Blade Predator Instinct grants Focus. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Physical",
      "Critical",
      "Focus"
    ],
    "source": "Beastkin Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Predator Instinct",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "sp_abyssal_chain",
    "name": "Oath of the Eclipse Abyssal Chain: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 34,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 36,
    "description": "Oath of the Eclipse Abyssal Chain: Spell Vow deals Dark damage and may inflict Weakened. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Control",
      "Fear",
      "Unique",
      "Active",
      "requires-dark-mastery"
    ],
    "source": "Dark Magic Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Abyssal Chain",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "in_hellfire_affinity",
    "name": "Lineage Art: Night Hellfire Affinity",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Night Hellfire Affinity supports your build. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Fire",
      "Dark",
      "Magic"
    ],
    "source": "Demon Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Hellfire Affinity",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "in_dragon_breath",
    "name": "Lineage Art: Solar Dragon Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "tier": 5,
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "Lineage Art: Solar Dragon Breath deals Fire damage and may inflict Burn. Scales with Magic × 0.038 + Agility × 0.012.",
    "tags": [
      "Intrinsic",
      "Magic",
      "Fire",
      "AoE",
      "Damage",
      "Burn"
    ],
    "source": "Dragonkin / Dragon Evolution",
    "price": 300,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Dragon Breath",
    "scaling": {
      "magic": 0.0384,
      "agility": 0.012
    },
    "statusScaling": {
      "magic": 0.0384,
      "agility": 0.012
    }
  },
  {
    "id": "in_dragon_scales",
    "name": "Lineage Art: Steel Dragon Scales",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Steel Dragon Scales grants Guard. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Dragon",
      "Guard",
      "Defensive"
    ],
    "source": "Dragonkin / Dragon Race",
    "price": 200,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Dragon Scales",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "in_stoneblood",
    "name": "Lineage Art: Stone Stoneblood",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Stone Stoneblood grants Guard. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Guard",
      "Defensive"
    ],
    "source": "Dwarf Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Stoneblood",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "in_arcane_sight",
    "name": "Lineage Art: Aether Arcane Sight",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Aether Arcane Sight supports your build. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Arcane",
      "Utility"
    ],
    "source": "Elf Lineage",
    "price": 0,
    "starting": false,
    "previousName": "Arcane Sight",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "sp_world_flame_sigil",
    "name": "Oath of the Phoenix World Flame Sigil: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 36,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 36,
    "description": "Oath of the Phoenix World Flame Sigil: Spell Vow deals Fire damage and may inflict Burn. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Fire",
      "Burn",
      "AoE",
      "Curse",
      "Unique",
      "Active",
      "requires-fire-mastery"
    ],
    "source": "Fireball Mastery Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 75
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "World Flame Sigil",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "sk_kings_guard",
    "name": "Oath of the Valor King’s Guard: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Oath of the Valor King’s Guard: Skill Vow grants Guard. Scales with Endurance × 0.041 + Magic × 0.030.",
    "tags": [
      "Physical",
      "Guard",
      "Counter",
      "Defensive",
      "Unique",
      "Active"
    ],
    "source": "Guardian Path Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "King’s Guard",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    }
  },
  {
    "id": "sk_blood_moon_reaver",
    "name": "Oath of the Rift Blood Moon Reaver: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 35,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Rift Blood Moon Reaver: Skill Vow deals Physical damage and may inflict Bleed. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Bleed",
      "Burst",
      "Unique",
      "Active"
    ],
    "source": "Hidden Achievement Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Blood Moon Reaver",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "sp_saints_restoration",
    "name": "Oath of the Aureate Saint’s Restoration: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 40,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Oath of the Aureate Saint’s Restoration: Spell Vow restores HP. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Unique",
      "Active",
      "requires-light-mastery"
    ],
    "source": "Holy Path Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "previousName": "Saint’s Restoration",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "sk_soul_bound_blade_art",
    "name": "Oath of the Iron Bound Blade Art: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 2,
    "resource": "stamina",
    "cost": 42,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 40,
    "description": "Oath of the Iron Bound Blade Art: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Weapon Art",
      "True Damage",
      "Burst",
      "Unique",
      "Active",
      "weapon-required"
    ],
    "source": "Rare Class / Special Weapon Requirement",
    "price": 0,
    "starting": false,
    "previousName": "Soul-Bound Blade Art",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "sk_dragon_rend",
    "name": "Oath of the Blade Dragon Rend: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 32,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "Oath of the Blade Dragon Rend: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Burst",
      "Damage",
      "Piercing",
      "Unique",
      "Active",
      "weapon-required"
    ],
    "source": "Requirement Unlock",
    "price": 0,
    "starting": false,
    "previousName": "Dragon Rend",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "sk_phantom_step_art",
    "name": "Oath of the Fang Phantom Step Art: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "Oath of the Fang Phantom Step Art: Skill Vow deals Physical damage. Scales with Dexterity × 0.059 + Agility × 0.026.",
    "tags": [
      "Physical",
      "Mobility",
      "Haste",
      "Counter",
      "Unique",
      "Active"
    ],
    "source": "Requirement Unlock",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Phantom Step Art",
    "scaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    },
    "statusScaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    }
  },
  {
    "id": "sp_void_gate",
    "name": "Oath of the Night Void Gate: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 2,
    "resource": "mana",
    "cost": 48,
    "cooldown": 6,
    "element": "dark",
    "target": "enemy",
    "power": 40,
    "description": "Oath of the Night Void Gate: Spell Vow deals Dark damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Arcane",
      "Dark",
      "Control",
      "Banish",
      "Unique",
      "Active",
      "requires-dark-mastery"
    ],
    "source": "Secret Research Requirement",
    "price": 0,
    "starting": false,
    "previousName": "Void Gate",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "sk_hunter_step",
    "name": "Rift Hunter Step",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Rift Hunter Step grants Focus. Scales with Endurance × 0.022 + Magic × 0.016.",
    "tags": [
      "Physical",
      "Mobility",
      "Haste",
      "Focus",
      "Buff",
      "Active"
    ],
    "source": "Skill Library",
    "price": 121,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ],
    "previousName": "Hunter Step",
    "scaling": {
      "endurance": 0.022,
      "magic": 0.016
    },
    "statusScaling": {
      "endurance": 0.022,
      "magic": 0.016
    }
  },
  {
    "id": "sp_mana_shield",
    "name": "Starseal Mana Shield",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Starseal Mana Shield grants Guard. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Arcane",
      "Barrier",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Skill Library",
    "price": 130,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Mana Shield",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "sp_minor_heal",
    "name": "Radiant Minor Heal",
    "kind": "spell",
    "rank": "Common",
    "tier": 9,
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Radiant Minor Heal restores HP. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Holy",
      "Healing",
      "Support",
      "Active"
    ],
    "source": "Skill Library",
    "price": 108,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ],
    "previousName": "Minor Heal",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "sk_power_strike",
    "name": "Blade Power Strike",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Blade Power Strike deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Burst",
      "Break",
      "Active"
    ],
    "source": "Skill Library",
    "price": 108,
    "starting": false,
    "previousName": "Power Strike",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "sk_shield_bash",
    "name": "Fang Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Fang Shield Bash deals Physical damage and may inflict Stunned. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Guard",
      "Stun",
      "Control",
      "Active"
    ],
    "source": "Skill Library",
    "price": 102,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Shield Bash",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "in_adaptive_body",
    "name": "Lineage Art: Valor Adaptive Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Valor Adaptive Body supports your build. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Slime",
      "Evolution",
      "Utility"
    ],
    "source": "Slime Lineage",
    "price": 0,
    "starting": false,
    "previousName": "Adaptive Body",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "sk_guard_stance",
    "name": "Rift Guard Stance",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 4,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Rift Guard Stance deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Stance",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Starter Skill / Skill Library",
    "price": 68,
    "starting": true,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ],
    "previousName": "Guard Stance",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "sk_quick_slash",
    "name": "Steel Quick Slash",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Steel Quick Slash deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Weapon Art",
      "Active"
    ],
    "source": "Starter Skill / Skill Library",
    "price": 77,
    "starting": true,
    "previousName": "Quick Slash",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "sp_fire_bolt",
    "name": "Cinder Fire Bolt",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "Cinder Fire Bolt deals Fire damage and may inflict Burn. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Fire",
      "Ranged",
      "Damage",
      "Burn",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 80,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Fire Bolt",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "sp_ice_needle",
    "name": "Glacier Ice Needle",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "Glacier Ice Needle deals Ice damage and may inflict Frozen. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Ice",
      "Ranged",
      "Damage",
      "Freeze",
      "Control",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 80,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 45
      }
    ],
    "previousName": "Ice Needle",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "sp_spark",
    "name": "Dawn Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Dawn Spark deals Light damage and may inflict Stunned. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Lightning",
      "Ranged",
      "Damage",
      "Paralysis",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 77,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ],
    "previousName": "Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "sp_storm_crown_invocation",
    "name": "Oath of the Seraphic Storm Crown Invocation: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 42,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Seraphic Storm Crown Invocation: Spell Vow deals Light damage and may inflict Stunned. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Haste",
      "Paralysis",
      "Unique",
      "Active",
      "requires-light-mastery"
    ],
    "source": "Storm Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 65
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Storm Crown Invocation",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "sk_aegis_last_king",
    "name": "Final Myth: Rift The Last King: Ultimate Evolution Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 60,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Rift The Last King: Ultimate Evolution Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Guard",
      "Counter",
      "Defensive",
      "Thorns",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Aegis of the Last King",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    }
  },
  {
    "id": "sp_astraea_final_benediction",
    "name": "Final Myth: Aureate Astraea’s Final Benediction: Ultimate Evolution Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 85,
    "cooldown": 9,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Final Myth: Aureate Astraea’s Final Benediction: Ultimate Evolution Cataclysm restores HP. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Support",
      "Active",
      "requires-light-mastery"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 1
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ],
    "previousName": "Astraea’s Final Benediction",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "sp_eclipse_archive_end_names",
    "name": "Final Myth: Umbral End Of Names: Ultimate Evolution Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 90,
    "cooldown": 9,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Umbral End Of Names: Ultimate Evolution Cataclysm deals Dark damage and may inflict Weakened. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark",
      "Arcane",
      "Curse",
      "Weaken",
      "Marked",
      "Damage",
      "Active",
      "requires-dark-mastery"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Eclipse Archive: End of Names",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "sk_heaven_splitting_lion_art",
    "name": "Final Myth: Blade Splitting Lion Art: Ultimate Evolution Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 70,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Blade Splitting Lion Art: Ultimate Evolution Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Weapon Art",
      "Burst",
      "Critical",
      "Piercing",
      "Active",
      "weapon-required"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Heaven-Splitting Lion Art",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "sp_ragnarok_starfall_cataclysm",
    "name": "Final Myth: Phoenix Ragnarok Starfall Cataclysm: Ultimate Evolution Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 95,
    "cooldown": 9,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Phoenix Ragnarok Starfall Cataclysm: Ultimate Evolution Cataclysm deals Fire damage and may inflict Burn. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "AoE",
      "Fire",
      "Arcane",
      "Burst",
      "Damage",
      "Active",
      "requires-fire-mastery"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Ragnarok Starfall Cataclysm",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "sk_thousand_step_godspeed_reversal",
    "name": "Final Myth: Valor Step Godspeed Reversal: Ultimate Evolution Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 65,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Valor Step Godspeed Reversal: Ultimate Evolution Cataclysm deals Physical damage. Scales with Dexterity × 0.080 + Agility × 0.035.",
    "tags": [
      "Physical",
      "Ultimate",
      "Mobility",
      "Counter",
      "Multi-Hit",
      "Haste",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Thousand-Step Godspeed Reversal",
    "scaling": {
      "dexterity": 0.08,
      "agility": 0.035
    },
    "statusScaling": {
      "dexterity": 0.08,
      "agility": 0.035
    }
  },
  {
    "id": "in_deathless_body",
    "name": "Lineage Art: Rift Deathless Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lineage Art: Rift Deathless Body grants Guard. Scales with Endurance × 0.026 + Magic × 0.019.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Undead",
      "Defensive"
    ],
    "source": "Undead Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Deathless Body",
    "scaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    },
    "statusScaling": {
      "endurance": 0.0264,
      "magic": 0.0192
    }
  },
  {
    "id": "sk_arrow_pin",
    "name": "Steel Arrow Pin",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Steel Arrow Pin deals Physical damage. Scales with Dexterity × 0.032 + Agility × 0.014.",
    "tags": [
      "Physical",
      "Ranged",
      "Marked",
      "Damage",
      "Control"
    ],
    "source": "v26 Ability Shop",
    "price": 124,
    "starting": false,
    "previousName": "Arrow Pin",
    "scaling": {
      "dexterity": 0.032,
      "agility": 0.014
    },
    "statusScaling": {
      "dexterity": 0.032,
      "agility": 0.014
    }
  },
  {
    "id": "sk_brutal_cleave",
    "name": "Iron Brutal Cleave",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Iron Brutal Cleave deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Break",
      "AoE"
    ],
    "source": "v26 Ability Shop",
    "price": 130,
    "starting": false,
    "previousName": "Brutal Cleave",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "sk_open_palm_break",
    "name": "Blade Open Palm Break",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Blade Open Palm Break deals Physical damage and may inflict Stunned. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Martial Art",
      "Stun",
      "Break",
      "Melee"
    ],
    "source": "v26 Ability Shop",
    "price": 118,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ],
    "previousName": "Open Palm Break",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "sk_piercing_thrust",
    "name": "Fang Piercing Thrust",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Fang Piercing Thrust deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Melee",
      "Piercing",
      "Damage",
      "Weapon Art"
    ],
    "source": "v26 Ability Shop",
    "price": 105,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Piercing Thrust",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_arcane_2",
    "name": "Mana Aether Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 14,
    "description": "Mana Aether Wave deals Arcane damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Aether Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_fire_2",
    "name": "Solar Flame Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Solar Flame Wave deals Fire damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Flame Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_ice_2",
    "name": "Hoarfrost Frost Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 14,
    "description": "Hoarfrost Frost Wave deals Ice damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Frost Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_wind_2",
    "name": "Zephyr Gale Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 14,
    "description": "Zephyr Gale Wave deals Wind damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Gale Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_healing_2",
    "name": "Blade Mend Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Blade Mend Wave restores HP. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ],
    "previousName": "Mend Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_holy_2",
    "name": "Dawn Radiant Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "Dawn Radiant Wave deals Light damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Radiant Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_dark_2",
    "name": "Night Shade Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "Night Shade Wave deals Dark damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Shade Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_earth_2",
    "name": "Terra Stone Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "Terra Stone Wave deals Earth damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Stone Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_water_2",
    "name": "Steel Tide Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Steel Tide Wave deals Physical damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Tide Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_lightning_2",
    "name": "Radiant Volt Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "Radiant Volt Wave deals Light damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Burst",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Volt Wave",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_arcane_1",
    "name": "Thunder Aether Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Thunder Aether Spark deals Lightning damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Aether Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_fire_1",
    "name": "Phoenix Flame Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "Phoenix Flame Spark deals Fire damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Flame Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_ice_1",
    "name": "Winter Frost Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "Winter Frost Spark deals Ice damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Frost Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_wind_1",
    "name": "Sky Gale Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Sky Gale Spark deals Lightning damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Gale Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_healing_1",
    "name": "Fulmin Mend Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "self",
    "power": 0,
    "description": "Fulmin Mend Spark restores HP. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ],
    "previousName": "Mend Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_holy_1",
    "name": "Halo Radiant Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Halo Radiant Spark deals Light damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Radiant Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_dark_1",
    "name": "Grave Shade Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Grave Shade Spark deals Dark damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Shade Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_earth_1",
    "name": "Volt Stone Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Volt Stone Spark deals Lightning damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Stone Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_water_1",
    "name": "Tempest Tide Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Tempest Tide Spark deals Lightning damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Tide Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_lightning_1",
    "name": "Sun Volt Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Sun Volt Spark deals Light damage. Scales with Magic × 0.032 + Agility × 0.010.",
    "tags": [
      "Magic",
      "Starter",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Volt Spark",
    "scaling": {
      "magic": 0.032,
      "agility": 0.01
    },
    "statusScaling": {
      "magic": 0.032,
      "agility": 0.01
    }
  },
  {
    "id": "v50_arcane_3",
    "name": "Aether Sigil — Starseal Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 24,
    "description": "Aether Sigil — Starseal Form deals Arcane damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Arcane",
      "requires-arcane-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Aether Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "v50_fire_3",
    "name": "Flame Sigil — Cinder Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "Flame Sigil — Cinder Form deals Fire damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Fire",
      "requires-fire-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Flame Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "v50_ice_3",
    "name": "Frost Sigil — Glacier Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "Frost Sigil — Glacier Form deals Ice damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Ice",
      "requires-ice-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Frost Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required"
  },
  {
    "id": "v50_wind_3",
    "name": "Gale Sigil — Cyclone Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 24,
    "description": "Gale Sigil — Cyclone Form deals Wind damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Wind",
      "requires-wind-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Gale Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "v50_healing_3",
    "name": "Mend Sigil — Valor Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Mend Sigil — Valor Form restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ],
    "previousName": "Mend Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    }
  },
  {
    "id": "v50_holy_3",
    "name": "Radiant Sigil — Sun Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Radiant Sigil — Sun Form deals Light damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Holy",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Radiant Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_dark_3",
    "name": "Shade Sigil — Nocturne Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "Shade Sigil — Nocturne Form deals Dark damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Dark",
      "requires-dark-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Shade Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "v50_earth_3",
    "name": "Stone Sigil — Root Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 24,
    "description": "Stone Sigil — Root Form deals Earth damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Earth",
      "requires-earth-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Stone Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "v50_water_3",
    "name": "Tide Sigil — Blade Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Tide Sigil — Blade Form deals Physical damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Water",
      "weapon-required"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Tide Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_lightning_3",
    "name": "Volt Sigil — Dawn Form",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Volt Sigil — Dawn Form deals Light damage. Scales with Magic × 0.046 + Agility × 0.015.",
    "tags": [
      "Magic",
      "Extra",
      "Lightning",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Volt Sigil",
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_ice_5",
    "name": "Final Myth: Winter Eternal Glacier Palace: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Winter Eternal Glacier Palace: V50 Magic Cataclysm deals Ice damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Ice",
      "requires-ice-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Eternal Glacier Palace",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required"
  },
  {
    "id": "v50_healing_5",
    "name": "Final Myth: Rift Legend Rebirth Canon: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Final Myth: Rift Legend Rebirth Canon: V50 Magic Cataclysm restores HP. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 1
      }
    ],
    "previousName": "Legend Rebirth Canon",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    }
  },
  {
    "id": "v50_dark_5",
    "name": "Final Myth: Nocturne Night Emperor Cataclysm: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Nocturne Night Emperor Cataclysm: V50 Magic Cataclysm deals Dark damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark",
      "requires-dark-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Night Emperor Cataclysm",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "v50_water_5",
    "name": "Final Myth: Iron Ocean Throne Deluge: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Iron Ocean Throne Deluge: V50 Magic Cataclysm deals Physical damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Ocean Throne Deluge",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    }
  },
  {
    "id": "v50_fire_5",
    "name": "Final Myth: Inferno Phoenix Crown Apocalypse: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Inferno Phoenix Crown Apocalypse: V50 Magic Cataclysm deals Fire damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Fire",
      "requires-fire-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Phoenix Crown Apocalypse",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "v50_wind_5",
    "name": "Final Myth: Cyclone Sky Dominion Hurricane: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Cyclone Sky Dominion Hurricane: V50 Magic Cataclysm deals Wind damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Wind",
      "requires-wind-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Sky Dominion Hurricane",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "v50_lightning_5",
    "name": "Final Myth: Seraphic Storm Kingdom Descent: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Seraphic Storm Kingdom Descent: V50 Magic Cataclysm deals Light damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Lightning",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Storm Kingdom Descent",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_holy_5",
    "name": "Final Myth: Sun World Cathedral Miracle: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Sun World Cathedral Miracle: V50 Magic Cataclysm deals Light damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Cathedral Miracle",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_earth_5",
    "name": "Final Myth: Obsidian World Pillar Genesis: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Obsidian World Pillar Genesis: V50 Magic Cataclysm deals Earth damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Earth",
      "requires-earth-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Pillar Genesis",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "v50_arcane_5",
    "name": "Final Myth: Runic World Script Overwrite: V50 Magic Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Runic World Script Overwrite: V50 Magic Cataclysm deals Arcane damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "tags": [
      "Magic",
      "Ultimate",
      "Arcane",
      "requires-arcane-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Script Overwrite",
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "v50_ice_4",
    "name": "Oath of the Glacier Absolute Zero Seal: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Glacier Absolute Zero Seal: Spell Vow deals Ice damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Ice",
      "requires-ice-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Absolute Zero Seal",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required"
  },
  {
    "id": "v50_dark_4",
    "name": "Oath of the Eclipse Abyss Sovereign Mark: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Eclipse Abyss Sovereign Mark: Spell Vow deals Dark damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Dark",
      "requires-dark-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Abyss Sovereign Mark",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "v50_water_4",
    "name": "Oath of the Night Abyssal Fountain Rite: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Night Abyssal Fountain Rite: Spell Vow deals Dark damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Water",
      "requires-dark-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Abyssal Fountain Rite",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "v50_arcane_4",
    "name": "Oath of the Glyph Astral Code Archive: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Glyph Astral Code Archive: Spell Vow deals Arcane damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Arcane",
      "requires-arcane-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Astral Code Archive",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "v50_lightning_4",
    "name": "Oath of the Aureate Emperor Thunder Circuit: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Aureate Emperor Thunder Circuit: Spell Vow deals Light damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Lightning",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Emperor Thunder Circuit",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_healing_4",
    "name": "Oath of the Iron Grand Vital Liturgy: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Oath of the Iron Grand Vital Liturgy: Spell Vow restores HP. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "previousName": "Grand Vital Liturgy",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    }
  },
  {
    "id": "v50_earth_4",
    "name": "Oath of the Root Kingdom Bedrock Ward: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Root Kingdom Bedrock Ward: Spell Vow deals Earth damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Earth",
      "requires-earth-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Kingdom Bedrock Ward",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "v50_wind_4",
    "name": "Oath of the Cyclone Phantom Tempest Step: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Cyclone Phantom Tempest Step: Spell Vow deals Wind damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Wind",
      "requires-wind-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Phantom Tempest Step",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "v50_holy_4",
    "name": "Oath of the Seraphic Saint Halo Decree: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Seraphic Saint Halo Decree: Spell Vow deals Light damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Holy",
      "requires-light-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Saint Halo Decree",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "v50_fire_4",
    "name": "Oath of the Solar World Flame Sigil: Spell Vow",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Solar World Flame Sigil: Spell Vow deals Fire damage. Scales with Magic × 0.059 + Agility × 0.018.",
    "tags": [
      "Magic",
      "Unique",
      "Fire",
      "requires-fire-mastery"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "World Flame Sigil",
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "v50_sword_2",
    "name": "Steel Blade Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Steel Blade Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Blade Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_shield_2",
    "name": "Iron Bulwark Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Iron Bulwark Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Bulwark Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_heavy_weapon_2",
    "name": "Blade Colossus Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Blade Colossus Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Colossus Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_catalyst_2",
    "name": "Fang Focus Core Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Fang Focus Core Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Focus Core Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_unarmed_2",
    "name": "Valor Iron Fist Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Valor Iron Fist Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Iron Fist Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_spear_2",
    "name": "Rift Lancer Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Rift Lancer Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Lancer Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_bow_2",
    "name": "Steel Longshot Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Steel Longshot Rush deals Physical damage. Scales with Dexterity × 0.032 + Agility × 0.014.",
    "tags": [
      "Physical",
      "Burst",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Longshot Rush",
    "scaling": {
      "dexterity": 0.032,
      "agility": 0.014
    },
    "statusScaling": {
      "dexterity": 0.032,
      "agility": 0.014
    }
  },
  {
    "id": "v50_staff_2",
    "name": "Iron Mystic Staff Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Iron Mystic Staff Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Mystic Staff Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_dagger_2",
    "name": "Grave Shadowfang Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "Grave Shadowfang Rush deals Dark damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Shadowfang Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_axe_2",
    "name": "Fang Waraxe Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Fang Waraxe Rush deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Burst",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Waraxe Rush",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_sword_1",
    "name": "Valor Blade Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Valor Blade Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Blade Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_shield_1",
    "name": "Rift Bulwark Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Rift Bulwark Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Bulwark Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_heavy_weapon_1",
    "name": "Steel Colossus Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Steel Colossus Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Colossus Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_catalyst_1",
    "name": "Iron Focus Core Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Iron Focus Core Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Focus Core Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_unarmed_1",
    "name": "Blade Iron Fist Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Blade Iron Fist Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Iron Fist Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_spear_1",
    "name": "Fang Lancer Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Fang Lancer Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Lancer Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_bow_1",
    "name": "Valor Longshot Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Valor Longshot Initiation deals Physical damage. Scales with Dexterity × 0.032 + Agility × 0.014.",
    "tags": [
      "Physical",
      "Starter",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Longshot Initiation",
    "scaling": {
      "dexterity": 0.032,
      "agility": 0.014
    },
    "statusScaling": {
      "dexterity": 0.032,
      "agility": 0.014
    }
  },
  {
    "id": "v50_staff_1",
    "name": "Rift Mystic Staff Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Rift Mystic Staff Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Mystic Staff Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_dagger_1",
    "name": "Nocturne Shadowfang Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Nocturne Shadowfang Initiation deals Dark damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Shadowfang Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_axe_1",
    "name": "Iron Waraxe Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Iron Waraxe Initiation deals Physical damage. Scales with Strength × 0.032 + Dexterity × 0.012.",
    "tags": [
      "Physical",
      "Starter",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Waraxe Initiation",
    "scaling": {
      "strength": 0.032,
      "dexterity": 0.012
    },
    "statusScaling": {
      "strength": 0.032,
      "dexterity": 0.012
    }
  },
  {
    "id": "v50_sword_3",
    "name": "Blade Crest Art — Fang Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Blade Crest Art — Fang Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Sword",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Blade Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_shield_3",
    "name": "Bulwark Crest Art — Fang Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Bulwark Crest Art — Fang Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Shield",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Bulwark Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "v50_heavy_weapon_3",
    "name": "Colossus Crest Art — Valor Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Colossus Crest Art — Valor Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Colossus Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "v50_catalyst_3",
    "name": "Core Crest Art — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Core Crest Art — Rift Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Focus Core Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "v50_unarmed_3",
    "name": "Fist Crest Art — Steel Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Fist Crest Art — Steel Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Iron Fist Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "v50_spear_3",
    "name": "Lancer Crest Art — Iron Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Lancer Crest Art — Iron Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Spear",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Lancer Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Spear",
      "Pike",
      "Polearm"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "v50_bow_3",
    "name": "Longshot Crest Art — Blade Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Longshot Crest Art — Blade Form deals Physical damage. Scales with Dexterity × 0.046 + Agility × 0.020.",
    "tags": [
      "Physical",
      "Extra",
      "Bow",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Longshot Crest Art",
    "scaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "statusScaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "requiresWeaponType": [
      "Bow",
      "Crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow"
  },
  {
    "id": "v50_staff_3",
    "name": "Staff Crest Art — Fang Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Staff Crest Art — Fang Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Mystic Staff Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "v50_dagger_3",
    "name": "Shadowfang Crest Art — Night Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "Shadowfang Crest Art — Night Form deals Dark damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Dagger",
      "requires-dark-mastery",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Shadowfang Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "requiresWeaponType": [
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "v50_axe_3",
    "name": "Waraxe Crest Art — Rift Form",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Waraxe Crest Art — Rift Form deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "tags": [
      "Physical",
      "Extra",
      "Axe",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Waraxe Crest Art",
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Axe",
      "Greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword"
  },
  {
    "id": "v50_catalyst_5",
    "name": "Final Myth: Steel Cosmic Catalyst Surge: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Steel Cosmic Catalyst Surge: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Cosmic Catalyst Surge",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    }
  },
  {
    "id": "v50_staff_5",
    "name": "Final Myth: Iron Grand Magus Orbit: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Iron Grand Magus Orbit: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Grand Magus Orbit",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    }
  },
  {
    "id": "v50_spear_5",
    "name": "Final Myth: Blade Heaven Piercing Phalanx: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Blade Heaven Piercing Phalanx: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Spear",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Heaven-Piercing Phalanx",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_heavy_weapon_5",
    "name": "Final Myth: Fang Mountain Crushing Finale: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Fang Mountain Crushing Finale: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Heavy Weapon",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Mountain-Crushing Finale",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Hammer",
      "Maul",
      "Mace"
    ],
    "weaponRequirementText": "Requires equipped Hammer or Maul"
  },
  {
    "id": "v50_dagger_5",
    "name": "Final Myth: Valor Night Crowned Assassination: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Valor Night Crowned Assassination: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Dagger",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Night-Crowned Assassination",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "v50_bow_5",
    "name": "Final Myth: Rift Starfall Arrow Dominion: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Rift Starfall Arrow Dominion: V50 Physical Cataclysm deals Physical damage. Scales with Dexterity × 0.080 + Agility × 0.035.",
    "tags": [
      "Physical",
      "Ultimate",
      "Bow",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Starfall Arrow Dominion",
    "scaling": {
      "dexterity": 0.08,
      "agility": 0.035
    },
    "statusScaling": {
      "dexterity": 0.08,
      "agility": 0.035
    },
    "requiresWeaponType": [
      "Bow",
      "Crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow"
  },
  {
    "id": "v50_axe_5",
    "name": "Final Myth: Steel Titan Rend Execution: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Steel Titan Rend Execution: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Axe",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Titan Rend Execution",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_shield_5",
    "name": "Final Myth: Iron World Bastion Protocol: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Iron World Bastion Protocol: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Shield",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "World Bastion Protocol",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "v50_unarmed_5",
    "name": "Final Myth: Blade Worldbreaker Martial Soul: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Blade Worldbreaker Martial Soul: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Unarmed",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Worldbreaker Martial Soul",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_sword_5",
    "name": "Final Myth: Fang Worldsplitter Edge: V50 Physical Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Final Myth: Fang Worldsplitter Edge: V50 Physical Cataclysm deals Physical damage. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "tags": [
      "Physical",
      "Ultimate",
      "Sword",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Worldsplitter Edge",
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_catalyst_4",
    "name": "Oath of the Valor Arcflash Conductor: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Valor Arcflash Conductor: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Arcflash Conductor",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "v50_axe_4",
    "name": "Oath of the Rift Bloodbreak Maul: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Rift Bloodbreak Maul: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Axe",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Bloodbreak Maul",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Axe",
      "Greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword"
  },
  {
    "id": "v50_shield_4",
    "name": "Oath of the Steel Guardian Wall Counter: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Steel Guardian Wall Counter: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Shield",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Guardian Wall Counter",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "v50_unarmed_4",
    "name": "Oath of the Iron Heavenstep Combo: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Iron Heavenstep Combo: Skill Vow deals Physical damage. Scales with Dexterity × 0.059 + Agility × 0.026.",
    "tags": [
      "Physical",
      "Unique",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Heavenstep Combo",
    "scaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    },
    "statusScaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    }
  },
  {
    "id": "v50_sword_4",
    "name": "Oath of the Blade Kingsguard Severance: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Blade Kingsguard Severance: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Sword",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Kingsguard Severance",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "v50_dagger_4",
    "name": "Oath of the Fang Phantom Step Art: Skill Vow 2",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Fang Phantom Step Art: Skill Vow 2 deals Physical damage. Scales with Dexterity × 0.059 + Agility × 0.026.",
    "tags": [
      "Physical",
      "Unique",
      "Dagger",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Phantom Step Art",
    "scaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    },
    "statusScaling": {
      "dexterity": 0.0592,
      "agility": 0.0259
    },
    "requiresWeaponType": [
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "v50_heavy_weapon_4",
    "name": "Oath of the Valor Siegebreak Overrun: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Valor Siegebreak Overrun: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Siegebreak Overrun",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "v50_spear_4",
    "name": "Oath of the Rift Skypierce Rotation: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Rift Skypierce Rotation: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Spear",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Skypierce Rotation",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiresWeaponType": [
      "Spear",
      "Pike",
      "Polearm"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "v50_staff_4",
    "name": "Oath of the Steel Spellstaff Breaker: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Steel Spellstaff Breaker: Skill Vow deals Physical damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Spellstaff Breaker",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "v50_bow_4",
    "name": "Oath of the Storm Stormfeather Volley: Skill Vow",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 38,
    "description": "Oath of the Storm Stormfeather Volley: Skill Vow deals Lightning damage. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "tags": [
      "Physical",
      "Unique",
      "Bow",
      "requires-lightning-mastery",
      "weapon-required"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Stormfeather Volley",
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery required",
    "requiresWeaponType": [
      "Bow",
      "Crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow"
  },
  {
    "id": "ex_iron_fang_counter",
    "name": "Iron Fang Counter",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "price": 180,
    "source": "Warrior Technique Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "counter",
      "blade",
      "extra",
      "melee",
      "weapon-required"
    ],
    "description": "Iron Fang Counter deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "ex_crimson_lance_drive",
    "name": "Crimson Lance Drive",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 28,
    "price": 210,
    "source": "Lancer Technique Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "spear",
      "pierce",
      "bleed",
      "weapon-required"
    ],
    "description": "Crimson Lance Drive deals Physical damage and may inflict Bleed. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ],
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiresWeaponType": [
      "Spear",
      "Pike",
      "Polearm"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "ex_phantom_step_cut",
    "name": "Phantom Step Cut",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 23,
    "price": 190,
    "source": "Rogue Technique Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "speed",
      "rogue",
      "wind",
      "requires-wind-mastery",
      "weapon-required"
    ],
    "description": "Phantom Step Cut deals Wind damage. Scales with Dexterity × 0.046 + Agility × 0.020.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "statusScaling": {
      "dexterity": 0.0464,
      "agility": 0.0203
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required",
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "ex_titanbreaker_swing",
    "name": "Titanbreaker Swing",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 34,
    "price": 260,
    "source": "Heavy Weapon Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "heavy",
      "earth",
      "break",
      "requires-earth-mastery",
      "weapon-required"
    ],
    "description": "Titanbreaker Swing deals Earth damage and may inflict Weakened. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 35
      }
    ],
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required",
    "requiresWeaponType": [
      "Shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "ex_chainhook_reversal",
    "name": "Chainhook Reversal",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 21,
    "price": 170,
    "source": "Trick Weapon Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "control",
      "duelist",
      "utility"
    ],
    "description": "Chainhook Reversal deals Physical damage and may inflict Stunned. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ],
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "ex_dragonbreaker_kata",
    "name": "Dragonbreaker Kata",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 30,
    "price": 240,
    "source": "Monster-Hunter Library",
    "origin": "job",
    "acquisition": "Shop",
    "tags": [
      "boss",
      "dragon",
      "hunter"
    ],
    "description": "Dragonbreaker Kata deals Physical damage. Scales with Strength × 0.046 + Dexterity × 0.017.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    },
    "statusScaling": {
      "strength": 0.0464,
      "dexterity": 0.0174
    }
  },
  {
    "id": "u_kings_gamble",
    "name": "Unique Skill: King's Gamble",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 45,
    "price": 0,
    "source": "Ability Fusion",
    "origin": "fusion",
    "acquisition": "Fusion",
    "tags": [
      "unique",
      "risk",
      "gambler"
    ],
    "description": "Unique Skill: King's Gamble deals Physical damage and may inflict Stunned. Scales with Strength × 0.059 + Dexterity × 0.022.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ],
    "scaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    },
    "statusScaling": {
      "strength": 0.0592,
      "dexterity": 0.0222
    }
  },
  {
    "id": "u_zero_point_instinct",
    "name": "Unique Skill: Zero-Point Instinct",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 5,
    "element": "wind",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Ability Fusion",
    "origin": "fusion",
    "acquisition": "Fusion",
    "tags": [
      "unique",
      "speed",
      "defense",
      "requires-wind-mastery"
    ],
    "description": "Unique Skill: Zero-Point Instinct grants Haste. Scales with Endurance × 0.041 + Magic × 0.030.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "ult_heaven_severing_worldline",
    "name": "Ultimate Art: Heaven-Severing Worldline",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 8,
    "element": "arcane",
    "target": "enemy",
    "power": 82,
    "price": 0,
    "source": "Ultimate Evolution",
    "origin": "evolution",
    "acquisition": "Evolution",
    "tags": [
      "ultimate",
      "sword",
      "worldline",
      "requires-arcane-mastery",
      "weapon-required"
    ],
    "description": "Ultimate Art: Heaven-Severing Worldline deals Arcane damage and may inflict Weakened. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ],
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required",
    "requiresWeaponType": [
      "Sword",
      "Katana",
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "ult_abyss_crown_execution",
    "name": "Ultimate Art: Abyss Crown Execution",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 46,
    "cooldown": 8,
    "element": "dark",
    "target": "enemy",
    "power": 78,
    "price": 0,
    "source": "Ultimate Evolution",
    "origin": "evolution",
    "acquisition": "Evolution",
    "tags": [
      "ultimate",
      "assassin",
      "dark",
      "requires-dark-mastery",
      "weapon-required"
    ],
    "description": "Ultimate Art: Abyss Crown Execution deals Dark damage and may inflict Bleed. Scales with Strength × 0.080 + Dexterity × 0.030.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 4,
        "chance": 75
      }
    ],
    "scaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "statusScaling": {
      "strength": 0.08,
      "dexterity": 0.03
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required",
    "requiresWeaponType": [
      "Dagger",
      "Rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "ex_crimson_spiral_flare",
    "name": "Crimson Spiral Flare",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 30,
    "price": 220,
    "source": "Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fire",
      "burn",
      "extra",
      "requires-fire-mastery"
    ],
    "description": "Crimson Spiral Flare deals Fire damage and may inflict Burn. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 50
      }
    ],
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "ex_glacier_mirror_lance",
    "name": "Glacier Mirror Lance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 28,
    "price": 220,
    "source": "Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "ice",
      "freeze",
      "extra",
      "requires-ice-mastery"
    ],
    "description": "Glacier Mirror Lance deals Ice damage and may inflict Frozen. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 35
      }
    ],
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery required"
  },
  {
    "id": "ex_thunder_grimoire_clause",
    "name": "Thunder Grimoire Clause",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 32,
    "price": 240,
    "source": "Arcanist Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "lightning",
      "arcane",
      "extra",
      "requires-lightning-mastery"
    ],
    "description": "Thunder Grimoire Clause deals Lightning damage and may inflict Stunned. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ],
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery required"
  },
  {
    "id": "ex_moonlit_recovery",
    "name": "Moonlit Recovery",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 230,
    "source": "Restoration Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "heal",
      "light",
      "support",
      "requires-light-mastery"
    ],
    "description": "Moonlit Recovery restores HP. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ],
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "ex_arcane_thread_bind",
    "name": "Arcane Thread Bind",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 18,
    "price": 190,
    "source": "Control Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "control",
      "arcane",
      "bind",
      "requires-arcane-mastery"
    ],
    "description": "Arcane Thread Bind deals Arcane damage and may inflict Weakened. Scales with Magic × 0.046 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 55
      }
    ],
    "scaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "statusScaling": {
      "magic": 0.0464,
      "agility": 0.0145
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "u_soul_ledger",
    "name": "Unique Spell: Soul Ledger",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 42,
    "price": 0,
    "source": "Ability Fusion",
    "origin": "fusion",
    "acquisition": "Fusion",
    "tags": [
      "unique",
      "accounting",
      "arcane",
      "requires-arcane-mastery"
    ],
    "description": "Unique Spell: Soul Ledger deals Arcane damage and may inflict Weakened. Scales with Magic × 0.059 + Agility × 0.018.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ],
    "scaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "statusScaling": {
      "magic": 0.0592,
      "agility": 0.0185
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "u_dragonheart_furnace",
    "name": "Unique Skill: Dragonheart Furnace",
    "kind": "intrinsic",
    "rank": "Unique",
    "resource": "mana",
    "cost": 30,
    "cooldown": 6,
    "element": "fire",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Race Evolution Fusion",
    "origin": "race",
    "acquisition": "Fusion",
    "tags": [
      "unique",
      "dragon",
      "intrinsic",
      "requires-fire-mastery"
    ],
    "description": "Unique Skill: Dragonheart Furnace grants Focus. Scales with Endurance × 0.041 + Magic × 0.030.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "ult_star_forged_dominion",
    "name": "Ultimate Skill: Star-Forged Dominion",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 55,
    "cooldown": 9,
    "element": "light",
    "target": "enemy",
    "power": 86,
    "price": 0,
    "source": "Ultimate Evolution",
    "origin": "evolution",
    "acquisition": "Evolution",
    "tags": [
      "ultimate",
      "light",
      "dominion",
      "requires-light-mastery"
    ],
    "description": "Ultimate Skill: Star-Forged Dominion deals Light damage. Scales with Magic × 0.080 + Agility × 0.025.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "ult_divine_arsenal_mandate",
    "name": "Ultimate Authority: Divine Arsenal Mandate",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 60,
    "cooldown": 10,
    "element": "arcane",
    "target": "enemy",
    "power": 90,
    "price": 0,
    "source": "Ultimate Evolution",
    "origin": "evolution",
    "acquisition": "Evolution",
    "tags": [
      "ultimate",
      "crafting",
      "arsenal",
      "requires-arcane-mastery"
    ],
    "description": "Ultimate Authority: Divine Arsenal Mandate deals Arcane damage and may inflict Weakened. Scales with Magic × 0.080 + Agility × 0.025.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 80
      }
    ],
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "ult_unbroken_dawn_covenant",
    "name": "Ultimate Miracle: Unbroken Dawn Covenant",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 52,
    "cooldown": 10,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Ultimate Evolution",
    "origin": "evolution",
    "acquisition": "Evolution",
    "tags": [
      "ultimate",
      "heal",
      "covenant",
      "requires-light-mastery"
    ],
    "description": "Ultimate Miracle: Unbroken Dawn Covenant restores HP. Scales with Magic × 0.080 + Agility × 0.025.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.8
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "scaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "statusScaling": {
      "magic": 0.08,
      "agility": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "p_complete_weapon_mastery",
    "name": "Passive: Complete Weapon Mastery",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Job Evolution",
    "origin": "job",
    "acquisition": "Evolution",
    "tags": [
      "passive",
      "weapon",
      "mastery"
    ],
    "description": "Passive: Complete Weapon Mastery supports your build. Scales with Endurance × 0.041 + Magic × 0.030.",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    }
  },
  {
    "id": "p_formula_sight",
    "name": "Passive: Formula Sight",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 200,
    "source": "Arcanist Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "magic",
      "analysis"
    ],
    "description": "Passive: Formula Sight supports your build. Scales with Endurance × 0.032 + Magic × 0.023.",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "p_monster_cuisine",
    "name": "Passive: Monster Cuisine Method",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 160,
    "source": "Crafting Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "chef",
      "crafting"
    ],
    "description": "Passive: Monster Cuisine Method supports your build. Scales with Endurance × 0.032 + Magic × 0.023.",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "p_lore_appraisal_eye",
    "name": "Passive: Lore Appraisal Eye",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 190,
    "source": "Utility Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "appraisal",
      "utility"
    ],
    "description": "Passive: Lore Appraisal Eye supports your build. Scales with Endurance × 0.032 + Magic × 0.023.",
    "scaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    },
    "statusScaling": {
      "endurance": 0.0319,
      "magic": 0.0232
    }
  },
  {
    "id": "p_dungeon_maker_sense",
    "name": "Passive: Dungeon Maker Sense",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Hidden Class Evolution",
    "origin": "job",
    "acquisition": "Evolution",
    "tags": [
      "passive",
      "dungeon",
      "unique"
    ],
    "description": "Passive: Dungeon Maker Sense supports your build. Scales with Endurance × 0.041 + Magic × 0.030.",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    }
  },
  {
    "id": "p_legend_candidate_oath",
    "name": "Passive: Legend Candidate Oath",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 0,
    "source": "Hidden Trial",
    "origin": "secret",
    "acquisition": "Secret Unlock",
    "tags": [
      "passive",
      "legend",
      "trial"
    ],
    "description": "Passive: Legend Candidate Oath supports your build. Scales with Endurance × 0.041 + Magic × 0.030.",
    "scaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    },
    "statusScaling": {
      "endurance": 0.0407,
      "magic": 0.0296
    }
  },
  {
    "id": "r_flame_tolerance",
    "name": "Resist Skill: Flame Tolerance",
    "kind": "resist",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "fire",
    "target": "self",
    "power": 0,
    "price": 140,
    "source": "Resistance Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "fire",
      "passive"
    ],
    "description": "Resist Skill: Flame Tolerance supports your build. Scales with Endurance × 0.019 + Magic × 0.014.",
    "scaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    },
    "statusScaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    }
  },
  {
    "id": "r_poison_resistance",
    "name": "Resist Skill: Poison Resistance",
    "kind": "resist",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "poison",
    "target": "self",
    "power": 0,
    "price": 140,
    "source": "Resistance Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "poison",
      "passive"
    ],
    "description": "Resist Skill: Poison Resistance supports your build. Scales with Endurance × 0.019 + Magic × 0.014.",
    "scaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    },
    "statusScaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    }
  },
  {
    "id": "r_dark_null_guard",
    "name": "Resist Skill: Dark Null Guard",
    "kind": "resist",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "price": 220,
    "source": "Resistance Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "dark",
      "null"
    ],
    "description": "Resist Skill: Dark Null Guard supports your build. Scales with Endurance × 0.019 + Magic × 0.014.",
    "scaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    },
    "statusScaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    }
  },
  {
    "id": "r_mana_storm_grounding",
    "name": "Resist Skill: Mana Storm Grounding",
    "kind": "resist",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 220,
    "source": "Resistance Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "arcane",
      "mana storm"
    ],
    "description": "Resist Skill: Mana Storm Grounding supports your build. Scales with Endurance × 0.019 + Magic × 0.014.",
    "scaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    },
    "statusScaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    }
  },
  {
    "id": "r_heavenly_pressure_tolerance",
    "name": "Resist Skill: Heavenly Pressure Tolerance",
    "kind": "resist",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Resistance Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "light",
      "boss"
    ],
    "description": "Resist Skill: Heavenly Pressure Tolerance supports your build. Scales with Endurance × 0.019 + Magic × 0.014.",
    "scaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    },
    "statusScaling": {
      "endurance": 0.0187,
      "magic": 0.0136
    }
  },
  {
    "id": "dnd_briarbind_field",
    "name": "Briarbind Field",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "price": 145,
    "source": "Druidic Field Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "control",
      "earth",
      "snare",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.035,
      "agility": 0.012
    },
    "description": "Briarbind Field deals Earth damage and may inflict Weakened. Scales with Magic × 0.035 + Agility × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ],
    "statusScaling": {
      "magic": 0.035,
      "agility": 0.012
    }
  },
  {
    "id": "dnd_star_dart_volley",
    "name": "Star Dart Volley",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Apprentice Force Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "arcane",
      "reliable",
      "missile",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "dexterity": 0.008
    },
    "description": "Star Dart Volley deals Arcane damage. Scales with Magic × 0.040 + Dexterity × 0.008.",
    "effects": [],
    "statusScaling": {
      "magic": 0.04,
      "dexterity": 0.008
    }
  },
  {
    "id": "dnd_cinder_star_burst",
    "name": "Cinder Star Burst",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 330,
    "source": "Battle Evocation Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fire",
      "burst",
      "burn",
      "magic-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.065,
      "endurance": 0.01
    },
    "description": "Cinder Star Burst deals Fire damage and may inflict Burn. Scales with Magic × 0.065 + Endurance × 0.010.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 55
      }
    ],
    "statusScaling": {
      "magic": 0.065,
      "endurance": 0.01
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "dnd_aegis_flash",
    "name": "Aegis Flash",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 160,
    "source": "Wardwright Primer",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "guard",
      "reaction",
      "arcane",
      "endurance-scaling"
    ],
    "scaling": {
      "endurance": 0.025,
      "magic": 0.015
    },
    "description": "Aegis Flash grants Guard. Scales with Endurance × 0.025 + Magic × 0.015.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "statusScaling": {
      "endurance": 0.025,
      "magic": 0.015
    }
  },
  {
    "id": "dnd_runeskin_ward",
    "name": "Runeskin Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 175,
    "source": "Wardwright Primer",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "armor",
      "guard",
      "arcane",
      "endurance-scaling"
    ],
    "scaling": {
      "endurance": 0.03,
      "magic": 0.012
    },
    "description": "Runeskin Ward grants Guard. Scales with Endurance × 0.030 + Magic × 0.012.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "statusScaling": {
      "endurance": 0.03,
      "magic": 0.012
    }
  },
  {
    "id": "dnd_formula_break",
    "name": "Formula Break",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 22,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 22,
    "price": 310,
    "source": "Counter-Magic Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "counter",
      "arcane",
      "weaken",
      "magic-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "dexterity": 0.012
    },
    "description": "Formula Break deals Arcane damage and may inflict Weakened. Scales with Magic × 0.052 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 60
      }
    ],
    "statusScaling": {
      "magic": 0.052,
      "dexterity": 0.012
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_stormline_javelin",
    "name": "Stormline Javelin",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 38,
    "price": 320,
    "source": "Tempest Evocation Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "lightning",
      "stun",
      "storm",
      "magic-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.058,
      "agility": 0.018
    },
    "description": "Stormline Javelin deals Lightning damage and may inflict Stunned. Scales with Magic × 0.058 + Agility × 0.018.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ],
    "statusScaling": {
      "magic": 0.058,
      "agility": 0.018
    },
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery required"
  },
  {
    "id": "dnd_frost_ray_thread",
    "name": "Frost Ray Thread",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 17,
    "price": 155,
    "source": "Winter Apprentice Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "ice",
      "freeze",
      "single-target",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.037,
      "dexterity": 0.01
    },
    "description": "Frost Ray Thread deals Ice damage and may inflict Frozen. Scales with Magic × 0.037 + Dexterity × 0.010.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 25
      }
    ],
    "statusScaling": {
      "magic": 0.037,
      "dexterity": 0.01
    }
  },
  {
    "id": "dnd_shadow_mirror_mask",
    "name": "Shadow Mirror Mask",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 4,
    "element": "dark",
    "target": "self",
    "power": 0,
    "price": 280,
    "source": "Illusionist Veilbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "illusion",
      "haste",
      "dark",
      "agility-scaling",
      "requires-dark-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "magic": 0.018
    },
    "description": "Shadow Mirror Mask grants Haste. Scales with Agility × 0.040 + Magic × 0.018.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.04,
      "magic": 0.018
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "dnd_menders_touch",
    "name": "Mender's Touch",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 160,
    "source": "Restoration Prayerbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "heal",
      "light",
      "support",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.03,
      "endurance": 0.014
    },
    "description": "Mender's Touch restores HP. Scales with Magic × 0.030 + Endurance × 0.014.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.32
      }
    ],
    "statusScaling": {
      "magic": 0.03,
      "endurance": 0.014
    }
  },
  {
    "id": "dnd_sunwell_prayer",
    "name": "Sunwell Prayer",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 26,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 340,
    "source": "Restoration Prayerbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "heal",
      "cleanse",
      "light",
      "support",
      "requires-light-mastery"
    ],
    "scaling": {
      "magic": 0.045,
      "endurance": 0.02
    },
    "description": "Sunwell Prayer restores HP. Scales with Magic × 0.045 + Endurance × 0.020.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.48
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "statusScaling": {
      "magic": 0.045,
      "endurance": 0.02
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "dnd_silverspeech_charm",
    "name": "Silverspeech Charm",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 8,
    "price": 150,
    "source": "Enchanter's Social Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "charm",
      "weaken",
      "support",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.026,
      "agility": 0.012
    },
    "description": "Silverspeech Charm deals Arcane damage and may inflict Weakened. Scales with Magic × 0.026 + Agility × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ],
    "statusScaling": {
      "magic": 0.026,
      "agility": 0.012
    }
  },
  {
    "id": "dnd_thornmail_bark",
    "name": "Thornmail Bark",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 5,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 290,
    "source": "Druidic Field Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "earth",
      "guard",
      "thorns",
      "endurance-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "endurance": 0.045,
      "magic": 0.012
    },
    "description": "Thornmail Bark grants Guard. Scales with Endurance × 0.045 + Magic × 0.012.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "statusScaling": {
      "endurance": 0.045,
      "magic": 0.012
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "dnd_ether_step",
    "name": "Ether Step",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 22,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 315,
    "source": "Spatial Motion Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "movement",
      "haste",
      "arcane",
      "agility-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "agility": 0.05,
      "magic": 0.018
    },
    "description": "Ether Step grants Haste. Scales with Agility × 0.050 + Magic × 0.018.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.05,
      "magic": 0.018
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_crowstorm_familiar",
    "name": "Crowstorm Familiar",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 26,
    "price": 275,
    "source": "Summoner's Pocket Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "summon",
      "wind",
      "bleed",
      "magic-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "dexterity": 0.018
    },
    "description": "Crowstorm Familiar deals Wind damage and may inflict Bleed. Scales with Magic × 0.040 + Dexterity × 0.018.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 35
      }
    ],
    "statusScaling": {
      "magic": 0.04,
      "dexterity": 0.018
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "dnd_spectral_hand_grip",
    "name": "Spectral Hand Grip",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 13,
    "price": 145,
    "source": "Utility Cantrip Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "utility",
      "arcane",
      "weaken",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.033,
      "dexterity": 0.012
    },
    "description": "Spectral Hand Grip deals Arcane damage and may inflict Weakened. Scales with Magic × 0.033 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 35
      }
    ],
    "statusScaling": {
      "magic": 0.033,
      "dexterity": 0.012
    }
  },
  {
    "id": "dnd_glass_image_dance",
    "name": "Glass Image Dance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 285,
    "source": "Illusionist Veilbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "illusion",
      "guard",
      "haste",
      "agility-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "agility": 0.035,
      "magic": 0.022
    },
    "description": "Glass Image Dance grants Guard. Scales with Agility × 0.035 + Magic × 0.022.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.035,
      "magic": 0.022
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_dream_lantern_hypnosis",
    "name": "Dream-Lantern Hypnosis",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 34,
    "cooldown": 6,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "price": 620,
    "source": "Enchanter's Social Grimoire",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "unique",
      "control",
      "stun",
      "magic-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "magic": 0.075,
      "agility": 0.015
    },
    "description": "Dream-Lantern Hypnosis deals Arcane damage and may inflict Stunned. Scales with Magic × 0.075 + Agility × 0.015.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 55
      }
    ],
    "statusScaling": {
      "magic": 0.075,
      "agility": 0.015
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_planar_doorcut",
    "name": "Planar Doorcut",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 36,
    "cooldown": 6,
    "element": "arcane",
    "target": "enemy",
    "power": 55,
    "price": 700,
    "source": "Spatial Motion Grimoire",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "unique",
      "space",
      "arcane",
      "magic-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "magic": 0.082,
      "agility": 0.024
    },
    "description": "Planar Doorcut deals Arcane damage. Scales with Magic × 0.082 + Agility × 0.024.",
    "effects": [],
    "statusScaling": {
      "magic": 0.082,
      "agility": 0.024
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_gravity_pin_seal",
    "name": "Gravity Pin Seal",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 28,
    "price": 335,
    "source": "Transmutation Field Notes",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "control",
      "earth",
      "weaken",
      "magic-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.02
    },
    "description": "Gravity Pin Seal deals Earth damage and may inflict Weakened. Scales with Magic × 0.050 + Endurance × 0.020.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.02
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "dnd_stonewall_manifest",
    "name": "Stonewall Manifest",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 5,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 300,
    "source": "Transmutation Field Notes",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "defense",
      "earth",
      "guard",
      "endurance-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "endurance": 0.055,
      "magic": 0.012
    },
    "description": "Stonewall Manifest grants Guard. Scales with Endurance × 0.055 + Magic × 0.012.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "statusScaling": {
      "endurance": 0.055,
      "magic": 0.012
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "dnd_silent_circle",
    "name": "Silent Circle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 18,
    "price": 285,
    "source": "Counter-Magic Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "silence",
      "weaken",
      "arcane",
      "magic-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "magic": 0.045,
      "dexterity": 0.012
    },
    "description": "Silent Circle deals Arcane damage and may inflict Weakened. Scales with Magic × 0.045 + Dexterity × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 55
      }
    ],
    "statusScaling": {
      "magic": 0.045,
      "dexterity": 0.012
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_blessed_triune_oath",
    "name": "Blessed Triune Oath",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 300,
    "source": "Restoration Prayerbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "blessing",
      "focus",
      "light",
      "support",
      "requires-light-mastery"
    ],
    "scaling": {
      "magic": 0.035,
      "endurance": 0.018
    },
    "description": "Blessed Triune Oath grants Focus. Scales with Magic × 0.035 + Endurance × 0.018.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "statusScaling": {
      "magic": 0.035,
      "endurance": 0.018
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "dnd_hexbrand_whisper",
    "name": "Hexbrand Whisper",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 13,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 18,
    "price": 165,
    "source": "Warlock Cursebook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "curse",
      "dark",
      "weaken",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.038,
      "dexterity": 0.008
    },
    "description": "Hexbrand Whisper deals Dark damage and may inflict Weakened. Scales with Magic × 0.038 + Dexterity × 0.008.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ],
    "statusScaling": {
      "magic": 0.038,
      "dexterity": 0.008
    }
  },
  {
    "id": "dnd_gravebell_toll",
    "name": "Gravebell Toll",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 34,
    "price": 320,
    "source": "Necromantic Bellbook",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "dark",
      "drain",
      "necromancy",
      "magic-scaling",
      "requires-dark-mastery"
    ],
    "scaling": {
      "magic": 0.058,
      "endurance": 0.012
    },
    "description": "Gravebell Toll deals Dark damage and drains HP. Scales with Magic × 0.058 + Endurance × 0.012.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.25
      }
    ],
    "statusScaling": {
      "magic": 0.058,
      "endurance": 0.012
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "dnd_bone_servitor_command",
    "name": "Bone Servitor Command",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 32,
    "cooldown": 6,
    "element": "dark",
    "target": "enemy",
    "power": 46,
    "price": 650,
    "source": "Necromantic Bellbook",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "unique",
      "summon",
      "dark",
      "drain",
      "requires-dark-mastery"
    ],
    "scaling": {
      "magic": 0.07,
      "endurance": 0.02
    },
    "description": "Bone Servitor Command deals Dark damage and drains HP. Scales with Magic × 0.070 + Endurance × 0.020.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.3
      }
    ],
    "statusScaling": {
      "magic": 0.07,
      "endurance": 0.02
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "dnd_feyluck_glimmer",
    "name": "Feyluck Glimmer",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 170,
    "source": "Fey Utility Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "luck",
      "support",
      "light",
      "agility-scaling"
    ],
    "scaling": {
      "agility": 0.03,
      "magic": 0.018
    },
    "description": "Feyluck Glimmer grants Lucky. Scales with Agility × 0.030 + Magic × 0.018.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "lucky",
        "duration": 4,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.03,
      "magic": 0.018
    }
  },
  {
    "id": "dnd_meteor_crown_invocation",
    "name": "Meteor Crown Invocation",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 70,
    "cooldown": 9,
    "element": "fire",
    "target": "enemy",
    "power": 110,
    "price": 1400,
    "source": "Cataclysm Evocation Grimoire",
    "origin": "shop",
    "acquisition": "Ultimate Shop",
    "tags": [
      "ultimate",
      "fire",
      "burn",
      "boss-killer",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.12,
      "endurance": 0.025
    },
    "description": "Meteor Crown Invocation deals Fire damage and may inflict Burn. Scales with Magic × 0.120 + Endurance × 0.025.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 5,
        "chance": 85
      }
    ],
    "statusScaling": {
      "magic": 0.12,
      "endurance": 0.025
    },
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery required"
  },
  {
    "id": "dnd_worldroot_commandment",
    "name": "Worldroot Commandment",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 68,
    "cooldown": 9,
    "element": "earth",
    "target": "enemy",
    "power": 90,
    "price": 1350,
    "source": "Druidic Field Grimoire",
    "origin": "shop",
    "acquisition": "Ultimate Shop",
    "tags": [
      "ultimate",
      "earth",
      "control",
      "weaken",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.095,
      "endurance": 0.05
    },
    "description": "Worldroot Commandment deals Earth damage and may inflict Weakened. Scales with Magic × 0.095 + Endurance × 0.050.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 85
      }
    ],
    "statusScaling": {
      "magic": 0.095,
      "endurance": 0.05
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "dnd_astral_projection_shear",
    "name": "Astral Projection Shear",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 75,
    "cooldown": 10,
    "element": "arcane",
    "target": "enemy",
    "power": 115,
    "price": 1500,
    "source": "Spatial Motion Grimoire",
    "origin": "shop",
    "acquisition": "Ultimate Shop",
    "tags": [
      "ultimate",
      "arcane",
      "space",
      "magic-scaling",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "magic": 0.13,
      "agility": 0.035
    },
    "description": "Astral Projection Shear deals Arcane damage. Scales with Magic × 0.130 + Agility × 0.035.",
    "effects": [],
    "statusScaling": {
      "magic": 0.13,
      "agility": 0.035
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_divine_word_edict",
    "name": "Divine Word Edict",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 72,
    "cooldown": 10,
    "element": "light",
    "target": "enemy",
    "power": 100,
    "price": 1450,
    "source": "Restoration Prayerbook",
    "origin": "shop",
    "acquisition": "Ultimate Shop",
    "tags": [
      "ultimate",
      "light",
      "stun",
      "holy",
      "requires-light-mastery"
    ],
    "scaling": {
      "magic": 0.115,
      "endurance": 0.025
    },
    "description": "Divine Word Edict deals Light damage and may inflict Stunned. Scales with Magic × 0.115 + Endurance × 0.025.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 65
      }
    ],
    "statusScaling": {
      "magic": 0.115,
      "endurance": 0.025
    },
    "requiredMastery": "light",
    "masterySkillId": "mastery_light",
    "masteryRequirementText": "Light Element Mastery required"
  },
  {
    "id": "dnd_time_stop_heartbeat",
    "name": "Time-Stop Heartbeat",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 80,
    "cooldown": 10,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 1550,
    "source": "Temporal Archmage Notes",
    "origin": "shop",
    "acquisition": "Ultimate Shop",
    "tags": [
      "ultimate",
      "time",
      "haste",
      "focus",
      "requires-arcane-mastery"
    ],
    "scaling": {
      "agility": 0.08,
      "magic": 0.075
    },
    "description": "Time-Stop Heartbeat grants Haste. Scales with Agility × 0.080 + Magic × 0.075.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.08,
      "magic": 0.075
    },
    "requiredMastery": "arcane",
    "masterySkillId": "mastery_arcane",
    "masteryRequirementText": "Arcane Element Mastery required"
  },
  {
    "id": "dnd_shadow_smite",
    "name": "Shadow Smite",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 35,
    "price": 300,
    "source": "Oathbreaker Technique Shelf",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "dark",
      "weapon",
      "smite",
      "strength-scaling",
      "requires-dark-mastery"
    ],
    "scaling": {
      "strength": 0.06,
      "magic": 0.018
    },
    "description": "Shadow Smite deals Dark damage and may inflict Weakened. Scales with Strength × 0.060 + Magic × 0.018.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "statusScaling": {
      "strength": 0.06,
      "magic": 0.018
    },
    "requiredMastery": "dark",
    "masterySkillId": "mastery_dark",
    "masteryRequirementText": "Dark Element Mastery required"
  },
  {
    "id": "dnd_hunter_mark_cut",
    "name": "Hunter-Mark Cut",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 20,
    "price": 165,
    "source": "Ranger Field Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "mark",
      "blade",
      "precision",
      "dexterity-scaling"
    ],
    "scaling": {
      "dexterity": 0.05,
      "agility": 0.012
    },
    "description": "Hunter-Mark Cut deals Physical damage and may inflict Bleed. Scales with Dexterity × 0.050 + Agility × 0.012.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 2,
        "chance": 35
      }
    ],
    "statusScaling": {
      "dexterity": 0.05,
      "agility": 0.012
    }
  },
  {
    "id": "dnd_thunderous_rebuke",
    "name": "Thunderous Rebuke",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 32,
    "price": 280,
    "source": "Storm Knight Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "counter",
      "lightning",
      "stun",
      "strength-scaling",
      "requires-lightning-mastery",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.045,
      "endurance": 0.025
    },
    "description": "Thunderous Rebuke deals Lightning damage and may inflict Stunned. Scales with Strength × 0.045 + Endurance × 0.025.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 30
      }
    ],
    "statusScaling": {
      "strength": 0.045,
      "endurance": 0.025
    },
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery required",
    "requiresWeaponType": [
      "Shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "dnd_mistwalker_lunge",
    "name": "Mistwalker Lunge",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 29,
    "price": 260,
    "source": "Rogue Field Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "wind",
      "movement",
      "haste",
      "agility-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.06,
      "dexterity": 0.022
    },
    "description": "Mistwalker Lunge deals Wind damage. Scales with Agility × 0.060 + Dexterity × 0.022.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "statusScaling": {
      "agility": 0.06,
      "dexterity": 0.022
    },
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery required"
  },
  {
    "id": "dnd_giant_growth_crash",
    "name": "Giant-Growth Crash",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 44,
    "price": 350,
    "source": "Titan Brawler Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "heavy",
      "earth",
      "strength",
      "endurance-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.07,
      "endurance": 0.026
    },
    "description": "Giant-Growth Crash deals Earth damage and may inflict Weakened. Scales with Strength × 0.070 + Endurance × 0.026.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 35
      }
    ],
    "statusScaling": {
      "strength": 0.07,
      "endurance": 0.026
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "dnd_war_caster_poise",
    "name": "War Caster Poise",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 360,
    "source": "Battlefield Casting Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "casting",
      "guard",
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.02,
      "endurance": 0.02
    },
    "description": "War Caster Poise supports your build. Scales with Magic × 0.020 + Endurance × 0.020.",
    "effects": [],
    "statusScaling": {
      "magic": 0.02,
      "endurance": 0.02
    }
  },
  {
    "id": "dnd_ritual_cartographer",
    "name": "Ritual Cartographer",
    "kind": "passive",
    "rank": "Common",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 220,
    "source": "Utility Cantrip Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "map",
      "ritual",
      "utility"
    ],
    "scaling": {
      "magic": 0.012,
      "dexterity": 0.012
    },
    "description": "Ritual Cartographer supports your build. Scales with Magic × 0.012 + Dexterity × 0.012.",
    "effects": [],
    "statusScaling": {
      "magic": 0.012,
      "dexterity": 0.012
    }
  },
  {
    "id": "dnd_arcane_eye_survey",
    "name": "Arcane Eye Survey",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 380,
    "source": "Diviner's Utility Manual",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "passive",
      "divination",
      "scout",
      "unlock-tracker"
    ],
    "scaling": {
      "magic": 0.018,
      "agility": 0.018
    },
    "description": "Arcane Eye Survey supports your build. Scales with Magic × 0.018 + Agility × 0.018.",
    "effects": [],
    "statusScaling": {
      "magic": 0.018,
      "agility": 0.018
    }
  },
  {
    "id": "dnd_counter_oath_stance",
    "name": "Counter-Oath Stance",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "price": 600,
    "source": "Oathbreaker Technique Shelf",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "passive",
      "counter",
      "strength",
      "endurance"
    ],
    "scaling": {
      "strength": 0.025,
      "endurance": 0.025
    },
    "description": "Counter-Oath Stance supports your build. Scales with Strength × 0.025 + Endurance × 0.025.",
    "effects": [],
    "statusScaling": {
      "strength": 0.025,
      "endurance": 0.025
    }
  },
  {
    "id": "dnd_mind_blank_mantra",
    "name": "Mind-Blank Mantra",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 640,
    "source": "Counter-Magic Codex",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "passive",
      "resist",
      "mental",
      "magic"
    ],
    "scaling": {
      "magic": 0.025,
      "endurance": 0.018
    },
    "description": "Mind-Blank Mantra supports your build. Scales with Magic × 0.025 + Endurance × 0.018.",
    "effects": [],
    "statusScaling": {
      "magic": 0.025,
      "endurance": 0.018
    }
  },
  {
    "id": "dnd_flame_ward_tolerance",
    "name": "Flame-Ward Tolerance",
    "kind": "passive",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "fire",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Resist Ward Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "fire",
      "passive"
    ],
    "scaling": {
      "endurance": 0.02,
      "magic": 0.012
    },
    "description": "Flame-Ward Tolerance supports your build. Scales with Endurance × 0.020 + Magic × 0.012.",
    "effects": [],
    "statusScaling": {
      "endurance": 0.02,
      "magic": 0.012
    }
  },
  {
    "id": "dnd_frost_ward_tolerance",
    "name": "Frost-Ward Tolerance",
    "kind": "passive",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "ice",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Resist Ward Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "ice",
      "passive"
    ],
    "scaling": {
      "endurance": 0.02,
      "magic": 0.012
    },
    "description": "Frost-Ward Tolerance supports your build. Scales with Endurance × 0.020 + Magic × 0.012.",
    "effects": [],
    "statusScaling": {
      "endurance": 0.02,
      "magic": 0.012
    }
  },
  {
    "id": "dnd_storm_ward_tolerance",
    "name": "Storm-Ward Tolerance",
    "kind": "passive",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "lightning",
    "target": "self",
    "power": 0,
    "price": 270,
    "source": "Resist Ward Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "storm",
      "passive"
    ],
    "scaling": {
      "endurance": 0.018,
      "agility": 0.018
    },
    "description": "Storm-Ward Tolerance supports your build. Scales with Endurance × 0.018 + Agility × 0.018.",
    "effects": [],
    "statusScaling": {
      "endurance": 0.018,
      "agility": 0.018
    }
  },
  {
    "id": "dnd_radiant_ward_tolerance",
    "name": "Radiant-Ward Tolerance",
    "kind": "passive",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 285,
    "source": "Resist Ward Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "light",
      "passive"
    ],
    "scaling": {
      "magic": 0.018,
      "endurance": 0.018
    },
    "description": "Radiant-Ward Tolerance supports your build. Scales with Magic × 0.018 + Endurance × 0.018.",
    "effects": [],
    "statusScaling": {
      "magic": 0.018,
      "endurance": 0.018
    }
  },
  {
    "id": "dnd_void_ward_tolerance",
    "name": "Void-Ward Tolerance",
    "kind": "passive",
    "rank": "Resist",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "price": 285,
    "source": "Resist Ward Library",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "resist",
      "dark",
      "passive"
    ],
    "scaling": {
      "magic": 0.018,
      "endurance": 0.018
    },
    "description": "Void-Ward Tolerance supports your build. Scales with Magic × 0.018 + Endurance × 0.018.",
    "effects": [],
    "statusScaling": {
      "magic": 0.018,
      "endurance": 0.018
    }
  },
  {
    "id": "dnd_heroes_feast_memory",
    "name": "Hero's Feast Memory",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 620,
    "source": "Guild Feast Codex",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "passive",
      "support",
      "food",
      "endurance"
    ],
    "scaling": {
      "endurance": 0.028,
      "magic": 0.012
    },
    "description": "Hero's Feast Memory supports your build. Scales with Endurance × 0.028 + Magic × 0.012.",
    "effects": [],
    "statusScaling": {
      "endurance": 0.028,
      "magic": 0.012
    }
  },
  {
    "id": "dnd_true_sight_focus",
    "name": "True-Sight Focus",
    "kind": "passive",
    "rank": "Unique",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 680,
    "source": "Diviner's Utility Manual",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "passive",
      "vision",
      "illusion",
      "magic"
    ],
    "scaling": {
      "magic": 0.026,
      "dexterity": 0.012
    },
    "description": "True-Sight Focus supports your build. Scales with Magic × 0.026 + Dexterity × 0.012.",
    "effects": [],
    "statusScaling": {
      "magic": 0.026,
      "dexterity": 0.012
    }
  },
  {
    "id": "dnd_iron_body_transmutation",
    "name": "Iron Body Transmutation",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 40,
    "cooldown": 7,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 720,
    "source": "Transmutation Field Notes",
    "origin": "shop",
    "acquisition": "Rare Shop",
    "tags": [
      "unique",
      "guard",
      "earth",
      "endurance",
      "requires-earth-mastery"
    ],
    "scaling": {
      "endurance": 0.08,
      "magic": 0.025
    },
    "description": "Iron Body Transmutation grants Guard. Scales with Endurance × 0.080 + Magic × 0.025.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "statusScaling": {
      "endurance": 0.08,
      "magic": 0.025
    },
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery required"
  },
  {
    "id": "mastery_fire",
    "name": "Fire Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "fire",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "fire",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "fire",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "🔥 Unlocks stronger Fire abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_ice",
    "name": "Ice Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "ice",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "ice",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "ice",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "❄️ Unlocks stronger Ice abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_lightning",
    "name": "Lightning Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "lightning",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "lightning",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "lightning",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "⚡ Unlocks stronger Lightning abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_wind",
    "name": "Wind Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "wind",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "wind",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "wind",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "🌪️ Unlocks stronger Wind abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_earth",
    "name": "Earth Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "earth",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "earth",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "⛰️ Unlocks stronger Earth abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_water",
    "name": "Water Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "water",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "water",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "water",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "💧 Unlocks stronger Water abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_light",
    "name": "Light Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "light",
    "target": "self",
    "power": 0,
    "price": 320,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "light",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "light",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "✚ Unlocks stronger Light abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_dark",
    "name": "Dark Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "price": 320,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "dark",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "dark",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "☾ Unlocks stronger Dark abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_arcane",
    "name": "Arcane Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "price": 320,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "arcane",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "arcane",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "✦ Unlocks stronger Arcane abilities and improves their Basic Ability scaling."
  },
  {
    "id": "mastery_poison",
    "name": "Poison Element Mastery",
    "kind": "passive",
    "rank": "Extra",
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "poison",
    "target": "self",
    "power": 0,
    "price": 260,
    "source": "Element Mastery Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "element-mastery",
      "poison",
      "unlock-gate",
      "basic-ability-scaling"
    ],
    "grantsElementMastery": "poison",
    "scaling": {
      "magic": 0.02,
      "endurance": 0.01
    },
    "description": "☠ Unlocks stronger Poison abilities and improves their Basic Ability scaling."
  }
];

export const SKILL_SHOP_LIBRARIES = [
  {
    "id": "advanced_skill_library",
    "name": "Advanced Skill Library",
    "description": "Excel-imported skill/spell library: Advanced Skill Library.",
    "stock": [
      "sk_twin_fang_rush",
      "sk_iron_counter",
      "sk_bleeding_crescent",
      "sk_armor_breaker",
      "sk_war_cry"
    ]
  },
  {
    "id": "advanced_spell_library",
    "name": "Advanced Spell Library",
    "description": "Excel-imported skill/spell library: Advanced Spell Library.",
    "stock": [
      "sp_fireball",
      "sp_frost_prison",
      "sp_chain_lightning",
      "sp_regeneration",
      "sp_shadow_mark"
    ]
  },
  {
    "id": "dragonkin_dragon_evolution",
    "name": "Dragonkin / Dragon Evolution",
    "description": "Excel-imported skill/spell library: Dragonkin / Dragon Evolution.",
    "stock": [
      "in_dragon_breath"
    ]
  },
  {
    "id": "dragonkin_dragon_race",
    "name": "Dragonkin / Dragon Race",
    "description": "Excel-imported skill/spell library: Dragonkin / Dragon Race.",
    "stock": [
      "in_dragon_scales"
    ]
  },
  {
    "id": "skill_library",
    "name": "Skill Library",
    "description": "Excel-imported skill/spell library: Skill Library.",
    "stock": [
      "sk_power_strike",
      "sk_shield_bash",
      "sk_hunter_step",
      "sp_minor_heal",
      "sp_mana_shield"
    ]
  },
  {
    "id": "starter_skill_skill_library",
    "name": "Starter Skill / Skill Library",
    "description": "Excel-imported skill/spell library: Starter Skill / Skill Library.",
    "stock": [
      "sk_quick_slash",
      "sk_guard_stance"
    ]
  },
  {
    "id": "starter_spell_skill_library",
    "name": "Starter Spell / Skill Library",
    "description": "Excel-imported skill/spell library: Starter Spell / Skill Library.",
    "stock": [
      "sp_fire_bolt",
      "sp_ice_needle",
      "sp_spark"
    ]
  },
  {
    "id": "v26_ability_shop",
    "name": "v26 Ability Shop",
    "description": "Excel-imported skill/spell library: v26 Ability Shop.",
    "stock": [
      "sk_quick_slash",
      "sk_guard_stance",
      "sk_power_strike",
      "sk_shield_bash",
      "sk_hunter_step",
      "sk_piercing_thrust",
      "sk_brutal_cleave",
      "sk_arrow_pin",
      "sk_open_palm_break",
      "sp_fire_bolt",
      "sp_ice_needle",
      "sp_spark",
      "sp_minor_heal",
      "sp_mana_shield",
      "sk_twin_fang_rush",
      "sk_iron_counter",
      "sk_bleeding_crescent",
      "sk_armor_breaker",
      "sk_war_cry",
      "sp_fireball",
      "sp_frost_prison",
      "sp_chain_lightning",
      "sp_regeneration",
      "sp_shadow_mark",
      "in_dragon_scales",
      "in_dragon_breath"
    ]
  },
  {
    "id": "v50_magic_shop",
    "name": "v50 Magic Shop",
    "description": "Excel-imported skill/spell library: v50 Magic Shop.",
    "stock": [
      "v50_fire_1",
      "v50_fire_2",
      "v50_fire_3",
      "v50_fire_4",
      "v50_fire_5",
      "v50_ice_1",
      "v50_ice_2",
      "v50_ice_3",
      "v50_ice_4",
      "v50_ice_5",
      "v50_lightning_1",
      "v50_lightning_2",
      "v50_lightning_3",
      "v50_lightning_4",
      "v50_lightning_5",
      "v50_earth_1",
      "v50_earth_2",
      "v50_earth_3",
      "v50_earth_4",
      "v50_earth_5",
      "v50_wind_1",
      "v50_wind_2",
      "v50_wind_3",
      "v50_wind_4",
      "v50_wind_5",
      "v50_water_1",
      "v50_water_2",
      "v50_water_3",
      "v50_water_4",
      "v50_water_5",
      "v50_holy_1",
      "v50_holy_2",
      "v50_holy_3",
      "v50_holy_4",
      "v50_holy_5",
      "v50_dark_1",
      "v50_dark_2",
      "v50_dark_3",
      "v50_dark_4",
      "v50_dark_5",
      "v50_arcane_1",
      "v50_arcane_2",
      "v50_arcane_3",
      "v50_arcane_4",
      "v50_arcane_5",
      "v50_healing_1",
      "v50_healing_2",
      "v50_healing_3",
      "v50_healing_4",
      "v50_healing_5"
    ]
  },
  {
    "id": "v50_physical_shop",
    "name": "v50 Physical Shop",
    "description": "Excel-imported skill/spell library: v50 Physical Shop.",
    "stock": [
      "v50_sword_1",
      "v50_sword_2",
      "v50_sword_3",
      "v50_sword_4",
      "v50_sword_5",
      "v50_axe_1",
      "v50_axe_2",
      "v50_axe_3",
      "v50_axe_4",
      "v50_axe_5",
      "v50_spear_1",
      "v50_spear_2",
      "v50_spear_3",
      "v50_spear_4",
      "v50_spear_5",
      "v50_dagger_1",
      "v50_dagger_2",
      "v50_dagger_3",
      "v50_dagger_4",
      "v50_dagger_5",
      "v50_bow_1",
      "v50_bow_2",
      "v50_bow_3",
      "v50_bow_4",
      "v50_bow_5",
      "v50_shield_1",
      "v50_shield_2",
      "v50_shield_3",
      "v50_shield_4",
      "v50_shield_5",
      "v50_staff_1",
      "v50_staff_2",
      "v50_staff_3",
      "v50_staff_4",
      "v50_staff_5",
      "v50_unarmed_1",
      "v50_unarmed_2",
      "v50_unarmed_3",
      "v50_unarmed_4",
      "v50_unarmed_5",
      "v50_heavy_weapon_1",
      "v50_heavy_weapon_2",
      "v50_heavy_weapon_3",
      "v50_heavy_weapon_4",
      "v50_heavy_weapon_5",
      "v50_catalyst_1",
      "v50_catalyst_2",
      "v50_catalyst_3",
      "v50_catalyst_4",
      "v50_catalyst_5"
    ]
  },
  {
    "id": "expanded_martial_techniques",
    "name": "Expanded Martial Techniques",
    "description": "Original advanced weapon skills inspired by rare class systems and hidden combat jobs.",
    "stock": [
      "ex_iron_fang_counter",
      "ex_crimson_lance_drive",
      "ex_phantom_step_cut",
      "ex_titanbreaker_swing",
      "ex_chainhook_reversal",
      "ex_dragonbreaker_kata"
    ]
  },
  {
    "id": "expanded_spell_formulas",
    "name": "Expanded Spell Formulas",
    "description": "Original extra and higher spell formulas for magic, holy, dark, and arcane builds.",
    "stock": [
      "ex_crimson_spiral_flare",
      "ex_glacier_mirror_lance",
      "ex_thunder_grimoire_clause",
      "ex_moonlit_recovery",
      "ex_arcane_thread_bind"
    ]
  },
  {
    "id": "expanded_passive_methods",
    "name": "Passive Mastery Methods",
    "description": "Passive techniques that support crafting, utility, analysis, and class discovery.",
    "stock": [
      "p_formula_sight",
      "p_monster_cuisine",
      "p_lore_appraisal_eye"
    ]
  },
  {
    "id": "expanded_resist_library",
    "name": "Resist Skill Library",
    "description": "Passive resistance skills used for weather, boss, and element-heavy progression.",
    "stock": [
      "r_flame_tolerance",
      "r_poison_resistance",
      "r_dark_null_guard",
      "r_mana_storm_grounding",
      "r_heavenly_pressure_tolerance"
    ]
  },
  {
    "id": "dnd_inspired_arcana",
    "name": "Tabletop Arcana Archive",
    "description": "Original Build Your Legend abilities inspired by classic tabletop spell roles: wards, blasts, charms, nature control, healing, divination, curses, and ultimate miracles.",
    "stock": [
      "dnd_briarbind_field",
      "dnd_star_dart_volley",
      "dnd_cinder_star_burst",
      "dnd_aegis_flash",
      "dnd_runeskin_ward",
      "dnd_formula_break",
      "dnd_stormline_javelin",
      "dnd_frost_ray_thread",
      "dnd_shadow_mirror_mask",
      "dnd_menders_touch",
      "dnd_sunwell_prayer",
      "dnd_silverspeech_charm",
      "dnd_thornmail_bark",
      "dnd_ether_step",
      "dnd_crowstorm_familiar",
      "dnd_spectral_hand_grip",
      "dnd_glass_image_dance",
      "dnd_dream_lantern_hypnosis",
      "dnd_planar_doorcut",
      "dnd_gravity_pin_seal",
      "dnd_stonewall_manifest",
      "dnd_silent_circle",
      "dnd_blessed_triune_oath",
      "dnd_hexbrand_whisper",
      "dnd_gravebell_toll",
      "dnd_bone_servitor_command",
      "dnd_feyluck_glimmer",
      "dnd_meteor_crown_invocation",
      "dnd_worldroot_commandment",
      "dnd_astral_projection_shear",
      "dnd_divine_word_edict",
      "dnd_time_stop_heartbeat",
      "dnd_shadow_smite",
      "dnd_hunter_mark_cut",
      "dnd_thunderous_rebuke",
      "dnd_mistwalker_lunge",
      "dnd_giant_growth_crash",
      "dnd_war_caster_poise",
      "dnd_ritual_cartographer",
      "dnd_arcane_eye_survey",
      "dnd_counter_oath_stance",
      "dnd_mind_blank_mantra",
      "dnd_flame_ward_tolerance",
      "dnd_frost_ward_tolerance",
      "dnd_storm_ward_tolerance",
      "dnd_radiant_ward_tolerance",
      "dnd_void_ward_tolerance",
      "dnd_heroes_feast_memory",
      "dnd_true_sight_focus",
      "dnd_iron_body_transmutation"
    ]
  },
  {
    "id": "element_mastery_codex",
    "name": "Element Mastery Codex",
    "description": "Passive element masteries required before stronger elemental abilities can be used.",
    "stock": [
      "mastery_fire",
      "mastery_ice",
      "mastery_lightning",
      "mastery_wind",
      "mastery_earth",
      "mastery_water",
      "mastery_light",
      "mastery_dark",
      "mastery_arcane",
      "mastery_poison"
    ]
  }
];
