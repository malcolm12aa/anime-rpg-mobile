export const JOB_UPGRADE_EXPANSION = [
  {
    "id": "v080_job_sword_saint_candidate",
    "name": "Sword Saint Candidate",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_1001_swordsman",
    "description": "A rare swordsman path for challengers who have proven their blade against a superior foe. It prepares the build for legendary sword evolution without copying any outside class directly.",
    "stats": {
      "str": 4,
      "dex": 4,
      "wis": 1
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "p_legend_candidate_oath",
      "ex_iron_fang_counter"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 1,
      "relicDust": 3
    },
    "strengths": [
      "Unlocks sword technique creation flavor and ultimate sword art chains",
      "High Strength/Dexterity scaling"
    ],
    "weaknesses": [
      "Narrow weapon focus",
      "Requires boss progress"
    ],
    "registryVisible": true,
    "balanceTemplate": "Legendary Combat"
  },
  {
    "id": "v080_job_heaven_cutting_sword_monarch",
    "name": "Heaven-Cutting Sword Monarch",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "v080_job_sword_saint_candidate",
    "description": "A hidden legendary-style sword upgrade that treats swordsmanship as law. It is meant to be a late-game goal for blade users.",
    "stats": {
      "str": 6,
      "dex": 5,
      "wis": 2
    },
    "levelGrowth": {
      "str": 3,
      "dex": 3,
      "wis": 1
    },
    "startingSkills": [
      "ult_heaven_severing_worldline",
      "p_complete_weapon_mastery"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 3,
      "relicDust": 8
    },
    "strengths": [
      "Extremely strong ultimate sword identity",
      "Great against single boss targets"
    ],
    "weaknesses": [
      "Hidden and expensive",
      "Poor at wide-area magic problems"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Ultimate Blade"
  },
  {
    "id": "v080_job_divine_armament_creator",
    "name": "Divine Armament Creator",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_1037_blacksmith",
    "description": "A hidden production upgrade for smiths who forge weapons like legends write history. It converts crafting identity into combat support and ultimate arsenal abilities.",
    "stats": {
      "str": 2,
      "int": 4,
      "wis": 3,
      "con": 2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2,
      "str": 1
    },
    "startingSkills": [
      "ult_divine_arsenal_mandate",
      "p_complete_weapon_mastery"
    ],
    "requirements": {
      "classLevel": 15,
      "relicDust": 6,
      "gold": 500
    },
    "strengths": [
      "Top-tier crafting and weapon synergy",
      "Unlocks arsenal-themed ultimate routes"
    ],
    "weaknesses": [
      "Very expensive unlock",
      "Needs materials and support to shine"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Legendary Crafter"
  },
  {
    "id": "v080_job_relic_forger",
    "name": "Relic Forger",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_1037_blacksmith",
    "description": "A smithing upgrade that specializes in relic frames, socketed cores, and battlefield repairs. It is a practical bridge toward legendary production paths.",
    "stats": {
      "str": 2,
      "int": 3,
      "wis": 2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "p_complete_weapon_mastery"
    ],
    "requirements": {
      "classLevel": 15,
      "relicDust": 2,
      "gold": 220
    },
    "strengths": [
      "Improves crafting identity without abandoning combat",
      "Good with golem and dwarf races"
    ],
    "weaknesses": [
      "Limited direct damage without equipment",
      "Needs shop or dungeon materials"
    ],
    "registryVisible": true,
    "balanceTemplate": "Relic Crafting"
  },
  {
    "id": "v080_job_world_formula_caster",
    "name": "World-Formula Caster",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "mage",
    "description": "A hidden mage upgrade that treats spells as editable world formulae. It supports high-rank spell naming, fusion, and ultimate arcane authority.",
    "stats": {
      "int": 7,
      "wis": 3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "p_formula_sight",
      "ult_star_forged_dominion"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 2,
      "relicDust": 7
    },
    "strengths": [
      "Highest arcane Magic scaling",
      "Great for ability fusion chains"
    ],
    "weaknesses": [
      "Fragile and mana-hungry",
      "Hidden until late progression"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "World Formula"
  },
  {
    "id": "v080_job_space_time_arcanist",
    "name": "Space-Time Arcanist",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "mage",
    "description": "A specialist caster that bends distance, timing, and battlefield geometry. It is original to the game but inspired by high-rank magic advancement structures.",
    "stats": {
      "int": 5,
      "wis": 2,
      "dex": 1
    },
    "levelGrowth": {
      "int": 3,
      "wis": 1,
      "dex": 1
    },
    "startingSkills": [
      "ex_arcane_thread_bind",
      "p_formula_sight"
    ],
    "requirements": {
      "classLevel": 15,
      "highestFloor": 8,
      "relicDust": 2
    },
    "strengths": [
      "Strong control and arcane utility",
      "Pairs with elf and fairy evolutions"
    ],
    "weaknesses": [
      "Lower HP and stamina economy",
      "Weak if silenced by resource pressure"
    ],
    "registryVisible": true,
    "balanceTemplate": "Arcane Control"
  },
  {
    "id": "v080_job_hellfire_banquet_lord",
    "name": "Hellfire Banquet Lord",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_1022_cook",
    "description": "A hidden chef upgrade that turns monster cuisine into terrifying combat feasts. It is for players who want nonstandard support/crafting jobs to become powerful.",
    "stats": {
      "int": 3,
      "wis": 4,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 2,
      "int": 1
    },
    "startingSkills": [
      "p_monster_cuisine",
      "ex_crimson_spiral_flare"
    ],
    "requirements": {
      "classLevel": 15,
      "enemyKills": 25,
      "relicDust": 4
    },
    "strengths": [
      "Turns support/crafting into battle buffs and fire pressure",
      "Unique nonstandard class fantasy"
    ],
    "weaknesses": [
      "Requires enemy-kill progression",
      "Not a pure weapon damage class"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Monster Cuisine"
  },
  {
    "id": "v080_job_soul_appraiser",
    "name": "Soul Appraiser",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_1041_appraiser",
    "description": "A utility upgrade that reads the weight of skills, relics, and class paths. It supports registry discovery and hidden requirement flavor.",
    "stats": {
      "int": 3,
      "wis": 4,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "int": 2
    },
    "startingSkills": [
      "p_lore_appraisal_eye"
    ],
    "requirements": {
      "classLevel": 15,
      "gold": 180
    },
    "strengths": [
      "Excellent for discovering paths and supporting secret builds",
      "Strong utility identity"
    ],
    "weaknesses": [
      "Low direct damage",
      "Needs allied or item support"
    ],
    "registryVisible": true,
    "balanceTemplate": "Appraisal Utility"
  },
  {
    "id": "v080_job_dungeon_architect",
    "name": "Dungeon Architect",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_1040_engineer",
    "description": "A rare engineer upgrade that reads rooms as systems and monsters as moving parts. It builds toward dungeon-maker style play without needing a backend system.",
    "stats": {
      "int": 4,
      "wis": 3,
      "con": 1
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "p_dungeon_maker_sense"
    ],
    "requirements": {
      "classLevel": 15,
      "highestFloor": 15,
      "relicDust": 3
    },
    "strengths": [
      "Strong map and dungeon identity",
      "Pairs with constructs, gnomes, and golemforged"
    ],
    "weaknesses": [
      "Delayed reward curve",
      "Needs future map systems for full power"
    ],
    "registryVisible": true,
    "balanceTemplate": "Dungeon Maker"
  },
  {
    "id": "v080_job_dark_emperor_contract",
    "name": "Dark Emperor Contract",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_1013_witch",
    "description": "A hidden dark caster upgrade built around contracts, curses, and domination spells. It serves as a rare dark-magic goal without direct copying.",
    "stats": {
      "int": 5,
      "cha": 5,
      "wis": 1
    },
    "levelGrowth": {
      "int": 3,
      "cha": 3
    },
    "startingSkills": [
      "u_soul_ledger",
      "r_dark_null_guard"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 2,
      "relicDust": 5
    },
    "strengths": [
      "Strong curse and Unique spell identity",
      "Great with demonkin and undead evolutions"
    ],
    "weaknesses": [
      "Weak to sacred ground and light bosses",
      "Hidden path requires commitment"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Dark Sovereign"
  },
  {
    "id": "v080_job_dragon_slayer_oath",
    "name": "Dragon-Slayer Oathbearer",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_1025_hunter",
    "description": "A rare hunter upgrade focused on massive monster targets and boss weakness windows. It turns hunting into a legendary trial route.",
    "stats": {
      "str": 4,
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "ex_dragonbreaker_kata"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 1,
      "enemyKills": 20
    },
    "strengths": [
      "Excellent against bosses and monster enemies",
      "Clear weapon identity"
    ],
    "weaknesses": [
      "Less useful against support/control encounters",
      "Requires hunting progress"
    ],
    "registryVisible": true,
    "balanceTemplate": "Monster Slayer"
  },
  {
    "id": "v080_job_phantom_thief",
    "name": "Phantom Thief",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_1031_thief",
    "description": "A rare thief upgrade built around movement, misdirection, and stolen opportunity. It favors item-rich runs and darkness modifiers.",
    "stats": {
      "dex": 5,
      "cha": 2,
      "int": 1
    },
    "levelGrowth": {
      "dex": 3,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "ex_phantom_step_cut",
      "p_lore_appraisal_eye"
    ],
    "requirements": {
      "classLevel": 15,
      "highestFloor": 10,
      "gold": 250
    },
    "strengths": [
      "Fast utility and stealth pressure",
      "Good with treasure and collection quests"
    ],
    "weaknesses": [
      "Limited boss burst without evolved abilities",
      "Needs stamina support"
    ],
    "registryVisible": true,
    "balanceTemplate": "Phantom Utility"
  }
];
