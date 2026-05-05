export const RACE_EVOLUTION_EXPANSION = [
  {
    "id": "v080_race_human_legend_candidate",
    "name": "Legend-Candidate Human",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "human",
    "description": "A human evolution for those who survive trials beyond normal adventurers. It turns flexible growth into legend pressure without locking the build into one weapon or school.",
    "stats": {
      "str": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "p_legend_candidate_oath"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 1,
      "gold": 180
    },
    "strengths": [
      "Converts balanced human growth into late-game quest and title synergy",
      "Works with many job upgrade families"
    ],
    "weaknesses": [
      "Requires boss progress before it appears",
      "No single element dominance"
    ],
    "registryVisible": true,
    "balanceTemplate": "Legend Candidate"
  },
  {
    "id": "v080_race_high_elf_astral_formula",
    "name": "Astral-Formula Elf",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "high_elf",
    "description": "An elven evolution that inscribes living star formulas into mana circulation. It favors spell fusion, formula sight, and arcane class upgrades.",
    "stats": {
      "int": 4,
      "wis": 2,
      "dex": 1
    },
    "levelGrowth": {
      "int": 3,
      "wis": 1,
      "dex": 1
    },
    "startingSkills": [
      "p_formula_sight"
    ],
    "requirements": {
      "classLevel": 15,
      "relicDust": 2
    },
    "strengths": [
      "Excellent arcane ability evolution support",
      "High Magic Basic Ability growth"
    ],
    "weaknesses": [
      "Fragile against heavy physical bosses",
      "Needs mana economy"
    ],
    "registryVisible": true,
    "balanceTemplate": "Arcane Evolution"
  },
  {
    "id": "v080_race_dark_elf_eclipse_veil",
    "name": "Eclipse-Veil Dark Elf",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_003_dark_elves",
    "description": "A dark elf evolution that uses twilight, shadow contracts, and anti-light footwork. It bridges rogue and dark magic builds.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2
    },
    "startingSkills": [
      "r_dark_null_guard"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 1,
      "relicDust": 3
    },
    "strengths": [
      "Strong in darkness battle modifiers",
      "Pairs with assassin, witch, and shadow job paths"
    ],
    "weaknesses": [
      "Sacred ground still pressures resource flow",
      "Low endurance growth"
    ],
    "registryVisible": true,
    "balanceTemplate": "Shadow Evolution"
  },
  {
    "id": "v080_race_dwarf_mythril_oath",
    "name": "Mythril-Oath Dwarf",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "iron_dwarf",
    "description": "A dwarf evolution for smithing, shields, and oath-forged endurance. It supports production classes and heavy defenders.",
    "stats": {
      "con": 5,
      "str": 2,
      "wis": 1
    },
    "levelGrowth": {
      "con": 3,
      "str": 1,
      "wis": 1
    },
    "startingSkills": [
      "p_complete_weapon_mastery"
    ],
    "requirements": {
      "classLevel": 15,
      "gold": 240
    },
    "strengths": [
      "Excellent endurance and crafting synergy",
      "Improves weapon-master and blacksmith routes"
    ],
    "weaknesses": [
      "Low agility growth",
      "Weak at fast ranged clear"
    ],
    "registryVisible": true,
    "balanceTemplate": "Forge Evolution"
  },
  {
    "id": "v080_race_beastkin_moonfang_sovereign",
    "name": "Moonfang Sovereign",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "beastkin",
    "description": "A beastkin evolution that turns pack instinct into moonlit authority. It favors speed, bleed pressure, and hunter-style jobs.",
    "stats": {
      "str": 3,
      "dex": 4,
      "wis": 1
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "ex_phantom_step_cut"
    ],
    "requirements": {
      "classLevel": 15,
      "enemyKills": 20,
      "relicDust": 2
    },
    "strengths": [
      "High Agility and Dexterity pressure",
      "Great with rogue, ranger, and beast-tamer job lines"
    ],
    "weaknesses": [
      "Less effective against bleed-resistant bosses",
      "Needs stamina management"
    ],
    "registryVisible": true,
    "balanceTemplate": "Predator Evolution"
  },
  {
    "id": "v080_race_dragonoid_primordial_furnace",
    "name": "Primordial Furnace Dragonoid",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "dragonoid",
    "description": "A hidden dragon evolution that awakens an internal furnace older than language. It is designed for fire magic, heavy weapons, and ultimate flame evolutions.",
    "stats": {
      "str": 4,
      "con": 4,
      "int": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 2,
      "int": 2
    },
    "startingSkills": [
      "u_dragonheart_furnace"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 2,
      "relicDust": 5
    },
    "strengths": [
      "Unlocks dragon-themed Unique and Ultimate ability routes",
      "Strong mixed physical/magic scaling"
    ],
    "weaknesses": [
      "Hidden requirement delays access",
      "Ice and control effects remain dangerous"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Primordial Dragon"
  },
  {
    "id": "v080_race_undead_soul_ledger_vessel",
    "name": "Soul-Ledger Undead",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "undead",
    "description": "An undead evolution that records grudges, deaths, and debts in the soul. It supports drain, dark spells, and necromantic job upgrades.",
    "stats": {
      "int": 4,
      "wis": 2,
      "con": 3
    },
    "levelGrowth": {
      "int": 2,
      "con": 2,
      "wis": 1
    },
    "startingSkills": [
      "u_soul_ledger"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 1,
      "relicDust": 4
    },
    "strengths": [
      "Excellent with dark casters and death-knight paths",
      "Strong hidden total Magic stacking"
    ],
    "weaknesses": [
      "Light-based battle modifiers are risky",
      "May need resist skills before sacred bosses"
    ],
    "registryVisible": true,
    "balanceTemplate": "Soul Evolution"
  },
  {
    "id": "v080_race_demonkin_abyss_contract_heir",
    "name": "Abyss-Contract Heir",
    "category": "Class & Ability Expansion",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "demonkin",
    "description": "A demonkin evolution built around contracts, bargains, and curse law. It rewards risky job upgrades and curse-based ability fusion.",
    "stats": {
      "int": 4,
      "cha": 4,
      "dex": 1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 2,
      "dex": 1
    },
    "startingSkills": [
      "r_heavenly_pressure_tolerance"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 2,
      "relicDust": 4,
      "gold": 300
    },
    "strengths": [
      "Strong synergy with warlock, witch, trickster, and dark classes",
      "Excellent Unique skill flavor"
    ],
    "weaknesses": [
      "Expensive unlock cost",
      "Sacred bosses remain dangerous without preparation"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Abyss Contract"
  },
  {
    "id": "v080_race_golem_colossus_core",
    "name": "Colossus-Core Golemforged",
    "category": "Class & Ability Expansion",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "golemforged",
    "description": "A golemforged evolution that grows a reinforced inner core. It is slow, brutally durable, and perfect for shield-phase boss fights.",
    "stats": {
      "con": 6,
      "str": 3,
      "dex": -1
    },
    "levelGrowth": {
      "con": 3,
      "str": 2
    },
    "startingSkills": [
      "ex_titanbreaker_swing"
    ],
    "requirements": {
      "classLevel": 15,
      "highestFloor": 10,
      "gold": 220
    },
    "strengths": [
      "Massive Endurance stacking",
      "Great at surviving enrage and charge attacks"
    ],
    "weaknesses": [
      "Low agility and poor evasion flavor",
      "Mana storms offer little benefit"
    ],
    "registryVisible": true,
    "balanceTemplate": "Colossus Core"
  },
  {
    "id": "v080_race_celestian_dawn_covenant",
    "name": "Dawn-Covenant Celestian",
    "category": "Class & Ability Expansion",
    "tier": "rare",
    "maxLevel": 5,
    "from": "celestian",
    "description": "A celestian evolution that binds the soul to dawnlight. It supports healing, sacred fields, and ultimate miracle paths.",
    "stats": {
      "wis": 5,
      "cha": 3,
      "con": 1
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2
    },
    "startingSkills": [
      "ult_unbroken_dawn_covenant"
    ],
    "requirements": {
      "classLevel": 15,
      "bossKills": 2,
      "relicDust": 4
    },
    "strengths": [
      "Strong healing and support identity",
      "Excellent on sacred ground battle modifiers"
    ],
    "weaknesses": [
      "Darkness modifiers pressure its rhythm",
      "Low physical burst"
    ],
    "registryVisible": true,
    "balanceTemplate": "Dawn Covenant"
  }
];
