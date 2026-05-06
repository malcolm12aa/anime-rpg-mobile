export const SHOPS = [
  {
    id: "general_store",
    name: "Wayfarer's General Store",
    description: "Basic supplies for early dungeon runs.",
    stock: ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "camp_ration"]
  },
  {
    id: "blacksmith",
    name: "Old Anvil Blacksmith",
    description: "Weapons, armor, forging services, rune slots, scaling improvements, and set-piece crafting.",
    craftingStation: "blacksmith",
    stock: ["iron_sword", "hunter_bow", "training_shield", "chain_vest", "swift_boots", "ember_helm", "ember_cuirass", "ember_gauntlets", "ember_boots"]
  },
  {
    id: "arcanist_shop",
    name: "Blue Candle Arcanist",
    description: "Magic tools, catalysts, set gear, and accessories.",
    stock: ["oak_staff", "cloth_robe", "apprentice_ring", "sun_badge", "wolf_charm", "sage_circlet", "sage_robe", "sage_gloves", "sage_charm"]
  },
  {
    id: "roadside_outfitter",
    name: "Roadside Outfitter",
    description: "Light gear for rogues, rangers, monks, and fast dungeon runners.",
    stock: ["wolf_mask", "wolf_jacket", "wolf_claws", "wolf_talisman", "hunter_bow", "swift_boots", "stamina_tonic", "cleanse_salve"]
  },

  {
    id: "alchemy_lab",
    name: "Alchemy Shop",
    description: "Craft potions, bombs, elixirs, cures, mana crystals, and stamina tonics from dungeon materials.",
    stock: ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "greater_potion", "mana_crystal", "stamina_elixir", "cure_all"],
    craftingStation: "alchemy"
  },
  {
    id: "skill_spell_library",
    name: "Skill / Spell Library",
    description: "Learn imported skills, spells, passives, and intrinsic abilities from the Excel ability libraries.",
    stock: [],
    abilityShop: true
  }
];
