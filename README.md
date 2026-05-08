# Build Your Legend

## v1.1.0 — Fantasy Ability Expansion

Adds 300 new fantasy abilities to the Skill / Spell Library:

- 100 elemental physical skills spread across Fire, Ice, Lightning, Wind, Earth, and Water.
- 100 elemental spells spread across Fire, Ice, Lightning, Wind, Earth, and Water.
- 100 multi-element skills and spells with dual-element tags.
- All new abilities include Basic Ability scaling.
- Many physical skills require equipped weapon types.
- Stronger elemental abilities require matching Element Mastery.

## Latest Update

**v1.0.0 — Roguelike Dungeon Map Update** adds a node-based dungeon route board, biome floors, danger meter, dungeon supplies, event choices, boss gates, run goals, and run summaries.


Current package: **v0.9.10 — Background Legend Rotation**

A modular, static, mobile-friendly text RPG foundation for GitHub Pages with Excel-imported race/job registry data, Character Creation filters, and Main Menu quick filters.

## v0.9.10 — Background Legend Rotation

The Legend Engine now runs quietly in the background. It adds generated quests directly to the Quest Board and generated achievement/title goals directly to the Achievements & Titles tab. When a generated quest or achievement is completed, the game grants the reward/title, archives the completed goal, and replaces it with a new build-aware goal.

## v0.9.9 — Legend Engine

This version adds a lightweight in-game AI director called the **Legend Engine**. It generates dynamic quests, achievements, and title milestones from your current race, job, build focus, level, weapon path, known elements, and Element Mastery progress. It works fully in browser, so it stays compatible with GitHub Pages.


## v0.9.8 — Description Cleanup, Prescriptions & Mastery Gates

- Shortened race, job, and ability descriptions for cleaner cards.
- Added ability and weapon prescriptions to race/job cards.
- Added Element Mastery passives in the Skill / Spell Library.
- Stronger elemental abilities now require matching Element Mastery.
- Selected advanced physical skills require matching equipped weapon types.
- Reviewed ability scaling so all abilities use the Basic Abilities model.

## v0.5.1 Shop Filter & Ability Descriptions

Added in this package:

- Excel ability links for race and job data
- Starting abilities from the Excel Ability Shops sheet
- Level-up learn tables for imported races, race evolutions, jobs, and job paths
- Skill/spell shop libraries in the Shop screen
- Ability shop filters for search, library, kind, and rank
- Combined Character Status and Race/Job Progression into one Status / Class screen
- Top-right testing menu icon for adding/removing gold, EXP, and class level points

## v0.4.0 New Game Menu Filters

Added the race/job filter system directly to the Main Menu so players can browse and select a starting build before opening the full New Game builder.

New Main Menu features:

- New Game Quick Builder panel
- Character name input on the Main Menu
- Race search, category, tier, and build-focus filters
- Job search, category, tier, and build-focus filters
- Compact race/job result cards
- Build preview from the selected race + job
- Start Selected Build button
- Open Full Builder button for the larger Character Creation screen

## v0.3.1 Race & Job Filter Update

Added Character Creation filters so the large Excel import is easier to use on phones and desktops.

New filters:

- Race search by name, description, category, strengths, or weaknesses
- Race category dropdown
- Race tier dropdown
- Race build-focus dropdown: physical, magic, defense, speed, support, balanced
- Job search by name, description, category, strengths, or weaknesses
- Job category dropdown
- Job tier dropdown
- Job build-focus dropdown
- Result counts for both race and job lists
- Warning card when the selected race/job is hidden by filters but still selected

## v0.3.0 Excel Data Import

This package imports the uploaded Excel race/job registry into the game foundation.

Included data import:

- 69 base races from `Races Summary`
- 552 race evolution paths from Excel race-evolution rows
- 73 base starting jobs from `Jobs Summary`
- 584 advanced/specialist/rare/hidden job paths
- A new in-game Class Registry screen
- Search, type, tier, and category/world filters for browsing large class lists

The full unlock conversion is intentionally staged for v0.4.0 so the game does not become unstable from all 1,209 job rows at once.

## Important setup

For GitHub Pages, `index.html` must be at the **root of your repository**. This fixed ZIP is already arranged that way:

```text
index.html
css/styles.css
js/main.js
js/core/...
js/data/...
js/systems/...
js/ui/...
```

Do **not** upload the whole ZIP as one file. Unzip it first, then upload the files and folders inside it.

## Local testing note

This version uses JavaScript modules. Many browsers block module imports when you double-click `index.html` from your computer or phone files. It should work normally on GitHub Pages. For local testing, use a simple web server, such as:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.


## v0.2.0 Improvement Pass

Added in this package:

- 5-slot save/load menu using browser `localStorage`
- Character creation stat preview
- Race evolution tree screen
- Job/class tree screen
- Race + job synergy bonuses
- Enemy intent display in battle
- More random dungeon events
- Equipment set bonus system
- Recruit roles, passives, and personality text
- Achievements and selectable titles
- Versioned update notes screen

Upload/replace the files in your GitHub repository root the same way as before. Keep `index.html` at the repository root.

