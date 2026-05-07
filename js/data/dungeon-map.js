export const DUNGEON_BIOMES = [
  { id: "goblin_warrens", name: "Goblin Warrens", floors: [1, 10], element: "earth", enemyTheme: "Goblin / Beast", lootTheme: "ore, rations, starter gear", modifierHint: "Low danger, many patrols, common treasure.", boostedElements: ["earth", "physical"], counterElements: ["fire", "wind"] },
  { id: "ashwood_ruins", name: "Ashwood Ruins", floors: [11, 20], element: "fire", enemyTheme: "Ash beasts / Burned knights", lootTheme: "ember gems, fire gear, relic dust", modifierHint: "Burn, smoke, shrine risk, flame rewards.", boostedElements: ["fire", "physical"], counterElements: ["water", "ice"] },
  { id: "frostgrave_halls", name: "Frostgrave Halls", floors: [21, 30], element: "ice", enemyTheme: "Frost spirits / Armored undead", lootTheme: "frost salt, mithral gear", modifierHint: "Frozen status appears more often.", boostedElements: ["ice", "water"], counterElements: ["fire", "lightning"] },
  { id: "stormspire_depths", name: "Stormspire Depths", floors: [31, 40], element: "lightning", enemyTheme: "Storm constructs / Skirmishers", lootTheme: "storm crystals, speed gear", modifierHint: "Fast enemies, charged rooms, high reward routes.", boostedElements: ["lightning", "wind"], counterElements: ["earth", "arcane"] },
  { id: "hollow_cathedral", name: "Hollow Cathedral", floors: [41, 50], element: "light", enemyTheme: "Cursed clergy / Broken guardians", lootTheme: "holy water, ward stones, titles", modifierHint: "Blessings are stronger but curses punish greed.", boostedElements: ["light", "dark"], counterElements: ["dark", "arcane"] },
  { id: "dragonbone_vault", name: "Dragonbone Vault", floors: [51, 60], element: "fire", enemyTheme: "Dragonsworn / Treasure wardens", lootTheme: "rare weapons, armor, dragon relics", modifierHint: "Boss gates hit harder and loot improves.", boostedElements: ["fire", "earth"], counterElements: ["ice", "lightning"] },
  { id: "abyssal_library", name: "Abyssal Library", floors: [61, 70], element: "arcane", enemyTheme: "Living spells / Rune knights", lootTheme: "grimoires, catalysts, mastery hints", modifierHint: "Spell trials and mastery checks appear often.", boostedElements: ["arcane", "dark"], counterElements: ["light", "physical"] },
  { id: "celestial_battlefield", name: "Celestial Battlefield", floors: [71, 80], element: "light", enemyTheme: "Angelic echoes / Fallen champions", lootTheme: "world fragments, holy gear", modifierHint: "Race and job trials become common.", boostedElements: ["light", "physical"], counterElements: ["dark", "poison"] },
  { id: "void_touched_labyrinth", name: "Void-Touched Labyrinth", floors: [81, 90], element: "dark", enemyTheme: "Void beasts / Labyrinth hunters", lootTheme: "cursed ash, mythic loot", modifierHint: "Secret paths and dangerous altars appear often.", boostedElements: ["dark", "arcane"], counterElements: ["light", "earth"] },
  { id: "throne_of_world_legends", name: "Throne of World Legends", floors: [91, 100], element: "arcane", enemyTheme: "World-class echoes", lootTheme: "world-class treasure, ultimate titles", modifierHint: "Extreme danger, boss chains, best rewards.", boostedElements: ["arcane", "light", "dark"], counterElements: ["physical", "lightning"] }
];

