export const ABILITY_EVOLUTION_CHAINS = [
  {
    "id": "evo_iron_fang_counter",
    "name": "Train Iron Fang Counter",
    "description": "Fuse basic swordwork and focus into a more tactical counter technique.",
    "inputs": [
      "v50_sword_1",
      "basic_focus"
    ],
    "output": "ex_iron_fang_counter",
    "requirements": {
      "gold": 120
    },
    "keepsInputs": true
  },
  {
    "id": "evo_crimson_spiral_flare",
    "name": "Shape Crimson Spiral Flare",
    "description": "Fold fire practice and mana control into an Extra fire spell.",
    "inputs": [
      "firebolt",
      "basic_focus"
    ],
    "output": "ex_crimson_spiral_flare",
    "requirements": {
      "gold": 140
    },
    "keepsInputs": true
  },
  {
    "id": "evo_moonlit_recovery",
    "name": "Shape Moonlit Recovery",
    "description": "Refine healing light into a larger recovery formula.",
    "inputs": [
      "mend",
      "basic_focus"
    ],
    "output": "ex_moonlit_recovery",
    "requirements": {
      "gold": 150
    },
    "keepsInputs": true
  },
  {
    "id": "evo_kings_gamble",
    "name": "Awaken King's Gamble",
    "description": "A risky Unique skill born from trickery, focus, and hard combat pressure.",
    "inputs": [
      "ex_chainhook_reversal",
      "basic_focus"
    ],
    "output": "u_kings_gamble",
    "requirements": {
      "bossKills": 1,
      "relicDust": 2,
      "gold": 220
    },
    "keepsInputs": true
  },
  {
    "id": "evo_soul_ledger",
    "name": "Awaken Soul Ledger",
    "description": "A Unique spell that turns curses and appraisal logic into soul-debt magic.",
    "inputs": [
      "p_lore_appraisal_eye",
      "r_dark_null_guard"
    ],
    "output": "u_soul_ledger",
    "requirements": {
      "bossKills": 1,
      "relicDust": 3,
      "gold": 260
    },
    "keepsInputs": true
  },
  {
    "id": "evo_dragonheart_furnace",
    "name": "Ignite Dragonheart Furnace",
    "description": "A race-linked Unique ability for dragon-blooded builds that know flame and resistance.",
    "inputs": [
      "ember_breath",
      "r_flame_tolerance"
    ],
    "output": "u_dragonheart_furnace",
    "requirements": {
      "bossKills": 1,
      "relicDust": 3
    },
    "keepsInputs": true
  },
  {
    "id": "evo_zero_point_instinct",
    "name": "Awaken Zero-Point Instinct",
    "description": "Turn movement, focus, and phantom stepping into a self-defense Unique skill.",
    "inputs": [
      "ex_phantom_step_cut",
      "basic_focus"
    ],
    "output": "u_zero_point_instinct",
    "requirements": {
      "highestFloor": 10,
      "relicDust": 2
    },
    "keepsInputs": true
  },
  {
    "id": "ult_heaven_worldline",
    "name": "Ultimate Evolution: Heaven-Severing Worldline",
    "description": "Evolve sword mastery, legend oath, and a rare sword candidate route into an Ultimate Art.",
    "inputs": [
      "ex_iron_fang_counter",
      "p_complete_weapon_mastery",
      "p_legend_candidate_oath"
    ],
    "output": "ult_heaven_severing_worldline",
    "requirements": {
      "bossKills": 3,
      "relicDust": 8,
      "gold": 500
    },
    "keepsInputs": true
  },
  {
    "id": "ult_star_dominion",
    "name": "Ultimate Evolution: Star-Forged Dominion",
    "description": "Evolve formula sight, moonlight recovery, and arcane control into a dominion-grade spell.",
    "inputs": [
      "p_formula_sight",
      "ex_moonlit_recovery",
      "ex_arcane_thread_bind"
    ],
    "output": "ult_star_forged_dominion",
    "requirements": {
      "bossKills": 3,
      "relicDust": 8,
      "gold": 500
    },
    "keepsInputs": true
  },
  {
    "id": "ult_divine_arsenal",
    "name": "Ultimate Evolution: Divine Arsenal Mandate",
    "description": "Evolve weapon mastery, forging identity, and relic craft into an ultimate creator authority.",
    "inputs": [
      "p_complete_weapon_mastery",
      "p_lore_appraisal_eye",
      "p_dungeon_maker_sense"
    ],
    "output": "ult_divine_arsenal_mandate",
    "requirements": {
      "bossKills": 3,
      "relicDust": 10,
      "gold": 650
    },
    "keepsInputs": true
  }
];
