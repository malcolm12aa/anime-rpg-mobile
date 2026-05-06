export const SHOPS = [
  {
    id: "general_store",
    name: "Wayfarer's General Store",
    description: "Basic supplies for early dungeon runs.",
    stock: ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "camp_ration", "dnd_healing_draught", "dnd_superior_healing_draught", "dnd_mana_focus_crystal", "dnd_greater_mana_crystal", "dnd_fleetfoot_tonic", "dnd_antitoxin_cordial", "dnd_luckstone_chip", "dnd_heroic_feast_ration"]
  },
  {
    id: "blacksmith",
    name: "Old Anvil Blacksmith",
    description: "Weapons, armor, forging services, rune slots, scaling improvements, and set-piece crafting.",
    craftingStation: "blacksmith",
    stock: ["iron_sword", "hunter_bow", "training_shield", "chain_vest", "swift_boots", "ember_helm", "ember_cuirass", "ember_gauntlets", "ember_boots", "dnd_oathkeeper_longsword", "dnd_sun_mace", "dnd_flame_tongue_claymore", "dnd_giant_maul", "dnd_thunder_pike", "dnd_banisher_flail", "dnd_adamant_guard_plate", "dnd_adamant_guard_helm", "dnd_adamant_guard_gauntlets", "dnd_adamant_guard_greaves", "dnd_arrowcatcher_buckler"]
  },
  {
    id: "arcanist_shop",
    name: "Blue Candle Arcanist",
    description: "Magic tools, catalysts, set gear, and accessories.",
    stock: ["oak_staff", "cloth_robe", "apprentice_ring", "sun_badge", "wolf_charm", "sage_circlet", "sage_robe", "sage_gloves", "sage_charm", "dnd_starseeker_wand", "dnd_moonlit_staff", "dnd_force_rod", "dnd_crystal_orb_focus", "dnd_warlock_grimoire", "dnd_shepherd_crook", "dnd_crystalblade_focus", "dnd_worldclass_staff", "dnd_archmage_circlet", "dnd_archmage_robes", "dnd_archmage_sleeves", "dnd_archmage_sandals", "dnd_ring_of_warding"]
  },
  {
    id: "roadside_outfitter",
    name: "Roadside Outfitter",
    description: "Light gear for rogues, rangers, monks, and fast dungeon runners.",
    stock: ["wolf_mask", "wolf_jacket", "wolf_claws", "wolf_talisman", "hunter_bow", "swift_boots", "stamina_tonic", "cleanse_salve", "dnd_venom_dagger", "dnd_frostbrand_sabre", "dnd_elven_oathbow", "dnd_shadow_crossbow", "dnd_planar_scimitar", "dnd_bloodletter_rapier", "dnd_mithral_windshirt", "dnd_mithral_hood", "dnd_mithral_gloves", "dnd_mithral_boots", "dnd_cloak_of_quiet_steps"]
  },

  {
    id: "alchemy_lab",
    name: "Alchemy Shop",
    description: "Craft potions, bombs, elixirs, cures, mana crystals, and stamina tonics from dungeon materials.",
    stock: ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "greater_potion", "mana_crystal", "stamina_elixir", "cure_all", "dnd_alchemists_sparkflask", "dnd_acid_etch_vial", "dnd_holy_water_ampoule", "dnd_smokeveil_bomb", "dnd_restoration_incense", "dnd_stoneskin_salve", "dnd_giant_strength_elixir"],
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