## Current systems included

- Main menu, new game, load, save, delete save
- Mobile-first RPG interface
- Browser save/load through `localStorage`
- 69 imported starting races
- 73 imported base starting jobs
- Total Level = Race Levels + Job Levels
- Overlord/YGGDRASIL-inspired class caps:
  - Base: 15
  - Advanced: 10
  - Specialist: 10
  - Rare: 5
  - Hidden: 5
- Race/job stat bonuses, Excel-linked starting abilities, descriptions, strengths, weaknesses, level-up learns, and unlock paths
- Turn-based battle system
- HP, mana, stamina
- Physical skills use stamina
- Magic spells use mana
- Skill cooldowns
- Elements, weaknesses, resistances
- Status effects
- Random encounters
- Random events
- Procedural dungeon floor progression
- Shops, elites, bosses, rewards
- Recruit/party support
- Defeat penalty: lose current dungeon run and a little gold
- Permanent growth: XP, class points, relic dust, boss kill progress


## v0.6.0 Balance Pass

- Generated category-based stat templates for imported races and jobs.
- Rebalanced all imported races, race evolutions, jobs, and job paths by category, tier, and name keywords.
- Added unique one-of-a-kind descriptions, strengths, and weaknesses for every race/job entry.
- Added overlap metadata so exact duplicate classes are hidden from normal selection and registry browsing while staying compatible with older saves.
- Added title bonuses from achievements. Harder achievements provide stronger stat bonuses when their title is equipped.

## Files to edit later

- `js/data/races.js` — races and race evolution paths
- `js/data/jobs.js` — jobs and job class paths
- `js/data/skills.js` — legacy abilities plus Excel-imported physical skills, magic spells, and skill/spell shop libraries
- `js/data/enemies.js` — normal enemies, elites, bosses
- `js/data/items.js` — consumables and equipment
- `js/data/shops.js` — shop stock
- `js/data/events.js` — random dungeon events
- `js/data/recruits.js` — party members
- `js/systems/battle.js` — combat rules
- `js/systems/leveling.js` — XP, class levels, unlock requirements
- `js/systems/map.js` — dungeon floor logic
- `js/ui/screens.js` — screen layouts
- `css/styles.css` — visual design

## What was fixed in this package

- Added `index.html` directly at the ZIP root so GitHub Pages can find it.
- Added a loading screen instead of a blank page.
- Added an on-screen error panel for JavaScript errors.
- Added a warning if the game is opened directly from files instead of hosted.
- Hardened save/load/delete save against blocked `localStorage`.
- Re-tested the main flow: menu → character creation → hub → status/progression/skills/inventory/shop/map → dungeon → battle.


## v0.4.0 Unlock System

- Converted imported Excel class requirements into real unlock checks.
- Progression only shows valid race/job upgrades.
- Hidden and secret classes are concealed until requirements are met.
- Source class ownership and class level requirements are enforced before unlocks.

## v0.6.2 Naming, Shop Tabs, and Scroll Fix

- Replaced generic race evolution names like Awakened Race and Race Bloodline with more specific evolution titles.
- Replaced generic job upgrade names like Job Vanguard and Job Adept with more specific upgrade titles.
- Renamed skills and spells so higher-rank abilities use more unique, legendary-style naming.
- Moved Skill / Spell Library into the normal Shop tab row beside Wayfarer's General Store, Old Anvil Blacksmith, Blue Candle Arcanist, and Roadside Outfitter.
- Removed the forced scroll-to-top behavior that happened after every button click.


## v0.6.2 Basic Abilities / Status Scaling

- Replaced the visible status stat grid with five Basic Abilities: Strength, Endurance, Dexterity, Agility, and Magic.
- Each Basic Ability displays a rank and value from 0-999.
- Rank ranges: I 0-99, H 100-199, G 200-299, F 300-399, E 400-499, D 500-599, C 600-699, B 700-799, A 800-899, S 900-999.
- Visible Basic Abilities reset to I 0 when a new race evolution or job upgrade stage starts.
- Hidden stacked totals remain in the background and power derived combat stats.
- HP, mana, stamina, attack, spell power, defense, and speed now scale from Basic Ability totals.

## v0.6.3 — Race / Job Text Layout Update

- Race cards now use the requested layout: Race, Max Level, Status, Tags, Unique Description, Strengths, and Weaknesses.
- Job cards now use the requested layout: Job, Max Level, Status, Weapon/s, Tags, Unique Description, Strengths, and Weaknesses.
- Job weapon recommendations are generated from each job name/category/description so weapon restrictions match the role.
- Current Build and Class Registry screens now use the same cleaner layout.


## v1.1.1 — Class Registry & Progression Rules

- Class Registry now includes all races, race evolutions, jobs, job upgrades, skills, spells, passives, and abilities.
- Hidden and secret race/job paths show their requirements for planning.
- New basic races/jobs can only be added after the current race/job stage is maxed.
- Race evolutions and job upgrades can only be taken from the current maxed stage.
- Ability cards in the registry show scaling, effects, weapon requirements, and Element Mastery gates.
