export const EXPANDED_SKILLS = [
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
      "melee"
    ],
    "description": "A disciplined counter-cut that waits for the enemy's weight to shift, then bites through the opening like iron teeth. Best for weapon users who want a stronger answer after enemy intent reveals a direct attack.",
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
      "bleed"
    ],
    "description": "A charging spear art that compresses every step into a single red line. It is tuned for lancer and spearman upgrades that want high pressure before bosses can enter shield phases.",
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
      "wind"
    ],
    "description": "A footwork skill that makes the user appear half a step late, then cuts from the blind angle. It favors agility builds and pairs well with darkness battle modifiers.",
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
      "break"
    ],
    "description": "A two-handed strike designed to crack armor lines and monster shells. The swing is slow, but against shield phases and armored enemies it gives physical jobs a way to stay relevant.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 35
      }
    ]
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
    "description": "A hook-and-turn technique that drags an enemy's momentum across your guard. It is useful for scouts, thieves, and tactical fighters who want damage plus tempo control.",
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
    "description": "A monster-hunter form made to strike joints, wings, scales, and exposed cores. It becomes especially valuable once boss fights start revealing weakness phases.",
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
    "description": "A personalized combat authority that turns uncertainty into force. The user bets their tempo on one decisive strike, gaining Focus while attempting to break the enemy's next plan.",
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
    ]
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
      "defense"
    ],
    "description": "A rare instinct skill that empties the user's motion until the body reacts before thought. It is made for high-agility builds that want to survive dangerous enemy intentions.",
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
    ]
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
      "worldline"
    ],
    "description": "An authority-grade sword art that treats the battlefield as a line to be cut. The blade does not merely strike the target; it cuts the possibility of defense for one perfect instant.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ]
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
      "dark"
    ],
    "description": "A killing art wrapped in black authority. It strikes hardest when the target is already weakened, bleeding, or trapped in a boss phase transition.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 4,
        "chance": 75
      }
    ]
  }
];
