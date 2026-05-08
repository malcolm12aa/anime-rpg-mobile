// v1.1.0 — Fantasy Ability Expansion.
// 300 original fantasy abilities: 100 elemental skills, 100 elemental spells, and 100 multi-element abilities.

export const FANTASY_ABILITY_EXPANSION = [
  {
    "id": "fa_skill_fire_01",
    "name": "Ashen Strike Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "price": 92,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword"
  },
  {
    "id": "fa_skill_fire_02",
    "name": "Cinder Rush Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 27,
    "price": 186,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_03",
    "name": "Ember Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 28,
    "price": 189,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_04",
    "name": "Solar Throw Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 29,
    "price": 192,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_05",
    "name": "Inferno Smash Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 45,
    "price": 340,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_06",
    "name": "Phoenix Strike Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 31,
    "price": 198,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_07",
    "name": "Blazeborn Rush Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 47,
    "price": 348,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_08",
    "name": "Redspire Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 33,
    "price": 204,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_09",
    "name": "Forge Throw Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 34,
    "price": 207,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_10",
    "name": "Wildflame Smash Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 50,
    "price": 360,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_11",
    "name": "Pyre Strike Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 29,
    "cooldown": 7,
    "element": "fire",
    "target": "enemy",
    "power": 69,
    "price": 575,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_12",
    "name": "Suncrown Rush Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 27,
    "price": 216,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_13",
    "name": "Hellkite Step Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "price": 116,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield"
  },
  {
    "id": "fa_skill_fire_14",
    "name": "Furnace Throw Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 26,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 40,
    "price": 376,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_15",
    "name": "Scarlet Smash Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 41,
    "price": 380,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_16",
    "name": "Burning Strike Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 31,
    "price": 228,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_skill_fire_17",
    "name": "Volcanic Rush Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 18,
    "price": 124,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "fire",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "statusScaling": {
      "strength": 0.038,
      "endurance": 0.018
    },
    "description": "\ud83d\udd25 A fire battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow"
  },
  {
    "id": "fa_skill_ice_01",
    "name": "Frost Riposte Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 33,
    "price": 234,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_02",
    "name": "Glacier Guard Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 14,
    "price": 128,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_skill_ice_03",
    "name": "Rime Breaker Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 46,
    "price": 400,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_04",
    "name": "Snowveil Arc Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 47,
    "price": 404,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_05",
    "name": "Winter Form Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 30,
    "cooldown": 6,
    "element": "ice",
    "target": "enemy",
    "power": 62,
    "price": 630,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_06",
    "name": "Crystal Riposte Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 18,
    "price": 136,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_skill_ice_07",
    "name": "Hoarfrost Guard Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 29,
    "price": 252,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_08",
    "name": "Polar Breaker Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 21,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 51,
    "price": 420,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_09",
    "name": "Silvercold Arc Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 31,
    "price": 258,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_10",
    "name": "Whitefang Form Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 32,
    "price": 261,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_11",
    "name": "Frozen Riposte Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 40,
    "price": 432,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_12",
    "name": "Mirrorice Guard Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 18,
    "price": 148,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_skill_ice_13",
    "name": "Pale Breaker Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 26,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 440,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_14",
    "name": "Hailstone Arc Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 14,
    "price": 152,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_skill_ice_15",
    "name": "Icemoon Form Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 27,
    "price": 276,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_16",
    "name": "Coldstar Riposte Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 31,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 73,
    "price": 685,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_ice_17",
    "name": "Boreal Guard Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 29,
    "price": 282,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "ice",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "statusScaling": {
      "dexterity": 0.03,
      "magic": 0.02
    },
    "description": "\u2744\ufe0f A ice battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_skill_lightning_01",
    "name": "Storm Talon Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 23,
    "cooldown": 5,
    "element": "lightning",
    "target": "enemy",
    "power": 47,
    "price": 460,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_02",
    "name": "Thunder Burst Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 31,
    "price": 288,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_03",
    "name": "Volt Drive Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 14,
    "price": 164,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_skill_lightning_04",
    "name": "Skybolt Fang Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 33,
    "price": 294,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_05",
    "name": "Tempest Rend Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 34,
    "price": 297,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_06",
    "name": "Raijin Talon Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 52,
    "price": 480,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_07",
    "name": "Flash Burst Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 18,
    "price": 172,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff"
  },
  {
    "id": "fa_skill_lightning_08",
    "name": "Brightstrike Drive Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 40,
    "price": 488,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_09",
    "name": "Fulminar Fang Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 14,
    "price": 176,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_skill_lightning_10",
    "name": "Stormcall Rend Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 32,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 66,
    "price": 740,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_11",
    "name": "Bluebolt Talon Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 43,
    "price": 500,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_12",
    "name": "Cloudsplit Burst Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 31,
    "price": 318,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_13",
    "name": "Aetherstorm Drive Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 18,
    "price": 184,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_skill_lightning_14",
    "name": "Pulse Fang Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 33,
    "price": 324,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_15",
    "name": "Thunderhead Rend Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 21,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 47,
    "price": 516,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_16",
    "name": "Spark Talon Art",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 42,
    "cooldown": 9,
    "element": "lightning",
    "target": "enemy",
    "power": 82,
    "price": 1200,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_lightning_17",
    "name": "Static Burst Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 26,
    "price": 333,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "lightning",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.036,
      "dexterity": 0.018
    },
    "description": "\u26a1 A lightning battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_skill_wind_01",
    "name": "Gale Bulwark Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 27,
    "price": 336,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_02",
    "name": "Zephyr Wheel Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 18,
    "price": 196,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_skill_wind_03",
    "name": "Tempest Cleave Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 29,
    "price": 342,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_04",
    "name": "Sky Counter Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 33,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 59,
    "price": 795,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_05",
    "name": "Whirlwind Lance Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 40,
    "price": 544,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_06",
    "name": "Cyclone Bulwark Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 32,
    "price": 351,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_07",
    "name": "Falcon Wheel Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 33,
    "price": 354,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_08",
    "name": "Stormwing Cleave Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 18,
    "price": 208,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_skill_wind_09",
    "name": "Aerial Counter Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 44,
    "price": 560,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_10",
    "name": "Slipstream Lance Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 14,
    "price": 212,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_skill_wind_11",
    "name": "Highwind Bulwark Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 27,
    "price": 366,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_12",
    "name": "Razorwind Wheel Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 47,
    "price": 572,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_13",
    "name": "Breeze Cleave Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 29,
    "price": 372,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_14",
    "name": "Typhoon Counter Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 21,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 49,
    "price": 580,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_15",
    "name": "Skydancer Lance Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 34,
    "cooldown": 6,
    "element": "wind",
    "target": "enemy",
    "power": 70,
    "price": 850,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_wind_16",
    "name": "Cloudstep Bulwark Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 14,
    "price": 224,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_skill_wind_17",
    "name": "Windwake Wheel Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 33,
    "price": 384,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "wind",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "statusScaling": {
      "agility": 0.04,
      "dexterity": 0.016
    },
    "description": "\ud83c\udf2a A wind battle art that turns weapon pressure into elemental damage. Scales with Agility, Dexterity.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_skill_earth_01",
    "name": "Stone Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 34,
    "price": 387,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_02",
    "name": "Granite Throw Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 26,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 40,
    "price": 600,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_03",
    "name": "Ironroot Smash Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 18,
    "price": 232,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_skill_earth_04",
    "name": "Mountain Strike Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 27,
    "price": 396,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_05",
    "name": "Obsidian Rush Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "price": 236,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff"
  },
  {
    "id": "fa_skill_earth_06",
    "name": "Titan Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 29,
    "price": 402,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_07",
    "name": "Geomantle Throw Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 23,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 45,
    "price": 620,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_08",
    "name": "Boulder Smash Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 31,
    "price": 408,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_09",
    "name": "Deepcore Strike Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 35,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 63,
    "price": 905,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_10",
    "name": "Oathstone Rush Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 33,
    "price": 414,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_11",
    "name": "Emerald Step Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "price": 248,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_skill_earth_12",
    "name": "Golem Throw Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 50,
    "price": 640,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_13",
    "name": "Worldroot Smash Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 26,
    "price": 423,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_14",
    "name": "Basalt Strike Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 27,
    "price": 426,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_earth_15",
    "name": "Dust Rush Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 18,
    "price": 256,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_skill_earth_16",
    "name": "Bedrock Step Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 40,
    "price": 656,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "earth",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "statusScaling": {
      "strength": 0.03,
      "endurance": 0.03
    },
    "description": "\u26f0 A earth battle art that turns weapon pressure into elemental damage. Scales with Strength, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_skill_water_01",
    "name": "Tide Rush Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 41,
    "price": 660,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_02",
    "name": "Wave Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 31,
    "price": 438,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_03",
    "name": "Moonwell Throw Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 32,
    "price": 441,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_04",
    "name": "Mist Smash Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 36,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 74,
    "price": 960,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_05",
    "name": "River Strike Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 18,
    "price": 268,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow"
  },
  {
    "id": "fa_skill_water_06",
    "name": "Abyssal Rush Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 46,
    "price": 680,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_07",
    "name": "Rain Step Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 23,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 47,
    "price": 684,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "staff"
    ],
    "weaponRequirementText": "Requires equipped Staff",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_08",
    "name": "Pearl Throw Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 27,
    "price": 456,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_09",
    "name": "Leviathan Smash Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 28,
    "price": 459,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_10",
    "name": "Bluewater Strike Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 17,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 29,
    "price": 462,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiresWeaponType": [
      "bow",
      "crossbow"
    ],
    "weaponRequirementText": "Requires equipped Bow or Crossbow",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_11",
    "name": "Seafoam Rush Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 5,
    "element": "water",
    "target": "enemy",
    "power": 51,
    "price": 700,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_12",
    "name": "Cascade Step Art",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 31,
    "price": 468,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_13",
    "name": "Torrent Throw Art",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 14,
    "price": 284,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_skill_water_14",
    "name": "Dew Smash Art",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 5,
    "element": "water",
    "target": "enemy",
    "power": 40,
    "price": 712,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "axe",
      "greatsword"
    ],
    "weaponRequirementText": "Requires equipped Axe or Greatsword",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_15",
    "name": "Flood Strike Art",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 37,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 67,
    "price": 1015,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_skill_water_16",
    "name": "Tsunami Rush Art",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 44,
    "cooldown": 8,
    "element": "water",
    "target": "enemy",
    "power": 82,
    "price": 1500,
    "source": "Fantasy Skill Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-skill",
      "water",
      "weapon-art",
      "basic-ability-scaling",
      "weapon-required",
      "requires-water-mastery"
    ],
    "scaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "statusScaling": {
      "dexterity": 0.026,
      "magic": 0.024
    },
    "description": "\ud83c\udf0a A water battle art that turns weapon pressure into elemental damage. Scales with Dexterity, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiresWeaponType": [
      "shield"
    ],
    "weaponRequirementText": "Requires equipped Shield",
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_fire_01",
    "name": "Inferno Ward",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 28,
    "price": 518,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_02",
    "name": "Phoenix Veil",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 28,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 46,
    "price": 763,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_03",
    "name": "Blazeborn Rain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 30,
    "price": 524,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_04",
    "name": "Redspire Prism",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 22,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 48,
    "price": 771,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_05",
    "name": "Forge Bloom",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 32,
    "price": 530,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_06",
    "name": "Wildflame Mandala",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 33,
    "price": 533,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_07",
    "name": "Pyre Domain",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 51,
    "price": 783,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_08",
    "name": "Suncrown Sigil",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 38,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 60,
    "price": 1095,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_09",
    "name": "Hellkite Sphere",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 36,
    "price": 542,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_10",
    "name": "Furnace Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 17,
    "price": 345,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "fa_spell_fire_11",
    "name": "Scarlet Mirror",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 29,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 55,
    "price": 799,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_12",
    "name": "Burning Star",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 22,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 803,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_13",
    "name": "Volcanic Oracle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 30,
    "price": 554,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_14",
    "name": "Ashen Bolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 15,
    "price": 353,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "fa_spell_fire_15",
    "name": "Cinder Nova",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 32,
    "price": 560,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_fire_16",
    "name": "Ember Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 17,
    "price": 357,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "fa_spell_fire_17",
    "name": "Solar Crown",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 27,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 47,
    "price": 823,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "fire",
      "spell-formula",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "statusScaling": {
      "magic": 0.052,
      "strength": 0.01
    },
    "description": "\ud83d\udd25 A fire spell formula shaped for clean fantasy combat. Scales with Magic, Strength.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery"
  },
  {
    "id": "fa_spell_ice_01",
    "name": "Winter Beacon",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 48,
    "price": 827,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_02",
    "name": "Crystal Ward",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 39,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 71,
    "price": 1150,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_03",
    "name": "Hoarfrost Veil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 15,
    "price": 365,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_spell_ice_04",
    "name": "Polar Rain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 28,
    "price": 578,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_05",
    "name": "Silvercold Prism",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 52,
    "price": 843,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_06",
    "name": "Whitefang Bloom",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 30,
    "price": 584,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_07",
    "name": "Frozen Mandala",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 31,
    "price": 587,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_08",
    "name": "Mirrorice Domain",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 27,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 55,
    "price": 855,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_09",
    "name": "Pale Sigil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 15,
    "price": 377,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_spell_ice_10",
    "name": "Hailstone Sphere",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 29,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 43,
    "price": 863,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_11",
    "name": "Icemoon Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 17,
    "price": 381,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_spell_ice_12",
    "name": "Coldstar Mirror",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 36,
    "price": 602,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_13",
    "name": "Boreal Star",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 30,
    "cooldown": 6,
    "element": "ice",
    "target": "enemy",
    "power": 64,
    "price": 1205,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_14",
    "name": "Frost Oracle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 28,
    "price": 608,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_15",
    "name": "Glacier Bolt",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 26,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 48,
    "price": 883,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_16",
    "name": "Rime Nova",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 30,
    "price": 614,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery"
  },
  {
    "id": "fa_spell_ice_17",
    "name": "Snowveil Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 17,
    "price": 393,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "ice",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "statusScaling": {
      "magic": 0.048,
      "dexterity": 0.014
    },
    "description": "\u2744\ufe0f A ice spell formula shaped for clean fantasy combat. Scales with Magic, Dexterity.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "fa_spell_lightning_01",
    "name": "Tempest Cascade",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 32,
    "price": 620,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_02",
    "name": "Raijin Beacon",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 33,
    "price": 623,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_03",
    "name": "Flash Ward",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 23,
    "cooldown": 5,
    "element": "lightning",
    "target": "enemy",
    "power": 53,
    "price": 903,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_04",
    "name": "Brightstrike Veil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 15,
    "price": 401,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_spell_lightning_05",
    "name": "Fulminar Rain",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 55,
    "price": 911,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_06",
    "name": "Stormcall Prism",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 17,
    "price": 405,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_spell_lightning_07",
    "name": "Bluebolt Bloom",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 31,
    "cooldown": 5,
    "element": "lightning",
    "target": "enemy",
    "power": 75,
    "price": 1260,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_08",
    "name": "Cloudsplit Mandala",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 44,
    "price": 923,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_09",
    "name": "Aetherstorm Domain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 30,
    "price": 644,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_10",
    "name": "Pulse Sigil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 15,
    "price": 413,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_spell_lightning_11",
    "name": "Thunderhead Sphere",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 32,
    "price": 650,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_12",
    "name": "Spark Seal",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "lightning",
    "target": "enemy",
    "power": 48,
    "price": 939,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_13",
    "name": "Static Mirror",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 45,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 106,
    "price": 1817,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_14",
    "name": "Storm Star",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 35,
    "price": 659,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_15",
    "name": "Thunder Oracle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 36,
    "price": 662,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_lightning_16",
    "name": "Volt Bolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 15,
    "price": 425,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ]
  },
  {
    "id": "fa_spell_lightning_17",
    "name": "Skybolt Nova",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "lightning",
    "target": "enemy",
    "power": 28,
    "price": 668,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "lightning",
      "spell-formula",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.046,
      "agility": 0.018
    },
    "description": "\u26a1 A lightning spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery"
  },
  {
    "id": "fa_spell_wind_01",
    "name": "Whirlwind Circle",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 32,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1315,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_02",
    "name": "Cyclone Cascade",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 55,
    "price": 967,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_03",
    "name": "Falcon Beacon",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 31,
    "price": 677,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_04",
    "name": "Stormwing Ward",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 32,
    "price": 680,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_05",
    "name": "Aerial Veil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 15,
    "price": 437,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_wind_06",
    "name": "Slipstream Rain",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 27,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 45,
    "price": 983,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_07",
    "name": "Highwind Prism",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 17,
    "price": 441,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_wind_08",
    "name": "Razorwind Bloom",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 36,
    "price": 692,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_09",
    "name": "Breeze Mandala",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 22,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 48,
    "price": 995,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_10",
    "name": "Typhoon Domain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 28,
    "price": 698,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_11",
    "name": "Skydancer Sigil",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 50,
    "price": 1003,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_12",
    "name": "Cloudstep Sphere",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 33,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 61,
    "price": 1370,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_13",
    "name": "Windwake Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 17,
    "price": 453,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_wind_14",
    "name": "Gale Mirror",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 32,
    "price": 710,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_15",
    "name": "Zephyr Star",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 33,
    "price": 713,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_16",
    "name": "Tempest Oracle",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 29,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 55,
    "price": 1023,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery"
  },
  {
    "id": "fa_spell_wind_17",
    "name": "Sky Bolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 15,
    "price": 461,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "wind",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.04,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a A wind spell formula shaped for clean fantasy combat. Scales with Magic, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_earth_01",
    "name": "Obsidian Crown",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 36,
    "price": 722,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_02",
    "name": "Titan Circle",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 17,
    "price": 465,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_earth_03",
    "name": "Geomantle Cascade",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 28,
    "price": 728,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_04",
    "name": "Boulder Beacon",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 26,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 46,
    "price": 1043,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_05",
    "name": "Deepcore Ward",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 30,
    "price": 734,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_06",
    "name": "Oathstone Veil",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 34,
    "cooldown": 6,
    "element": "earth",
    "target": "enemy",
    "power": 72,
    "price": 1425,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_07",
    "name": "Emerald Rain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 32,
    "price": 740,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_08",
    "name": "Golem Prism",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 17,
    "price": 477,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_earth_09",
    "name": "Worldroot Bloom",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 51,
    "price": 1063,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_10",
    "name": "Basalt Mandala",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 35,
    "price": 749,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_11",
    "name": "Dust Domain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 36,
    "price": 752,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_12",
    "name": "Bedrock Sigil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 15,
    "price": 485,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "fa_spell_earth_13",
    "name": "Stone Sphere",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 27,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 55,
    "price": 1079,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_14",
    "name": "Granite Seal",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 28,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 1083,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_15",
    "name": "Ironroot Mirror",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 30,
    "price": 764,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_earth_16",
    "name": "Mountain Star",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 31,
    "price": 767,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "earth",
      "spell-formula",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.026
    },
    "description": "\u26f0 A earth spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery"
  },
  {
    "id": "fa_spell_water_01",
    "name": "River Sphere",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 35,
    "cooldown": 5,
    "element": "water",
    "target": "enemy",
    "power": 65,
    "price": 1480,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_02",
    "name": "Abyssal Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 15,
    "price": 497,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ]
  },
  {
    "id": "fa_spell_water_03",
    "name": "Rain Mirror",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 47,
    "price": 1103,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_04",
    "name": "Pearl Star",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 26,
    "cooldown": 5,
    "element": "water",
    "target": "enemy",
    "power": 48,
    "price": 1107,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_05",
    "name": "Leviathan Oracle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 36,
    "price": 782,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_06",
    "name": "Bluewater Bolt",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 27,
    "price": 785,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_07",
    "name": "Seafoam Nova",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 28,
    "price": 788,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_08",
    "name": "Cascade Lance",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 22,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 52,
    "price": 1123,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_09",
    "name": "Torrent Crown",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 30,
    "price": 794,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_10",
    "name": "Dew Circle",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 17,
    "price": 513,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ]
  },
  {
    "id": "fa_spell_water_11",
    "name": "Flood Cascade",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 55,
    "price": 1135,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_12",
    "name": "Tsunami Beacon",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 36,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 76,
    "price": 1535,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_13",
    "name": "Tide Ward",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 47,
    "cooldown": 9,
    "element": "water",
    "target": "enemy",
    "power": 106,
    "price": 2117,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_14",
    "name": "Wave Veil",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 15,
    "price": 521,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ]
  },
  {
    "id": "fa_spell_water_15",
    "name": "Moonwell Rain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "water",
    "target": "enemy",
    "power": 36,
    "price": 812,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling",
      "requires-water-mastery"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Requires Water Element Mastery"
  },
  {
    "id": "fa_spell_water_16",
    "name": "Mist Prism",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 17,
    "price": 525,
    "source": "Fantasy Spell Grimoire",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "fantasy-spell",
      "water",
      "spell-formula",
      "basic-ability-scaling"
    ],
    "scaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "statusScaling": {
      "magic": 0.044,
      "endurance": 0.016
    },
    "description": "\ud83c\udf0a A water spell formula shaped for clean fantasy combat. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 2,
        "chance": 40
      }
    ]
  },
  {
    "id": "fa_multi_skill_001",
    "name": "Twincrest Ashen-Frost Convergence",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 33,
    "price": 870,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element skill combining fire and ice. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_002",
    "name": "Eclipse Cinder-Volt Cataclysm",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 21,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 53,
    "price": 1214,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26a1 A dual-element skill combining fire and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_003",
    "name": "Dragonline Ember-Whirlwind Rift",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 30,
    "cooldown": 7,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 70,
    "price": 1620,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element skill combining fire and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path.",
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_multi_skill_004",
    "name": "Worldsong Solar-Geomantle Engine",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 36,
    "price": 879,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26f0 A dual-element skill combining fire and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_005",
    "name": "Runebound Inferno-Leviathan Sanctum",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 588,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element skill combining fire and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_multi_skill_006",
    "name": "Tempestborn Crystal-Bluebolt Reactor",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 5,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1230,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element skill combining ice and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_007",
    "name": "Starforged Hoarfrost-Breeze Labyrinth",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 26,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 58,
    "price": 1234,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element skill combining ice and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path.",
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_multi_skill_008",
    "name": "Mythweave Polar-Dust Hexagram",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 891,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element skill combining ice and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_009",
    "name": "Spiritseal Silvercold-Tide Duet",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 596,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element skill combining ice and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_010",
    "name": "Astral Stormcall-Zephyr Domain",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 42,
    "price": 897,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element skill combining lightning and wind. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_011",
    "name": "Oathwoven Bluebolt-Obsidian Requiem",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 21,
    "price": 600,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element skill combining lightning and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_012",
    "name": "Mirage Cloudsplit-Rain Breaker",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 23,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 49,
    "price": 1254,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element skill combining lightning and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_013",
    "name": "Primal Breeze-Deepcore Miracle",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 6,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1258,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element skill combining wind and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_multi_skill_014",
    "name": "Heavenfall Typhoon-Seafoam Judgment",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 31,
    "cooldown": 6,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 81,
    "price": 1675,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element skill combining wind and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_015",
    "name": "Voidspire Dust-Torrent Bloom",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 608,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element skill combining earth and water. Scales with Strength, Agility, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_multi_skill_016",
    "name": "Celestial Burning-Hailstone Mandala",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 38,
    "price": 915,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element skill combining fire and ice. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_017",
    "name": "Stormroot Volcanic-Spark Overture",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 54,
    "price": 1274,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26a1 A dual-element skill combining fire and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path.",
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_multi_skill_018",
    "name": "Moonscar Ashen-Gale Pact",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 40,
    "price": 921,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element skill combining fire and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_019",
    "name": "Fatebound Cinder-Obsidian Covenant",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 41,
    "price": 924,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26f0 A dual-element skill combining fire and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_020",
    "name": "Crownbreaker Ember-Rain Spiral",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 23,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1286,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element skill combining fire and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_021",
    "name": "Twincrest Snowveil-Flash Convergence",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 25,
    "price": 620,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element skill combining ice and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_022",
    "name": "Eclipse Winter-Aerial Cataclysm",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 25,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 59,
    "price": 1294,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element skill combining ice and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_023",
    "name": "Dragonline Crystal-Worldroot Rift",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 21,
    "price": 624,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element skill combining ice and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_multi_skill_024",
    "name": "Worldsong Hoarfrost-Flood Engine",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 36,
    "price": 939,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element skill combining ice and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_025",
    "name": "Runebound Brightstrike-Skydancer Sanctum",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 32,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 74,
    "price": 1730,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element skill combining lightning and wind. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path.",
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_multi_skill_026",
    "name": "Tempestborn Fulminar-Ironroot Reactor",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 3,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 38,
    "price": 945,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element skill combining lightning and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_027",
    "name": "Starforged Stormcall-River Labyrinth",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1314,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element skill combining lightning and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_multi_skill_028",
    "name": "Mythweave Highwind-Geomantle Hexagram",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 951,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element skill combining wind and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_029",
    "name": "Spiritseal Razorwind-Leviathan Duet",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 636,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element skill combining wind and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_030",
    "name": "Astral Basalt-Seafoam Domain",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 42,
    "price": 957,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element skill combining earth and water. Scales with Strength, Agility, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_031",
    "name": "Oathwoven Furnace-Whitefang Requiem",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 33,
    "price": 960,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element skill combining fire and ice. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_032",
    "name": "Mirage Scarlet-Cloudsplit Breaker",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 55,
    "price": 1334,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26a1 A dual-element skill combining fire and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_033",
    "name": "Primal Burning-Typhoon Miracle",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 25,
    "price": 644,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element skill combining fire and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path.",
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_multi_skill_034",
    "name": "Heavenfall Volcanic-Ironroot Judgment",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 21,
    "cooldown": 6,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1342,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26f0 A dual-element skill combining fire and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_035",
    "name": "Voidspire Ashen-River Bloom",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 648,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element skill combining fire and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_multi_skill_036",
    "name": "Celestial Glacier-Volt Mandala",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 33,
    "cooldown": 8,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 67,
    "price": 1785,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element skill combining ice and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_037",
    "name": "Stormroot Rime-Whirlwind Overture",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 24,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 60,
    "price": 1354,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element skill combining ice and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path.",
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_multi_skill_038",
    "name": "Moonscar Snowveil-Emerald Pact",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 981,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element skill combining ice and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_039",
    "name": "Fatebound Winter-Torrent Covenant",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 656,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-ice-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element skill combining ice and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_040",
    "name": "Crownbreaker Raijin-Highwind Spiral",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 42,
    "price": 987,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element skill combining lightning and wind. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_041",
    "name": "Twincrest Flash-Stone Convergence",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 20,
    "cooldown": 4,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1370,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element skill combining lightning and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_042",
    "name": "Eclipse Brightstrike-Moonwell Cataclysm",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 41,
    "cooldown": 9,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 106,
    "price": 2436,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element skill combining lightning and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_043",
    "name": "Dragonline Aerial-Obsidian Rift",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 5,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 35,
    "price": 996,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element skill combining wind and earth. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "spear",
      "pike"
    ],
    "weaponRequirementText": "Requires equipped Spear or Pike"
  },
  {
    "id": "fa_multi_skill_044",
    "name": "Worldsong Slipstream-Rain Engine",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 3,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 36,
    "price": 999,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element skill combining wind and water. Scales with Strength, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_045",
    "name": "Runebound Worldroot-Leviathan Sanctum",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 2,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 668,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-earth-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element skill combining earth and water. Scales with Strength, Agility, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path.",
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Requires equipped Dagger or Rapier"
  },
  {
    "id": "fa_multi_skill_046",
    "name": "Tempestborn Suncrown-Crystal Reactor",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 18,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 38,
    "price": 1005,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element skill combining fire and ice. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_047",
    "name": "Starforged Hellkite-Brightstrike Labyrinth",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 34,
    "cooldown": 7,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 78,
    "price": 1840,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26a1 A dual-element skill combining fire and lightning. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path.",
    "requiresWeaponType": [
      "mace",
      "hammer"
    ],
    "weaponRequirementText": "Requires equipped Mace or Hammer"
  },
  {
    "id": "fa_multi_skill_048",
    "name": "Mythweave Furnace-Slipstream Hexagram",
    "kind": "skill",
    "rank": "Rare",
    "resource": "stamina",
    "cost": 27,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1398,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element skill combining fire and wind. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_skill_049",
    "name": "Spiritseal Scarlet-Stone Duet",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 41,
    "price": 1014,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "weapon-required",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\u26f0 A dual-element skill combining fire and earth. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path.",
    "requiresWeaponType": [
      "sword",
      "katana"
    ],
    "weaponRequirementText": "Requires equipped Sword or Katana"
  },
  {
    "id": "fa_multi_skill_050",
    "name": "Astral Burning-Moonwell Domain",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 42,
    "price": 1017,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "statusScaling": {
      "strength": 0.028,
      "agility": 0.02,
      "magic": 0.026
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element skill combining fire and water. Scales with Strength, Agility, Magic.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_051",
    "name": "Oathwoven Boreal-Spark Requiem",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 25,
    "price": 680,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element spell combining ice and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_052",
    "name": "Mirage Frost-Gale Breaker",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 26,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 61,
    "price": 1414,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element spell combining ice and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_053",
    "name": "Primal Glacier-Deepcore Miracle",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 21,
    "price": 684,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element spell combining ice and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_054",
    "name": "Heavenfall Rime-Seafoam Judgment",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 36,
    "price": 1029,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element spell combining ice and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_055",
    "name": "Voidspire Skybolt-Falcon Bloom",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 29,
    "cooldown": 6,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1426,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element spell combining lightning and wind. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_056",
    "name": "Celestial Tempest-Dust Mandala",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 38,
    "price": 1035,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element spell combining lightning and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_057",
    "name": "Stormroot Raijin-Tide Overture",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 23,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 52,
    "price": 1434,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element spell combining lightning and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_058",
    "name": "Moonscar Falcon-Ironroot Pact",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 38,
    "cooldown": 6,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 71,
    "price": 1895,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element spell combining wind and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_059",
    "name": "Fatebound Stormwing-River Covenant",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 696,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element spell combining wind and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_060",
    "name": "Crownbreaker Golem-Rain Spiral",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 42,
    "price": 1047,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element spell combining earth and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_061",
    "name": "Twincrest Wildflame-Glacier Convergence",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 33,
    "price": 1050,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element spell combining fire and ice. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_062",
    "name": "Eclipse Pyre-Skybolt Cataclysm",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1454,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26a1 A dual-element spell combining fire and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_063",
    "name": "Dragonline Suncrown-Cyclone Rift",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 25,
    "price": 704,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element spell combining fire and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_064",
    "name": "Worldsong Hellkite-Dust Engine",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 36,
    "price": 1059,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26f0 A dual-element spell combining fire and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_065",
    "name": "Runebound Furnace-Tide Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 708,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element spell combining fire and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_066",
    "name": "Tempestborn Icemoon-Cloudsplit Reactor",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 38,
    "price": 1065,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element spell combining ice and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_067",
    "name": "Starforged Coldstar-Typhoon Labyrinth",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 48,
    "price": 1474,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element spell combining ice and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_068",
    "name": "Mythweave Boreal-Geomantle Hexagram",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 1071,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element spell combining ice and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_069",
    "name": "Spiritseal Frost-Leviathan Duet",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 39,
    "cooldown": 5,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 82,
    "price": 1950,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element spell combining ice and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_070",
    "name": "Astral Thunder-Tempest Domain",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 42,
    "price": 1077,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element spell combining lightning and wind. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_071",
    "name": "Oathwoven Volt-Worldroot Requiem",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 21,
    "price": 720,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element spell combining lightning and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_072",
    "name": "Mirage Skybolt-Flood Breaker",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 30,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 53,
    "price": 1494,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element spell combining lightning and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_073",
    "name": "Primal Whirlwind-Stone Miracle",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 5,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 35,
    "price": 1086,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element spell combining wind and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_074",
    "name": "Heavenfall Cyclone-Moonwell Judgment",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 36,
    "price": 1089,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element spell combining wind and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_075",
    "name": "Voidspire Emerald-River Bloom",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 728,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element spell combining earth and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_076",
    "name": "Celestial Redspire-Icemoon Mandala",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 26,
    "cooldown": 6,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1510,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element spell combining fire and ice. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_077",
    "name": "Stormroot Forge-Static Overture",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 27,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 58,
    "price": 1514,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26a1 A dual-element spell combining fire and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_078",
    "name": "Moonscar Wildflame-Zephyr Pact",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 40,
    "price": 1101,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element spell combining fire and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_079",
    "name": "Fatebound Pyre-Worldroot Covenant",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 41,
    "price": 1104,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26f0 A dual-element spell combining fire and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_080",
    "name": "Crownbreaker Suncrown-Flood Spiral",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 40,
    "cooldown": 8,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 75,
    "price": 2005,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element spell combining fire and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_081",
    "name": "Twincrest Pale-Brightstrike Convergence",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 25,
    "price": 740,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element spell combining ice and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_082",
    "name": "Eclipse Hailstone-Slipstream Cataclysm",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 49,
    "price": 1534,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element spell combining ice and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_083",
    "name": "Dragonline Icemoon-Obsidian Rift",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 25,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1538,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element spell combining ice and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_084",
    "name": "Worldsong Coldstar-Rain Engine",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 36,
    "price": 1119,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element spell combining ice and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_085",
    "name": "Runebound Static-Cloudstep Sanctum",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 18,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 37,
    "price": 1122,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element spell combining lightning and wind. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_086",
    "name": "Tempestborn Storm-Emerald Reactor",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "lightning",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 38,
    "price": 1125,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\u26f0 A dual-element spell combining lightning and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_087",
    "name": "Starforged Thunder-Torrent Labyrinth",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 29,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 54,
    "price": 1554,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf0a A dual-element spell combining lightning and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_088",
    "name": "Mythweave Tempest-Dust Hexagram",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 5,
    "element": "wind",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 1131,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\u26f0 A dual-element spell combining wind and earth. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_089",
    "name": "Spiritseal Sky-Tide Duet",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "wind",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 756,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "wind",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-wind-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\ud83c\udf2a\ud83c\udf0a A dual-element spell combining wind and water. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Requires Wind Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_090",
    "name": "Astral Oathstone-Moonwell Domain",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "earth",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 57,
    "price": 1566,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "earth",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-earth-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.024
    },
    "description": "\u26f0\ud83c\udf0a A dual-element spell combining earth and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Requires Earth Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_091",
    "name": "Oathwoven Phoenix-Frozen Requiem",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 31,
    "cooldown": 7,
    "element": "fire",
    "secondaryElements": [
      "ice"
    ],
    "target": "enemy",
    "power": 68,
    "price": 2060,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "ice",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u2744\ufe0f A dual-element spell combining fire and ice. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Ice Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_092",
    "name": "Mirage Blazeborn-Aetherstorm Breaker",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 46,
    "cooldown": 8,
    "element": "fire",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 106,
    "price": 2736,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26a1 A dual-element spell combining fire and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 55
      },
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 34
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_093",
    "name": "Primal Redspire-Skydancer Miracle",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 25,
    "price": 764,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf2a A dual-element spell combining fire and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_094",
    "name": "Heavenfall Forge-Emerald Judgment",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 5,
    "element": "fire",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 36,
    "price": 1149,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\u26f0 A dual-element spell combining fire and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_095",
    "name": "Voidspire Wildflame-Torrent Bloom",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "fire",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 21,
    "price": 768,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "fire",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-fire-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\ud83d\udd25\ud83c\udf0a A dual-element spell combining fire and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Requires Fire Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_096",
    "name": "Celestial Frozen-Skybolt Mandala",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 17,
    "cooldown": 4,
    "element": "ice",
    "secondaryElements": [
      "lightning"
    ],
    "target": "enemy",
    "power": 38,
    "price": 1155,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "lightning",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26a1 A dual-element spell combining ice and lightning. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Lightning Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_097",
    "name": "Stormroot Mirrorice-Cyclone Overture",
    "kind": "spell",
    "rank": "Rare",
    "resource": "mana",
    "cost": 23,
    "cooldown": 6,
    "element": "ice",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 50,
    "price": 1594,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf2a A dual-element spell combining ice and wind. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 32
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Wind Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_098",
    "name": "Moonscar Pale-Ironroot Pact",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 19,
    "cooldown": 3,
    "element": "ice",
    "secondaryElements": [
      "earth"
    ],
    "target": "enemy",
    "power": 40,
    "price": 1161,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "earth",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\u26f0 A dual-element spell combining ice and earth. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Earth Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_099",
    "name": "Fatebound Hailstone-River Covenant",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "ice",
    "secondaryElements": [
      "water"
    ],
    "target": "enemy",
    "power": 25,
    "price": 776,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "ice",
      "water",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-ice-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014
    },
    "description": "\u2744\ufe0f\ud83c\udf0a A dual-element spell combining ice and water. Scales with Magic, Endurance.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Requires Ice Element Mastery; Water Mastery improves the build path."
  },
  {
    "id": "fa_multi_spell_100",
    "name": "Crownbreaker Thunderhead-Razorwind Spiral",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 21,
    "cooldown": 5,
    "element": "lightning",
    "secondaryElements": [
      "wind"
    ],
    "target": "enemy",
    "power": 42,
    "price": 1167,
    "source": "Multi-Element Myth Codex",
    "origin": "shop",
    "acquisition": "Shop",
    "tags": [
      "multi-element",
      "lightning",
      "wind",
      "fantasy-ability",
      "basic-ability-scaling",
      "requires-lightning-mastery"
    ],
    "scaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "statusScaling": {
      "magic": 0.05,
      "endurance": 0.014,
      "agility": 0.024
    },
    "description": "\u26a1\ud83c\udf2a A dual-element spell combining lightning and wind. Scales with Magic, Endurance, Agility.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 24
      }
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Requires Lightning Element Mastery; Wind Mastery improves the build path."
  }
];

