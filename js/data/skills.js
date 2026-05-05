// Auto-polished for v0.6.1 Skill/Spell Naming Pass.
// IDs stay the same so saves and class ability links keep working.

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
    "description": "Lineage Art: Iron Human Resolve is an intrinsic bloodline ability with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 55% of the user’s maximum HP; and grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Human Resolve"
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
    "description": "Aether Elf Spark is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 11 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Elf Spark"
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
    "description": "Fang Dwarf Guard is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 7 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 2 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Dwarf Guard"
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
    "description": "Valor Beast Claw is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 35% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 35
      }
    ],
    "previousName": "Beast Claw"
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
    "description": "Lineage Art: Solar Ember Breath is a structured spell formula with a flame-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 35% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 35
      }
    ],
    "previousName": "Ember Breath"
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
    "description": "Skyrend Gale Cut is a structured spell formula with a wind-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Gale Cut"
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
    "description": "Lineage Art: Umbral Grave Drain is a structured spell formula with a dark-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also converts about 45% of damage dealt into healing. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.45
      }
    ],
    "previousName": "Grave Drain"
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
    "description": "Grave Impish Hex is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 8 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 9 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 60% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ],
    "previousName": "Impish Hex"
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
    "description": "Granite Stone Slam is a trained combat technique with a earth-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 9 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 25% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ],
    "previousName": "Stone Slam"
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
    "description": "Lineage Art: Seraphic Star Mend is a structured spell formula with a light-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 70% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.7
      }
    ],
    "previousName": "Star Mend"
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
    "description": "Rift Power Strike is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Power Strike"
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
    "description": "Ember Firebolt is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 9 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 2 turns at 25% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "previousName": "Firebolt"
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
    "description": "Iron Quick Stab is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Quick Stab"
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
    "description": "Halo Mend is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 65% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.65
      }
    ],
    "previousName": "Mend"
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
    "description": "Fang Aimed Shot is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Aimed Shot"
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
    "description": "Valor Shield Bash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 30% reliability. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 30
      }
    ],
    "previousName": "Shield Bash"
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
    "description": "Glyph Mana Edge is a hybrid martial-spell technique with a arcane theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Mana Edge"
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
    "description": "Steel Brew Tonic is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 6 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 50% of the user’s maximum HP; and restores 8 mana. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Brew Tonic"
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
    "description": "Blade Iron Palm is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 11 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 18% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ],
    "previousName": "Iron Palm"
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
    "description": "Halo Inspire is a tactical support art with a light-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns; and restores 12 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    "previousName": "Inspire"
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
    "description": "Heroic Surge — Fang Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 2 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Heroic Surge"
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
    "description": "Rune Bolt — Mana Form is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Rune Bolt"
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
    "description": "Moon Lance — Sun Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Moon Lance"
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
    "description": "Verdant Barrier — Obsidian Form is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores roughly 35% of the user’s maximum HP. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Verdant Barrier"
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
    "description": "Rune Guard — Stone Form is a trained combat technique with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Rune Guard"
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
    "description": "Forge Roar — Inferno Form is a trained combat technique with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 55% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 55
      }
    ],
    "previousName": "Forge Roar"
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
    "description": "Dire Pounce — Fang Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 13 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 55% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 55
      }
    ],
    "previousName": "Dire Pounce"
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
    "description": "Lunar Rend — Seraphic Form is a trained combat technique with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Lunar Rend"
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
    "description": "Wyvern Flame — Solar Form is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 20 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Wyvern Flame"
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
    "description": "Scale Aegis — Steel Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Scale Aegis"
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
    "description": "Storm Jolt — Thunder Form is a structured spell formula with a lightning-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 18% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ],
    "previousName": "Storm Jolt"
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
    "description": "Mist Step — Zephyr Form is a tactical support art with a wind-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 3 turns; and grants the user Focus for 2 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    "previousName": "Mist Step"
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
    "description": "Soul Leech — Eclipse Form is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also converts about 65% of damage dealt into healing. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.65
      }
    ],
    "previousName": "Soul Leech"
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
    "description": "Grave Charge — Night Form is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Grave Charge"
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
    "description": "Hellbrand Mark — Solar Form is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 50% reliability; and attempts to inflict Weakened for 3 turns at 50% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
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
    "previousName": "Hellbrand Mark"
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
    "description": "Binding Clause — Nocturne Form is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Binding Clause"
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
    "description": "Mithril Pulse — Runic Form is a trained combat technique with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Mithril Pulse"
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
    "description": "Colossus Stomp — Root Form is a trained combat technique with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 19 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 35% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ],
    "previousName": "Colossus Stomp"
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
    "description": "Seraphic Ray — Dawn Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Seraphic Ray"
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
    "description": "Omen Mend — Seraphic Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 55% of the user’s maximum HP; and grants the user Focus for 2 turns. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Omen Mend"
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
    "description": "Ice Lance — Crystal Form is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 1 turns at 22% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "previousName": "Ice Lance"
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
    "description": "Arcane Missile — Starseal Form is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Arcane Missile"
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
    "description": "Mana Shield — Runic Form is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores 8 stamina. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Mana Shield"
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
    "description": "Venom Stab — Viper Form is a trained combat technique with a poison-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 12 base power, and uses toxins, venom pressure, and weakening wounds to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Poison for 4 turns at 65% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 65
      }
    ],
    "previousName": "Venom Stab"
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
    "description": "Shadowstep — Eclipse Form is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 2 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Shadowstep"
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
    "description": "Oath of the Valor Lucky Find: Support Vow is a tactical support art with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Lucky for 5 turns; and restores 10 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    "previousName": "Lucky Find"
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
    "description": "Greater Mend — Sun Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 105% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 1.05
      }
    ],
    "previousName": "Greater Mend"
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
    "description": "Banish — Aureate Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Banish"
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
    "description": "Radiant Smite — Halo Form is a hybrid martial-spell technique with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Radiant Smite"
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
    "description": "Piercing Shot — Blade Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "previousName": "Piercing Shot"
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
    "description": "Pack Call — Fang Form is a tactical support art with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "previousName": "Pack Call"
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
    "description": "Thorn Field — Mountain Form is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Thorn Field"
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
    "description": "Iron Wall — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "previousName": "Iron Wall"
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
    "description": "Oath of the Aureate Protective Oath: Support Vow is a tactical support art with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and grants the user Focus for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Protective Oath"
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
    "description": "Fire Bomb — Cinder Form is a trained combat technique with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "previousName": "Fire Bomb"
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
    "description": "Patchwork Aid — Aether Form is a tactical support art with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ],
    "previousName": "Patchwork Aid"
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
    "description": "Toxic Cloud — Plague Form is a structured spell formula with a poison-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 13 base power, and uses toxins, venom pressure, and weakening wounds to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Poison for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 75
      }
    ],
    "previousName": "Toxic Cloud"
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
    "description": "Ki Burst — Mana Form is a trained combat technique with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Ki Burst"
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
    "description": "Stunning Palm — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ],
    "previousName": "Stunning Palm"
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
    "description": "War Chant — Aureate Form is a tactical support art with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns; and restores 10 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    "previousName": "War Chant"
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
    "description": "Dirge Of Dread — Umbral Form is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 12 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 70% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 70
      }
    ],
    "previousName": "Dirge of Dread"
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
    "description": "Oath of the Aether Exploit Lore: Support Vow is a tactical support art with a arcane theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets an enemy target, carries 10 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 60% reliability. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ],
    "previousName": "Exploit Lore"
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
    "description": "Oath of the Fang Perfect Form: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets an enemy target, carries 22 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "previousName": "Perfect Form"
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
    "description": "Rage Cleave — Valor Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 20 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "previousName": "Rage Cleave"
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
    "description": "Guarding Cut — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 2 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "previousName": "Guarding Cut"
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
    "description": "Iaido: Starfall of the Starseal Crown is a hybrid martial-spell technique with a arcane theme. As a Rare ability, it is a rare technique with specialist payoff. Mechanically, it targets an enemy target, carries 32 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "previousName": "Iaido: Starfall"
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
    "description": "Secret Art: Runic Void Fist is a trained combat technique with a arcane theme. As a Hidden ability, it is a secret technique with unusual scaling and unlock flavor. Mechanically, it targets an enemy target, carries 30 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 80% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 80
      }
    ],
    "previousName": "Void Fist"
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
    "description": "Secret Art: Aether Eclipse Edict is a structured spell formula with a arcane theme. As a Hidden ability, it is a secret technique with unusual scaling and unlock flavor. Mechanically, it targets an enemy target, carries 30 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 25 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also converts about 50% of damage dealt into healing; and attempts to inflict Weakened for 3 turns at 70% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Eclipse Edict"
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
    "description": "Fang Basic Focus is a tactical support art with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 0 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores 18 stamina; and grants the user Focus for 2 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Basic Focus"
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
    "description": "Armor Breaker — Valor Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Break, Melee, Damage, Vulnerable, Debuff, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 18 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Armor Breaker"
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
    "description": "Bleeding Crescent — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Weapon Art, Melee, Damage, Bleed, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 18 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Bleeding Crescent"
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
    "description": "War Cry — Steel Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Taunt, Bravery, Buff, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    "previousName": "War Cry"
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
    "description": "Iron Counter — Blade Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Counter, Guard, Defensive, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Iron Counter"
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
    "description": "Twin Fang Rush — Blade Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Melee, Damage, Multi-Hit, Combo, Active. Mechanically, it targets an enemy target, carries 22 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Multi-Hit",
      "Combo",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 197,
    "starting": false,
    "previousName": "Twin Fang Rush"
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
    "description": "Shadow Mark — Eclipse Form is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Dark, Curse, Marked, Vulnerable, Debuff, Active. Mechanically, it targets an enemy target, carries 26 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 23 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 45% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Marked",
      "Vulnerable",
      "Debuff",
      "Active"
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
    "previousName": "Shadow Mark"
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
    "description": "Chain Lightning — Seraphic Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Lightning, AoE, Damage, Paralysis, Multi-Hit, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Damage",
      "Paralysis",
      "Multi-Hit",
      "Active"
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
    "previousName": "Chain Lightning"
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
    "description": "Frost Prison — Crystal Form is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Ice, Control, Freeze, Debuff, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 22 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 2 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ice",
      "Control",
      "Freeze",
      "Debuff",
      "Active"
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
    "previousName": "Frost Prison"
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
    "description": "Regeneration — Steel Form is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Healing, Regeneration, Support, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 20 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Regeneration"
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
    "description": "Fireball — Cinder Form is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Fire, AoE, Damage, Burn, Burst, Active. Mechanically, it targets an enemy target, carries 22 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 20 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Fire",
      "AoE",
      "Damage",
      "Burn",
      "Burst",
      "Active"
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
    "previousName": "Fireball"
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
    "description": "Lineage Art: Blade Predator Instinct is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Beastkin Lineage library and is tagged for Intrinsic, Passive, Physical, Critical, Focus. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Predator Instinct"
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
    "description": "Oath of the Eclipse Abyssal Chain: Spell Vow is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Dark Magic Requirement library and is tagged for Magic, Dark, Curse, Control, Fear, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Control",
      "Fear",
      "Unique",
      "Active"
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
    "previousName": "Abyssal Chain"
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
    "description": "Lineage Art: Night Hellfire Affinity is a passive trait that changes how the build behaves with a dark-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Demon Lineage library and is tagged for Intrinsic, Passive, Fire, Dark, Magic. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also attempts to inflict Weakened for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    "previousName": "Hellfire Affinity"
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
    "description": "Lineage Art: Solar Dragon Breath is a structured spell formula with a flame-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dragonkin / Dragon Evolution library and is tagged for Intrinsic, Magic, Fire, AoE, Damage, Burn. Mechanically, it targets an enemy target, carries 24 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 28 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    "previousName": "Dragon Breath"
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
    "description": "Lineage Art: Steel Dragon Scales is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dragonkin / Dragon Race library and is tagged for Intrinsic, Passive, Dragon, Guard, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Dragon Scales"
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
    "description": "Lineage Art: Stone Stoneblood is a passive trait that changes how the build behaves with a earth-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dwarf Lineage library and is tagged for Intrinsic, Passive, Guard, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Stoneblood"
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
    "description": "Lineage Art: Aether Arcane Sight is a passive trait that changes how the build behaves with a arcane theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Elf Lineage library and is tagged for Intrinsic, Passive, Arcane, Utility. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Arcane",
      "Utility"
    ],
    "source": "Elf Lineage",
    "price": 0,
    "starting": false,
    "previousName": "Arcane Sight"
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
    "description": "Oath of the Phoenix World Flame Sigil: Spell Vow is a structured spell formula with a flame-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Fireball Mastery Requirement library and is tagged for Magic, Fire, Burn, AoE, Curse, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 36 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 4 turns at 75% reliability; and attempts to inflict Weakened for 4 turns at 75% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Fire",
      "Burn",
      "AoE",
      "Curse",
      "Unique",
      "Active"
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
    "previousName": "World Flame Sigil"
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
    "description": "Oath of the Valor King’s Guard: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Guardian Path Requirement library and is tagged for Physical, Guard, Counter, Defensive, Unique, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "King’s Guard"
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
    "description": "Oath of the Rift Blood Moon Reaver: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Hidden Achievement Requirement library and is tagged for Physical, Weapon Art, Bleed, Burst, Unique, Active. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 35 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Blood Moon Reaver"
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
    "description": "Oath of the Aureate Saint’s Restoration: Spell Vow is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Holy Path Requirement library and is tagged for Magic, Holy, Healing, Cleanse, Barrier, Unique, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 40 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns; and restores roughly 85% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Unique",
      "Active"
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
    "previousName": "Saint’s Restoration"
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
    "description": "Oath of the Iron Bound Blade Art: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Rare Class / Special Weapon Requirement library and is tagged for Physical, Weapon Art, True Damage, Burst, Unique, Active. Mechanically, it targets an enemy target, carries 40 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 42 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Weapon Art",
      "True Damage",
      "Burst",
      "Unique",
      "Active"
    ],
    "source": "Rare Class / Special Weapon Requirement",
    "price": 0,
    "starting": false,
    "previousName": "Soul-Bound Blade Art"
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
    "description": "Oath of the Blade Dragon Rend: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Requirement Unlock library and is tagged for Physical, Weapon Art, Burst, Damage, Piercing, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 32 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Burst",
      "Damage",
      "Piercing",
      "Unique",
      "Active"
    ],
    "source": "Requirement Unlock",
    "price": 0,
    "starting": false,
    "previousName": "Dragon Rend"
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
    "description": "Oath of the Fang Phantom Step Art: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Requirement Unlock library and is tagged for Physical, Mobility, Haste, Counter, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 28 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns; and grants the user Haste for 4 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    "previousName": "Phantom Step Art"
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
    "description": "Oath of the Night Void Gate: Spell Vow is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Secret Research Requirement library and is tagged for Magic, Arcane, Dark, Control, Banish, Unique, Active. Mechanically, it targets an enemy target, carries 40 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 48 mana and has a 6-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Arcane",
      "Dark",
      "Control",
      "Banish",
      "Unique",
      "Active"
    ],
    "source": "Secret Research Requirement",
    "price": 0,
    "starting": false,
    "previousName": "Void Gate"
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
    "description": "Rift Hunter Step is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Mobility, Haste, Focus, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns; grants the user Haste for 3 turns; and restores 12 stamina. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    "previousName": "Hunter Step"
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
    "description": "Starseal Mana Shield is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Magic, Arcane, Barrier, Guard, Defensive, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Mana Shield"
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
    "description": "Radiant Minor Heal is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Magic, Holy, Healing, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP; and restores 12 stamina. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Minor Heal"
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
    "description": "Blade Power Strike is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Melee, Damage, Burst, Break, Active. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "previousName": "Power Strike"
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
    "description": "Fang Shield Bash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Melee, Damage, Guard, Stun, Control, Active. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability; and grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Shield Bash"
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
    "description": "Lineage Art: Valor Adaptive Body is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Slime Lineage library and is tagged for Intrinsic, Passive, Slime, Evolution, Utility. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Adaptive Body"
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
    "description": "Rift Guard Stance is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Skill / Skill Library library and is tagged for Physical, Stance, Guard, Defensive, Buff, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 4 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores 12 stamina. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Guard Stance"
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
    "description": "Steel Quick Slash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Skill / Skill Library library and is tagged for Physical, Melee, Damage, Weapon Art, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "previousName": "Quick Slash"
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
    "description": "Cinder Fire Bolt is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Fire, Ranged, Damage, Burn, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
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
    "previousName": "Fire Bolt"
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
    "description": "Glacier Ice Needle is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Ice, Ranged, Damage, Freeze, Control, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 2 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Ice Needle"
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
    "description": "Dawn Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Lightning, Ranged, Damage, Paralysis, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Spark"
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
    "description": "Oath of the Seraphic Storm Crown Invocation: Spell Vow is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Storm Requirement library and is tagged for Magic, Lightning, AoE, Haste, Paralysis, Unique, Active. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 42 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 65% reliability; and grants the user Haste for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Haste",
      "Paralysis",
      "Unique",
      "Active"
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
    "previousName": "Storm Crown Invocation"
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
    "description": "Final Myth: Rift The Last King: Ultimate Evolution Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Guard, Counter, Defensive, Thorns, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 60 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    "previousName": "Aegis of the Last King"
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
    "description": "Final Myth: Aureate Astraea’s Final Benediction: Ultimate Evolution Cataclysm is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, Holy, Healing, Cleanse, Barrier, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 85 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns; restores roughly 100% of the user’s maximum HP; and restores 12 stamina. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Support",
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
    "previousName": "Astraea’s Final Benediction"
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
    "description": "Final Myth: Umbral End Of Names: Ultimate Evolution Cataclysm is a structured spell formula with a dark-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, Dark, Arcane, Curse, Weaken, Marked, Damage, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 90 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark",
      "Arcane",
      "Curse",
      "Weaken",
      "Marked",
      "Damage",
      "Active"
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
    "previousName": "Eclipse Archive: End of Names"
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
    "description": "Final Myth: Blade Splitting Lion Art: Ultimate Evolution Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Weapon Art, Burst, Critical, Piercing, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 70 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Weapon Art",
      "Burst",
      "Critical",
      "Piercing",
      "Active"
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
    "previousName": "Heaven-Splitting Lion Art"
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
    "description": "Final Myth: Phoenix Ragnarok Starfall Cataclysm: Ultimate Evolution Cataclysm is a structured spell formula with a flame-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, AoE, Fire, Arcane, Burst, Damage, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 95 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "AoE",
      "Fire",
      "Arcane",
      "Burst",
      "Damage",
      "Active"
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
    "previousName": "Ragnarok Starfall Cataclysm"
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
    "description": "Final Myth: Valor Step Godspeed Reversal: Ultimate Evolution Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Mobility, Counter, Multi-Hit, Haste, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 65 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 4 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    "previousName": "Thousand-Step Godspeed Reversal"
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
    "description": "Lineage Art: Rift Deathless Body is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Undead Lineage library and is tagged for Intrinsic, Passive, Undead, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Deathless Body"
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
    "description": "Steel Arrow Pin is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Ranged, Marked, Damage, Control. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Arrow Pin"
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
    "description": "Iron Brutal Cleave is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Melee, Damage, Break, AoE. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "previousName": "Brutal Cleave"
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
    "description": "Blade Open Palm Break is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Martial Art, Stun, Break, Melee. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "previousName": "Open Palm Break"
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
    "description": "Fang Piercing Thrust is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Melee, Piercing, Damage, Weapon Art. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Piercing Thrust"
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
    "description": "Mana Aether Wave is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Arcane. Mechanically, it targets an enemy target, carries 14 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Aether Wave"
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
    "description": "Solar Flame Wave is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Fire. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Burst",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Flame Wave"
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
    "description": "Hoarfrost Frost Wave is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Ice. Mechanically, it targets an enemy target, carries 14 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Frost Wave"
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
    "description": "Zephyr Gale Wave is a structured spell formula with a wind-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Wind. Mechanically, it targets an enemy target, carries 14 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Gale Wave"
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
    "description": "Blade Mend Wave is a structured spell formula with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Mend Wave"
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
    "description": "Dawn Radiant Wave is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Holy. Mechanically, it targets an enemy target, carries 14 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Radiant Wave"
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
    "description": "Night Shade Wave is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Dark. Mechanically, it targets an enemy target, carries 14 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Shade Wave"
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
    "description": "Terra Stone Wave is a structured spell formula with a earth-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Earth. Mechanically, it targets an enemy target, carries 14 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Stone Wave"
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
    "description": "Steel Tide Wave is a structured spell formula with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Water. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Tide Wave"
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
    "description": "Radiant Volt Wave is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Lightning. Mechanically, it targets an enemy target, carries 14 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "previousName": "Volt Wave"
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
    "description": "Thunder Aether Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Arcane. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Aether Spark"
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
    "description": "Phoenix Flame Spark is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Fire. Mechanically, it targets an enemy target, carries 10 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Starter",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Flame Spark"
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
    "description": "Winter Frost Spark is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Ice. Mechanically, it targets an enemy target, carries 10 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Frost Spark"
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
    "description": "Sky Gale Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Wind. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Gale Spark"
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
    "description": "Fulmin Mend Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Mend Spark"
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
    "description": "Halo Radiant Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Holy. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Radiant Spark"
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
    "description": "Grave Shade Spark is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Dark. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Shade Spark"
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
    "description": "Volt Stone Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Earth. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Stone Spark"
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
    "description": "Tempest Tide Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Water. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Tide Spark"
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
    "description": "Sun Volt Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Lightning. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "previousName": "Volt Spark"
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
    "description": "Aether Sigil — Starseal Form is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Arcane. Mechanically, it targets an enemy target, carries 24 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Aether Sigil"
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
    "description": "Flame Sigil — Cinder Form is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Fire. Mechanically, it targets an enemy target, carries 24 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Extra",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Flame Sigil"
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
    "description": "Frost Sigil — Glacier Form is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Ice. Mechanically, it targets an enemy target, carries 24 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Frost Sigil"
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
    "description": "Gale Sigil — Cyclone Form is a structured spell formula with a wind-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Wind. Mechanically, it targets an enemy target, carries 24 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Gale Sigil"
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
    "description": "Mend Sigil — Valor Form is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    "previousName": "Mend Sigil"
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
    "description": "Radiant Sigil — Sun Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Holy. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Radiant Sigil"
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
    "description": "Shade Sigil — Nocturne Form is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Dark. Mechanically, it targets an enemy target, carries 24 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Shade Sigil"
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
    "description": "Stone Sigil — Root Form is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Earth. Mechanically, it targets an enemy target, carries 24 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Stone Sigil"
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
    "description": "Tide Sigil — Blade Form is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Water. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Tide Sigil"
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
    "description": "Volt Sigil — Dawn Form is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Lightning. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "previousName": "Volt Sigil"
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
    "description": "Final Myth: Winter Eternal Glacier Palace: V50 Magic Cataclysm is a structured spell formula with a ice-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Ice. Mechanically, it targets an enemy target, carries 54 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Eternal Glacier Palace"
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
    "description": "Final Myth: Rift Legend Rebirth Canon: V50 Magic Cataclysm is a structured spell formula with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also restores roughly 100% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Legend Rebirth Canon"
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
    "description": "Final Myth: Nocturne Night Emperor Cataclysm: V50 Magic Cataclysm is a structured spell formula with a dark-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Dark. Mechanically, it targets an enemy target, carries 54 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Night Emperor Cataclysm"
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
    "description": "Final Myth: Iron Ocean Throne Deluge: V50 Magic Cataclysm is a structured spell formula with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Water. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Ocean Throne Deluge"
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
    "description": "Final Myth: Inferno Phoenix Crown Apocalypse: V50 Magic Cataclysm is a structured spell formula with a flame-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Fire. Mechanically, it targets an enemy target, carries 54 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Phoenix Crown Apocalypse"
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
    "description": "Final Myth: Cyclone Sky Dominion Hurricane: V50 Magic Cataclysm is a structured spell formula with a wind-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Wind. Mechanically, it targets an enemy target, carries 54 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Sky Dominion Hurricane"
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
    "description": "Final Myth: Seraphic Storm Kingdom Descent: V50 Magic Cataclysm is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Lightning. Mechanically, it targets an enemy target, carries 54 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "Storm Kingdom Descent"
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
    "description": "Final Myth: Sun World Cathedral Miracle: V50 Magic Cataclysm is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Holy. Mechanically, it targets an enemy target, carries 54 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Cathedral Miracle"
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
    "description": "Final Myth: Obsidian World Pillar Genesis: V50 Magic Cataclysm is a structured spell formula with a earth-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Earth. Mechanically, it targets an enemy target, carries 54 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Pillar Genesis"
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
    "description": "Final Myth: Runic World Script Overwrite: V50 Magic Cataclysm is a structured spell formula with a arcane theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Arcane. Mechanically, it targets an enemy target, carries 54 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "previousName": "World Script Overwrite"
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
    "description": "Oath of the Glacier Absolute Zero Seal: Spell Vow is a structured spell formula with a ice-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Ice. Mechanically, it targets an enemy target, carries 38 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Absolute Zero Seal"
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
    "description": "Oath of the Eclipse Abyss Sovereign Mark: Spell Vow is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Dark. Mechanically, it targets an enemy target, carries 38 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "tags": [
      "Magic",
      "Unique",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Abyss Sovereign Mark"
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
    "description": "Oath of the Night Abyssal Fountain Rite: Spell Vow is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Water. Mechanically, it targets an enemy target, carries 38 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Abyssal Fountain Rite"
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
    "description": "Oath of the Glyph Astral Code Archive: Spell Vow is a structured spell formula with a arcane theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Arcane. Mechanically, it targets an enemy target, carries 38 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Astral Code Archive"
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
    "description": "Oath of the Aureate Emperor Thunder Circuit: Spell Vow is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Lightning. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Emperor Thunder Circuit"
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
    "description": "Oath of the Iron Grand Vital Liturgy: Spell Vow is a structured spell formula with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 85% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Grand Vital Liturgy"
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
    "description": "Oath of the Root Kingdom Bedrock Ward: Spell Vow is a structured spell formula with a earth-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Earth. Mechanically, it targets an enemy target, carries 38 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Kingdom Bedrock Ward"
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
    "description": "Oath of the Cyclone Phantom Tempest Step: Spell Vow is a structured spell formula with a wind-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Wind. Mechanically, it targets an enemy target, carries 38 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Magic",
      "Unique",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Phantom Tempest Step"
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
    "description": "Oath of the Seraphic Saint Halo Decree: Spell Vow is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Holy. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "Saint Halo Decree"
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
    "description": "Oath of the Solar World Flame Sigil: Spell Vow keeps the previous World Flame Sigil mechanics while using the improved ranked naming style. Oath of the Inferno World Flame Sigil: Spell Vow is a structured spell formula with a flame-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Fire. Mechanically, it targets an enemy target, carries 38 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Unique",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "previousName": "World Flame Sigil"
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
    "description": "Steel Blade Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Sword. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Blade Rush"
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
    "description": "Iron Bulwark Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Shield. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Bulwark Rush"
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
    "description": "Blade Colossus Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Heavy Weapon. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Colossus Rush"
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
    "description": "Fang Focus Core Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Catalyst. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Focus Core Rush"
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
    "description": "Valor Iron Fist Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Unarmed. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Burst",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Iron Fist Rush"
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
    "description": "Rift Lancer Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Spear. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Burst",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Lancer Rush"
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
    "description": "Steel Longshot Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Bow. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Burst",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Longshot Rush"
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
    "description": "Iron Mystic Staff Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Staff. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Mystic Staff Rush"
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
    "description": "Grave Shadowfang Rush is a trained combat technique with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Dagger. Mechanically, it targets an enemy target, carries 14 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Burst",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Shadowfang Rush"
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
    "description": "Fang Waraxe Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Axe. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "previousName": "Waraxe Rush"
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
    "description": "Valor Blade Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Sword. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Blade Initiation"
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
    "description": "Rift Bulwark Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Shield. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    "previousName": "Bulwark Initiation"
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
    "description": "Steel Colossus Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Heavy Weapon. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Colossus Initiation"
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
    "description": "Iron Focus Core Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Catalyst. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Focus Core Initiation"
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
    "description": "Blade Iron Fist Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Unarmed. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Starter",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Iron Fist Initiation"
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
    "description": "Fang Lancer Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Spear. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Starter",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Lancer Initiation"
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
    "description": "Valor Longshot Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Bow. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Starter",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Longshot Initiation"
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
    "description": "Rift Mystic Staff Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Staff. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Mystic Staff Initiation"
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
    "description": "Nocturne Shadowfang Initiation is a trained combat technique with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Dagger. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Starter",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Shadowfang Initiation"
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
    "description": "Iron Waraxe Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Axe. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "previousName": "Waraxe Initiation"
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
    "description": "Blade Crest Art — Fang Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Sword. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Blade Crest Art"
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
    "description": "Bulwark Crest Art — Fang Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Shield. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Shield"
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
    "previousName": "Bulwark Crest Art"
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
    "description": "Colossus Crest Art — Valor Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Heavy Weapon. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Colossus Crest Art"
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
    "description": "Core Crest Art — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Catalyst. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Focus Core Crest Art"
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
    "description": "Fist Crest Art — Steel Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Unarmed. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Extra",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Iron Fist Crest Art"
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
    "description": "Lancer Crest Art — Iron Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Spear. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Extra",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Lancer Crest Art"
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
    "description": "Longshot Crest Art — Blade Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Bow. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Extra",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Longshot Crest Art"
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
    "description": "Staff Crest Art — Fang Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Staff. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Mystic Staff Crest Art"
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
    "description": "Shadowfang Crest Art — Night Form is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Dagger. Mechanically, it targets an enemy target, carries 24 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Extra",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Shadowfang Crest Art"
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
    "description": "Waraxe Crest Art — Rift Form is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Axe. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "previousName": "Waraxe Crest Art"
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
    "description": "Final Myth: Steel Cosmic Catalyst Surge: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Catalyst. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Cosmic Catalyst Surge"
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
    "description": "Final Myth: Iron Grand Magus Orbit: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Staff. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Grand Magus Orbit"
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
    "description": "Final Myth: Blade Heaven Piercing Phalanx: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Spear. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Heaven-Piercing Phalanx"
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
    "description": "Final Myth: Fang Mountain Crushing Finale: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Heavy Weapon. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Mountain-Crushing Finale"
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
    "description": "Final Myth: Valor Night Crowned Assassination: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Dagger. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Night-Crowned Assassination"
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
    "description": "Final Myth: Rift Starfall Arrow Dominion: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Bow. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Starfall Arrow Dominion"
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
    "description": "Final Myth: Steel Titan Rend Execution: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Axe. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Ultimate",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Titan Rend Execution"
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
    "description": "Final Myth: Iron World Bastion Protocol: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Shield. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Shield"
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
    "previousName": "World Bastion Protocol"
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
    "description": "Final Myth: Blade Worldbreaker Martial Soul: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Unarmed. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Worldbreaker Martial Soul"
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
    "description": "Final Myth: Fang Worldsplitter Edge: V50 Physical Cataclysm is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Sword. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Ultimate",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "previousName": "Worldsplitter Edge"
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
    "description": "Oath of the Valor Arcflash Conductor: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Catalyst. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Arcflash Conductor"
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
    "description": "Oath of the Rift Bloodbreak Maul: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Axe. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Bloodbreak Maul"
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
    "description": "Oath of the Steel Guardian Wall Counter: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Shield. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "tags": [
      "Physical",
      "Unique",
      "Shield"
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
    "previousName": "Guardian Wall Counter"
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
    "description": "Oath of the Iron Heavenstep Combo: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Unarmed. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Physical",
      "Unique",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Heavenstep Combo"
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
    "description": "Oath of the Blade Kingsguard Severance: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Sword. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "tags": [
      "Physical",
      "Unique",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Kingsguard Severance"
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
    "description": "Oath of the Fang Phantom Step Art: Skill Vow keeps the previous Phantom Step Art mechanics while using the improved ranked naming style. Oath of the Fang Phantom Step Art: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Dagger. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Physical",
      "Unique",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Phantom Step Art"
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
    "description": "Oath of the Valor Siegebreak Overrun: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Heavy Weapon. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Siegebreak Overrun"
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
    "description": "Oath of the Rift Skypierce Rotation: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Spear. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Skypierce Rotation"
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
    "description": "Oath of the Steel Spellstaff Breaker: Skill Vow is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Staff. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Spellstaff Breaker"
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
    "description": "Oath of the Storm Stormfeather Volley: Skill Vow is a trained combat technique with a lightning-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Bow. Mechanically, it targets an enemy target, carries 38 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Unique",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "previousName": "Stormfeather Volley"
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
  }
];

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
