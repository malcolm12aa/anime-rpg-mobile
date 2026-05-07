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
      "str": 4,
      "dex": 2,
      "wis": 1,
      "cha": 1,
      "int": 0,
      "con": 1
    },
    "levelGrowth": {
      "str": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1,
      "int": 0,
      "con": 0
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
      "Legend-Candidate Human has clear Physical identity with reliable weapon pressure and stamina-scaling offense.",
      "Converts balanced human growth into late-game quest and title synergy",
      "Works with many job upgrade families"
    ],
    "weaknesses": [
      "Legend-Candidate Human can struggle when enemies punish close-range pressure or resist physical damage.",
      "Requires boss progress before it appears",
      "No single element dominance"
    ],
    "registryVisible": true,
    "balanceTemplate": "Physical Race Evolution Template",
    "buildFocus": "physical",
    "focusProfile": "Build Focus: Physical — tuned for weapon pressure, stamina skills, and Strength/Dexterity scaling.",
    "focusWeight": {
      "primary": "Physical",
      "secondary": "Weapon Pressure",
      "role": "Stamina Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Physical",
      "Class & Ability Expansion",
      "Specialist",
      "Legend Candidate",
      "Physical",
      "Weapon Pressure",
      "Stamina Scaling",
      "Frontline Damage"
    ],
    "roleIdentity": "Legend-Candidate Human — Physical race identity"
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
      "p_formula_sight"
    ],
    "requirements": {
      "classLevel": 15,
      "relicDust": 2
    },
    "strengths": [
      "Astral-Formula Elf has clear Magic identity with strong mana-scaling spellcraft and elemental control.",
      "Excellent arcane ability evolution support",
      "High Magic Basic Ability growth"
    ],
    "weaknesses": [
      "Astral-Formula Elf can struggle when mana is low or enemies carry anti-magic resistance.",
      "Fragile against heavy physical bosses",
      "Needs mana economy"
    ],
    "registryVisible": true,
    "balanceTemplate": "Magic Race Evolution Template",
    "buildFocus": "magic",
    "focusProfile": "Build Focus: Magic — tuned for spellcraft, mana economy, and Magic-based ability scaling.",
    "focusWeight": {
      "primary": "Magic",
      "secondary": "Spellcraft",
      "role": "Mana Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Magic",
      "Class & Ability Expansion",
      "Specialist",
      "Arcane Evolution",
      "Magic",
      "Spellcraft",
      "Mana Scaling",
      "Elemental Control"
    ],
    "roleIdentity": "Astral-Formula Elf — Magic race identity"
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
      "dex": 4,
      "int": 2,
      "cha": 1,
      "str": 0,
      "wis": 0,
      "con": 0
    },
    "levelGrowth": {
      "dex": 3,
      "int": 1,
      "str": 0,
      "wis": 0,
      "con": 0,
      "cha": 0
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
      "Eclipse-Veil Dark Elf has clear Speed identity with Agility tempo, evasive rotations, and fast ability cycling.",
      "Strong in darkness battle modifiers",
      "Pairs with assassin, witch, and shadow job paths"
    ],
    "weaknesses": [
      "Eclipse-Veil Dark Elf can struggle when stunned, slowed, or forced into long endurance checks.",
      "Sacred ground still pressures resource flow",
      "Low endurance growth"
    ],
    "registryVisible": true,
    "balanceTemplate": "Speed Race Evolution Template",
    "buildFocus": "speed",
    "focusProfile": "Build Focus: Speed — tuned for Agility, Dexterity, turn tempo, and fast skill rotations.",
    "focusWeight": {
      "primary": "Speed",
      "secondary": "Agility Scaling",
      "role": "Tempo"
    },
    "tags": [
      "Race Evolution",
      "Focus: Speed",
      "Class & Ability Expansion",
      "Rare",
      "Shadow Evolution",
      "Speed",
      "Agility Scaling",
      "Tempo",
      "Skirmisher"
    ],
    "roleIdentity": "Eclipse-Veil Dark Elf — Speed race identity"
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
      "wis": 1,
      "dex": 0,
      "int": 0,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "str": 1,
      "wis": 1,
      "dex": 0,
      "int": 0,
      "cha": 0
    },
    "startingSkills": [
      "p_complete_weapon_mastery"
    ],
    "requirements": {
      "classLevel": 15,
      "gold": 240
    },
    "strengths": [
      "Mythril-Oath Dwarf has clear Defense identity with strong Endurance scaling, guard value, and boss safety.",
      "Excellent endurance and crafting synergy",
      "Improves weapon-master and blacksmith routes"
    ],
    "weaknesses": [
      "Mythril-Oath Dwarf can struggle to end fights quickly without damage support or scaling gear.",
      "Low agility growth",
      "Weak at fast ranged clear"
    ],
    "registryVisible": true,
    "balanceTemplate": "Defense Race Evolution Template",
    "buildFocus": "defense",
    "focusProfile": "Build Focus: Defense — tuned for Endurance, guard effects, survivability, and boss pressure.",
    "focusWeight": {
      "primary": "Defense",
      "secondary": "Guard",
      "role": "Endurance Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Defense",
      "Class & Ability Expansion",
      "Specialist",
      "Forge Evolution",
      "Defense",
      "Guard",
      "Endurance Scaling",
      "Tank"
    ],
    "roleIdentity": "Mythril-Oath Dwarf — Defense race identity"
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
      "str": 2,
      "dex": 4,
      "wis": 1,
      "int": 0,
      "con": 0,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 4,
      "str": 1,
      "int": 0,
      "wis": 0,
      "con": 0,
      "cha": 0
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
      "Moonfang Sovereign has clear Speed identity with Agility tempo, evasive rotations, and fast ability cycling.",
      "High Agility and Dexterity pressure",
      "Great with rogue, ranger, and beast-tamer job lines"
    ],
    "weaknesses": [
      "Moonfang Sovereign can struggle when stunned, slowed, or forced into long endurance checks.",
      "Less effective against bleed-resistant bosses",
      "Needs stamina management"
    ],
    "registryVisible": true,
    "balanceTemplate": "Speed Race Evolution Template",
    "buildFocus": "speed",
    "focusProfile": "Build Focus: Speed — tuned for Agility, Dexterity, turn tempo, and fast skill rotations.",
    "focusWeight": {
      "primary": "Speed",
      "secondary": "Agility Scaling",
      "role": "Tempo"
    },
    "tags": [
      "Race Evolution",
      "Focus: Speed",
      "Class & Ability Expansion",
      "Rare",
      "Predator Evolution",
      "Speed",
      "Agility Scaling",
      "Tempo",
      "Skirmisher"
    ],
    "roleIdentity": "Moonfang Sovereign — Speed race identity"
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
      "str": 3,
      "con": 2,
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 2,
      "con": 0,
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 0
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
      "Primordial Furnace Dragonoid has clear Balanced identity with flexible stat coverage and hybrid build routing.",
      "Unlocks dragon-themed Unique and Ultimate ability routes",
      "Strong mixed physical/magic scaling"
    ],
    "weaknesses": [
      "Primordial Furnace Dragonoid can struggle against specialists unless the build pivots equipment and abilities correctly.",
      "Hidden requirement delays access",
      "Ice and control effects remain dangerous"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Balanced Race Evolution Template",
    "buildFocus": "balanced",
    "focusProfile": "Build Focus: Balanced — tuned for flexible hybrid builds that can pivot between roles.",
    "focusWeight": {
      "primary": "Balanced",
      "secondary": "Hybrid",
      "role": "Flexible"
    },
    "tags": [
      "Race Evolution",
      "Focus: Balanced",
      "Class & Ability Expansion",
      "Hidden",
      "Primordial Dragon",
      "Balanced",
      "Hybrid",
      "Flexible",
      "Adaptive Growth"
    ],
    "roleIdentity": "Primordial Furnace Dragonoid — Balanced race identity"
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
      "int": 3,
      "wis": 1,
      "con": 2,
      "str": 2,
      "dex": 1,
      "cha": 0
    },
    "levelGrowth": {
      "int": 1,
      "con": 1,
      "wis": 1,
      "str": 1,
      "dex": 1,
      "cha": 0
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
      "Soul-Ledger Undead has clear Physical identity with reliable weapon pressure and stamina-scaling offense.",
      "Excellent with dark casters and death-knight paths",
      "Strong hidden total Magic stacking"
    ],
    "weaknesses": [
      "Soul-Ledger Undead can struggle when enemies punish close-range pressure or resist physical damage.",
      "Light-based battle modifiers are risky",
      "May need resist skills before sacred bosses"
    ],
    "registryVisible": true,
    "balanceTemplate": "Physical Race Evolution Template",
    "buildFocus": "physical",
    "focusProfile": "Build Focus: Physical — tuned for weapon pressure, stamina skills, and Strength/Dexterity scaling.",
    "focusWeight": {
      "primary": "Physical",
      "secondary": "Weapon Pressure",
      "role": "Stamina Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Physical",
      "Class & Ability Expansion",
      "Rare",
      "Soul Evolution",
      "Physical",
      "Weapon Pressure",
      "Stamina Scaling",
      "Frontline Damage"
    ],
    "roleIdentity": "Soul-Ledger Undead — Physical race identity"
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
      "cha": 3,
      "dex": 1,
      "str": 0,
      "wis": 1,
      "con": 0
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1,
      "dex": 1,
      "str": 0,
      "wis": 1,
      "con": 0
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
      "Abyss-Contract Heir has clear Magic identity with strong mana-scaling spellcraft and elemental control.",
      "Strong synergy with warlock, witch, trickster, and dark classes",
      "Excellent Unique skill flavor"
    ],
    "weaknesses": [
      "Abyss-Contract Heir can struggle when mana is low or enemies carry anti-magic resistance.",
      "Expensive unlock cost",
      "Sacred bosses remain dangerous without preparation"
    ],
    "secret": true,
    "registryVisible": true,
    "balanceTemplate": "Magic Race Evolution Template",
    "buildFocus": "magic",
    "focusProfile": "Build Focus: Magic — tuned for spellcraft, mana economy, and Magic-based ability scaling.",
    "focusWeight": {
      "primary": "Magic",
      "secondary": "Spellcraft",
      "role": "Mana Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Magic",
      "Class & Ability Expansion",
      "Hidden",
      "Abyss Contract",
      "Magic",
      "Spellcraft",
      "Mana Scaling",
      "Elemental Control"
    ],
    "roleIdentity": "Abyss-Contract Heir — Magic race identity"
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
      "str": 2,
      "dex": 0,
      "int": 0,
      "wis": 1,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "str": 2,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
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
      "Colossus-Core Golemforged has clear Defense identity with strong Endurance scaling, guard value, and boss safety.",
      "Massive Endurance stacking",
      "Great at surviving enrage and charge attacks"
    ],
    "weaknesses": [
      "Colossus-Core Golemforged can struggle to end fights quickly without damage support or scaling gear.",
      "Low agility and poor evasion flavor",
      "Mana storms offer little benefit"
    ],
    "registryVisible": true,
    "balanceTemplate": "Defense Race Evolution Template",
    "buildFocus": "defense",
    "focusProfile": "Build Focus: Defense — tuned for Endurance, guard effects, survivability, and boss pressure.",
    "focusWeight": {
      "primary": "Defense",
      "secondary": "Guard",
      "role": "Endurance Scaling"
    },
    "tags": [
      "Race Evolution",
      "Focus: Defense",
      "Class & Ability Expansion",
      "Specialist",
      "Colossus Core",
      "Defense",
      "Guard",
      "Endurance Scaling",
      "Tank"
    ],
    "roleIdentity": "Colossus-Core Golemforged — Defense race identity"
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
      "wis": 4,
      "cha": 3,
      "con": 1,
      "str": 0,
      "dex": 0,
      "int": 1
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "str": 0,
      "dex": 0,
      "int": 0,
      "con": 0
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
      "Dawn-Covenant Celestian has clear Support identity with party utility, recovery windows, and control tools.",
      "Strong healing and support identity",
      "Excellent on sacred ground battle modifiers"
    ],
    "weaknesses": [
      "Dawn-Covenant Celestian can struggle in solo burst races if healing/control windows are denied.",
      "Darkness modifiers pressure its rhythm",
      "Low physical burst"
    ],
    "registryVisible": true,
    "balanceTemplate": "Support Race Evolution Template",
    "buildFocus": "support",
    "focusProfile": "Build Focus: Support — tuned for party utility, healing, buffs, debuffs, and resource control.",
    "focusWeight": {
      "primary": "Support",
      "secondary": "Party Utility",
      "role": "Healing / Control"
    },
    "tags": [
      "Race Evolution",
      "Focus: Support",
      "Class & Ability Expansion",
      "Rare",
      "Dawn Covenant",
      "Support",
      "Party Utility",
      "Healing / Control",
      "Resource Support"
    ],
    "roleIdentity": "Dawn-Covenant Celestian — Support race identity"
  }
];
