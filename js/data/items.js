// v0.9.8 — Weapon type metadata added for weapon-locked skills and class prescriptions.
export const ITEMS = [
  {
    "id": "minor_potion",
    "name": "Minor Potion",
    "type": "consumable",
    "price": 25,
    "description": "Restore 35 HP.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 35
      }
    ]
  },
  {
    "id": "mana_vial",
    "name": "Mana Vial",
    "type": "consumable",
    "price": 30,
    "description": "Restore 30 mana.",
    "effects": [
      {
        "type": "restore",
        "resource": "mana",
        "amount": 30
      }
    ]
  },
  {
    "id": "stamina_tonic",
    "name": "Stamina Tonic",
    "type": "consumable",
    "price": 25,
    "description": "Restore 30 stamina.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 30
      }
    ]
  },
  {
    "id": "cleanse_salve",
    "name": "Cleanse Salve",
    "type": "consumable",
    "price": 35,
    "description": "Remove poison, burn, bleed, and frozen.",
    "effects": [
      {
        "type": "cleanse"
      }
    ]
  },
  {
    "id": "camp_ration",
    "name": "Camp Ration",
    "type": "consumable",
    "price": 20,
    "description": "Restore a small amount of all resources outside battle.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 20
      },
      {
        "type": "restore",
        "resource": "mana",
        "amount": 12
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "iron_sword",
    "name": "Iron Sword",
    "type": "equipment",
    "slot": "weapon1",
    "price": 90,
    "description": "A basic blade for physical builds. Supports Strength and weapon-prescription builds.",
    "stats": {
      "str": 2
    },
    "weaponType": "Sword",
    "tags": [
      "Sword"
    ]
  },
  {
    "id": "oak_staff",
    "name": "Oak Staff",
    "type": "equipment",
    "slot": "weapon1",
    "price": 95,
    "description": "A simple staff for magic users. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 2,
      "wis": 1
    },
    "weaponType": "Staff",
    "tags": [
      "Staff"
    ]
  },
  {
    "id": "hunter_bow",
    "name": "Hunter Bow",
    "type": "equipment",
    "slot": "weapon1",
    "price": 90,
    "description": "A flexible ranged weapon. Supports Dexterity and weapon-prescription builds.",
    "stats": {
      "dex": 2
    },
    "weaponType": "Bow",
    "tags": [
      "Bow"
    ]
  },
  {
    "id": "training_shield",
    "name": "Training Shield",
    "type": "equipment",
    "slot": "weapon2",
    "price": 80,
    "description": "A shield that helps survivability. Supports Endurance and weapon-prescription builds.",
    "stats": {
      "con": 2
    },
    "weaponType": "Shield",
    "tags": [
      "Shield"
    ]
  },
  {
    "id": "cloth_robe",
    "name": "Cloth Robe",
    "type": "equipment",
    "slot": "chest",
    "price": 70,
    "description": "Light robe with a little mana control. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 1,
      "wis": 1
    }
  },
  {
    "id": "chain_vest",
    "name": "Chain Vest",
    "type": "equipment",
    "slot": "chest",
    "price": 95,
    "description": "Basic armor for dungeon floors. Supports Endurance and weapon-prescription builds.",
    "stats": {
      "con": 2
    }
  },
  {
    "id": "swift_boots",
    "name": "Swift Boots",
    "type": "equipment",
    "slot": "legs",
    "price": 75,
    "description": "Boots made for quicker turns. Supports Dexterity and weapon-prescription builds.",
    "stats": {
      "dex": 2
    }
  },
  {
    "id": "apprentice_ring",
    "name": "Apprentice Ring",
    "type": "equipment",
    "slot": "accessory1",
    "price": 85,
    "description": "A ring that helps basic casting. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 1,
      "cha": 1
    }
  },
  {
    "id": "wolf_charm",
    "name": "Wolf Charm",
    "type": "equipment",
    "slot": "accessory2",
    "price": 85,
    "description": "A small charm for stamina fighters. Supports Strength / Dexterity and weapon-prescription builds.",
    "stats": {
      "str": 1,
      "dex": 1
    }
  },
  {
    "id": "sun_badge",
    "name": "Sun Badge",
    "type": "equipment",
    "slot": "accessory3",
    "price": 120,
    "description": "A light-aspected badge favored by healers. Supports Magic and weapon-prescription builds.",
    "stats": {
      "wis": 2
    }
  },
  {
    "id": "ember_helm",
    "name": "Ember Knight Helm",
    "type": "equipment",
    "slot": "head",
    "set": "ember_knight",
    "price": 165,
    "description": "A warm helm from the Ember Knight set. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 1,
      "con": 1
    }
  },
  {
    "id": "ember_cuirass",
    "name": "Ember Knight Cuirass",
    "type": "equipment",
    "slot": "chest",
    "set": "ember_knight",
    "price": 210,
    "description": "Heavy armor that hums with contained fire. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 1,
      "con": 3
    }
  },
  {
    "id": "ember_gauntlets",
    "name": "Ember Knight Gauntlets",
    "type": "equipment",
    "slot": "arms",
    "set": "ember_knight",
    "price": 150,
    "description": "Gauntlets that make weapon strikes bite harder. Supports Strength and weapon-prescription builds.",
    "stats": {
      "str": 2
    }
  },
  {
    "id": "ember_boots",
    "name": "Ember Knight Greaves",
    "type": "equipment",
    "slot": "legs",
    "set": "ember_knight",
    "price": 155,
    "description": "Greaves made to hold formation inside burning halls. Supports Endurance / Dexterity and weapon-prescription builds.",
    "stats": {
      "con": 1,
      "dex": 1
    }
  },
  {
    "id": "sage_circlet",
    "name": "Moon Sage Circlet",
    "type": "equipment",
    "slot": "head",
    "set": "moon_sage",
    "price": 170,
    "description": "A silver circlet that improves calm casting. Supports Magic and weapon-prescription builds.",
    "stats": {
      "int": 2
    }
  },
  {
    "id": "sage_robe",
    "name": "Moon Sage Robe",
    "type": "equipment",
    "slot": "chest",
    "set": "moon_sage",
    "price": 215,
    "description": "A robe stitched with quiet lunar runes. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 2,
      "wis": 1
    }
  },
  {
    "id": "sage_gloves",
    "name": "Moon Sage Gloves",
    "type": "equipment",
    "slot": "arms",
    "set": "moon_sage",
    "price": 145,
    "description": "Gloves that stabilize mana flow. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 1,
      "wis": 1
    }
  },
  {
    "id": "sage_charm",
    "name": "Moon Sage Charm",
    "type": "equipment",
    "slot": "accessory4",
    "set": "moon_sage",
    "price": 160,
    "description": "A charm that brightens spell circuits. Supports Magic and weapon-prescription builds.",
    "stats": {
      "wis": 2
    }
  },
  {
    "id": "wolf_mask",
    "name": "Wolf Road Mask",
    "type": "equipment",
    "slot": "head",
    "set": "wolf_road",
    "price": 145,
    "description": "A hunter mask for quick roguelike dives. Supports Dexterity and weapon-prescription builds.",
    "stats": {
      "dex": 2
    }
  },
  {
    "id": "wolf_jacket",
    "name": "Wolf Road Jacket",
    "type": "equipment",
    "slot": "chest",
    "set": "wolf_road",
    "price": 175,
    "description": "Light armor built for fast movement. Supports Dexterity / Endurance and weapon-prescription builds.",
    "stats": {
      "dex": 1,
      "con": 1
    }
  },
  {
    "id": "wolf_claws",
    "name": "Wolf Road Claws",
    "type": "equipment",
    "slot": "arms",
    "set": "wolf_road",
    "price": 165,
    "description": "Clawed gloves for close-range stamina builds. Supports Strength / Dexterity and weapon-prescription builds.",
    "stats": {
      "str": 1,
      "dex": 2
    }
  },
  {
    "id": "wolf_talisman",
    "name": "Wolf Road Talisman",
    "type": "equipment",
    "slot": "accessory5",
    "set": "wolf_road",
    "price": 155,
    "description": "A talisman that sharpens instinct. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 1,
      "wis": 1
    }
  },
  {
    "id": "iron_ore",
    "name": "Iron Ore",
    "type": "material",
    "price": 12,
    "description": "Raw ore dropped by armored enemies and mining events. Used for forging upgrades."
  },
  {
    "id": "steel_ingot",
    "name": "Steel Ingot",
    "type": "material",
    "price": 35,
    "description": "Refined metal used for stronger weapons, armor, and set-piece crafting."
  },
  {
    "id": "monster_hide",
    "name": "Monster Hide",
    "type": "material",
    "price": 18,
    "description": "Tough hide used for bows, leather armor, stamina gear, and outfitter crafts."
  },
  {
    "id": "rune_shard",
    "name": "Rune Shard",
    "type": "material",
    "price": 45,
    "description": "A broken rune fragment used to open rune slots and craft magic equipment."
  },
  {
    "id": "moon_thread",
    "name": "Moon Thread",
    "type": "material",
    "price": 40,
    "description": "Silvery thread used for robes, charms, and light gear."
  },
  {
    "id": "alchemy_herb",
    "name": "Alchemy Herb",
    "type": "material",
    "price": 10,
    "description": "A common herb used in potions, elixirs, and cures."
  },
  {
    "id": "slime_jelly",
    "name": "Slime Jelly",
    "type": "material",
    "price": 14,
    "description": "A stabilizing reagent used for potions, bombs, and mana compounds."
  },
  {
    "id": "frost_salt",
    "name": "Frost Salt",
    "type": "material",
    "price": 28,
    "description": "Cold mineral salt used for stamina elixirs and ice-aspected crafting."
  },
  {
    "id": "storm_crystal",
    "name": "Storm Crystal",
    "type": "material",
    "price": 55,
    "description": "A charged crystal used for scaling improvements, storm gear, and mana crystals."
  },
  {
    "id": "holy_water",
    "name": "Holy Water",
    "type": "material",
    "price": 35,
    "description": "Blessed water used for cures, cleanse items, and holy gear."
  },
  {
    "id": "cursed_ash",
    "name": "Cursed Ash",
    "type": "material",
    "price": 38,
    "description": "A dark reagent used for bombs, curse items, and risky alchemy."
  },
  {
    "id": "rune_sword",
    "name": "Rune-Etched Sword",
    "type": "equipment",
    "slot": "weapon1",
    "price": 180,
    "description": "A crafted blade with shallow rune grooves for hybrid skills and spells. Supports Strength / Magic and weapon-prescription builds.",
    "stats": {
      "str": 2,
      "int": 2
    },
    "weaponType": "Sword",
    "tags": [
      "Sword"
    ]
  },
  {
    "id": "storm_bow",
    "name": "Stormstring Bow",
    "type": "equipment",
    "slot": "weapon1",
    "price": 190,
    "description": "A crafted bow strung with charged fiber, ideal for speed and ranged pressure. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "int": 1
    },
    "weaponType": "Bow",
    "tags": [
      "Bow"
    ]
  },
  {
    "id": "guardian_plate",
    "name": "Guardian Plate",
    "type": "equipment",
    "slot": "chest",
    "price": 240,
    "description": "Crafted armor made for endurance tanks and shield-based jobs. Supports Endurance / Strength and weapon-prescription builds.",
    "stats": {
      "con": 4,
      "str": 1
    }
  },
  {
    "id": "arcane_catalyst",
    "name": "Arcane Catalyst",
    "type": "equipment",
    "slot": "weapon2",
    "price": 220,
    "description": "A crafted off-hand catalyst for spell schools, rune magic, and hybrid casting. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 3,
      "wis": 1
    },
    "weaponType": "Catalyst",
    "tags": [
      "Catalyst"
    ]
  },
  {
    "id": "greater_potion",
    "name": "Greater Potion",
    "type": "consumable",
    "price": 70,
    "description": "Restore 85 HP.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 85
      }
    ]
  },
  {
    "id": "mana_crystal",
    "name": "Mana Crystal",
    "type": "consumable",
    "price": 80,
    "description": "Restore 80 mana.",
    "effects": [
      {
        "type": "restore",
        "resource": "mana",
        "amount": 80
      }
    ]
  },
  {
    "id": "stamina_elixir",
    "name": "Stamina Elixir",
    "type": "consumable",
    "price": 75,
    "description": "Restore 80 stamina.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 80
      }
    ]
  },
  {
    "id": "cure_all",
    "name": "Cure-All Draught",
    "type": "consumable",
    "price": 90,
    "description": "Remove poison, burn, bleed, frozen, weakened, and stunned.",
    "effects": [
      {
        "type": "cleanse"
      }
    ]
  },
  {
    "id": "fire_bomb_item",
    "name": "Fire Bomb",
    "type": "consumable",
    "price": 65,
    "description": "A crafted bomb for alchemist builds. Currently used as a valuable battle supply and crafting output.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 0
      }
    ]
  },
  {
    "id": "guard_elixir",
    "name": "Guardian Elixir",
    "type": "consumable",
    "price": 85,
    "description": "Restore HP and stamina before tough fights.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 35
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 45
      }
    ]
  },
  {
    "id": "ember_gem",
    "name": "Ember Gem",
    "type": "material",
    "price": 60,
    "description": "A warm monster core used for future crafting."
  },
  {
    "id": "relic_dust",
    "name": "Relic Dust",
    "type": "material",
    "price": 0,
    "description": "Permanent progression dust used for secret unlocks."
  },
  {
    "id": "dnd_starseeker_wand",
    "name": "Starseeker Wand",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Uncommon",
    "price": 240,
    "description": "A slim wand inspired by tabletop arcane foci. Its etched tip improves Magic-based spell aim and Dexterity precision. Supports Magic / Dexterity and weapon-prescription builds.",
    "stats": {
      "int": 3,
      "dex": 1
    },
    "scalingStats": {
      "magic": "B",
      "dexterity": "D"
    },
    "tags": [
      "wand",
      "arcane",
      "magic-scaling",
      "Wand"
    ],
    "weaponType": "Wand"
  },
  {
    "id": "dnd_moonlit_staff",
    "name": "Moonlit Staff",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 420,
    "description": "A pale staff for healers and moon casters. Its status scaling favors Magic and Endurance for safer long fights. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 3,
      "wis": 2,
      "con": 1
    },
    "scalingStats": {
      "magic": "A",
      "endurance": "C"
    },
    "tags": [
      "staff",
      "light",
      "healing",
      "Staff"
    ],
    "weaponType": "Staff"
  },
  {
    "id": "dnd_force_rod",
    "name": "Force-Etched Rod",
    "type": "equipment",
    "slot": "weapon2",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 460,
    "description": "A compact rod based on force-magic implements. Good for off-hand spell pressure and arcane control builds. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 4,
      "wis": 1
    },
    "scalingStats": {
      "magic": "A",
      "dexterity": "D"
    },
    "tags": [
      "rod",
      "force",
      "arcane",
      "Rod"
    ],
    "weaponType": "Rod"
  },
  {
    "id": "dnd_crystal_orb_focus",
    "name": "Crystal Orb Focus",
    "type": "equipment",
    "slot": "weapon2",
    "itemClass": "weapon",
    "rarity": "Uncommon",
    "price": 280,
    "description": "A clear orb that turns raw mana into stable spell patterns. Favored by diviners and ability-evolution planners. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 2,
      "wis": 2
    },
    "scalingStats": {
      "magic": "B",
      "agility": "D"
    },
    "tags": [
      "orb",
      "divination",
      "focus",
      "Catalyst"
    ],
    "weaponType": "Catalyst"
  },
  {
    "id": "dnd_sun_mace",
    "name": "Sun-Oath Mace",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 430,
    "description": "A holy mace inspired by radiant cleric gear. Its strikes scale with Strength while its light-channeling scales with Magic. Supports Strength / Magic and weapon-prescription builds.",
    "stats": {
      "str": 3,
      "wis": 2
    },
    "scalingStats": {
      "strength": "B",
      "magic": "C"
    },
    "tags": [
      "mace",
      "holy",
      "hybrid",
      "Mace"
    ],
    "weaponType": "Mace"
  },
  {
    "id": "dnd_oathkeeper_longsword",
    "name": "Oathkeeper Longsword",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 450,
    "description": "A knightly sword built for paladin and guardian jobs. Its clean edge improves Strength scaling and defensive Endurance tempo. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "scalingStats": {
      "strength": "B",
      "endurance": "C"
    },
    "tags": [
      "sword",
      "knight",
      "oath",
      "Sword"
    ],
    "weaponType": "Sword"
  },
  {
    "id": "dnd_venom_dagger",
    "name": "Venomglass Dagger",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Uncommon",
    "price": 260,
    "description": "A dagger inspired by assassin poisons and light blades. It supports Dexterity and Agility status growth for rogue skills. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "cha": 1
    },
    "scalingStats": {
      "dexterity": "B",
      "agility": "C"
    },
    "tags": [
      "dagger",
      "poison",
      "speed",
      "Dagger"
    ],
    "weaponType": "Dagger"
  },
  {
    "id": "dnd_frostbrand_sabre",
    "name": "Frostbrand Sabre",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Epic",
    "price": 780,
    "description": "A curved cold-aspected blade inspired by magic sword legends. It scales with Dexterity and Magic for frost spellblade builds. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "int": 3
    },
    "scalingStats": {
      "dexterity": "B",
      "magic": "B"
    },
    "tags": [
      "sabre",
      "ice",
      "spellblade",
      "Sword"
    ],
    "weaponType": "Sword"
  },
  {
    "id": "dnd_flame_tongue_claymore",
    "name": "Ember-Tongue Claymore",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Epic",
    "price": 820,
    "description": "A heavy blade with contained fire runes. It rewards Strength and Endurance while helping fire skill builds hit harder. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 5,
      "con": 2
    },
    "scalingStats": {
      "strength": "A",
      "endurance": "C"
    },
    "tags": [
      "greatsword",
      "fire",
      "heavy",
      "Sword"
    ],
    "weaponType": "Sword"
  },
  {
    "id": "dnd_thunder_pike",
    "name": "Thunderhead Pike",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 500,
    "description": "A spear-like pike inspired by storm lances. It favors Dexterity, Strength, and lightning-themed battle arts. Supports Strength / Dexterity and weapon-prescription builds.",
    "stats": {
      "str": 2,
      "dex": 3
    },
    "scalingStats": {
      "dexterity": "B",
      "strength": "C"
    },
    "tags": [
      "spear",
      "lightning",
      "reach",
      "Spear"
    ],
    "weaponType": "Spear"
  },
  {
    "id": "dnd_giant_maul",
    "name": "Giantbreaker Maul",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Epic",
    "price": 900,
    "description": "A massive maul inspired by giant-slayer weapons. It is slow, brutal, and tuned for high Strength plus Endurance builds. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 6,
      "con": 2,
      "dex": -1
    },
    "scalingStats": {
      "strength": "S",
      "endurance": "B"
    },
    "tags": [
      "maul",
      "heavy",
      "boss",
      "Maul"
    ],
    "weaponType": "Maul"
  },
  {
    "id": "dnd_elven_oathbow",
    "name": "Oathbow of the Green Road",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Epic",
    "price": 860,
    "description": "A longbow inspired by oath-bound archery relics. Dexterity is its main scaling, with Agility adding firing rhythm. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 5,
      "wis": 1
    },
    "scalingStats": {
      "dexterity": "A",
      "agility": "B"
    },
    "tags": [
      "bow",
      "ranger",
      "oath",
      "Bow"
    ],
    "weaponType": "Bow"
  },
  {
    "id": "dnd_shadow_crossbow",
    "name": "Shadowbolt Crossbow",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 520,
    "description": "A compact crossbow for rogues and hunters. It turns Dexterity into precise opener damage and supports dark affixes. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 4,
      "cha": 1
    },
    "scalingStats": {
      "dexterity": "A",
      "agility": "C"
    },
    "tags": [
      "crossbow",
      "shadow",
      "ranged",
      "Crossbow"
    ],
    "weaponType": "Crossbow"
  },
  {
    "id": "dnd_planar_scimitar",
    "name": "Planar Edge Scimitar",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Legendary",
    "price": 1400,
    "description": "A curved blade inspired by planar travel magic. It scales with Agility and Magic for fast hybrid builds. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 4,
      "int": 3,
      "cha": 1
    },
    "scalingStats": {
      "agility": "A",
      "magic": "B"
    },
    "tags": [
      "scimitar",
      "planar",
      "hybrid",
      "Sword"
    ],
    "weaponType": "Sword"
  },
  {
    "id": "dnd_banisher_flail",
    "name": "Banisher's Chain-Flail",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Legendary",
    "price": 1500,
    "description": "A consecrated chain weapon for exorcists. Strength drives the impact, while Magic carries the banishing resonance. Supports Strength / Magic and weapon-prescription builds.",
    "stats": {
      "str": 4,
      "wis": 3
    },
    "scalingStats": {
      "strength": "A",
      "magic": "B"
    },
    "tags": [
      "flail",
      "holy",
      "exorcist",
      "Mace"
    ],
    "weaponType": "Mace"
  },
  {
    "id": "dnd_bloodletter_rapier",
    "name": "Bloodletter Rapier",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 520,
    "description": "A thin dueling blade inspired by finesse weapons. Dexterity powers the thrust, while Agility improves tempo. Supports Dexterity / Strength and weapon-prescription builds.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "scalingStats": {
      "dexterity": "A",
      "agility": "B"
    },
    "tags": [
      "rapier",
      "duelist",
      "bleed",
      "Rapier"
    ],
    "weaponType": "Rapier"
  },
  {
    "id": "dnd_warlock_grimoire",
    "name": "Ironclasp War-Grimoire",
    "type": "equipment",
    "slot": "weapon2",
    "itemClass": "weapon",
    "rarity": "Epic",
    "price": 820,
    "description": "A metal-bound grimoire for curses and pact magic. It boosts Magic and social-force Charisma-style scaling. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 4,
      "cha": 2
    },
    "scalingStats": {
      "magic": "A",
      "dexterity": "D"
    },
    "tags": [
      "grimoire",
      "curse",
      "dark",
      "Grimoire"
    ],
    "weaponType": "Grimoire"
  },
  {
    "id": "dnd_shepherd_crook",
    "name": "Shepherd's Spirit Crook",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Rare",
    "price": 480,
    "description": "A curved staff inspired by druid and summoner implements. It strengthens Magic and Endurance for support play. Supports Magic / Endurance and weapon-prescription builds.",
    "stats": {
      "wis": 3,
      "con": 2
    },
    "scalingStats": {
      "magic": "B",
      "endurance": "C"
    },
    "tags": [
      "staff",
      "summon",
      "nature",
      "Staff"
    ],
    "weaponType": "Staff"
  },
  {
    "id": "dnd_crystalblade_focus",
    "name": "Crystalblade Focus",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "Mythic",
    "price": 2200,
    "description": "A blade grown around an arcane focus. It is made for spellblades that want Magic and Dexterity to share the same weapon line. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 5,
      "int": 5
    },
    "scalingStats": {
      "magic": "S",
      "dexterity": "A"
    },
    "tags": [
      "blade",
      "crystal",
      "spellblade",
      "Sword"
    ],
    "weaponType": "Sword"
  },
  {
    "id": "dnd_worldclass_staff",
    "name": "World-Class Staff of the Ninth Door",
    "type": "equipment",
    "slot": "weapon1",
    "itemClass": "weapon",
    "rarity": "World-Class",
    "price": 5000,
    "description": "A forbidden staff inspired by artifact-tier tabletop legends. It pours immense Magic scaling into ultimate spell builds. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 8,
      "wis": 5,
      "cha": 2
    },
    "scalingStats": {
      "magic": "S",
      "endurance": "B"
    },
    "tags": [
      "staff",
      "world-class",
      "ultimate",
      "Staff"
    ],
    "weaponType": "Staff"
  },
  {
    "id": "dnd_adamant_guard_plate",
    "name": "Adamant Guard Plate",
    "type": "equipment",
    "slot": "chest",
    "itemClass": "armor",
    "rarity": "Epic",
    "price": 950,
    "set": "adamant_guard",
    "description": "Dense plate armor inspired by adamantine defenses. Armor Bonus: major Endurance scaling and reduced physical-pressure weakness. Supports Endurance / Strength and weapon-prescription builds.",
    "stats": {
      "con": 6,
      "str": 1,
      "dex": -1
    },
    "armorBonus": "+6 CON, heavy Endurance scaling",
    "tags": [
      "plate",
      "endurance",
      "adamant"
    ]
  },
  {
    "id": "dnd_adamant_guard_helm",
    "name": "Adamant Guard Helm",
    "type": "equipment",
    "slot": "head",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 560,
    "set": "adamant_guard",
    "description": "A heavy helm that protects the brow with dull silver-gray alloy. Armor Bonus: improved Endurance and Strength stability. Supports Endurance / Strength and weapon-prescription builds.",
    "stats": {
      "con": 3,
      "str": 1
    },
    "armorBonus": "+3 CON, +1 STR",
    "tags": [
      "helm",
      "endurance",
      "adamant"
    ]
  },
  {
    "id": "dnd_adamant_guard_gauntlets",
    "name": "Adamant Guard Gauntlets",
    "type": "equipment",
    "slot": "arms",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 540,
    "set": "adamant_guard",
    "description": "Thick gauntlets that turn blocks into counter-pressure. Armor Bonus: Strength and Endurance. Supports Strength / Endurance and weapon-prescription builds.",
    "stats": {
      "str": 2,
      "con": 2
    },
    "armorBonus": "+2 STR, +2 CON",
    "tags": [
      "gauntlets",
      "guard",
      "heavy"
    ]
  },
  {
    "id": "dnd_adamant_guard_greaves",
    "name": "Adamant Guard Greaves",
    "type": "equipment",
    "slot": "legs",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 520,
    "set": "adamant_guard",
    "description": "Greaves built to hold ground against bosses. Armor Bonus: Endurance with a small Agility penalty from weight. Supports Endurance / Dexterity and weapon-prescription builds.",
    "stats": {
      "con": 3,
      "dex": -1
    },
    "armorBonus": "+3 CON, heavy armor footing",
    "tags": [
      "greaves",
      "tank",
      "heavy"
    ]
  },
  {
    "id": "dnd_mithral_windshirt",
    "name": "Mithral Windshirt",
    "type": "equipment",
    "slot": "chest",
    "itemClass": "armor",
    "rarity": "Epic",
    "price": 900,
    "set": "mithral_wind",
    "description": "Light armor inspired by mithral chain. Armor Bonus: Agility and Dexterity without sacrificing defense. Supports Dexterity / Endurance and weapon-prescription builds.",
    "stats": {
      "dex": 4,
      "con": 2
    },
    "armorBonus": "+4 DEX, +2 CON, light armor tempo",
    "tags": [
      "light armor",
      "speed",
      "mithral"
    ]
  },
  {
    "id": "dnd_mithral_hood",
    "name": "Mithral Wind Hood",
    "type": "equipment",
    "slot": "head",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 480,
    "set": "mithral_wind",
    "description": "A whisper-light hood that helps keep movement silent. Armor Bonus: Dexterity and Agility identity. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "cha": 1
    },
    "armorBonus": "+3 DEX, stealth rhythm",
    "tags": [
      "hood",
      "speed",
      "stealth"
    ]
  },
  {
    "id": "dnd_mithral_gloves",
    "name": "Mithral Wind Gloves",
    "type": "equipment",
    "slot": "arms",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 500,
    "set": "mithral_wind",
    "description": "Fine gloves for archers, rogues, and spellblade fingerwork. Armor Bonus: Dexterity status growth. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "int": 1
    },
    "armorBonus": "+3 DEX, precision handling",
    "tags": [
      "gloves",
      "dexterity",
      "light"
    ]
  },
  {
    "id": "dnd_mithral_boots",
    "name": "Mithral Wind Boots",
    "type": "equipment",
    "slot": "legs",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 500,
    "set": "mithral_wind",
    "description": "Boots that barely sound against stone floors. Armor Bonus: Agility and Dexterity. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "wis": 1
    },
    "armorBonus": "+3 DEX, faster dungeon tempo",
    "tags": [
      "boots",
      "agility",
      "light"
    ]
  },
  {
    "id": "dnd_archmage_circlet",
    "name": "Archmage Circlet",
    "type": "equipment",
    "slot": "head",
    "itemClass": "armor",
    "rarity": "Epic",
    "price": 940,
    "set": "archmage_regalia",
    "description": "A circlet inspired by robes and crowns of high magic. Armor Bonus: Magic scaling and spell focus. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 5,
      "wis": 2
    },
    "armorBonus": "+5 INT, +2 WIS, spell stability",
    "tags": [
      "circlet",
      "magic",
      "regalia"
    ]
  },
  {
    "id": "dnd_archmage_robes",
    "name": "Archmage Robes",
    "type": "equipment",
    "slot": "chest",
    "itemClass": "armor",
    "rarity": "Epic",
    "price": 980,
    "set": "archmage_regalia",
    "description": "Layered spellcloth reinforced with tiny ward lines. Armor Bonus: Magic and Endurance for caster survival. Supports Magic / Magic and weapon-prescription builds.",
    "stats": {
      "int": 4,
      "wis": 2,
      "con": 1
    },
    "armorBonus": "+4 INT, +2 WIS, +1 CON",
    "tags": [
      "robe",
      "magic",
      "ward"
    ]
  },
  {
    "id": "dnd_archmage_sleeves",
    "name": "Archmage Sleeves",
    "type": "equipment",
    "slot": "arms",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 590,
    "set": "archmage_regalia",
    "description": "Sleeves etched with formula anchors. Armor Bonus: Magic control and casting Dexterity. Supports Magic / Dexterity and weapon-prescription builds.",
    "stats": {
      "int": 3,
      "dex": 1
    },
    "armorBonus": "+3 INT, casting precision",
    "tags": [
      "sleeves",
      "spell",
      "focus"
    ]
  },
  {
    "id": "dnd_archmage_sandals",
    "name": "Archmage Sandals",
    "type": "equipment",
    "slot": "legs",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 550,
    "set": "archmage_regalia",
    "description": "Soft sandals that keep the caster aligned with mana lines. Armor Bonus: Magic and Agility. Supports Magic / Dexterity and weapon-prescription builds.",
    "stats": {
      "int": 2,
      "dex": 2
    },
    "armorBonus": "+2 INT, +2 DEX",
    "tags": [
      "sandals",
      "mana",
      "mobility"
    ]
  },
  {
    "id": "dnd_arrowcatcher_buckler",
    "name": "Arrowcatcher Buckler",
    "type": "equipment",
    "slot": "weapon2",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 620,
    "description": "A small animated-feeling buckler inspired by defensive shields. Armor Bonus: Endurance and Dexterity against ranged pressure. Supports Endurance / Dexterity and weapon-prescription builds.",
    "stats": {
      "con": 3,
      "dex": 2
    },
    "armorBonus": "+3 CON, +2 DEX",
    "tags": [
      "shield",
      "ranged defense",
      "buckler",
      "Shield"
    ],
    "weaponType": "Shield"
  },
  {
    "id": "dnd_cloak_of_quiet_steps",
    "name": "Cloak of Quiet Steps",
    "type": "equipment",
    "slot": "accessory1",
    "itemClass": "armor",
    "rarity": "Rare",
    "price": 620,
    "description": "A cloak inspired by stealthy elven gear. Armor Bonus: Agility and Dexterity for scouts and rogues. Supports Dexterity / Magic and weapon-prescription builds.",
    "stats": {
      "dex": 3,
      "cha": 1
    },
    "armorBonus": "+3 DEX, stealth support",
    "tags": [
      "cloak",
      "stealth",
      "agility"
    ]
  },
  {
    "id": "dnd_ring_of_warding",
    "name": "Ring of Warding",
    "type": "equipment",
    "slot": "accessory2",
    "itemClass": "armor",
    "rarity": "Uncommon",
    "price": 360,
    "description": "A protective ring based on classic defense trinkets. Armor Bonus: small Endurance and Magic protection. Supports Endurance / Magic and weapon-prescription builds.",
    "stats": {
      "con": 1,
      "wis": 2
    },
    "armorBonus": "+1 CON, +2 WIS",
    "tags": [
      "ring",
      "ward",
      "defense"
    ]
  },
  {
    "id": "dnd_healing_draught",
    "name": "Healing Draught",
    "type": "consumable",
    "rarity": "Common",
    "price": 55,
    "description": "A stronger potion inspired by tabletop healing supplies. Restores 70 HP.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 70
      }
    ],
    "tags": [
      "potion",
      "heal"
    ]
  },
  {
    "id": "dnd_superior_healing_draught",
    "name": "Superior Healing Draught",
    "type": "consumable",
    "rarity": "Rare",
    "price": 160,
    "description": "A high-grade red-gold potion for boss runs. Restores 180 HP.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 180
      }
    ],
    "tags": [
      "potion",
      "heal",
      "boss"
    ]
  },
  {
    "id": "dnd_mana_focus_crystal",
    "name": "Mana Focus Crystal",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 90,
    "description": "A blue focus crystal inspired by arcane supplies. Restores 95 mana.",
    "effects": [
      {
        "type": "restore",
        "resource": "mana",
        "amount": 95
      }
    ],
    "tags": [
      "mana",
      "crystal"
    ]
  },
  {
    "id": "dnd_greater_mana_crystal",
    "name": "Greater Mana Crystal",
    "type": "consumable",
    "rarity": "Rare",
    "price": 180,
    "description": "A concentrated mana crystal for high-rank spells. Restores 170 mana.",
    "effects": [
      {
        "type": "restore",
        "resource": "mana",
        "amount": 170
      }
    ],
    "tags": [
      "mana",
      "crystal",
      "rare"
    ]
  },
  {
    "id": "dnd_fleetfoot_tonic",
    "name": "Fleetfoot Tonic",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 95,
    "description": "A swift silver tonic inspired by speed potions. Restores stamina and grants Haste.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 85
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "stamina",
      "haste"
    ]
  },
  {
    "id": "dnd_giant_strength_elixir",
    "name": "Giant-Strength Elixir",
    "type": "consumable",
    "rarity": "Rare",
    "price": 190,
    "description": "A heavy red elixir inspired by giant-strength potions. Grants Focus and restores stamina.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 80
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "tags": [
      "strength",
      "focus"
    ]
  },
  {
    "id": "dnd_stoneskin_salve",
    "name": "Stoneskin Salve",
    "type": "consumable",
    "rarity": "Rare",
    "price": 170,
    "description": "A gray mineral salve inspired by stone-body magic. Grants Guard for dangerous turns.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "tags": [
      "guard",
      "defense"
    ]
  },
  {
    "id": "dnd_antitoxin_cordial",
    "name": "Antitoxin Cordial",
    "type": "consumable",
    "rarity": "Common",
    "price": 70,
    "description": "A bitter vial inspired by antitoxin supplies. Cleanses common negative conditions.",
    "effects": [
      {
        "type": "cleanse"
      }
    ],
    "tags": [
      "cure",
      "cleanse"
    ]
  },
  {
    "id": "dnd_alchemists_sparkflask",
    "name": "Alchemist's Sparkflask",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 110,
    "description": "A volatile flask inspired by alchemist fire. In battle it damages the enemy and can apply Burn.",
    "effects": [
      {
        "type": "damageEnemy",
        "amount": 75,
        "element": "fire"
      },
      {
        "type": "statusEnemy",
        "status": "burn",
        "duration": 3,
        "chance": 70
      }
    ],
    "tags": [
      "bomb",
      "fire",
      "burn"
    ]
  },
  {
    "id": "dnd_acid_etch_vial",
    "name": "Acid-Etch Vial",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 115,
    "description": "An acidic vial inspired by adventuring gear. In battle it damages the enemy and weakens armor.",
    "effects": [
      {
        "type": "damageEnemy",
        "amount": 65,
        "element": "poison"
      },
      {
        "type": "statusEnemy",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ],
    "tags": [
      "vial",
      "acid",
      "weaken"
    ]
  },
  {
    "id": "dnd_holy_water_ampoule",
    "name": "Holy Water Ampoule",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 105,
    "description": "Blessed water refined for dungeon use. In battle it deals light damage and can weaken dark enemies.",
    "effects": [
      {
        "type": "damageEnemy",
        "amount": 70,
        "element": "light"
      },
      {
        "type": "statusEnemy",
        "status": "weakened",
        "duration": 2,
        "chance": 55
      }
    ],
    "tags": [
      "holy",
      "light",
      "vial"
    ]
  },
  {
    "id": "dnd_smokeveil_bomb",
    "name": "Smokeveil Bomb",
    "type": "consumable",
    "rarity": "Uncommon",
    "price": 100,
    "description": "A smoke bomb inspired by adventuring gear. Grants Haste, helping the player regain tempo.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "bomb",
      "haste",
      "escape"
    ]
  },
  {
    "id": "dnd_luckstone_chip",
    "name": "Luckstone Chip",
    "type": "consumable",
    "rarity": "Rare",
    "price": 150,
    "description": "A chipped charm inspired by luck stones. Grants Lucky for better reward pressure.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "lucky",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "luck",
      "reward"
    ]
  },
  {
    "id": "dnd_restoration_incense",
    "name": "Restoration Incense",
    "type": "consumable",
    "rarity": "Rare",
    "price": 165,
    "description": "A fragrant stick inspired by restoration magic. Cleanses and restores mana.",
    "effects": [
      {
        "type": "cleanse"
      },
      {
        "type": "restore",
        "resource": "mana",
        "amount": 75
      }
    ],
    "tags": [
      "cleanse",
      "mana",
      "support"
    ]
  },
  {
    "id": "dnd_heroic_feast_ration",
    "name": "Heroic Feast Ration",
    "type": "consumable",
    "rarity": "Epic",
    "price": 240,
    "description": "A preserved feast ration inspired by heroic banquet magic. Heals, restores stamina, and grants Focus.",
    "effects": [
      {
        "type": "healFlat",
        "amount": 130
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "tags": [
      "food",
      "focus",
      "boss"
    ]
  }
];

export const SET_BONUSES = [
  {
    "id": "ember_knight",
    "name": "Ember Knight Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+2 STR and +1 CON",
        "stats": {
          "str": 2,
          "con": 1
        }
      },
      {
        "pieces": 4,
        "description": "+3 STR, +2 CON, and stronger stamina bruiser scaling",
        "stats": {
          "str": 3,
          "con": 2
        }
      }
    ]
  },
  {
    "id": "moon_sage",
    "name": "Moon Sage Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+2 INT and +1 WIS",
        "stats": {
          "int": 2,
          "wis": 1
        }
      },
      {
        "pieces": 4,
        "description": "+4 INT, +3 WIS, and better mana-focused scaling",
        "stats": {
          "int": 4,
          "wis": 3
        }
      }
    ]
  },
  {
    "id": "wolf_road",
    "name": "Wolf Road Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+2 DEX and +1 STR",
        "stats": {
          "dex": 2,
          "str": 1
        }
      },
      {
        "pieces": 4,
        "description": "+4 DEX, +2 STR, and improved speed builds",
        "stats": {
          "dex": 4,
          "str": 2
        }
      }
    ]
  },
  {
    "id": "adamant_guard",
    "name": "Adamant Guard Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+3 CON and +1 STR for heavy guardian builds",
        "stats": {
          "con": 3,
          "str": 1
        }
      },
      {
        "pieces": 4,
        "description": "+6 CON, +2 STR, and major Endurance scaling for tank paths",
        "stats": {
          "con": 6,
          "str": 2
        }
      }
    ]
  },
  {
    "id": "mithral_wind",
    "name": "Mithral Wind Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+3 DEX and +1 CHA for fast movement builds",
        "stats": {
          "dex": 3,
          "cha": 1
        }
      },
      {
        "pieces": 4,
        "description": "+6 DEX, +2 WIS, and stronger Agility/Dexterity status pressure",
        "stats": {
          "dex": 6,
          "wis": 2
        }
      }
    ]
  },
  {
    "id": "archmage_regalia",
    "name": "Archmage Regalia Set",
    "thresholds": [
      {
        "pieces": 2,
        "description": "+3 INT and +2 WIS for spellcasting stability",
        "stats": {
          "int": 3,
          "wis": 2
        }
      },
      {
        "pieces": 4,
        "description": "+7 INT, +4 WIS, and stronger Magic status scaling",
        "stats": {
          "int": 7,
          "wis": 4
        }
      }
    ]
  }
];

export const EQUIPMENT_SLOTS = [
  "head",
  "chest",
  "arms",
  "legs",
  "weapon1",
  "weapon2",
  "accessory1",
  "accessory2",
  "accessory3",
  "accessory4",
  "accessory5"
];
