# ⚔️ Build Your Legend

**Build Your Legend** is a mobile-friendly fantasy text RPG built as a single-file HTML/JavaScript browser game.

Create a character, choose a fantasy race, master jobs, evolve your build, learn Physical Skills and Magic Spells, recruit allies, collect equipment, explore roguelike maps, defeat enemies, unlock achievements, and build your legend one path at a time.

> **Master your race. Master your job. Learn your skills. Cast your spells. Recruit your party. Build your legend.**

---

## 🎮 Play the Game

**GitHub Pages:**  
https://malcolm12aa.github.io/Build-Your-Legend/

**Repository:**  
https://github.com/malcolm12aa/Build-Your-Legend

Best experience:

- Use Safari, Chrome, Edge, or another full browser.
- On iPhone, do not test the game through Quick Look.
- For iPhone testing, upload to GitHub Pages and open the live site in Safari.
- You can add the game to your Home Screen for an app-like experience.

---

## 📱 Mobile Support

Build Your Legend is designed for mobile and desktop browsers.

Current mobile features include:

- Full-window layout
- Centered main menu
- Mobile-friendly button layout
- Dynamic text box sizing
- Touch-friendly menus
- Home-screen icon support
- PWA-style icon and manifest support

On iPhone:

```text
Open the GitHub Pages site in Safari
Tap Share
Tap Add to Home Screen
```

The game logo should appear as the Home Screen icon when the icon files are uploaded with `index.html`.

---

## 🧭 Main Menu

The game starts from a main menu with:

- **New Game**
- **Load Save / Save Manager**
- **Settings**
- Save/export tools when available

The main menu uses the Build Your Legend logo and is designed to fit mobile screens.

---

## 💾 Save / Load Manager

The save system has been rebuilt into a full Save / Load Manager.

Current save features:

- 3 manual save slots
- Separate autosave slot
- Backup saves before overwriting or deleting
- Restore backup buttons
- Delete slot buttons
- Export save code
- Import save code
- Old-save repair and migration
- Save version tracking
- Save debug information
- Safer New Game flow

When you click **Load Save** on the main menu, the game opens a Save Manager screen showing important save information:

- Character name
- Race
- Job
- Total level
- Gold
- Last saved time
- Save version
- Save size
- Repair status

Recommended:

- Save manually before major updates.
- Export a save code for backup.
- Avoid clearing browser storage if you want to keep local saves.

---

## 🌌 Game Overview

Build Your Legend is built around long-term character growth.

The main gameplay loop is:

```text
Choose a race
Choose a base job
Battle enemies
Gain EXP and gold
Learn skills and spells
Equip gear
Recruit allies
Explore maps
Unlock evolutions and upgrades
Save your progress
Build toward stronger forms
```

The game is not about picking every path at once.

It is about mastering one path, unlocking the next step, and slowly turning your character into a powerful fantasy legend.

---

## 🧬 Race System

The race system is based on fantasy race progression.

You choose a base race, level that race, and eventually evolve it into stronger forms.

Race types include:

- Human
- Elf
- Dwarf
- Beastkin
- Dragonkin
- Demon
- Angel
- Undead
- Vampire
- Slime
- Oni
- Goblin
- Orc
- Giant
- Fairy
- Spirit
- Yokai
- Kami
- Naga
- Asura
- Rakshasa
- Dragon
- Monster races
- Divine races
- Mythic races

---

## 🔺 Race Evolution

Race evolution is separate from job progression.

Race evolution rules:

- You can only evolve a race after maxing the current race stage.
- Race evolution does not block job upgrades.
- Job upgrades do not block race evolution.
- Each race path is designed to have unique evolution names.
- Character Status shows the next race evolution when it becomes available.

Example style:

```text
Human
→ Awakened Human
→ Elder Human
→ Human Sovereign
→ Origin Human

Elf
→ Awakened Elf
→ Elder Elf
→ Elf Sovereign
→ Origin Elf

Dragonkin
→ Awakened Dragonkin
→ Elder Dragonkin
→ Dragonkin Sovereign
→ Origin Dragonkin

Slime
→ Awakened Slime
→ Elder Slime
→ Slime Sovereign
→ Origin Slime
```

---

## 🧭 Job / Class System

The job system uses class mastery and upgrade paths.

You start with a base job. Stronger jobs unlock through mastery, requirements, and progression.

Job rules:

- Only base jobs are available at the start.
- You can only upgrade jobs after maxing the current job.
- Job upgrades are separate from race evolution.
- Advanced, Specialist, Rare, and Hidden jobs require unlock conditions.
- Job paths are intended to have unique names based on the base job.

Example style:

