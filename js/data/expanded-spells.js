export const EXPANDED_SPELLS = [
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
      "extra"
    ],
    "description": "A spiraling flame formula that keeps turning after impact. It is stronger than basic fire magic and is designed to punish enemies weak to heat during rainless or mana-storm fields.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 50
      }
    ]
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
      "extra"
    ],
    "description": "A mirrored ice spell that refracts mana into a lance of cold pressure. It can slow or freeze enemies that are preparing charge attacks.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 35
      }
    ]
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
      "extra"
    ],
    "description": "A spell-contract written in lightning. The caster speaks the clause, then the battlefield answers with a bolt that hunts exposed armor and wet targets.",
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
      "support"
    ],
    "description": "A pale restoration spell that seals wounds with cold moonlight. It is built for healers and celestials who need a larger recovery option before boss mechanics spike.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ]
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
      "bind"
    ],
    "description": "A restraint formula that wraps the target in visible mana stitches. It deals light damage while disrupting speed-based enemy intentions.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 55
      }
    ]
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
      "arcane"
    ],
    "description": "A personal spell that records damage, debt, and consequence in invisible script. When the page closes, the enemy pays in force and weakened momentum.",
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
      "intrinsic"
    ],
    "description": "A dragon-blooded furnace that turns breath, heartbeat, and mana into one roaring engine. It fortifies the user while preparing stronger flame techniques.",
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
    ]
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
      "dominion"
    ],
    "description": "A dominion-class miracle that calls down star-metal law. It punishes dark enemies, cleanses momentum, and marks the caster as someone who has crossed ordinary spellcraft.",
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
      "arsenal"
    ],
    "description": "An ultimate authority for maker-type legends. The caster opens a royal armory of imagined weapons and commands one perfect instrument to fall on the enemy.",
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
      "covenant"
    ],
    "description": "A miracle that rewrites despair into one more sunrise. The user binds themselves to dawn, healing heavily while entering a focused guarded state.",
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
    ]
  }
];
