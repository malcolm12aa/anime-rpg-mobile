// Auto-generated/merged for v0.5.0 Ability Linking.
// Includes legacy foundation abilities plus Excel-imported skill/spell shop libraries.

export const SKILLS = [
  {
    "id": "human_resolve",
    "name": "Human Resolve",
    "kind": "intrinsic",
    "rank": "Intrinsic",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Human Resolve is an intrinsic bloodline ability with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 55% of the user’s maximum HP; and grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "elf_spark",
    "name": "Elf Spark",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 11,
    "description": "Elf Spark is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 11 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "dwarf_guard",
    "name": "Dwarf Guard",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Dwarf Guard is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 7 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 2 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "beast_claw",
    "name": "Beast Claw",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Beast Claw is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 35% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 35
      }
    ]
  },
  {
    "id": "ember_breath",
    "name": "Ember Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Ember Breath is a structured spell formula with a flame-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 35% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 35
      }
    ]
  },
  {
    "id": "gale_cut",
    "name": "Gale Cut",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 10,
    "description": "Gale Cut is a structured spell formula with a wind-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "grave_drain",
    "name": "Grave Drain",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Grave Drain is a structured spell formula with a dark-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also converts about 45% of damage dealt into healing. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.45
      }
    ]
  },
  {
    "id": "impish_hex",
    "name": "Impish Hex",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 8,
    "description": "Impish Hex is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 8 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 9 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 60% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ]
  },
  {
    "id": "stone_slam",
    "name": "Stone Slam",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 13,
    "description": "Stone Slam is a trained combat technique with a earth-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 9 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 25% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ]
  },
  {
    "id": "star_mend",
    "name": "Star Mend",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 11,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Star Mend is a structured spell formula with a light-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 70% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.7
      }
    ]
  },
  {
    "id": "power_strike",
    "name": "Power Strike",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 13,
    "description": "Power Strike is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "firebolt",
    "name": "Firebolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 13,
    "description": "Firebolt is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 13 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 9 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 2 turns at 25% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ]
  },
  {
    "id": "quick_stab",
    "name": "Quick Stab",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Quick Stab is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "mend",
    "name": "Mend",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Mend is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 65% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.65
      }
    ]
  },
  {
    "id": "aimed_shot",
    "name": "Aimed Shot",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Aimed Shot is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "shield_bash",
    "name": "Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Shield Bash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 8 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 30% reliability. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 30
      }
    ]
  },
  {
    "id": "mana_edge",
    "name": "Mana Edge",
    "kind": "hybrid",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 12,
    "description": "Mana Edge is a hybrid martial-spell technique with a arcane theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 12 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "brew_tonic",
    "name": "Brew Tonic",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Brew Tonic is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 6 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 50% of the user’s maximum HP; and restores 8 mana. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "iron_palm",
    "name": "Iron Palm",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 11,
    "description": "Iron Palm is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets an enemy target, carries 11 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 18% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ]
  },
  {
    "id": "inspire",
    "name": "Inspire",
    "kind": "support",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Inspire is a tactical support art with a light-aspected theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns; and restores 12 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    ]
  },
  {
    "id": "heroic_surge",
    "name": "Heroic Surge",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "Heroic Surge is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 2 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "rune_bolt",
    "name": "Rune Bolt",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 17,
    "description": "Rune Bolt is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "moon_lance",
    "name": "Moon Lance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Moon Lance is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "verdant_barrier",
    "name": "Verdant Barrier",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Verdant Barrier is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores roughly 35% of the user’s maximum HP. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "rune_guard",
    "name": "Rune Guard",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Rune Guard is a trained combat technique with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "forge_roar",
    "name": "Forge Roar",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Forge Roar is a trained combat technique with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 55% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 55
      }
    ]
  },
  {
    "id": "dire_pounce",
    "name": "Dire Pounce",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "Dire Pounce is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 13 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 55% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 55
      }
    ]
  },
  {
    "id": "lunar_rend",
    "name": "Lunar Rend",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 16,
    "description": "Lunar Rend is a trained combat technique with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "wyvern_flame",
    "name": "Wyvern Flame",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 20,
    "description": "Wyvern Flame is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 20 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "scale_aegis",
    "name": "Scale Aegis",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Scale Aegis is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "storm_jolt",
    "name": "Storm Jolt",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 17,
    "description": "Storm Jolt is a structured spell formula with a lightning-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 18% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ]
  },
  {
    "id": "mist_step",
    "name": "Mist Step",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "wind",
    "target": "self",
    "power": 0,
    "description": "Mist Step is a tactical support art with a wind-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 3 turns; and grants the user Focus for 2 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    ]
  },
  {
    "id": "soul_leech",
    "name": "Soul Leech",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 16,
    "description": "Soul Leech is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also converts about 65% of damage dealt into healing. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.65
      }
    ]
  },
  {
    "id": "grave_charge",
    "name": "Grave Charge",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 17,
    "description": "Grave Charge is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "hellbrand_mark",
    "name": "Hellbrand Mark",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Hellbrand Mark is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 50% reliability; and attempts to inflict Weakened for 3 turns at 50% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
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
    ]
  },
  {
    "id": "binding_clause",
    "name": "Binding Clause",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Binding Clause is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "mithril_pulse",
    "name": "Mithril Pulse",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "Mithril Pulse is a trained combat technique with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "colossus_stomp",
    "name": "Colossus Stomp",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 19,
    "description": "Colossus Stomp is a trained combat technique with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 19 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 35% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ]
  },
  {
    "id": "seraphic_ray",
    "name": "Seraphic Ray",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Seraphic Ray is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "omen_mend",
    "name": "Omen Mend",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Omen Mend is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 55% of the user’s maximum HP; and grants the user Focus for 2 turns. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "ice_lance",
    "name": "Ice Lance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "description": "Ice Lance is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 1 turns at 22% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "arcane_missile",
    "name": "Arcane Missile",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 15,
    "description": "Arcane Missile is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "mana_shield",
    "name": "Mana Shield",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Mana Shield is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores 8 stamina. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "venom_stab",
    "name": "Venom Stab",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "poison",
    "target": "enemy",
    "power": 12,
    "description": "Venom Stab is a trained combat technique with a poison-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 12 base power, and uses toxins, venom pressure, and weakening wounds to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Poison for 4 turns at 65% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 65
      }
    ]
  },
  {
    "id": "shadowstep",
    "name": "Shadowstep",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 15,
    "description": "Shadowstep is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 2 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "lucky_find",
    "name": "Lucky Find",
    "kind": "support",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Lucky Find is a tactical support art with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 8 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Lucky for 5 turns; and restores 10 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    ]
  },
  {
    "id": "greater_mend",
    "name": "Greater Mend",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Greater Mend is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 105% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 1.05
      }
    ]
  },
  {
    "id": "banish",
    "name": "Banish",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 18,
    "description": "Banish is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 18 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 13 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "radiant_smite",
    "name": "Radiant Smite",
    "kind": "hybrid",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Radiant Smite is a hybrid martial-spell technique with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "piercing_shot",
    "name": "Piercing Shot",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 17,
    "description": "Piercing Shot is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 17 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn."
  },
  {
    "id": "pack_call",
    "name": "Pack Call",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Pack Call is a tactical support art with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 10 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "thorn_field",
    "name": "Thorn Field",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "Thorn Field is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "iron_wall",
    "name": "Iron Wall",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Iron Wall is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "protective_oath",
    "name": "Protective Oath",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 14,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Protective Oath is a tactical support art with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and grants the user Focus for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "fire_bomb",
    "name": "Fire Bomb",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "description": "Fire Bomb is a trained combat technique with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "patchwork_aid",
    "name": "Patchwork Aid",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Patchwork Aid is a tactical support art with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ]
  },
  {
    "id": "toxic_cloud",
    "name": "Toxic Cloud",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "poison",
    "target": "enemy",
    "power": 13,
    "description": "Toxic Cloud is a structured spell formula with a poison-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 13 base power, and uses toxins, venom pressure, and weakening wounds to pressure weaknesses or bypass simple defenses. It costs 14 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Poison for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "ki_burst",
    "name": "Ki Burst",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "Ki Burst is a trained combat technique with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 16 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "stunning_palm",
    "name": "Stunning Palm",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Stunning Palm is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ]
  },
  {
    "id": "war_chant",
    "name": "War Chant",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "War Chant is a tactical support art with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns; and restores 10 stamina. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    ]
  },
  {
    "id": "dirge_of_dread",
    "name": "Dirge of Dread",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 12,
    "description": "Dirge of Dread is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 12 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 12 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 70% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 70
      }
    ]
  },
  {
    "id": "exploit_lore",
    "name": "Exploit Lore",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 10,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 10,
    "description": "Exploit Lore is a tactical support art with a arcane theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets an enemy target, carries 10 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 10 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 60% reliability. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ]
  },
  {
    "id": "perfect_form",
    "name": "Perfect Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "Perfect Form is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. Mechanically, it targets an enemy target, carries 22 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity."
  },
  {
    "id": "rage_cleave",
    "name": "Rage Cleave",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 20,
    "description": "Rage Cleave is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 20 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round."
  },
  {
    "id": "guarding_cut",
    "name": "Guarding Cut",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 15,
    "description": "Guarding Cut is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. Mechanically, it targets an enemy target, carries 15 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 2 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "iaido_starfall",
    "name": "Iaido: Starfall",
    "kind": "hybrid",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 32,
    "description": "Iaido: Starfall is a hybrid martial-spell technique with a arcane theme. As a Rare ability, it is a rare technique with specialist payoff. Mechanically, it targets an enemy target, carries 32 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears."
  },
  {
    "id": "void_fist",
    "name": "Void Fist",
    "kind": "skill",
    "rank": "Hidden",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Void Fist is a trained combat technique with a arcane theme. As a Hidden ability, it is a secret technique with unusual scaling and unlock flavor. Mechanically, it targets an enemy target, carries 30 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 80% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 80
      }
    ]
  },
  {
    "id": "eclipse_edict",
    "name": "Eclipse Edict",
    "kind": "spell",
    "rank": "Hidden",
    "resource": "mana",
    "cost": 25,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Eclipse Edict is a structured spell formula with a arcane theme. As a Hidden ability, it is a secret technique with unusual scaling and unlock flavor. Mechanically, it targets an enemy target, carries 30 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 25 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also converts about 50% of damage dealt into healing; and attempts to inflict Weakened for 3 turns at 70% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "basic_focus",
    "name": "Basic Focus",
    "kind": "support",
    "rank": "Common",
    "resource": "stamina",
    "cost": 0,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Basic Focus is a tactical support art with a martial theme. As a Common ability, it is easy to fit into early builds. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 0 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores 18 stamina; and grants the user Focus for 2 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_armor_breaker",
    "name": "Armor Breaker",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Armor Breaker is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Break, Melee, Damage, Vulnerable, Debuff, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 18 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_bleeding_crescent",
    "name": "Bleeding Crescent",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Bleeding Crescent is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Weapon Art, Melee, Damage, Bleed, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 18 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 3 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_war_cry",
    "name": "War Cry",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "War Cry is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Taunt, Bravery, Buff, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It is a strong utility pick for longer dungeon runs where survival and rewards matter as much as raw damage.",
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
    "starting": false
  },
  {
    "id": "sk_iron_counter",
    "name": "Iron Counter",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Iron Counter is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Counter, Guard, Defensive, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_twin_fang_rush",
    "name": "Twin Fang Rush",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "Twin Fang Rush is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Skill Library library and is tagged for Physical, Melee, Damage, Multi-Hit, Combo, Active. Mechanically, it targets an enemy target, carries 22 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "starting": false
  },
  {
    "id": "sp_shadow_mark",
    "name": "Shadow Mark",
    "kind": "spell",
    "rank": "Extra",
    "tier": 5,
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 26,
    "description": "Shadow Mark is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Dark, Curse, Marked, Vulnerable, Debuff, Active. Mechanically, it targets an enemy target, carries 26 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 23 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 3 turns at 45% reliability. It rewards players who weaken the target first, then follow up with a heavier class skill.",
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
    ]
  },
  {
    "id": "sp_chain_lightning",
    "name": "Chain Lightning",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 24,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Chain Lightning is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Lightning, AoE, Damage, Paralysis, Multi-Hit, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_frost_prison",
    "name": "Frost Prison",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 22,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "Frost Prison is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Ice, Control, Freeze, Debuff, Active. Mechanically, it targets an enemy target, carries 24 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 22 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 2 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_regeneration",
    "name": "Regeneration",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Regeneration is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Healing, Regeneration, Support, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 20 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "sp_fireball",
    "name": "Fireball",
    "kind": "spell",
    "rank": "Extra",
    "tier": 7,
    "resource": "mana",
    "cost": 20,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 22,
    "description": "Fireball is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the Advanced Spell Library library and is tagged for Magic, Fire, AoE, Damage, Burn, Burst, Active. Mechanically, it targets an enemy target, carries 22 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 20 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    ]
  },
  {
    "id": "in_predator_instinct",
    "name": "Predator Instinct",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Predator Instinct is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Beastkin Lineage library and is tagged for Intrinsic, Passive, Physical, Critical, Focus. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Focus for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_abyssal_chain",
    "name": "Abyssal Chain",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 34,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 36,
    "description": "Abyssal Chain is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Dark Magic Requirement library and is tagged for Magic, Dark, Curse, Control, Fear, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "in_hellfire_affinity",
    "name": "Hellfire Affinity",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "description": "Hellfire Affinity is a passive trait that changes how the build behaves with a dark-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Demon Lineage library and is tagged for Intrinsic, Passive, Fire, Dark, Magic. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also attempts to inflict Weakened for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    ]
  },
  {
    "id": "in_dragon_breath",
    "name": "Dragon Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "tier": 5,
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "Dragon Breath is a structured spell formula with a flame-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dragonkin / Dragon Evolution library and is tagged for Intrinsic, Magic, Fire, AoE, Damage, Burn. Mechanically, it targets an enemy target, carries 24 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 28 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    ]
  },
  {
    "id": "in_dragon_scales",
    "name": "Dragon Scales",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Dragon Scales is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dragonkin / Dragon Race library and is tagged for Intrinsic, Passive, Dragon, Guard, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "in_stoneblood",
    "name": "Stoneblood",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Stoneblood is a passive trait that changes how the build behaves with a earth-aspected theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Dwarf Lineage library and is tagged for Intrinsic, Passive, Guard, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "in_arcane_sight",
    "name": "Arcane Sight",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Arcane Sight is a passive trait that changes how the build behaves with a arcane theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Elf Lineage library and is tagged for Intrinsic, Passive, Arcane, Utility. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Arcane",
      "Utility"
    ],
    "source": "Elf Lineage",
    "price": 0,
    "starting": false
  },
  {
    "id": "sp_world_flame_sigil",
    "name": "World Flame Sigil",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 36,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 36,
    "description": "World Flame Sigil is a structured spell formula with a flame-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Fireball Mastery Requirement library and is tagged for Magic, Fire, Burn, AoE, Curse, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 36 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 4 turns at 75% reliability; and attempts to inflict Weakened for 4 turns at 75% reliability. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
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
    ]
  },
  {
    "id": "sk_kings_guard",
    "name": "King’s Guard",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "King’s Guard is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Guardian Path Requirement library and is tagged for Physical, Guard, Counter, Defensive, Unique, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "sk_blood_moon_reaver",
    "name": "Blood Moon Reaver",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 35,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Blood Moon Reaver is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Hidden Achievement Requirement library and is tagged for Physical, Weapon Art, Bleed, Burst, Unique, Active. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 35 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Bleed for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_saints_restoration",
    "name": "Saint’s Restoration",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 40,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Saint’s Restoration is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Holy Path Requirement library and is tagged for Magic, Holy, Healing, Cleanse, Barrier, Unique, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 40 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns; and restores roughly 85% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_soul_bound_blade_art",
    "name": "Soul-Bound Blade Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 2,
    "resource": "stamina",
    "cost": 42,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 40,
    "description": "Soul-Bound Blade Art is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Rare Class / Special Weapon Requirement library and is tagged for Physical, Weapon Art, True Damage, Burst, Unique, Active. Mechanically, it targets an enemy target, carries 40 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 42 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
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
    "starting": false
  },
  {
    "id": "sk_dragon_rend",
    "name": "Dragon Rend",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 32,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "Dragon Rend is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Requirement Unlock library and is tagged for Physical, Weapon Art, Burst, Damage, Piercing, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 32 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "starting": false
  },
  {
    "id": "sk_phantom_step_art",
    "name": "Phantom Step Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "Phantom Step Art is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Requirement Unlock library and is tagged for Physical, Mobility, Haste, Counter, Unique, Active. Mechanically, it targets an enemy target, carries 36 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 28 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns; and grants the user Haste for 4 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    ]
  },
  {
    "id": "sp_void_gate",
    "name": "Void Gate",
    "kind": "spell",
    "rank": "Unique",
    "tier": 2,
    "resource": "mana",
    "cost": 48,
    "cooldown": 6,
    "element": "dark",
    "target": "enemy",
    "power": 40,
    "description": "Void Gate is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Secret Research Requirement library and is tagged for Magic, Arcane, Dark, Control, Banish, Unique, Active. Mechanically, it targets an enemy target, carries 40 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 48 mana and has a 6-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
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
    "starting": false
  },
  {
    "id": "sk_hunter_step",
    "name": "Hunter Step",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Hunter Step is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Mobility, Haste, Focus, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 3 turns; grants the user Haste for 3 turns; and restores 12 stamina. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    ]
  },
  {
    "id": "sp_mana_shield",
    "name": "Mana Shield",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Mana Shield is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Magic, Arcane, Barrier, Guard, Defensive, Buff, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 14 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "sp_minor_heal",
    "name": "Minor Heal",
    "kind": "spell",
    "rank": "Common",
    "tier": 9,
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Minor Heal is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Magic, Holy, Healing, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 12 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP; and restores 12 stamina. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "sk_power_strike",
    "name": "Power Strike",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Power Strike is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Melee, Damage, Burst, Break, Active. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    "starting": false
  },
  {
    "id": "sk_shield_bash",
    "name": "Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Shield Bash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Skill Library library and is tagged for Physical, Melee, Damage, Guard, Stun, Control, Active. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability; and grants the user Guard for 3 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "in_adaptive_body",
    "name": "Adaptive Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Adaptive Body is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Slime Lineage library and is tagged for Intrinsic, Passive, Slime, Evolution, Utility. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. Its value comes from timing, setup, and the passive pressure it adds to your build rather than direct damage. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Slime",
      "Evolution",
      "Utility"
    ],
    "source": "Slime Lineage",
    "price": 0,
    "starting": false
  },
  {
    "id": "sk_guard_stance",
    "name": "Guard Stance",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 4,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Guard Stance is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Skill / Skill Library library and is tagged for Physical, Stance, Guard, Defensive, Buff, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 4 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns; and restores 12 stamina. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "sk_quick_slash",
    "name": "Quick Slash",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Quick Slash is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Skill / Skill Library library and is tagged for Physical, Melee, Damage, Weapon Art, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 7 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Weapon Art",
      "Active"
    ],
    "source": "Starter Skill / Skill Library",
    "price": 77,
    "starting": true
  },
  {
    "id": "sp_fire_bolt",
    "name": "Fire Bolt",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "Fire Bolt is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Fire, Ranged, Damage, Burn, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 3 turns at 45% reliability. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
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
    ]
  },
  {
    "id": "sp_ice_needle",
    "name": "Ice Needle",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "Ice Needle is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Ice, Ranged, Damage, Freeze, Control, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 8 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Freeze for 2 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_spark",
    "name": "Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the Starter Spell / Skill Library library and is tagged for Magic, Lightning, Ranged, Damage, Paralysis, Active. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_storm_crown_invocation",
    "name": "Storm Crown Invocation",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 42,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Storm Crown Invocation is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the Storm Requirement library and is tagged for Magic, Lightning, AoE, Haste, Paralysis, Unique, Active. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 42 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 65% reliability; and grants the user Haste for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_aegis_last_king",
    "name": "Aegis of the Last King",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 60,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Aegis of the Last King is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Guard, Counter, Defensive, Thorns, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 60 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "sp_astraea_final_benediction",
    "name": "Astraea’s Final Benediction",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 85,
    "cooldown": 9,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Astraea’s Final Benediction is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, Holy, Healing, Cleanse, Barrier, Support, Active. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 85 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns; restores roughly 100% of the user’s maximum HP; and restores 12 stamina. It gives the build another tactical option without replacing the core race/job identity.",
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
        "scale": 1.0
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "sp_eclipse_archive_end_names",
    "name": "Eclipse Archive: End of Names",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 90,
    "cooldown": 9,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "Eclipse Archive: End of Names is a structured spell formula with a dark-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, Dark, Arcane, Curse, Weaken, Marked, Damage, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 90 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Weakened for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_heaven_splitting_lion_art",
    "name": "Heaven-Splitting Lion Art",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 70,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Heaven-Splitting Lion Art is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Weapon Art, Burst, Critical, Piercing, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 70 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Focus for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sp_ragnarok_starfall_cataclysm",
    "name": "Ragnarok Starfall Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 95,
    "cooldown": 9,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "Ragnarok Starfall Cataclysm is a structured spell formula with a flame-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Magic, Ultimate, AoE, Fire, Arcane, Burst, Damage, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 95 mana and has a 9-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Burn for 4 turns at 75% reliability. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_thousand_step_godspeed_reversal",
    "name": "Thousand-Step Godspeed Reversal",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 65,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Thousand-Step Godspeed Reversal is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the Ultimate Evolution library and is tagged for Physical, Ultimate, Mobility, Counter, Multi-Hit, Haste, Active. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 65 stamina and has a 8-turn cooldown, so it should be timed around your resource flow. It also grants the user Haste for 4 turns. It supports evasive play by improving momentum, positioning, or follow-up speed.",
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
    ]
  },
  {
    "id": "in_deathless_body",
    "name": "Deathless Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Deathless Body is a passive trait that changes how the build behaves with a martial theme. As an Intrinsic ability, it is tied directly to bloodline identity. It comes from the Undead Lineage library and is tagged for Intrinsic, Passive, Undead, Defensive. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It does not spend an active resource and instead functions through build state, positioning, or passive conditions. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "sk_arrow_pin",
    "name": "Arrow Pin",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Arrow Pin is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Ranged, Marked, Damage, Control. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 12 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ranged",
      "Marked",
      "Damage",
      "Control"
    ],
    "source": "v26 Ability Shop",
    "price": 124,
    "starting": false
  },
  {
    "id": "sk_brutal_cleave",
    "name": "Brutal Cleave",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Brutal Cleave is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Melee, Damage, Break, AoE. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 14 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Break",
      "AoE"
    ],
    "source": "v26 Ability Shop",
    "price": 130,
    "starting": false
  },
  {
    "id": "sk_open_palm_break",
    "name": "Open Palm Break",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Open Palm Break is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Martial Art, Stun, Break, Melee. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also attempts to inflict Stun for 1 turns at 45% reliability. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
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
    ]
  },
  {
    "id": "sk_piercing_thrust",
    "name": "Piercing Thrust",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Piercing Thrust is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v26 Ability Shop library and is tagged for Physical, Melee, Piercing, Damage, Weapon Art. Mechanically, it targets an enemy target, carries 12 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_arcane_2",
    "name": "Aether Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 14,
    "description": "Aether Wave is a structured spell formula with a arcane theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Arcane. Mechanically, it targets an enemy target, carries 14 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_fire_2",
    "name": "Flame Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Flame Wave is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Fire. Mechanically, it targets an enemy target, carries 14 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Burst",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_ice_2",
    "name": "Frost Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 14,
    "description": "Frost Wave is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Ice. Mechanically, it targets an enemy target, carries 14 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_wind_2",
    "name": "Gale Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 14,
    "description": "Gale Wave is a structured spell formula with a wind-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Wind. Mechanically, it targets an enemy target, carries 14 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_healing_2",
    "name": "Mend Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Mend Wave is a structured spell formula with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "v50_holy_2",
    "name": "Radiant Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "Radiant Wave is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Holy. Mechanically, it targets an enemy target, carries 14 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_dark_2",
    "name": "Shade Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "Shade Wave is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Dark. Mechanically, it targets an enemy target, carries 14 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_earth_2",
    "name": "Stone Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "Stone Wave is a structured spell formula with a earth-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Earth. Mechanically, it targets an enemy target, carries 14 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_water_2",
    "name": "Tide Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Tide Wave is a structured spell formula with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Water. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_lightning_2",
    "name": "Volt Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "Volt Wave is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Burst, Lightning. Mechanically, it targets an enemy target, carries 14 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 11 mana and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Burst",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_arcane_1",
    "name": "Aether Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Aether Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Arcane. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_fire_1",
    "name": "Flame Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "Flame Spark is a structured spell formula with a flame-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Fire. Mechanically, it targets an enemy target, carries 10 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Starter",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_ice_1",
    "name": "Frost Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "Frost Spark is a structured spell formula with a ice-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Ice. Mechanically, it targets an enemy target, carries 10 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_wind_1",
    "name": "Gale Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Gale Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Wind. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_healing_1",
    "name": "Mend Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "self",
    "power": 0,
    "description": "Mend Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It also restores roughly 45% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "v50_holy_1",
    "name": "Radiant Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Radiant Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Holy. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_dark_1",
    "name": "Shade Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Shade Spark is a structured spell formula with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Dark. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_earth_1",
    "name": "Stone Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Stone Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Earth. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_water_1",
    "name": "Tide Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "Tide Spark is a structured spell formula with a lightning-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Water. Mechanically, it targets an enemy target, carries 10 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_lightning_1",
    "name": "Volt Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "Volt Spark is a structured spell formula with a light-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Magic Shop library and is tagged for Magic, Starter, Lightning. Mechanically, it targets an enemy target, carries 10 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 7 mana and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Starter",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_arcane_3",
    "name": "Aether Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 24,
    "description": "Aether Sigil is a structured spell formula with a arcane theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Arcane. Mechanically, it targets an enemy target, carries 24 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_fire_3",
    "name": "Flame Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "Flame Sigil is a structured spell formula with a flame-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Fire. Mechanically, it targets an enemy target, carries 24 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Extra",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_ice_3",
    "name": "Frost Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "Frost Sigil is a structured spell formula with a ice-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Ice. Mechanically, it targets an enemy target, carries 24 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_wind_3",
    "name": "Gale Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 24,
    "description": "Gale Sigil is a structured spell formula with a wind-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Wind. Mechanically, it targets an enemy target, carries 24 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_healing_3",
    "name": "Mend Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Mend Sigil is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It also restores roughly 60% of the user’s maximum HP. It is strongest when saved for a dangerous turn instead of being spent as soon as damage appears.",
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
    ]
  },
  {
    "id": "v50_holy_3",
    "name": "Radiant Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Radiant Sigil is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Holy. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_dark_3",
    "name": "Shade Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "Shade Sigil is a structured spell formula with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Dark. Mechanically, it targets an enemy target, carries 24 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_earth_3",
    "name": "Stone Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 24,
    "description": "Stone Sigil is a structured spell formula with a earth-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Earth. Mechanically, it targets an enemy target, carries 24 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_water_3",
    "name": "Tide Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Tide Sigil is a structured spell formula with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Water. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_lightning_3",
    "name": "Volt Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Volt Sigil is a structured spell formula with a light-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Magic Shop library and is tagged for Magic, Extra, Lightning. Mechanically, it targets an enemy target, carries 24 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 16 mana and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Extra",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_ice_5",
    "name": "Eternal Glacier Palace",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 54,
    "description": "Eternal Glacier Palace is a structured spell formula with a ice-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Ice. Mechanically, it targets an enemy target, carries 54 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_healing_5",
    "name": "Legend Rebirth Canon",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Legend Rebirth Canon is a structured spell formula with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It also restores roughly 100% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
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
        "scale": 1.0
      }
    ]
  },
  {
    "id": "v50_dark_5",
    "name": "Night Emperor Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "Night Emperor Cataclysm is a structured spell formula with a dark-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Dark. Mechanically, it targets an enemy target, carries 54 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_water_5",
    "name": "Ocean Throne Deluge",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Ocean Throne Deluge is a structured spell formula with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Water. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_fire_5",
    "name": "Phoenix Crown Apocalypse",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "Phoenix Crown Apocalypse is a structured spell formula with a flame-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Fire. Mechanically, it targets an enemy target, carries 54 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_wind_5",
    "name": "Sky Dominion Hurricane",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 54,
    "description": "Sky Dominion Hurricane is a structured spell formula with a wind-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Wind. Mechanically, it targets an enemy target, carries 54 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_lightning_5",
    "name": "Storm Kingdom Descent",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "Storm Kingdom Descent is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Lightning. Mechanically, it targets an enemy target, carries 54 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_holy_5",
    "name": "World Cathedral Miracle",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "World Cathedral Miracle is a structured spell formula with a light-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Holy. Mechanically, it targets an enemy target, carries 54 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_earth_5",
    "name": "World Pillar Genesis",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 54,
    "description": "World Pillar Genesis is a structured spell formula with a earth-aspected theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Earth. Mechanically, it targets an enemy target, carries 54 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_arcane_5",
    "name": "World Script Overwrite",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 54,
    "description": "World Script Overwrite is a structured spell formula with a arcane theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Magic Shop library and is tagged for Magic, Ultimate, Arcane. Mechanically, it targets an enemy target, carries 54 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 34 mana and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Ultimate",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_ice_4",
    "name": "Absolute Zero Seal",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 38,
    "description": "Absolute Zero Seal is a structured spell formula with a ice-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Ice. Mechanically, it targets an enemy target, carries 38 base power, and uses cold, binding force, and brittle control to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_dark_4",
    "name": "Abyss Sovereign Mark",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "Abyss Sovereign Mark is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Dark. Mechanically, it targets an enemy target, carries 38 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It rewards players who weaken the target first, then follow up with a heavier class skill.",
    "tags": [
      "Magic",
      "Unique",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_water_4",
    "name": "Abyssal Fountain Rite",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "Abyssal Fountain Rite is a structured spell formula with a dark-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Water. Mechanically, it targets an enemy target, carries 38 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_arcane_4",
    "name": "Astral Code Archive",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 38,
    "description": "Astral Code Archive is a structured spell formula with a arcane theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Arcane. Mechanically, it targets an enemy target, carries 38 base power, and uses runes, mana geometry, and raw spell formulae to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_lightning_4",
    "name": "Emperor Thunder Circuit",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Emperor Thunder Circuit is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Lightning. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_healing_4",
    "name": "Grand Vital Liturgy",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Grand Vital Liturgy is a structured spell formula with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Healing. Mechanically, it targets the user as a non-damaging setup tool focused on tempo, survival, or follow-up advantage. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It also restores roughly 85% of the user’s maximum HP. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_earth_4",
    "name": "Kingdom Bedrock Ward",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 38,
    "description": "Kingdom Bedrock Ward is a structured spell formula with a earth-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Earth. Mechanically, it targets an enemy target, carries 38 base power, and uses stone weight, roots, armor, and grounded force to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_wind_4",
    "name": "Phantom Tempest Step",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 38,
    "description": "Phantom Tempest Step is a structured spell formula with a wind-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Wind. Mechanically, it targets an enemy target, carries 38 base power, and uses footwork, cutting air, and sudden movement to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Magic",
      "Unique",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_holy_4",
    "name": "Saint Halo Decree",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Saint Halo Decree is a structured spell formula with a light-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Holy. Mechanically, it targets an enemy target, carries 38 base power, and uses radiance, protection, purification, and resolve to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Magic",
      "Unique",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_fire_4",
    "name": "World Flame Sigil",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 38,
    "description": "World Flame Sigil is a structured spell formula with a flame-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Magic Shop library and is tagged for Magic, Unique, Fire. Mechanically, it targets an enemy target, carries 38 base power, and uses heat, pressure, smoke, and lingering burn to pressure weaknesses or bypass simple defenses. It costs 24 mana and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is especially useful against enemies weak to heat or when you need burn pressure over several turns.",
    "tags": [
      "Magic",
      "Unique",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_sword_2",
    "name": "Blade Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Blade Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Sword. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_shield_2",
    "name": "Bulwark Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Bulwark Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Shield. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_heavy_weapon_2",
    "name": "Colossus Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Colossus Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Heavy Weapon. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_catalyst_2",
    "name": "Focus Core Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Focus Core Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Catalyst. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_unarmed_2",
    "name": "Iron Fist Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Iron Fist Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Unarmed. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Burst",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_spear_2",
    "name": "Lancer Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Lancer Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Spear. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Burst",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_bow_2",
    "name": "Longshot Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Longshot Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Bow. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Burst",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_staff_2",
    "name": "Mystic Staff Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Mystic Staff Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Staff. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_dagger_2",
    "name": "Shadowfang Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "Shadowfang Rush is a trained combat technique with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Dagger. Mechanically, it targets an enemy target, carries 14 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Burst",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_axe_2",
    "name": "Waraxe Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "Waraxe Rush is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Burst, Axe. Mechanically, it targets an enemy target, carries 14 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 10 stamina and has a 2-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Burst",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_sword_1",
    "name": "Blade Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Blade Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Sword. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_shield_1",
    "name": "Bulwark Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Bulwark Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Shield. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_heavy_weapon_1",
    "name": "Colossus Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Colossus Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Heavy Weapon. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_catalyst_1",
    "name": "Focus Core Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Focus Core Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Catalyst. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_unarmed_1",
    "name": "Iron Fist Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Iron Fist Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Unarmed. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Starter",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_spear_1",
    "name": "Lancer Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Lancer Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Spear. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Starter",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_bow_1",
    "name": "Longshot Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Longshot Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Bow. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Starter",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_staff_1",
    "name": "Mystic Staff Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Mystic Staff Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Staff. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_dagger_1",
    "name": "Shadowfang Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Shadowfang Initiation is a trained combat technique with a dark-aspected theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Dagger. Mechanically, it targets an enemy target, carries 10 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Starter",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_axe_1",
    "name": "Waraxe Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Waraxe Initiation is a trained combat technique with a martial theme. As a Common ability, it is easy to fit into early builds. It comes from the v50 Physical Shop library and is tagged for Physical, Starter, Axe. Mechanically, it targets an enemy target, carries 10 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 6 stamina and has a 1-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Starter",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_sword_3",
    "name": "Blade Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Blade Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Sword. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_shield_3",
    "name": "Bulwark Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Bulwark Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Shield. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 3 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_heavy_weapon_3",
    "name": "Colossus Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Colossus Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Heavy Weapon. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_catalyst_3",
    "name": "Focus Core Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Focus Core Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Catalyst. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_unarmed_3",
    "name": "Iron Fist Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Iron Fist Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Unarmed. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Extra",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_spear_3",
    "name": "Lancer Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Lancer Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Spear. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Extra",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_bow_3",
    "name": "Longshot Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Longshot Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Bow. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Extra",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_staff_3",
    "name": "Mystic Staff Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Mystic Staff Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Staff. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_dagger_3",
    "name": "Shadowfang Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "Shadowfang Crest Art is a trained combat technique with a dark-aspected theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Dagger. Mechanically, it targets an enemy target, carries 24 base power, and uses shadow, fear, curses, and life-draining pressure to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Extra",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_axe_3",
    "name": "Waraxe Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "Waraxe Crest Art is a trained combat technique with a martial theme. As an Extra ability, it is strong enough to define a mid-game combat pattern. It comes from the v50 Physical Shop library and is tagged for Physical, Extra, Axe. Mechanically, it targets an enemy target, carries 24 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 15 stamina and has a 3-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Extra",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_catalyst_5",
    "name": "Cosmic Catalyst Surge",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Cosmic Catalyst Surge is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Catalyst. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_staff_5",
    "name": "Grand Magus Orbit",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Grand Magus Orbit is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Staff. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_spear_5",
    "name": "Heaven-Piercing Phalanx",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Heaven-Piercing Phalanx is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Spear. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_heavy_weapon_5",
    "name": "Mountain-Crushing Finale",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Mountain-Crushing Finale is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Heavy Weapon. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_dagger_5",
    "name": "Night-Crowned Assassination",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Night-Crowned Assassination is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Dagger. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_bow_5",
    "name": "Starfall Arrow Dominion",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Starfall Arrow Dominion is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Bow. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_axe_5",
    "name": "Titan Rend Execution",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Titan Rend Execution is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Axe. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Ultimate",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_shield_5",
    "name": "World Bastion Protocol",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "World Bastion Protocol is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Shield. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It gives the build another tactical option without replacing the core race/job identity.",
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
    ]
  },
  {
    "id": "v50_unarmed_5",
    "name": "Worldbreaker Martial Soul",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Worldbreaker Martial Soul is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Unarmed. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Ultimate",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_sword_5",
    "name": "Worldsplitter Edge",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "Worldsplitter Edge is a trained combat technique with a martial theme. As an Ultimate ability, it is a capstone-grade technique meant to feel decisive. It comes from the v50 Physical Shop library and is tagged for Physical, Ultimate, Sword. Mechanically, it targets an enemy target, carries 54 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 30 stamina and has a 5-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It fits aggressive stamina rotations where the goal is to keep pressure on the enemy every round.",
    "tags": [
      "Physical",
      "Ultimate",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_catalyst_4",
    "name": "Arcflash Conductor",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Arcflash Conductor is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Catalyst. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_axe_4",
    "name": "Bloodbreak Maul",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Bloodbreak Maul is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Axe. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_shield_4",
    "name": "Guardian Wall Counter",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Guardian Wall Counter is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Shield. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It also grants the user Guard for 4 turns. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
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
    ]
  },
  {
    "id": "v50_unarmed_4",
    "name": "Heavenstep Combo",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Heavenstep Combo is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Unarmed. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Physical",
      "Unique",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_sword_4",
    "name": "Kingsguard Severance",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Kingsguard Severance is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Sword. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It is best used when an enemy is about to hit hard, letting you turn defense into tempo.",
    "tags": [
      "Physical",
      "Unique",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_dagger_4",
    "name": "Phantom Step Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Phantom Step Art is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Dagger. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It supports evasive play by improving momentum, positioning, or follow-up speed.",
    "tags": [
      "Physical",
      "Unique",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_heavy_weapon_4",
    "name": "Siegebreak Overrun",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Siegebreak Overrun is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Heavy Weapon. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_spear_4",
    "name": "Skypierce Rotation",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Skypierce Rotation is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Spear. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_staff_4",
    "name": "Spellstaff Breaker",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "Spellstaff Breaker is a trained combat technique with a martial theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Staff. Mechanically, it targets an enemy target, carries 38 base power, and uses body mechanics, weapon leverage, and timing to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It gives the build another tactical option without replacing the core race/job identity.",
    "tags": [
      "Physical",
      "Unique",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_bow_4",
    "name": "Stormfeather Volley",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 38,
    "description": "Stormfeather Volley is a trained combat technique with a lightning-aspected theme. As an Unique ability, it is rare enough to shape an entire build plan. It comes from the v50 Physical Shop library and is tagged for Physical, Unique, Bow. Mechanically, it targets an enemy target, carries 38 base power, and uses speed, shock, and nerve-disrupting impact to pressure weaknesses or bypass simple defenses. It costs 22 stamina and has a 4-turn cooldown, so it should be timed around your resource flow. It has no added status effect, so its value comes from reliable damage, element matching, and clean cooldown timing. It works well as a ranged opener because it creates pressure without needing a long setup turn.",
    "tags": [
      "Physical",
      "Unique",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
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
