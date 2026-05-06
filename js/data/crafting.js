export const CRAFTING_STATIONS = [
  {
    id: "blacksmith",
    name: "Old Anvil Blacksmith",
    description: "Forge weapons, craft armor set pieces, open rune slots, and improve equipment scaling.",
    actions: ["Craft Equipment", "Upgrade Equipped Gear", "Add Rune Slot", "Improve Scaling"]
  },
  {
    id: "alchemy",
    name: "Alchemy Shop",
    description: "Brew potions, bombs, elixirs, cures, mana crystals, and stamina tonics from dungeon materials.",
    actions: ["Craft Consumables", "Refine Materials"]
  }
];

export const CRAFTING_MATERIALS = [
  "iron_ore", "steel_ingot", "monster_hide", "rune_shard", "moon_thread",
  "alchemy_herb", "slime_jelly", "frost_salt", "storm_crystal", "holy_water", "cursed_ash", "ember_gem"
];

export const MATERIAL_DROP_TABLE = [
  { id: "iron_ore", weight: 7, minFloor: 1 },
  { id: "monster_hide", weight: 7, minFloor: 1 },
  { id: "alchemy_herb", weight: 7, minFloor: 1 },
  { id: "slime_jelly", weight: 6, minFloor: 1 },
  { id: "steel_ingot", weight: 4, minFloor: 4 },
  { id: "rune_shard", weight: 4, minFloor: 4 },
  { id: "frost_salt", weight: 3, minFloor: 6 },
  { id: "storm_crystal", weight: 3, minFloor: 7 },
  { id: "moon_thread", weight: 3, minFloor: 7 },
  { id: "holy_water", weight: 2, minFloor: 8 },
  { id: "cursed_ash", weight: 2, minFloor: 8 },
  { id: "ember_gem", weight: 2, minFloor: 5 }
];

export const CRAFTING_RECIPES = [
  {
    id: "craft_rune_sword",
    station: "blacksmith",
    name: "Rune-Etched Sword",
    category: "Weapon Craft",
    output: { itemId: "rune_sword", qty: 1 },
    cost: { gold: 80, materials: { iron_ore: 3, steel_ingot: 1, rune_shard: 1 } },
    description: "Craft a sword with a shallow rune channel, strong for early hybrid weapon builds."
  },
  {
    id: "craft_storm_bow",
    station: "blacksmith",
    name: "Stormstring Bow",
    category: "Weapon Craft",
    output: { itemId: "storm_bow", qty: 1 },
    cost: { gold: 90, materials: { monster_hide: 2, storm_crystal: 1, moon_thread: 1 } },
    description: "Craft a bow tuned for speed, ranged pressure, and lightning-based affixes."
  },
  {
    id: "craft_guardian_plate",
    station: "blacksmith",
    name: "Guardian Plate",
    category: "Armor Craft",
    output: { itemId: "guardian_plate", qty: 1 },
    cost: { gold: 120, materials: { steel_ingot: 2, monster_hide: 2, rune_shard: 1 } },
    description: "Craft a defensive chest piece that improves endurance-heavy builds."
  },
  {
    id: "craft_arcane_catalyst",
    station: "blacksmith",
    name: "Arcane Catalyst",
    category: "Magic Tool Craft",
    output: { itemId: "arcane_catalyst", qty: 1 },
    cost: { gold: 110, materials: { rune_shard: 2, storm_crystal: 1, moon_thread: 1 } },
    description: "Craft a catalyst for spellcasters, ritualists, and hybrid magic jobs."
  },
  {
    id: "craft_ember_helm",
    station: "blacksmith",
    name: "Ember Knight Helm",
    category: "Set Piece Craft",
    output: { itemId: "ember_helm", qty: 1 },
    cost: { gold: 100, materials: { steel_ingot: 1, ember_gem: 1, iron_ore: 2 } },
    description: "Craft a missing Ember Knight set piece instead of waiting for a shop roll."
  },
  {
    id: "craft_greater_potion",
    station: "alchemy",
    name: "Greater Potion",
    category: "Potion Craft",
    output: { itemId: "greater_potion", qty: 2 },
    cost: { gold: 25, materials: { alchemy_herb: 2, slime_jelly: 1 } },
    description: "Brew two stronger healing potions for deeper floors."
  },
  {
    id: "craft_mana_crystal",
    station: "alchemy",
    name: "Mana Crystal",
    category: "Mana Craft",
    output: { itemId: "mana_crystal", qty: 1 },
    cost: { gold: 35, materials: { rune_shard: 1, storm_crystal: 1 } },
    description: "Refine a crystal that restores a large amount of mana."
  },
  {
    id: "craft_stamina_elixir",
    station: "alchemy",
    name: "Stamina Elixir",
    category: "Stamina Craft",
    output: { itemId: "stamina_elixir", qty: 1 },
    cost: { gold: 30, materials: { monster_hide: 1, alchemy_herb: 1, frost_salt: 1 } },
    description: "Brew an elixir for stamina-heavy physical jobs."
  },
  {
    id: "craft_cure_all",
    station: "alchemy",
    name: "Cure-All Draught",
    category: "Cure Craft",
    output: { itemId: "cure_all", qty: 1 },
    cost: { gold: 40, materials: { holy_water: 1, alchemy_herb: 2, slime_jelly: 1 } },
    description: "Brew a cure that removes most common battle status effects."
  },
  {
    id: "craft_fire_bomb",
    station: "alchemy",
    name: "Fire Bomb",
    category: "Bomb Craft",
    output: { itemId: "fire_bomb_item", qty: 2 },
    cost: { gold: 35, materials: { ember_gem: 1, cursed_ash: 1, slime_jelly: 1 } },
    description: "Craft two bombs that damage enemies and fit alchemist-style builds."
  },
  {
    id: "craft_guard_elixir",
    station: "alchemy",
    name: "Guardian Elixir",
    category: "Elixir Craft",
    output: { itemId: "guard_elixir", qty: 1 },
    cost: { gold: 45, materials: { steel_ingot: 1, holy_water: 1, alchemy_herb: 1 } },
    description: "Brew an elixir that reinforces endurance and defensive play."
  }
];
