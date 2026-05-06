// v0.9.4 — Original fantasy abilities inspired by classic tabletop spell themes.
// Names, descriptions, and mechanics are rewritten for Build Your Legend.

export const DND_INSPIRED_ABILITIES = [
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
    "description": "A thorn-ring formula inspired by classic plant-binding magic. It grows spectral brambles under the target, dealing earth damage and attempting to weaken movement. Scales mainly with Magic and slightly with Agility for faster casting rhythm.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ]
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
    "description": "A clean force-magic volley that fires three star-shaped bolts along fixed mana lines. It is designed to be reliable early-game arcane pressure. Scales with Magic and gains a small precision bonus from Dexterity.",
    "effects": []
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.065,
      "endurance": 0.01
    },
    "description": "A compressed ember star that detonates into a battle-sized flare. Inspired by explosive fantasy evocation, this spell hits hard and can apply Burn. Magic drives the blast, while Endurance helps stabilize the recoil.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 55
      }
    ]
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
    "description": "A snap-barrier that flares across the body like glass catching moonlight. It grants Guard and is best used when enemy intent shows a heavy hit coming. Endurance and Magic strengthen the ward pattern.",
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
    "description": "A defensive glyph array that hardens the skin with translucent runes. It has no damage, but helps fragile casters survive ambush turns. The guard quality scales with Endurance-backed status totals.",
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.052,
      "dexterity": 0.012
    },
    "description": "A counter-script that cuts through hostile spell geometry. It deals arcane damage and can Weaken enemies, making it useful against caster bosses and mana-storm floors.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 60
      }
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.058,
      "agility": 0.018
    },
    "description": "A straight-line thunder spell that pins the target with a spear of storm mana. It can Stun, and gains extra value from Agility when cast in fast battle rhythms.",
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
    "description": "A narrow thread of cold mana that lances into joints and armor gaps. It may Freeze briefly, giving low-level casters a way to interrupt dangerous intent.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 25
      }
    ]
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
      "agility-scaling"
    ],
    "scaling": {
      "agility": 0.04,
      "magic": 0.018
    },
    "description": "A veil spell that folds shadow around the caster and leaves a false afterimage. It grants Haste and supports evasive spellblade or rogue builds.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      }
    ]
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
    "description": "A close-range healing rite that seals shallow wounds with warm gold light. It heals the user and remains useful for solo runs where no recruit healer is available.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.32
      }
    ]
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
      "support"
    ],
    "scaling": {
      "magic": 0.045,
      "endurance": 0.02
    },
    "description": "A stronger healing prayer that opens a brief well of sunlight under the caster. It heals and grants Focus, making it a boss-prep spell for clerics and holy spellblades.",
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
    ]
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
    "description": "A soft-voice enchantment that tangles the enemy's decision-making. It does light arcane damage and may Weaken the target for tactical turns.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ]
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
      "endurance-scaling"
    ],
    "scaling": {
      "endurance": 0.045,
      "magic": 0.012
    },
    "description": "A bark-armor rite that wraps the body in living plates and hooked thorns. It grants Guard for several turns and favors high Endurance race paths.",
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
      "agility-scaling"
    ],
    "scaling": {
      "agility": 0.05,
      "magic": 0.018
    },
    "description": "A short-range spatial fold that turns one step into a blink. It grants Haste and helps fragile casters reposition after boss warnings.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      }
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "dexterity": 0.018
    },
    "description": "A conjured storm-crow dives through the target in a flash of feathers and wind. It can inflict Bleed and works well for summoner, ranger, and air-themed builds.",
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
    "description": "A floating arcane hand clamps down on the target's weapon arm. It deals minor arcane damage and can Weaken direct attackers.",
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
      "agility-scaling"
    ],
    "scaling": {
      "agility": 0.035,
      "magic": 0.022
    },
    "description": "The caster splits into flickering glass silhouettes. The images confuse enemy aim, granting both Guard and Haste for a short tempo window.",
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
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.075,
      "agility": 0.015
    },
    "description": "A rare enchantment that swings a phantom lantern inside the enemy's thoughts. It deals arcane damage and can Stun, but its high cooldown makes timing important.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 55
      }
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.082,
      "agility": 0.024
    },
    "description": "A space-folding cut that opens a thin door through the target's guard and closes it with violent pressure. It rewards Magic and Agility-heavy spellblade builds.",
    "effects": []
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.02
    },
    "description": "A transmutation seal that increases local weight around the enemy's feet. It deals earth damage and can Weaken targets that rely on physical pressure.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ]
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
      "endurance-scaling"
    ],
    "scaling": {
      "endurance": 0.055,
      "magic": 0.012
    },
    "description": "A wall-manifestation spell that raises temporary stone plates around the caster. It is a defensive answer for low-health turns and elite ambushes.",
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.045,
      "dexterity": 0.012
    },
    "description": "A ring of muted mana clamps around the target, disrupting spell cadence. The game represents the effect as Weakened, making it a caster-control tool.",
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
      "support"
    ],
    "scaling": {
      "magic": 0.035,
      "endurance": 0.018
    },
    "description": "A three-line vow of protection, courage, and clarity. It grants Focus and is best used before high-value attacks or boss vulnerability windows.",
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
    "description": "A whispered curse that brands the enemy with a cold black mark. It deals dark damage and can reduce enemy pressure through Weakened.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 45
      }
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.058,
      "endurance": 0.012
    },
    "description": "A black bell rings once in the target's shadow. The sound bites into the soul and returns part of the damage as stolen vitality.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.25
      }
    ]
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
      "drain"
    ],
    "scaling": {
      "magic": 0.07,
      "endurance": 0.02
    },
    "description": "A command phrase that calls a temporary bone-servitor strike from the grave mist. It deals dark damage and drains HP, favoring undead and necromancer-style builds.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.3
      }
    ]
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
    "description": "A small fey blessing that makes the next few moments feel slightly too convenient. It grants Lucky, increasing reward pressure and helping treasure-focused builds.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "lucky",
        "duration": 4,
        "chance": 100
      }
    ]
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
      "boss-killer"
    ],
    "scaling": {
      "magic": 0.12,
      "endurance": 0.025
    },
    "description": "An ultimate fire invocation that calls a crown of falling ember-stars. It is expensive and slow, but it can crush bosses during weakness phases and applies Burn reliably.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 5,
        "chance": 85
      }
    ]
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
      "weaken"
    ],
    "scaling": {
      "magic": 0.095,
      "endurance": 0.05
    },
    "description": "An ultimate nature command that orders the old roots beneath the battlefield to rise. It deals heavy earth damage and sharply weakens enemies caught in its domain.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 85
      }
    ]
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
      "magic-scaling"
    ],
    "scaling": {
      "magic": 0.13,
      "agility": 0.035
    },
    "description": "An ultimate spatial spell that drags the enemy's outline slightly out of phase, then shears the misaligned shape back into place. It is a high-Magic finisher.",
    "effects": []
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
      "holy"
    ],
    "scaling": {
      "magic": 0.115,
      "endurance": 0.025
    },
    "description": "A radiant command spoken in a voice the dungeon itself recognizes. It deals light damage and can Stun enemies that fail to resist the authority of the edict.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 65
      }
    ]
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
      "focus"
    ],
    "scaling": {
      "agility": 0.08,
      "magic": 0.075
    },
    "description": "For a breath, the caster moves between ticks of the world-clock. It grants both Haste and Focus, setting up explosive follow-up turns rather than direct damage.",
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
    ]
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
      "strength-scaling"
    ],
    "scaling": {
      "strength": 0.06,
      "magic": 0.018
    },
    "description": "A weapon art that wraps the strike in dusk-colored oathfire. It is built for hybrid knights and dark paladins who scale through Strength with a little Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ]
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
    "description": "A ranger's opening cut that tracks the enemy's weak point. It scales with Dexterity and is useful for bow, dagger, and sword builds.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 2,
        "chance": 35
      }
    ]
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
      "strength-scaling"
    ],
    "scaling": {
      "strength": 0.045,
      "endurance": 0.025
    },
    "description": "A shield-and-weapon counter that detonates thunder through the enemy's guard. It can Stun and performs best on sturdy frontline builds.",
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
      "agility-scaling"
    ],
    "scaling": {
      "agility": 0.06,
      "dexterity": 0.022
    },
    "description": "A fog-step attack that turns movement into a piercing lunge. It grants Haste after use, making it excellent for fast roguelike dungeon runners.",
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
      "endurance-scaling"
    ],
    "scaling": {
      "strength": 0.07,
      "endurance": 0.026
    },
    "description": "A body-enlarging strike that makes the user feel one size larger for a single impact. It favors Strength and Endurance-heavy builds.",
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
    "description": "A passive discipline that teaches casters to keep formulae stable while under pressure. Future systems can use it for concentration-style checks; for now it marks the build as a battle-caster.",
    "effects": []
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
    "description": "A passive utility method for reading old floor geometry, ritual lines, and hidden passages. It is made for players who want map events and secret-path builds to feel more intentional.",
    "effects": []
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
    "description": "A passive survey spell that creates a floating viewpoint during exploration. It supports future scouting mechanics and thematically improves Unlock Tracker builds.",
    "effects": []
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
    "description": "A rare passive stance that turns sworn discipline into counter-pressure. It is designed for shield knights, paladins, and oathbreaker variants.",
    "effects": []
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
    "description": "A rare mental ward that teaches the character to keep their inner world sealed against intrusion. It supports anti-charm and anti-illusion fantasy builds.",
    "effects": []
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
    "description": "A passive resistance method for learning how heat moves through armor, mana, and skin. It is useful for fire-heavy dungeons and Ember Knight builds.",
    "effects": []
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
    "description": "A cold-weather resistance method that trains the body to circulate warmth through mana channels. Best for frozen map modifiers and ice enemies.",
    "effects": []
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
    "description": "A passive grounding practice used by storm runners and metal-armored fighters. It teaches the character to bleed charge into movement rather than panic.",
    "effects": []
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
    "description": "A discipline for enduring holy pressure without spiritual backlash. It helps dark or undead-flavored builds survive sacred ground modifiers.",
    "effects": []
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
    "description": "A mental and mana-channel resistance method for darkness pressure, curses, and void taint. It fits clerics, exorcists, and light-build counters.",
    "effects": []
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
    "description": "A rare passive tradition that stores the memory of blessed meals in the body. It is a thematic support passive for chefs, clerics, and guild-centered builds.",
    "effects": []
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
    "description": "A rare perception discipline that teaches the eyes to ignore false outlines and see the mana skeleton underneath. Great for arcane scouts and illusion counters.",
    "effects": []
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
      "endurance"
    ],
    "scaling": {
      "endurance": 0.08,
      "magic": 0.025
    },
    "description": "A rare transmutation that makes the caster's body behave like tempered metal for a short window. It grants Guard and is strongest on Endurance-heavy builds.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ]
  }
];

export const DND_ABILITY_LIBRARY = {
  id: "dnd_inspired_arcana",
  name: "Tabletop Arcana Archive",
  description: "Original Build Your Legend abilities inspired by classic tabletop spell roles: wards, blasts, charms, nature control, healing, divination, curses, and ultimate miracles.",
  stock: DND_INSPIRED_ABILITIES.map(ability => ability.id)
};