```text
Warrior
→ Warrior Vanguard
→ Warrior Paragon
→ Warrior Sovereign
→ World-Crowned Warrior

Mage
→ Mage Vanguard
→ Mage Paragon
→ Mage Sovereign
→ World-Crowned Mage

Rogue
→ Rogue Vanguard
→ Rogue Paragon
→ Rogue Sovereign
→ World-Crowned Rogue

Knight
→ Knight Vanguard
→ Knight Paragon
→ Knight Sovereign
→ World-Crowned Knight
```

---

## ⚔️ Skill & Spell System

The old skill system has been rebuilt into a split **Physical Skill** and **Magic Spell** system.

Battle resources now use:

```text
HP
Stamina
Mana / MP
```

### Physical Skills

Physical Skills use **Stamina**.

They include:

- Weapon arts
- Martial arts
- Guard stances
- Counters
- Mobility skills
- Taunts
- Break effects
- Bleed effects
- Stun effects
- Melee attacks
- Ranged physical attacks

### Magic Spells

Magic Spells use **Mana / MP**.

They include:

- Fire magic
- Ice magic
- Lightning magic
- Holy magic
- Dark magic
- Arcane magic
- Healing spells
- Barrier spells
- Curse spells
- Control spells
- AoE magic

---

## 🏷️ Ability Rank System

Every Skill and Spell can have a rank.

Ranks include:

| Rank | Meaning |
|---|---|
| **Intrinsic** | Race, bloodline, evolution, or natural traits |
| **Common** | Basic abilities, usually bought from shops |
| **Extra** | Stronger and more specialized abilities |
| **Unique** | Requirement-locked abilities |
| **Ultimate** | Legendary build-defining abilities |

---

## 🔢 Ability Tier System

Abilities also use a Tier 1–10 system.

Important rule:

```text
Tier 1 = strongest
Tier 10 = weakest / beginner level
```

Example:

```text
Fire Bolt
Magic Spell · Common · Tier 10

Cost: 8 Mana
Cooldown: 1 Turn
Tags: Magic · Fire · Ranged · Damage · Burn
```

---

## 🏪 Shops

The old Skill Library has been replaced with two focused shops.

### Physical Skill Shop

Physical Skills are separated by weapon type.

Examples:

- Universal Skills
- Sword Skills
- Axe Skills
- Spear Skills
- Dagger Skills
- Bow Skills
- Shield Skills
- Unarmed Skills
- Heavy Weapon Skills

Physical Skills can require specific equipped weapon types.

Examples:

```text
Shield Bash
Requires: Shield / Universal defensive weapon

Arrow Pin
Requires: Bow / Crossbow

Bleeding Crescent
Requires: Sword / Katana / Dagger / Axe
```

### Magic Spell Shop

Magic Spells are separated by magic school.

Examples:

- Fire Spells
- Ice Spells
- Lightning Spells
- Healing Spells
- Barrier Spells
- Dark Spells
- Holy Spells
- Arcane Spells

### Other Shops

The game also includes:

- **Blacksmith** — weapons and forged combat gear
- **Equipment Shop** — armor, accessories, and gear
- **Alchemy Shop** — potions, consumables, bombs, elixirs, and support items

---

## 🛡️ Equipment System

The equipment system supports dedicated gear slots:

```text
Head
Chest
Arms
Legs
Weapon 1
Weapon 2
Accessories x5
```

Equipment can provide:

- Stats
- Unique equipment skills
- Set bonuses
- Special effects
- Weapon-type requirements
- Weapon scaling for Physical Skills

---

## 🗡️ Weapon Scaling

Physical Skills now care more about equipped weapons.

Examples:

| Weapon Type | Scaling Style |
|---|---|
| Sword | Physical Attack + Agility |
| Axe / Hammer | Physical Attack + Physical Defense |
| Spear | Physical Attack + Agility |
| Dagger | Agility + Physical Attack |
| Bow | Agility + Physical Attack |
| Staff | Magic Attack + Special |
| Shield | Physical Defense + survivability |
| Unarmed | Physical Attack + Agility |

This makes weapon choice matter more for physical builds.

---

## 🧑‍🤝‍🧑 Recruit System

The Recruitment Hall has been rebuilt around fantasy recruits instead of anime characters.

Recruits can now have:

- Name
- Level
- Race
- Job
- HP
- Stamina
- Mana
- Physical Attack
- Physical Defense
- Agility
- Magic Attack
- Magic Defense
- Resist
- Special
- Physical Skills
- Magic Spells
- Assist abilities
- Bond bonuses

Recruit assists still work during battle, but recruits now feel more like actual party members.

---

## ⚔️ Combat System

