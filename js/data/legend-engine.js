export const LEGEND_QUEST_FRAMES = [
  { id: "weapon_trial", category: "Job Quest", tone: "Weapon Trial", targetType: "weaponBattles", baseAmount: 3, reward: "balanced", nameParts: ["Iron Rhythm", "Edge Discipline", "Battle Oath", "Steel Proof"] },
  { id: "element_study", category: "Side Quest", tone: "Element Study", targetType: "elementUses", baseAmount: 8, reward: "magic", nameParts: ["First Spark", "Arcane Pattern", "Circle Practice", "Glyph Trial"] },
  { id: "class_training", category: "Job Quest", tone: "Class Training", targetType: "totalLevel", baseAmount: 5, reward: "xp", nameParts: ["Role Foundation", "Guild Lesson", "Mastery Drill", "Path Review"] },
  { id: "bloodline_trial", category: "Race Quest", tone: "Bloodline Trial", targetType: "highestRaceLevel", baseAmount: 4, reward: "relic", nameParts: ["Awakening Proof", "Lineage Echo", "Ancestry Drill", "Blood Oath"] },
  { id: "monster_contract", category: "Hunting Quest", tone: "Hunting Contract", targetType: "enemyKills", baseAmount: 6, reward: "gold", nameParts: ["Dire Ledger", "Fang Count", "Tower Cull", "Guild Hunt"] },
  { id: "boss_warning", category: "Boss Quest", tone: "Boss Warning", targetType: "bossKills", baseAmount: 1, reward: "relic", nameParts: ["Gate Breaker", "Red Notice", "Tower Seal", "Boss Writ"] },
  { id: "survival_drill", category: "Side Quest", tone: "Survival Drill", targetType: "roomsCleared", baseAmount: 5, reward: "supplies", nameParts: ["Long Patrol", "Dungeon Habit", "Lantern Watch", "Safe Return"] },
  { id: "collection_order", category: "Collection Quest", tone: "Collection Order", targetType: "inventoryCount", baseAmount: 12, reward: "supplies", nameParts: ["Stock Check", "Pack Ready", "Quartermaster Note", "Supply Run"] }
];

export const LEGEND_ACHIEVEMENT_FRAMES = [
  { id: "blade_record", targetType: "weaponBattles", amount: 15, difficulty: "uncommon", bonus: { str: 1, dex: 1 }, titles: ["Blade-Bound", "Steel Walker", "Edge Keeper"] },
  { id: "spell_record", targetType: "spellUses", amount: 20, difficulty: "uncommon", bonus: { int: 1, wis: 1 }, titles: ["Mana Scholar", "Glyph Reader", "Circle Keeper"] },
  { id: "element_record", targetType: "elementUses", amount: 25, difficulty: "rare", bonus: { int: 2 }, titles: ["Element Adept", "Arcane Caller", "Spellbrand"] },
  { id: "survivor_record", targetType: "roomsCleared", amount: 20, difficulty: "rare", bonus: { con: 2 }, titles: ["Unbroken", "Tower Regular", "Lantern-Bearer"] },
  { id: "hunter_record", targetType: "enemyKills", amount: 30, difficulty: "rare", bonus: { str: 1, dex: 1, con: 1 }, titles: ["Monster Ledger", "Fang Breaker", "Hunt Warden"] },
  { id: "boss_record", targetType: "bossKills", amount: 3, difficulty: "epic", bonus: { str: 2, con: 2 }, titles: ["Gate Breaker", "Boss-Scarred", "Tower Breaker"] },
  { id: "class_record", targetType: "totalLevel", amount: 30, difficulty: "epic", bonus: { str: 1, dex: 1, int: 1, wis: 1, con: 1, cha: 1 }, titles: ["Build Crafter", "Pathforged", "Legend Planner"] },
  { id: "mastery_record", targetType: "masteriesKnown", amount: 3, difficulty: "rare", bonus: { int: 1, wis: 2 }, titles: ["Element Keeper", "Runic Adept", "Mastery Seeker"] }
];

export const LEGEND_REWARD_ITEMS = ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "camp_ration", "greater_potion", "mana_crystal", "stamina_elixir"];

export const LEGEND_TITLE_PREFIXES = ["Ember", "Iron", "Storm", "Moon", "Ash", "Arcane", "Fang", "Tower", "Guild", "Relic", "Rune", "Shadow"];
export const LEGEND_TITLE_SUFFIXES = ["Initiate", "Adept", "Warden", "Breaker", "Walker", "Scholar", "Seeker", "Knight", "Sage", "Hunter", "Bearer", "Champion"];
