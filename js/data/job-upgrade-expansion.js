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
      "dex": 3,
      "wis": 1,
      "int": 0,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 1,
      "int": 0,
      "con": 0,
      "cha": 0
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
      "Sword Saint Candidate has clear Physical identity with reliable weapon pressure and stamina-scaling offense.",
      "Unlocks sword technique creation flavor and ultimate sword art chains",
      "High Strength/Dexterity scaling"
    ],
    "weaknesses": [
      "Sword Saint Candidate can struggle when enemies punish close-range pressure or resist physical damage.",
      "Narrow weapon focus",
      "Requires boss progress"
    ],
    "registryVisible": true,
    "balanceTemplate": "Physical Job Upgrade Template",
    "buildFocus": "physical",
    "focusProfile": "Build Focus: Physical — tuned for weapon pressure, stamina skills, and Strength/Dexterity scaling.",
    "focusWeight": {
      "primary": "Physical",
      "secondary": "Weapon Pressure",
      "role": "Stamina Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Physical",
      "Class & Ability Expansion",
      "Rare",
      "Legendary Combat",
      "Physical",
      "Weapon Pressure",
      "Stamina Scaling",
      "Frontline Damage"
    ],
    "roleIdentity": "Sword Saint Candidate — Physical job identity"
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
      "str": 7,
      "dex": 4,
      "wis": 1,
      "int": 0,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 3,
      "dex": 2,
      "wis": 1,
      "int": 0,
      "con": 1,
      "cha": 0
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
      "Heaven-Cutting Sword Monarch has clear Physical identity with reliable weapon pressure and stamina-scaling offense.",
      "Extremely strong ultimate sword identity",
      "Great against single boss targets"
    ],
    "weaknesses": [
      "Heaven-Cutting Sword Monarch can struggle when enemies punish close-range pressure or resist physical damage.",
      "Hidden and expensive",
      "Poor at wide-area magic problems"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Physical Job Upgrade Template",
    "buildFocus": "physical",
    "focusProfile": "Build Focus: Physical — tuned for weapon pressure, stamina skills, and Strength/Dexterity scaling.",
    "focusWeight": {
      "primary": "Physical",
      "secondary": "Weapon Pressure",
      "role": "Stamina Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Physical",
      "Class & Ability Expansion",
      "Hidden",
      "Ultimate Blade",
      "Physical",
      "Weapon Pressure",
      "Stamina Scaling",
      "Frontline Damage"
    ],
    "roleIdentity": "Heaven-Cutting Sword Monarch — Physical job identity"
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
      "int": 3,
      "wis": 3,
      "con": 1,
      "dex": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "str": 1,
      "dex": 1,
      "con": 0,
      "cha": 0
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
      "Divine Armament Creator has clear Balanced identity with flexible stat coverage and hybrid build routing.",
      "Top-tier crafting and weapon synergy",
      "Unlocks arsenal-themed ultimate routes"
    ],
    "weaknesses": [
      "Divine Armament Creator can struggle against specialists unless the build pivots equipment and abilities correctly.",
      "Very expensive unlock",
      "Needs materials and support to shine"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Balanced Job Upgrade Template",
    "buildFocus": "balanced",
    "focusProfile": "Build Focus: Balanced — tuned for flexible hybrid builds that can pivot between roles.",
    "focusWeight": {
      "primary": "Balanced",
      "secondary": "Hybrid",
      "role": "Flexible"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Balanced",
      "Class & Ability Expansion",
      "Hidden",
      "Legendary Crafter",
      "Balanced",
      "Hybrid",
      "Flexible",
      "Adaptive Growth"
    ],
    "roleIdentity": "Divine Armament Creator — Balanced job identity"
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
      "int": 2,
      "wis": 2,
      "dex": 0,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "str": 1,
      "dex": 0,
      "con": 1,
      "cha": 0
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
      "Relic Forger has clear Defense identity with strong Endurance scaling, guard value, and boss safety.",
      "Improves crafting identity without abandoning combat",
      "Good with golem and dwarf races"
    ],
    "weaknesses": [
      "Relic Forger can struggle to end fights quickly without damage support or scaling gear.",
      "Limited direct damage without equipment",
      "Needs shop or dungeon materials"
    ],
    "registryVisible": true,
    "balanceTemplate": "Defense Job Upgrade Template",
    "buildFocus": "defense",
    "focusProfile": "Build Focus: Defense — tuned for Endurance, guard effects, survivability, and boss pressure.",
    "focusWeight": {
      "primary": "Defense",
      "secondary": "Guard",
      "role": "Endurance Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Defense",
      "Class & Ability Expansion",
      "Specialist",
      "Relic Crafting",
      "Defense",
      "Guard",
      "Endurance Scaling",
      "Tank"
    ],
    "roleIdentity": "Relic Forger — Defense job identity"
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
      "int": 6,
      "wis": 3,
      "str": 0,
      "dex": 0,
      "con": 0,
      "cha": 1
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2,
      "str": 0,
      "dex": 0,
      "con": 0,
      "cha": 0
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
      "World-Formula Caster has clear Magic identity with strong mana-scaling spellcraft and elemental control.",
      "Highest arcane Magic scaling",
      "Great for ability fusion chains"
    ],
    "weaknesses": [
      "World-Formula Caster can struggle when mana is low or enemies carry anti-magic resistance.",
      "Fragile and mana-hungry",
      "Hidden until late progression"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Magic Job Upgrade Template",
    "buildFocus": "magic",
    "focusProfile": "Build Focus: Magic — tuned for spellcraft, mana economy, and Magic-based ability scaling.",
    "focusWeight": {
      "primary": "Magic",
      "secondary": "Spellcraft",
      "role": "Mana Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Magic",
      "Class & Ability Expansion",
      "Hidden",
      "World Formula",
      "Magic",
      "Spellcraft",
      "Mana Scaling",
      "Elemental Control"
    ],
    "roleIdentity": "World-Formula Caster — Magic job identity"
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
      "dex": 1,
      "str": 0,
      "con": 0,
      "cha": 0
    },
    "levelGrowth": {
      "int": 3,
      "wis": 1,
      "dex": 1,
      "str": 0,
      "con": 0,
      "cha": 0
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
      "Space-Time Arcanist has clear Magic identity with strong mana-scaling spellcraft and elemental control.",
      "Strong control and arcane utility",
      "Pairs with elf and fairy evolutions"
    ],
    "weaknesses": [
      "Space-Time Arcanist can struggle when mana is low or enemies carry anti-magic resistance.",
      "Lower HP and stamina economy",
      "Weak if silenced by resource pressure"
    ],
    "registryVisible": true,
    "balanceTemplate": "Magic Job Upgrade Template",
    "buildFocus": "magic",
    "focusProfile": "Build Focus: Magic — tuned for spellcraft, mana economy, and Magic-based ability scaling.",
    "focusWeight": {
      "primary": "Magic",
      "secondary": "Spellcraft",
      "role": "Mana Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Magic",
      "Class & Ability Expansion",
      "Specialist",
      "Arcane Control",
      "Magic",
      "Spellcraft",
      "Mana Scaling",
      "Elemental Control"
    ],
    "roleIdentity": "Space-Time Arcanist — Magic job identity"
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
      "int": 2,
      "wis": 3,
      "cha": 2,
      "str": 1,
      "dex": 0,
      "con": 2
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1,
      "str": 0,
      "dex": 0,
      "con": 2
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
      "Hellfire Banquet Lord has clear Defense identity with strong Endurance scaling, guard value, and boss safety.",
      "Turns support/crafting into battle buffs and fire pressure",
      "Unique nonstandard class fantasy"
    ],
    "weaknesses": [
      "Hellfire Banquet Lord can struggle to end fights quickly without damage support or scaling gear.",
      "Requires enemy-kill progression",
      "Not a pure weapon damage class"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Defense Job Upgrade Template",
    "buildFocus": "defense",
    "focusProfile": "Build Focus: Defense — tuned for Endurance, guard effects, survivability, and boss pressure.",
    "focusWeight": {
      "primary": "Defense",
      "secondary": "Guard",
      "role": "Endurance Scaling"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Defense",
      "Class & Ability Expansion",
      "Hidden",
      "Monster Cuisine",
      "Defense",
      "Guard",
      "Endurance Scaling",
      "Tank"
    ],
    "roleIdentity": "Hellfire Banquet Lord — Defense job identity"
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
      "int": 2,
      "wis": 3,
      "cha": 1,
      "str": 1,
      "dex": 1,
      "con": 0
    },
    "levelGrowth": {
      "wis": 1,
      "int": 1,
      "str": 2,
      "dex": 0,
      "con": 0,
      "cha": 0
    },
    "startingSkills": [
      "p_lore_appraisal_eye"
    ],
    "requirements": {
      "classLevel": 15,
      "gold": 180
    },
    "strengths": [
      "Soul Appraiser has clear Balanced identity with flexible stat coverage and hybrid build routing.",
      "Excellent for discovering paths and supporting secret builds",
      "Strong utility identity"
    ],
    "weaknesses": [
      "Soul Appraiser can struggle against specialists unless the build pivots equipment and abilities correctly.",
      "Low direct damage",
      "Needs allied or item support"
    ],
    "registryVisible": true,
    "balanceTemplate": "Balanced Job Upgrade Template",
    "buildFocus": "balanced",
    "focusProfile": "Build Focus: Balanced — tuned for flexible hybrid builds that can pivot between roles.",
    "focusWeight": {
      "primary": "Balanced",
      "secondary": "Hybrid",
      "role": "Flexible"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Balanced",
      "Class & Ability Expansion",
      "Specialist",
      "Appraisal Utility",
      "Balanced",
      "Hybrid",
      "Flexible",
      "Adaptive Growth"
    ],
    "roleIdentity": "Soul Appraiser — Balanced job identity"
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
      "int": 3,
      "wis": 3,
      "con": 1,
      "str": 0,
      "dex": 0,
      "cha": 1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "str": 0,
      "dex": 0,
      "con": 0,
      "cha": 1
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
      "Dungeon Architect has clear Support identity with party utility, recovery windows, and control tools.",
      "Strong map and dungeon identity",
      "Pairs with constructs, gnomes, and golemforged"
    ],
    "weaknesses": [
      "Dungeon Architect can struggle in solo burst races if healing/control windows are denied.",
      "Delayed reward curve",
      "Needs future map systems for full power"
    ],
    "registryVisible": true,
    "balanceTemplate": "Support Job Upgrade Template",
    "buildFocus": "support",
    "focusProfile": "Build Focus: Support — tuned for party utility, healing, buffs, debuffs, and resource control.",
    "focusWeight": {
      "primary": "Support",
      "secondary": "Party Utility",
      "role": "Healing / Control"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Support",
      "Class & Ability Expansion",
      "Rare",
      "Dungeon Maker",
      "Support",
      "Party Utility",
      "Healing / Control",
      "Resource Support"
    ],
    "roleIdentity": "Dungeon Architect — Support job identity"
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
      "int": 4,
      "cha": 4,
      "wis": 3,
      "str": 0,
      "dex": 0,
      "con": 0
    },
    "levelGrowth": {
      "int": 2,
      "cha": 2,
      "str": 0,
      "dex": 0,
      "wis": 2,
      "con": 0
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
      "Dark Emperor Contract has clear Support identity with party utility, recovery windows, and control tools.",
      "Strong curse and Unique spell identity",
      "Great with demonkin and undead evolutions"
    ],
    "weaknesses": [
      "Dark Emperor Contract can struggle in solo burst races if healing/control windows are denied.",
      "Weak to sacred ground and light bosses",
      "Hidden path requires commitment"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Support Job Upgrade Template",
    "buildFocus": "support",
    "focusProfile": "Build Focus: Support — tuned for party utility, healing, buffs, debuffs, and resource control.",
    "focusWeight": {
      "primary": "Support",
      "secondary": "Party Utility",
      "role": "Healing / Control"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Support",
      "Class & Ability Expansion",
      "Hidden",
      "Dark Sovereign",
      "Support",
      "Party Utility",
      "Healing / Control",
      "Resource Support"
    ],
    "roleIdentity": "Dark Emperor Contract — Support job identity"
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
      "str": 3,
      "dex": 3,
      "wis": 2,
      "int": 0,
      "con": 0,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 3,
      "wis": 1,
      "int": 0,
      "con": 0,
      "cha": 0
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
      "Dragon-Slayer Oathbearer has clear Speed identity with Agility tempo, evasive rotations, and fast ability cycling.",
      "Excellent against bosses and monster enemies"
    ],
    "weaknesses": [
      "Dragon-Slayer Oathbearer can struggle when stunned, slowed, or forced into long endurance checks.",
      "Less useful against support/control encounters",
      "Requires hunting progress"
    ],
    "registryVisible": true,
    "balanceTemplate": "Speed Job Upgrade Template",
    "buildFocus": "speed",
    "focusProfile": "Build Focus: Speed — tuned for Agility, Dexterity, turn tempo, and fast skill rotations.",
    "focusWeight": {
      "primary": "Speed",
      "secondary": "Agility Scaling",
      "role": "Tempo"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Speed",
      "Class & Ability Expansion",
      "Rare",
      "Monster Slayer",
      "Speed",
      "Agility Scaling",
      "Tempo",
      "Skirmisher"
    ],
    "roleIdentity": "Dragon-Slayer Oathbearer — Speed job identity"
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
      "int": 1,
      "str": 0,
      "wis": 0,
      "con": 0
    },
    "levelGrowth": {
      "dex": 3,
      "cha": 1,
      "int": 1,
      "str": 0,
      "wis": 0,
      "con": 0
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
      "Phantom Thief has clear Speed identity with Agility tempo, evasive rotations, and fast ability cycling.",
      "Fast utility and stealth pressure",
      "Good with treasure and collection quests"
    ],
    "weaknesses": [
      "Phantom Thief can struggle when stunned, slowed, or forced into long endurance checks.",
      "Limited boss burst without evolved abilities",
      "Needs stamina support"
    ],
    "registryVisible": true,
    "balanceTemplate": "Speed Job Upgrade Template",
    "buildFocus": "speed",
    "focusProfile": "Build Focus: Speed — tuned for Agility, Dexterity, turn tempo, and fast skill rotations.",
    "focusWeight": {
      "primary": "Speed",
      "secondary": "Agility Scaling",
      "role": "Tempo"
    },
    "tags": [
      "Job Upgrade",
      "Focus: Speed",
      "Class & Ability Expansion",
      "Rare",
      "Phantom Utility",
      "Speed",
      "Agility Scaling",
      "Tempo",
      "Skirmisher"
    ],
    "roleIdentity": "Phantom Thief — Speed job identity"
  }
];