export const DUNGEON_NODE_TEMPLATES = [
  { type: "battle", icon: "⚔️", label: "Battle", danger: 10, weight: 28, rewards: ["EXP", "Gold", "Materials"], recommended: "Any Build", summary: "A normal enemy patrol blocks the route." },
  { type: "elite", icon: "💀", label: "Elite Battle", danger: 24, weight: 9, rewards: ["Rare Loot", "Extra EXP", "Title Progress"], recommended: "Prepared Build", summary: "A stronger enemy guards a better reward." },
  { type: "boss", icon: "👑", label: "Boss Gate", danger: 40, weight: 0, rewards: ["Relic Dust", "Boss Loot", "Unlock Progress"], recommended: "Best Gear", summary: "The floor gate opens into a boss arena." },
  { type: "treasure", icon: "💰", label: "Treasure Chest", danger: 8, weight: 10, rewards: ["Gold", "Item", "Loot"], recommended: "Dexterity / Keys", summary: "A locked chest waits beside a broken pillar." },
  { type: "merchant", icon: "🛒", label: "Wandering Merchant", danger: -4, weight: 6, rewards: ["Shop Access", "Supplies"], recommended: "Gold", summary: "A temporary merchant offers supplies before vanishing." },
  { type: "rest", icon: "⛺", label: "Rest Camp", danger: -12, weight: 6, rewards: ["Recover", "Lower Danger"], recommended: "Long Runs", summary: "A safe camp lets you recover before pushing deeper." },
  { type: "shrine", icon: "🔮", label: "Ancient Shrine", danger: 6, weight: 8, rewards: ["Blessing", "Mastery Progress"], recommended: "Magic / Support", summary: "A shrine offers a blessing, but may reject greed." },
  { type: "cursed_altar", icon: "🩸", label: "Cursed Altar", danger: 16, weight: 5, rewards: ["Relic Dust", "Power Buff"], recommended: "Defense / Dark Resist", summary: "A black flame demands a sacrifice." },
  { type: "training", icon: "🥋", label: "Training Master", danger: 2, weight: 6, rewards: ["Class Point", "EXP"], recommended: "Any Build", summary: "A wandering master offers a hard lesson." },
  { type: "race_trial", icon: "🧬", label: "Race Trial", danger: 14, weight: 5, rewards: ["Race Progress", "Intrinsic Clue"], recommended: "Race Identity", summary: "A room tests your bloodline and evolution path." },
  { type: "class_trial", icon: "📜", label: "Class Trial", danger: 14, weight: 5, rewards: ["Job Progress", "Ability Clue"], recommended: "Job Identity", summary: "A trial chamber tests your current job path." },
  { type: "secret", icon: "✧", label: "Secret Path", danger: 18, weight: 4, rewards: ["Hidden Room", "Rare Loot"], recommended: "Agility / Magic", summary: "A shimmering crack hints at a hidden route." },
  { type: "forge", icon: "⚒️", label: "Abandoned Forge", danger: 4, weight: 5, rewards: ["Ore", "Upgrade Materials"], recommended: "Smith / Physical", summary: "A cold forge still holds usable materials." },
  { type: "alchemy", icon: "🌿", label: "Alchemy Grove", danger: 4, weight: 5, rewards: ["Reagents", "Consumables"], recommended: "Magic / Support", summary: "A pocket garden grows impossible herbs." }
];

export const DUNGEON_RUN_GOALS = [
  { id: "clear_nodes", name: "Route Clearer", metric: "nodesCleared", required: 5, description: "Clear 5 dungeon nodes this run.", reward: "Bonus gold and EXP." },
  { id: "defeat_enemies", name: "Battle Contract", metric: "battlesWon", required: 3, description: "Win 3 battles this run.", reward: "Bonus EXP and title progress." },
  { id: "find_treasure", name: "Chest Hunter", metric: "treasuresOpened", required: 2, description: "Open 2 treasure rooms this run.", reward: "Extra materials." },
  { id: "survive_danger", name: "Danger Walker", metric: "highDangerClears", required: 2, description: "Clear 2 nodes while Danger is 50% or higher.", reward: "Relic Dust chance." },
  { id: "use_restraint", name: "No-Rest Push", metric: "nodesWithoutRest", required: 4, description: "Clear 4 nodes without using a rest camp.", reward: "Extra gold and stamina supplies." },
  { id: "boss_gate", name: "Gate Challenger", metric: "bossesDefeated", required: 1, description: "Defeat a boss during this run.", reward: "Relic Dust and loot chance." }
];