Combat is turn-based and build-focused.

Current combat features include:

- HP, Stamina, and MP resource management
- Basic attacks
- Physical Skills
- Magic Spells
- Items
- Recruit support
- Status effects
- Cooldowns
- Stamina recovery
- Damage flash effects
- Floating damage numbers
- Post-battle statistics
- Rewards
- EXP
- Gold
- Enemy Codex updates

Physical Skills are usually more reliable and stamina-based.

Magic Spells usually cost more but offer stronger burst, AoE, healing, barriers, and control.

---

## 🧪 Status Effects

The game supports RPG status effects and tags such as:

- Burn
- Poison
- Bleed
- Stun
- Freeze
- Paralysis
- Fear
- Doom
- Weaken
- Vulnerable
- Marked
- Confusion
- Guard
- Regen
- Focus
- Thorns

---

## 🗺️ Map System

The game includes a roguelike-style map structure.

Current map direction:

- World Map and Raid Map are grouped under the Map screen.
- World exploration uses roguelike runs.
- There are multiple maps across level brackets up to level 100.
- Raid content is harder and more boss-focused.
- Secret zones can unlock from progression and achievements.

---

## 👹 Enemy Codex

The Enemy Codex has been moved into the **Character Status** screen.

The codex tracks encountered enemies and can show:

- Enemy name
- Race / enemy type
- Job / role
- HP
- Attack
- Moves
- Seen count
- Lore

This makes the codex a long-term discovery and collection system.

---

## 🏆 Achievements

Achievements have also been moved into the **Character Status** screen.

The Achievement screen lists achievements as locked or unlocked and can show:

- Achievement name
- Requirement
- Status
- Title / reward text

Examples include achievements for:

- Defeating enemies
- Reaching level milestones
- Unlocking recruit bonds
- Clearing secret zones
- Winning without healing
- Discovering codex entries

---

## ⚙️ Settings and Updates

Settings includes useful tools and shortcuts such as:

- Save / Load Manager
- Quick Save
- Load Autosave
- Export Save
- Import Save
- Help screen
- Build guide
- Feedback button
- Updates button

Update notes have their own dedicated Updates screen instead of being scattered through Settings.

---

## 🧾 Recent Major Updates

### v0.25 — Skill & Spell System Redo

- Added Stamina.
- Split abilities into Physical Skills and Magic Spells.
- Added ranks, tiers, tags, cooldowns, costs, and requirements.

### v0.26 — Skill, Spell, Equipment, Recruit, and Codex Update

- Added weapon requirements and weapon scaling.
- Split Skill Library into Physical Skill Shop and Magic Spell Shop.
- Added recruit stats, skills, and spells.
- Moved Achievements and Enemy Codex into Character Status.
- Added Race to the top header.

### v0.27 — Save / Load Manager Update

- Added full Save Manager screen.
- Added manual save slots.
- Added autosave.
- Added backup saves.
- Added save repair.
- Added import and export.
- Main menu Load Save now opens the Save Manager.

---

## 💬 Feedback / Bug Reports

This game is still in active development. Feedback helps improve balance, systems, and mobile usability.

Please leave bug reports, balance ideas, race ideas, job ideas, skill/spell ideas, and feature requests here:

https://github.com/malcolm12aa/Build-Your-Legend/issues

Helpful feedback examples:

```text
This race feels too weak.
This job upgrade should require a different condition.
This skill costs too much stamina.
This spell should be locked behind a magic job.
This weapon type needs more skills.
This recruit feels too strong or too weak.
The Save Manager is not loading my save.
Mobile layout breaks on my phone.
```

---

## 🚧 Planned / Possible Future Updates

Possible future updates include:

- More race evolution branches
- More job upgrade branches
- More Hidden jobs
- More Unique and Ultimate abilities
- More weapon-type skill lines
- More magic spell schools
- More recruits with unique stories
- More boss and raid mechanics
- More roguelike map events
- More equipment sets and set bonuses
- Better balancing for stamina, mana, and cooldowns
- More achievements and codex entries
- More mobile UI polish

---

## 🧪 Development Status

Build Your Legend is an active fan-made web game project.

Current direction:

> A fantasy race-evolution and class-mastery RPG where every race, job, weapon, skill, spell, recruit, and save file should feel meaningful.

---

## 📜 Disclaimer

This is a free, fan-made RPG project made for fun, experimentation, and learning.

It is not affiliated with or endorsed by any official anime, manga, game, or publisher.

---

## 🔥 Final Note

Build Your Legend is built around one core idea:

> **Master your race. Master your job. Learn your skills. Cast your spells. Recruit your party. Build your legend.**

Thanks for playing.
