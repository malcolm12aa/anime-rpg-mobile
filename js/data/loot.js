export const LOOT_RARITIES = [
  { id: "common", name: "Common", weight: 50, statBonus: 0, goldValue: 1, minFloor: 1 },
  { id: "uncommon", name: "Uncommon", weight: 28, statBonus: 1, goldValue: 1.25, minFloor: 1 },
  { id: "rare", name: "Rare", weight: 14, statBonus: 2, goldValue: 1.65, minFloor: 3 },
  { id: "epic", name: "Epic", weight: 6, statBonus: 3, goldValue: 2.2, minFloor: 6 },
  { id: "legendary", name: "Legendary", weight: 2, statBonus: 5, goldValue: 3, minFloor: 9 },
  { id: "mythic", name: "Mythic", weight: 1, statBonus: 7, goldValue: 4, minFloor: 12 },
  { id: "world_class", name: "World-Class", weight: 0.35, statBonus: 10, goldValue: 6, minFloor: 15 }
];

export const LOOT_AFFIXES = [
  { id: "burning", name: "Burning", element: "fire", stats: { str: 1, int: 1 }, description: "Adds fire-aspected pressure and burn-flavored scaling." },
  { id: "frozen", name: "Frozen", element: "ice", stats: { wis: 1, con: 1 }, description: "Adds cold control and defensive spell stability." },
  { id: "vampiric", name: "Vampiric", element: "dark", stats: { str: 1, cha: 1 }, description: "Rewards aggressive combat with life-drain flavor." },
  { id: "guardian", name: "Guardian", element: "physical", stats: { con: 2 }, description: "Improves durability and protector builds." },
  { id: "arcane", name: "Arcane", element: "arcane", stats: { int: 2 }, description: "Improves magic scaling and rune-based abilities." },
  { id: "storm_touched", name: "Storm-Touched", element: "lightning", stats: { dex: 1, int: 1 }, description: "Improves speed, lightning pressure, and tempo." },
  { id: "cursed", name: "Cursed", element: "dark", stats: { int: 1, cha: 1 }, description: "Improves hex, curse, and high-risk magic builds." },
  { id: "holy", name: "Holy", element: "light", stats: { wis: 2 }, description: "Improves healing, radiant damage, and cleanse builds." }
];

export const LOOT_BASE_ITEM_IDS = [
  "iron_sword", "oak_staff", "hunter_bow", "training_shield", "chain_vest", "swift_boots",
  "apprentice_ring", "wolf_charm", "sun_badge", "rune_sword", "storm_bow", "guardian_plate", "arcane_catalyst"
];
