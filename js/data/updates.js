export const UPDATE_NOTES = [
  {
    version: "v1.1.1 — Class Registry & Progression Rules",
    date: "2026-05-07",
    notes: [
      "Expanded the Class Registry into a full compendium that includes races, race evolutions, jobs, job upgrades, skills, spells, passives, and abilities.",
      "Hidden and secret classes now show their names and requirements so players can plan unlock routes.",
      "Added Add New Basic Race and Add New Basic Job options that only appear after the current race/job stage is maxed.",
      "Race evolutions and job upgrades now only unlock from the current maxed race/job stage.",
      "Older race/job stages are treated as completed history; only the current stage can receive new class levels.",
      "Ability registry cards show cost, cooldown, power, element, scaling, effects, weapon requirements, and Element Mastery requirements."
    ]
  },
  {
    version: "v1.1.0 — Fantasy Ability Expansion",
    date: "2026-05-07",
    notes: [
      "Added 100 new elemental physical skills split across fire, ice, lightning, wind, earth, and water.",
      "Added 100 new elemental spells split across the same six elements.",
      "Added 100 multi-element fantasy skills and spells with dual-element tags and requirements.",
      "All new abilities include Basic Ability scaling from Strength, Endurance, Dexterity, Agility, and/or Magic.",
      "Many new physical skills require matching equipped weapon types, and stronger abilities require Element Mastery gates.",
      "Added three new Skill / Spell Library codexes for filtering the new content."
    ]
  },
  {
    version: "v1.0.0 — Roguelike Dungeon Map",
    date: "2026-05-07",
    notes: [
      "Rebuilt the Map / Dungeon tab into a node-based roguelike route board.",
      "Added dungeon biomes every 10 floors with enemy, element, loot, and modifier flavor.",
      "Added route node types: battles, elites, boss gates, treasure, merchants, rest camps, shrines, cursed altars, trials, secret paths, forge rooms, and alchemy groves.",
      "Added a Danger Meter that rises or falls based on route choices and affects risk/reward pacing.",
      "Added dungeon supplies: torchlight, keys, rations, scout tokens, ward stones, and lockpicks.",
      "Added map events with player choices and consequences.",
      "Added run goals and a dungeon run summary after retreat or defeat."
    ]
  },
  {
    version: "v0.9.10 — Background Legend Rotation",
    date: "2026-05-07",
    notes: [
      "Changed the Legend Engine from a manual screen into a background director system.",
      "Generated quests now appear directly on the Quest Board and are replaced after completion.",
      "Generated achievement/title goals now appear directly in Achievements & Titles and rotate after unlocking.",
      "Completed generated quests auto-grant rewards before the replacement contract is added.",
      "Generated quest and achievement goals now use a progress baseline so replacements require new progress instead of instantly completing from old stats.",
      "Removed Legend Engine buttons from Hub, Navigation, Quest Board, and Achievements so it feels like a hidden guild system."
    ]
  },
  {
    version: "v0.9.9 — Legend Engine",
    date: "2026-05-07",
    notes: [
      "Added a lightweight in-game Legend Engine that creates dynamic quests, achievements, and titles without needing a server or real AI model.",
      "Generated quests now use the player race, job, total level, build focus, equipped weapons, known elements, and Element Mastery data.",
      "Generated achievements create unlockable titles with stat bonuses and save to the player profile.",
      "Added tracking for ability use, elemental ability use, spell use, and equipped weapon battle progress.",
      "Added a new Legend Engine screen under Adventure navigation and linked it from the Quest Board.",
      "Dynamic quest rewards can grant gold, EXP, Relic Dust, and supplies."
    ]
  },
  {
    "version": "v0.9.8 — Description Cleanup, Prescriptions & Mastery Gates",
    "date": "2026-05-07",
    "notes": [
      "Shortened race, job, and ability descriptions so cards stay easier to read.",
      "Added ability prescriptions and weapon prescriptions to races, evolutions, jobs, and job upgrades.",
      "Added Element Mastery passives and made stronger elemental abilities require matching mastery before use.",
      "Made selected advanced physical skills require matching equipped weapon types.",
      "Reviewed ability scaling so every ability exposes Basic Ability scaling from Strength, Endurance, Dexterity, Agility, and/or Magic.",
      "Added weapon-type metadata to equipment so weapon-locked skills can check equipped weapons."
    ]
  },
  {
    "version": "v0.9.7 — Excel Naming Pass",
    "date": "2026-05-07",
    "notes": [
      "Renamed every race, race evolution, base job, and job upgrade using the attached redone Excel workbook.",
      "Kept all IDs stable so existing save files, unlock rules, class paths, and ability links do not break.",
      "Imported workbook wording for unique descriptions, strengths, weaknesses, tags/focus, status bias, passive trait text, intrinsic skill text, job weapon lists, job roles, spell schools, mastery bonuses, signature abilities, and route notes.",
      "Updated race/job cards to prefer the workbook status-bias text and show workbook tags cleanly.",
      "Added a naming-pass report for quick verification."
    ]
  },
  {
    "version": "v0.9.6 — Leveling Passive Traits & Mastery Bonuses",
    "date": "2026-05-07",
    "notes": [
      "Added unique one-of-a-kind Passive Traits for races and race evolution stages.",
      "Added unique one-of-a-kind Passive Mastery Bonuses for jobs and job upgrade stages.",
      "Passive bonuses now scale with the class stage level and total character level.",
      "Passive scaling now contributes to Basic Ability background totals and derived combat stats.",
      "Status / Class cards now show each passive name, current bonus, and scaling details.",
      "Added a Leveling Passives section to the Status / Class screen for quick build review."
    ]
  },
  {
    "version": "v0.9.5 — Race / Job Retag & Build Focus Balance",
    "date": "2026-05-06",
    "notes": [
      "Retagged every race, race evolution, job, and job upgrade with explicit build-focus metadata.",
      "Balanced the focus filters so Physical, Magic, Defense, Speed, Support, and Balanced all have strong options.",
      "Added clearer gameplay tags to class cards and registry entries.",
      "Gently rebalanced legacy stat templates so each class better matches its assigned focus.",
      "Updated Character Creation and Class Registry filters to use the new buildFocus metadata instead of only guessing from names."
    ]
  },
  {
    "version": "v0.9.4.2 — Item Card Layout Fix",
    "date": "2026-05-06",
    "notes": [
      "Rebuilt shop item cards to match the Skill / Spell / Ability card style.",
      "Added item icons, rarity/type labels, slots, set tags, price, bonus stats, status scaling, armor bonuses, and consumable effect rows.",
      "Rebuilt inventory item cards with the same readable card layout.",
      "Fixed desktop text overflow so long names, tags, scaling lines, and descriptions wrap inside cards instead of falling off the layout.",
      "Added safer mobile stacking for item cards and long metadata rows."
    ]
  },
  {
    "version": "v0.9.4.1 — Shop Content Hotfix",
    "date": "2026-05-06",
    "notes": [
      "Restored the updated shop stock lists so D&D-inspired weapons, armor, consumables, and abilities appear in the Shop screen.",
      "Restored js/data/dnd-inspired-items.js and js/data/dnd-inspired-abilities.js imports into the active item and ability data files.",
      "General Store, Blacksmith, Blue Candle Arcanist, Roadside Outfitter, Alchemy Shop, and Skill / Spell Library now point to the new v0.9.4 content.",
      "This is a content-linking hotfix; no gameplay systems were removed."
    ]
  },
  {
    "version": "v0.9.4 — Tabletop-Inspired Ability and Item Expansion",
    "date": "2026-05-06",
    "notes": [
      "Added 50 original skills, spells, passives, resist abilities, and ultimate abilities inspired by classic tabletop spell roles.",
      "Added 50 original items inspired by classic tabletop RPG equipment: 20 weapons, 15 armor pieces, and 15 consumables.",
      "Added explicit status scaling to the new abilities so Basic Abilities like Magic, Strength, Dexterity, Agility, and Endurance affect damage bonuses.",
      "Added weapon status-scaling tags and armor bonus descriptions so gear identity is easier to read.",
      "Added a new Tabletop Arcana Archive ability library and expanded shop stock across General Store, Blacksmith, Arcanist, Outfitter, and Alchemy."
    ]
  },
  {
    "version": "v0.9.3 — Dark Guild Interface UI Update",
    "date": "2026-05-06",
    "notes": [
      "Changed the visual style into a cleaner Dark Guild Interface with dark stone panels, warm bronze trim, parchment text accents, and subtle arcane highlights.",
      "Grouped navigation into Character, Adventure, and Town sections so the game feels less crowded.",
      "Upgraded the main menu into a stronger fantasy title screen with a crest, clean action buttons, feature cards, and latest-save text.",
      "Rebuilt known ability cards and shop ability cards with icons, rank styling, cost/cooldown/power rows, tags, and better spacing.",
      "Added responsive mobile styling so cards stack cleanly and navigation stays usable on phones."
    ]
  },
  {
    "version": "v0.9.1 — Main Menu Cleanup",
    "date": "2026-05-06",
    "notes": [
      "Removed the New Game Quick Builder from the Main Menu.",
      "Rebuilt the Main Menu as a cleaner title-screen style layout.",
      "Added clearer Continue, New Game, Save/Load, Class Registry, and Update Notes actions.",
      "Kept race/job filters inside the full character creation builder instead of crowding the title screen.",
      "Added quick feature cards for roguelike runs, race/job growth, crafting/loot, and build planning."
    ]
  },
  {
    "version": "v0.9.0 — Crafting, Loot, Build Planning, and Map Events",
    "date": "2026-05-05",
    "notes": [
      "Expanded the Blacksmith into a forging system with equipment crafting, upgrades, rune slots, scaling improvements, and set-piece crafting.",
      "Added an Alchemy Shop for potions, bombs, elixirs, cures, mana crystals, and stamina tonics.",
      "Added crafting materials from enemies and map events, including ore, ingots, hides, herbs, crystals, rune shards, and reagents.",
      "Expanded random map events with merchants, treasure chests, ambushes, shrines, weather changes, secret paths, boss warnings, cursed altars, training masters, and ancient libraries.",
      "Enemies now receive race/job level identity similar to the player character.",
      "Added loot rarity and affix generation: Common, Uncommon, Rare, Epic, Legendary, Mythic, and World-Class loot with affixes like Burning, Frozen, Vampiric, Guardian, Arcane, Storm-Touched, Cursed, and Holy.",
      "Added a Build Summary screen that explains race path, job path, role, weapon type, skill type, spell school, strongest/weakest stats, Unique abilities, Ultimate abilities, and recommended next goals.",
      "Added an Unlock Tracker screen for class upgrades, ability evolutions, and special requirement-style unlock planning."
    ]
  },
  {
    "version": "v0.8.0 — Class & Ability Expansion",
    "date": "2026-05-05",
    "notes": [
      "Added original race evolution expansions inspired by high-rank class systems.",
      "Added original job upgrade expansions including saint, slayer, crafter, caster, chef, thief, and dungeon-builder style paths.",
      "Added a new ability taxonomy with Intrinsic, Common, Extra, Unique, Ultimate, and Resist rank logic.",
      "Added expanded skills, spells, passives, and resist abilities with rank-scaled naming.",
      "Added Ability Evolution chains that merge known abilities into Extra, Unique, and Ultimate abilities.",
      "Expanded the Skill / Spell / Ability Shop filters with element, origin, and unlock method filters."
    ]
  },
  {
    "version": "v0.7.0 — Quest, Identity, Battle, and Boss Systems",
    "date": "2026-05-05",
    "notes": [
      "Added a Quest Board with Main, Side, Daily, Race, Job, Recruit, Hunting, Collection, Boss, and Secret quest categories.",
      "Added race identity text: passive trait, intrinsic skill/spell, evolution bonus, limitation, and unique unlock path.",
      "Added job identity text: main role, allowed skill types, preferred weapons, spell schools, mastery bonus, upgrade path, and signature ability.",
      "Added battle modifiers such as rain, darkness, sacred ground, mana storms, and stone pressure.",
      "Enemies now display type plus race/job-style identity based on their level/floor and behavior.",
      "Bosses now show and use mechanics such as shield phases, cleanses, enrage phases, and charged attacks."
    ]
  },
  {
    "version": "v0.6.3 — Race / Job Text Layout Update",
    "date": "2026-05-05",
    "notes": [
      "Redesigned race cards to show Race, Max Level, Status, Tags, Unique Description, Strengths, and Weaknesses.",
      "Redesigned job cards to show Job, Max Level, Status, Weapon/s, Tags, Unique Description, Strengths, and Weaknesses.",
      "Added job weapon recommendations based on each job name, category, strengths, and description.",
      "Updated current build and Class Registry cards to use the new structured race/job layout."
    ]
  },
  {
    "version": "v0.6.2.1 — Data Restore Hotfix",
    "date": "2026-05-05",
    "notes": [
      "Restored the full imported race data file so RACES exports correctly.",
      "Restored the full imported job data file so JOBS exports correctly.",
      "Kept the v0.6.2 Basic Abilities / Falna-style status scaling update intact.",
      "If the live site still shows the old build, refresh the browser cache after uploading this package."
    ]
  },
  {
    "version": "v0.6.2 — Basic Abilities / Status Scaling",
    "date": "2026-05-05",
    "notes": [
      "Changed the visible status system to five Basic Abilities: Strength, Endurance, Dexterity, Agility, and Magic.",
      "Added rank display from I 0–99 through S 900–999.",
      "Added hidden background stacking so previous race/job stages keep contributing after visible values reset.",
      "Visible Basic Abilities now reset to I 0 when a new race evolution or job upgrade stage begins.",
      "Derived combat stats now scale from Basic Ability totals: HP, mana, stamina, attack, spell power, defense, and speed."
    ]
  },
  {
    "version": "v0.6.1 — Naming, Shop Tabs, and Scroll Fix",
    "date": "2026-05-05",
    "notes": [
      "Renamed generic race evolution names so they no longer use plain Awakened/Bloodline labels.",
      "Renamed generic job upgrade names so they no longer use plain Vanguard/Adept labels.",
      "Renamed skills and spells by rank, with Unique, Hidden, Rare, and Ultimate abilities using more legendary naming patterns.",
      "Moved the Skill / Spell Library into the same shop-tab system as Wayfarer’s General Store, Old Anvil Blacksmith, Blue Candle Arcanist, and Roadside Outfitter.",
      "Removed forced scroll-to-top behavior after every render so button clicks, filters, purchases, and combat actions keep the current scroll position."
    ]
  },
  {
    "version": "v0.6.0 — Balance Pass",
    "date": "2026-05-05",
    "notes": [
      "Generated category-based stat templates for imported races, race evolutions, jobs, and job paths.",
      "Rebalanced every imported race/job using its category, tier, and name keywords.",
      "Added unique descriptions, strengths, and weaknesses for every race/job entry.",
      "Added duplicate/overlap cleanup metadata so exact duplicate classes are hidden from normal selection and registry browsing.",
      "Added achievement title bonuses with stronger stat rewards for harder achievements.",
      "Updated Status and Achievements screens to show equipped title bonuses."
    ]
  },
  {
    "version": "v0.5.1 — Shop Filter & Ability Description Fix",
    "date": "2026-05-04",
    "notes": [
      "Fixed the Skill / Spell Shop filters so search, library, kind, and rank update the shop results immediately.",
      "Improved search matching so multi-word ability searches and partial terms work more reliably.",
      "Rewrote all active ability descriptions with more detailed, unique mechanical and flavor text.",
      "Added an active-filter summary under the shop filters so testers can see exactly what is being applied."
    ]
  },
  {
    "version": "v0.5.0 — Ability Linking",
    "date": "2026-05-04",
    "notes": [
      "Connected imported Excel race/job classes to starting abilities and level-up learn tables.",
      "Added Excel skill/spell shop libraries to the Shop screen with search, library, kind, and rank filters.",
      "Added starting abilities from the Excel Ability Shops sheet.",
      "Combined Character Status and Race/Job Progression into one Status / Class screen.",
      "Added a top-right testing menu icon that can add/remove gold, EXP, and class level points for debugging."
    ]
  },
  {
    "version": "v0.4.0 — Unlock System",
    "date": "2026-05-04",
    "notes": [
      "Converted imported Excel class requirements into real unlock checks.",
      "Progression now only shows race/job upgrades that are valid to unlock right now.",
      "Hidden and secret race/job paths are concealed until their requirements are met.",
      "Unlock attempts now verify source class ownership, source class level, boss kills, Relic Dust, gold, floor/runs/kills, achievements, and other structured requirement fields.",
      "Class trees now focus on the player’s current build instead of flooding the screen with every imported class."
    ]
  },
  {
    "version": "v0.3.2 — New Game Menu Filters",
    "date": "2026-05-03",
    "notes": [
      "Added the race and job filter system directly to the Main Menu as a New Game Quick Builder.",
      "You can now search and filter races/jobs before opening the full character creation screen.",
      "Added compact race/job result cards on the Main Menu so the imported Excel list is easier to browse.",
      "Added a quick build preview and Start Selected Build button on the Main Menu.",
      "Kept the full Character Creation and Class Registry filter systems for deeper browsing."
    ]
  },
  {
    "version": "v0.3.1 — Race & Job Filter Update",
    "date": "2026-05-03",
    "notes": [
      "Added race filters to Character Creation: search, category, tier, and build focus.",
      "Added job filters to Character Creation: search, category, tier, and build focus.",
      "Added result counts so large imported lists are easier to browse on mobile.",
      "Added warnings when your currently selected race/job is hidden by filters but still selected.",
      "Kept the full Class Registry filters for browsing every imported race evolution and job path."
    ]
  },
  {
    "version": "v0.3.0 — Excel Data Import",
    "date": "2026-05-03",
    "notes": [
      "Imported 69 races from the Excel race summary.",
      "Imported 73 base jobs and 584 job progression paths from the Excel job summary.",
      "Imported 552 race evolution paths from the Excel race-evolution rows.",
      "Added a Class Registry screen with search, type, category/world, and tier filters.",
      "Kept the imported data modular so v0.4.0 can convert more Excel requirements into full unlock logic."
    ]
  },
  {
    "version": "v0.2.0 — Improvement Pass",
    "date": "2026-05-03",
    "notes": [
      "Added a 5-slot save/load menu using browser localStorage.",
      "Added character creation stat preview with race/job synergy detection.",
      "Added race evolution tree and job class tree previews.",
      "Added race + job synergy bonuses.",
      "Added enemy intent display during battle.",
      "Added more random dungeon events including shrines, portals, locked chests, weather, and merchants.",
      "Added equipment set bonus support and new gear sets.",
      "Expanded recruits with personality text and passive role descriptions.",
      "Added achievements and selectable title rewards.",
      "Added this versioned update notes screen."
    ]
  },
  {
    "version": "v0.1.0 — Foundation Release",
    "date": "2026-05-03",
    "notes": [
      "Added main menu, character creation, hub, map, battle, shops, inventory, and progression screens.",
      "Added 10 starting races and 10 starting jobs.",
      "Added Total Level = Race Levels + Job Levels.",
      "Added Overlord/YGGDRASIL-inspired class caps and unlock paths.",
      "Added localStorage saving, turn-based combat, elemental weaknesses, status effects, recruits, and roguelike dungeon runs."
    ]
  }
];