export const FANTASY_ABILITY_LIBRARIES = [
  {
    "id": "fantasy_elemental_skill_codex",
    "name": "Fantasy Elemental Skill Codex",
    "description": "100 elemental physical skills spread across fire, ice, lightning, wind, earth, and water.",
    "stock": [
      "fa_skill_fire_01",
      "fa_skill_fire_02",
      "fa_skill_fire_03",
      "fa_skill_fire_04",
      "fa_skill_fire_05",
      "fa_skill_fire_06",
      "fa_skill_fire_07",
      "fa_skill_fire_08",
      "fa_skill_fire_09",
      "fa_skill_fire_10",
      "fa_skill_fire_11",
      "fa_skill_fire_12",
      "fa_skill_fire_13",
      "fa_skill_fire_14",
      "fa_skill_fire_15",
      "fa_skill_fire_16",
      "fa_skill_fire_17",
      "fa_skill_ice_01",
      "fa_skill_ice_02",
      "fa_skill_ice_03",
      "fa_skill_ice_04",
      "fa_skill_ice_05",
      "fa_skill_ice_06",
      "fa_skill_ice_07",
      "fa_skill_ice_08",
      "fa_skill_ice_09",
      "fa_skill_ice_10",
      "fa_skill_ice_11",
      "fa_skill_ice_12",
      "fa_skill_ice_13",
      "fa_skill_ice_14",
      "fa_skill_ice_15",
      "fa_skill_ice_16",
      "fa_skill_ice_17",
      "fa_skill_lightning_01",
      "fa_skill_lightning_02",
      "fa_skill_lightning_03",
      "fa_skill_lightning_04",
      "fa_skill_lightning_05",
      "fa_skill_lightning_06",
      "fa_skill_lightning_07",
      "fa_skill_lightning_08",
      "fa_skill_lightning_09",
      "fa_skill_lightning_10",
      "fa_skill_lightning_11",
      "fa_skill_lightning_12",
      "fa_skill_lightning_13",
      "fa_skill_lightning_14",
      "fa_skill_lightning_15",
      "fa_skill_lightning_16",
      "fa_skill_lightning_17",
      "fa_skill_wind_01",
      "fa_skill_wind_02",
      "fa_skill_wind_03",
      "fa_skill_wind_04",
      "fa_skill_wind_05",
      "fa_skill_wind_06",
      "fa_skill_wind_07",
      "fa_skill_wind_08",
      "fa_skill_wind_09",
      "fa_skill_wind_10",
      "fa_skill_wind_11",
      "fa_skill_wind_12",
      "fa_skill_wind_13",
      "fa_skill_wind_14",
      "fa_skill_wind_15",
      "fa_skill_wind_16",
      "fa_skill_wind_17",
      "fa_skill_earth_01",
      "fa_skill_earth_02",
      "fa_skill_earth_03",
      "fa_skill_earth_04",
      "fa_skill_earth_05",
      "fa_skill_earth_06",
      "fa_skill_earth_07",
      "fa_skill_earth_08",
      "fa_skill_earth_09",
      "fa_skill_earth_10",
      "fa_skill_earth_11",
      "fa_skill_earth_12",
      "fa_skill_earth_13",
      "fa_skill_earth_14",
      "fa_skill_earth_15",
      "fa_skill_earth_16",
      "fa_skill_water_01",
      "fa_skill_water_02",
      "fa_skill_water_03",
      "fa_skill_water_04",
      "fa_skill_water_05",
      "fa_skill_water_06",
      "fa_skill_water_07",
      "fa_skill_water_08",
      "fa_skill_water_09",
      "fa_skill_water_10",
      "fa_skill_water_11",
      "fa_skill_water_12",
      "fa_skill_water_13",
      "fa_skill_water_14",
      "fa_skill_water_15",
      "fa_skill_water_16"
    ]
  },
  {
    "id": "fantasy_elemental_spell_grimoire",
    "name": "Fantasy Elemental Spell Grimoire",
    "description": "100 elemental spells spread across fire, ice, lightning, wind, earth, and water.",
    "stock": [
      "fa_spell_fire_01",
      "fa_spell_fire_02",
      "fa_spell_fire_03",
      "fa_spell_fire_04",
      "fa_spell_fire_05",
      "fa_spell_fire_06",
      "fa_spell_fire_07",
      "fa_spell_fire_08",
      "fa_spell_fire_09",
      "fa_spell_fire_10",
      "fa_spell_fire_11",
      "fa_spell_fire_12",
      "fa_spell_fire_13",
      "fa_spell_fire_14",
      "fa_spell_fire_15",
      "fa_spell_fire_16",
      "fa_spell_fire_17",
      "fa_spell_ice_01",
      "fa_spell_ice_02",
      "fa_spell_ice_03",
      "fa_spell_ice_04",
      "fa_spell_ice_05",
      "fa_spell_ice_06",
      "fa_spell_ice_07",
      "fa_spell_ice_08",
      "fa_spell_ice_09",
      "fa_spell_ice_10",
      "fa_spell_ice_11",
      "fa_spell_ice_12",
      "fa_spell_ice_13",
      "fa_spell_ice_14",
      "fa_spell_ice_15",
      "fa_spell_ice_16",
      "fa_spell_ice_17",
      "fa_spell_lightning_01",
      "fa_spell_lightning_02",
      "fa_spell_lightning_03",
      "fa_spell_lightning_04",
      "fa_spell_lightning_05",
      "fa_spell_lightning_06",
      "fa_spell_lightning_07",
      "fa_spell_lightning_08",
      "fa_spell_lightning_09",
      "fa_spell_lightning_10",
      "fa_spell_lightning_11",
      "fa_spell_lightning_12",
      "fa_spell_lightning_13",
      "fa_spell_lightning_14",
      "fa_spell_lightning_15",
      "fa_spell_lightning_16",
      "fa_spell_lightning_17",
      "fa_spell_wind_01",
      "fa_spell_wind_02",
      "fa_spell_wind_03",
      "fa_spell_wind_04",
      "fa_spell_wind_05",
      "fa_spell_wind_06",
      "fa_spell_wind_07",
      "fa_spell_wind_08",
      "fa_spell_wind_09",
      "fa_spell_wind_10",
      "fa_spell_wind_11",
      "fa_spell_wind_12",
      "fa_spell_wind_13",
      "fa_spell_wind_14",
      "fa_spell_wind_15",
      "fa_spell_wind_16",
      "fa_spell_wind_17",
      "fa_spell_earth_01",
      "fa_spell_earth_02",
      "fa_spell_earth_03",
      "fa_spell_earth_04",
      "fa_spell_earth_05",
      "fa_spell_earth_06",
      "fa_spell_earth_07",
      "fa_spell_earth_08",
      "fa_spell_earth_09",
      "fa_spell_earth_10",
      "fa_spell_earth_11",
      "fa_spell_earth_12",
      "fa_spell_earth_13",
      "fa_spell_earth_14",
      "fa_spell_earth_15",
      "fa_spell_earth_16",
      "fa_spell_water_01",
      "fa_spell_water_02",
      "fa_spell_water_03",
      "fa_spell_water_04",
      "fa_spell_water_05",
      "fa_spell_water_06",
      "fa_spell_water_07",
      "fa_spell_water_08",
      "fa_spell_water_09",
      "fa_spell_water_10",
      "fa_spell_water_11",
      "fa_spell_water_12",
      "fa_spell_water_13",
      "fa_spell_water_14",
      "fa_spell_water_15",
      "fa_spell_water_16"
    ]
  },
  {
    "id": "multi_element_myth_codex",
    "name": "Multi-Element Myth Codex",
    "description": "100 multi-element skills and spells combining two elemental forces.",
    "stock": [
      "fa_multi_skill_001",
      "fa_multi_skill_002",
      "fa_multi_skill_003",
      "fa_multi_skill_004",
      "fa_multi_skill_005",
      "fa_multi_skill_006",
      "fa_multi_skill_007",
      "fa_multi_skill_008",
      "fa_multi_skill_009",
      "fa_multi_skill_010",
      "fa_multi_skill_011",
      "fa_multi_skill_012",
      "fa_multi_skill_013",
      "fa_multi_skill_014",
      "fa_multi_skill_015",
      "fa_multi_skill_016",
      "fa_multi_skill_017",
      "fa_multi_skill_018",
      "fa_multi_skill_019",
      "fa_multi_skill_020",
      "fa_multi_skill_021",
      "fa_multi_skill_022",
      "fa_multi_skill_023",
      "fa_multi_skill_024",
      "fa_multi_skill_025",
      "fa_multi_skill_026",
      "fa_multi_skill_027",
      "fa_multi_skill_028",
      "fa_multi_skill_029",
      "fa_multi_skill_030",
      "fa_multi_skill_031",
      "fa_multi_skill_032",
      "fa_multi_skill_033",
      "fa_multi_skill_034",
      "fa_multi_skill_035",
      "fa_multi_skill_036",
      "fa_multi_skill_037",
      "fa_multi_skill_038",
      "fa_multi_skill_039",
      "fa_multi_skill_040",
      "fa_multi_skill_041",
      "fa_multi_skill_042",
      "fa_multi_skill_043",
      "fa_multi_skill_044",
      "fa_multi_skill_045",
      "fa_multi_skill_046",
      "fa_multi_skill_047",
      "fa_multi_skill_048",
      "fa_multi_skill_049",
      "fa_multi_skill_050",
      "fa_multi_spell_051",
      "fa_multi_spell_052",
      "fa_multi_spell_053",
      "fa_multi_spell_054",
      "fa_multi_spell_055",
      "fa_multi_spell_056",
      "fa_multi_spell_057",
      "fa_multi_spell_058",
      "fa_multi_spell_059",
      "fa_multi_spell_060",
      "fa_multi_spell_061",
      "fa_multi_spell_062",
      "fa_multi_spell_063",
      "fa_multi_spell_064",
      "fa_multi_spell_065",
      "fa_multi_spell_066",
      "fa_multi_spell_067",
      "fa_multi_spell_068",
      "fa_multi_spell_069",
      "fa_multi_spell_070",
      "fa_multi_spell_071",
      "fa_multi_spell_072",
      "fa_multi_spell_073",
      "fa_multi_spell_074",
      "fa_multi_spell_075",
      "fa_multi_spell_076",
      "fa_multi_spell_077",
      "fa_multi_spell_078",
      "fa_multi_spell_079",
      "fa_multi_spell_080",
      "fa_multi_spell_081",
      "fa_multi_spell_082",
      "fa_multi_spell_083",
      "fa_multi_spell_084",
      "fa_multi_spell_085",
      "fa_multi_spell_086",
      "fa_multi_spell_087",
      "fa_multi_spell_088",
      "fa_multi_spell_089",
      "fa_multi_spell_090",
      "fa_multi_spell_091",
      "fa_multi_spell_092",
      "fa_multi_spell_093",
      "fa_multi_spell_094",
      "fa_multi_spell_095",
      "fa_multi_spell_096",
      "fa_multi_spell_097",
      "fa_multi_spell_098",
      "fa_multi_spell_099",
      "fa_multi_spell_100"
    ]
  }
];
