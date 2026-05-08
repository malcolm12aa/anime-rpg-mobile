// v1.1.3 — Ability Balance & Basic Ability Scaling Update
// Normalizes ability elements/ranks/stat labels and adds balancing abilities.

export const PRIMARY_ABILITY_ELEMENTS = ["fire","ice","lightning","wind","earth","water"];
export const CORE_ABILITY_RANKS = ["Common","Extra","Unique","Ultimate"];

const BASIC_STAT_MAP = Object.freeze({
  str: "strength", strength: "strength", attack: "strength", power: "strength",
  con: "endurance", constitution: "endurance", end: "endurance", endurance: "endurance", defense: "endurance",
  dex: "dexterity", dexterity: "dexterity", precision: "dexterity", accuracy: "dexterity",
  agi: "agility", agility: "agility", speed: "agility", evasion: "agility",
  int: "magic", intelligence: "magic", wis: "magic", wisdom: "magic", cha: "magic", charisma: "magic", mag: "magic", magic: "magic", spellpower: "magic"
});

const ELEMENT_REMAP = Object.freeze({
  fire: "fire", ice: "ice", frost: "ice", lightning: "lightning", thunder: "lightning", storm: "lightning", wind: "wind", air: "wind", earth: "earth", nature: "earth", plant: "earth", poison: "earth", water: "water",
  light: "fire", holy: "fire", radiant: "fire", dark: "ice", shadow: "ice", void: "ice", arcane: "lightning", mana: "lightning", physical: null, martial: null, weapon: null, neutral: null, none: null
});

function stableIndex(text = "") {
  let hash = 0;
  for (let index = 0; index < String(text).length; index += 1) hash = (hash * 31 + String(text).charCodeAt(index)) >>> 0;
  return hash;
}

export function normalizeAbilityElement(element, ability = {}) {
  const raw = String(element ?? "").toLowerCase().trim();
  const mapped = Object.prototype.hasOwnProperty.call(ELEMENT_REMAP, raw) ? ELEMENT_REMAP[raw] : raw;
  if (PRIMARY_ABILITY_ELEMENTS.includes(mapped)) return mapped;
  // Physical is no longer an element. Old physical/martial/neutral entries are
  // spread deterministically across the six real elements so skill/spell counts stay balanced.
  const key = ability.id || ability.name || raw || "";
  return PRIMARY_ABILITY_ELEMENTS[stableIndex(String(key)) % PRIMARY_ABILITY_ELEMENTS.length];
}

export function normalizeAbilityRank(rank = "Common") {
  const value = String(rank || "Common");
  if (CORE_ABILITY_RANKS.includes(value)) return value;
  if (value === "Rare" || value === "Hidden") return "Unique";
  if (value === "Intrinsic" || value === "Resist") return "Common";
  return "Extra";
}

export function normalizeBasicAbilityStats(stats = {}) {
  const out = {};
  for (const [key, value] of Object.entries(stats ?? {})) {
    const mapped = BASIC_STAT_MAP[String(key).toLowerCase()] ?? String(key).toLowerCase();
    if (["strength", "endurance", "dexterity", "agility", "magic"].includes(mapped)) out[mapped] = (out[mapped] ?? 0) + Number(value ?? 0);
  }
  return out;
}

function defaultScaling(ability = {}) {
  const element = normalizeAbilityElement(ability.element, ability);
  const kind = String(ability.kind ?? "ability").toLowerCase();
  if (kind === "spell") {
    const table = { fire: { magic: 0.04, strength: 0.012 }, ice: { magic: 0.038, endurance: 0.014 }, lightning: { magic: 0.038, agility: 0.016 }, wind: { magic: 0.034, agility: 0.018, dexterity: 0.008 }, earth: { magic: 0.034, endurance: 0.018 }, water: { magic: 0.039, dexterity: 0.012 } };
    return table[element] ?? { magic: 0.035 };
  }
  const table = { fire: { strength: 0.034, magic: 0.012 }, ice: { endurance: 0.026, strength: 0.02 }, lightning: { agility: 0.03, dexterity: 0.018 }, wind: { agility: 0.032, dexterity: 0.016 }, earth: { strength: 0.026, endurance: 0.026 }, water: { dexterity: 0.028, magic: 0.014 } };
  return table[element] ?? { strength: 0.02, dexterity: 0.015 };
}

function cleanAbilityText(text = "") {
  return String(text)
    .replace(/\bSTR\b/g, "Strength")
    .replace(/\bDEX\b/g, "Dexterity")
    .replace(/\bINT\b/g, "Magic")
    .replace(/\bWIS\b/g, "Magic")
    .replace(/\bCON\b/g, "Endurance")
    .replace(/\bCHA\b/g, "Magic")
    .replace(/physical element/gi, "martial damage type")
    .replace(/physical abilities/gi, "martial abilities")
    .replace(/physical skill/gi, "martial skill")
    .replace(/physical damage/gi, "weapon damage");
}

export function normalizeAbilityForV113(ability = {}) {
  const originalElement = ability.originalElement ?? ability.element ?? "neutral";
  const normalizedElement = normalizeAbilityElement(ability.element, ability);
  const scaling = normalizeBasicAbilityStats(ability.scaling ?? ability.statusScaling ?? {});
  const finalScaling = Object.keys(scaling).length ? scaling : defaultScaling({ ...ability, element: normalizedElement });
  const bonusStats = normalizeBasicAbilityStats(ability.bonusStats ?? ability.basicAbilityBonus ?? ability.stats ?? {});
  const tags = new Set([...(ability.tags ?? [])].map(tag => String(tag).toLowerCase()).filter(Boolean));
  if (String(originalElement).toLowerCase() === "physical") tags.add("martial");
  tags.add("basic-ability-scaling");
  const secondary = [...new Set((ability.secondaryElements ?? []).map(element => normalizeAbilityElement(element, ability)).filter(element => element && element !== normalizedElement))];
  return {
    ...ability,
    originalElement,
    element: normalizedElement,
    secondaryElements: secondary,
    rank: normalizeAbilityRank(ability.rank),
    damageType: ability.damageType ?? (String(originalElement).toLowerCase() === "physical" ? "weapon" : "elemental"),
    scaling: finalScaling,
    statusScaling: finalScaling,
    bonusStats,
    basicAbilityBonus: bonusStats,
    description: cleanAbilityText(ability.description ?? ""),
    tags: [...tags]
  };
}

export const BALANCED_ABILITY_EXPANSION = [
  {
    "id": "v113_skill_water_ultimate_001",
    "name": "Tide Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Tide Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_002",
    "name": "Rain Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Rain Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_003",
    "name": "Mist Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Mist Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_004",
    "name": "River Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "River Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_005",
    "name": "Abyssal Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Abyssal Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_006",
    "name": "Tsunami Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Tsunami Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_007",
    "name": "Moonwell Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_008",
    "name": "Current Blade: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Current Blade: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_009",
    "name": "Tide Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Tide Fang: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_010",
    "name": "Rain Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Rain Fang: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_water_ultimate_011",
    "name": "Mist Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Mist Fang: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_012",
    "name": "Granite Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Granite Fang: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_013",
    "name": "Abyssal Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Abyssal Fang: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_014",
    "name": "Terra Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Terra Fang: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_015",
    "name": "Moonwell Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Fang: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_016",
    "name": "Briar Fang: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Briar Fang: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_017",
    "name": "Tide Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Tide Guard: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_018",
    "name": "Root Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Root Guard: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_019",
    "name": "Mist Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Mist Guard: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_020",
    "name": "Granite Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Granite Guard: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_021",
    "name": "Abyssal Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Abyssal Guard: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_022",
    "name": "Terra Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Terra Guard: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_023",
    "name": "Moonwell Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Guard: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_earth_ultimate_024",
    "name": "Briar Guard: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Briar Guard: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_025",
    "name": "Tide Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Tide Drive: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_026",
    "name": "Zephyr Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Zephyr Drive: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_027",
    "name": "Ironwood Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Ironwood Drive: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_028",
    "name": "River Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "River Drive: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_029",
    "name": "Tempest Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Tempest Drive: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_030",
    "name": "Terra Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Terra Drive: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_031",
    "name": "Moonwell Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Drive: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_032",
    "name": "Whisper Drive: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Whisper Drive: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_033",
    "name": "Stone Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Stone Step: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_034",
    "name": "Rain Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Rain Step: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_035",
    "name": "Cyclone Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Cyclone Step: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_036",
    "name": "Granite Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Granite Step: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_037",
    "name": "Abyssal Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Abyssal Step: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_038",
    "name": "Razorwind Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Razorwind Step: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_039",
    "name": "Obsidian Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Obsidian Step: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_040",
    "name": "Current Step: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Current Step: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_wind_ultimate_041",
    "name": "Gale Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Gale Counter: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_042",
    "name": "Root Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Root Counter: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_043",
    "name": "Mist Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Mist Counter: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_lightning_ultimate_044",
    "name": "Tempest Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Tempest Counter: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_045",
    "name": "Tempest Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Tempest Counter: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_046",
    "name": "Terra Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Terra Counter: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_047",
    "name": "Moonwell Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Counter: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_lightning_ultimate_048",
    "name": "Surge Counter: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Surge Counter: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_049",
    "name": "Gale Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Gale Rend: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_050",
    "name": "Root Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Root Rend: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_051",
    "name": "Mist Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Mist Rend: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_ice_ultimate_052",
    "name": "Snow Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Snow Rend: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_053",
    "name": "Skybolt Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Skybolt Rend: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_054",
    "name": "Razorwind Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Razorwind Rend: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_055",
    "name": "Obsidian Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Obsidian Rend: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_056",
    "name": "Current Rend: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Current Rend: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_ice_ultimate_057",
    "name": "Frost Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Frost Breaker: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_058",
    "name": "Thunder Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Thunder Breaker: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_059",
    "name": "Cyclone Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Cyclone Breaker: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_060",
    "name": "Granite Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Granite Breaker: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_061",
    "name": "Abyssal Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Abyssal Breaker: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_ice_ultimate_062",
    "name": "Winter Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Winter Breaker: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_063",
    "name": "Magnet Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Magnet Breaker: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_064",
    "name": "Whisper Breaker: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Whisper Breaker: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_065",
    "name": "Stone Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Stone Waltz: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_066",
    "name": "Rain Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Rain Waltz: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_ice_ultimate_067",
    "name": "Rime Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Rime Waltz: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_068",
    "name": "Tempest Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Tempest Waltz: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_069",
    "name": "Tempest Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Tempest Waltz: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_070",
    "name": "Terra Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Terra Waltz: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_071",
    "name": "Moonwell Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Moonwell Waltz: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_ice_ultimate_072",
    "name": "Pale Waltz: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Pale Waltz: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_073",
    "name": "Storm Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Storm Rush: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_074",
    "name": "Zephyr Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Zephyr Rush: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_075",
    "name": "Ironwood Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Ironwood Rush: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_076",
    "name": "River Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "River Rush: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_ultimate_077",
    "name": "Flame Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "fire",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "magic": 4
    },
    "description": "Flame Rush: Mythic Crown is a Ultimate Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_ultimate_078",
    "name": "Winter Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Winter Rush: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_ultimate_079",
    "name": "Magnet Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "lightning",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Magnet Rush: Mythic Crown is a Ultimate Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_ultimate_080",
    "name": "Whisper Rush: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "agility": 10,
      "dexterity": 4
    },
    "description": "Whisper Rush: Mythic Crown is a Ultimate Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_ultimate_081",
    "name": "Stone Arc: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "endurance": 4
    },
    "description": "Stone Arc: Mythic Crown is a Ultimate Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_ultimate_082",
    "name": "Rain Arc: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "dexterity": 10,
      "magic": 4
    },
    "description": "Rain Arc: Mythic Crown is a Ultimate Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_ultimate_083",
    "name": "Cinder Arc: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "fire",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 10,
      "magic": 4
    },
    "basicAbilityBonus": {
      "strength": 10,
      "magic": 4
    },
    "description": "Cinder Arc: Mythic Crown is a Ultimate Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_ultimate_084",
    "name": "Snow Arc: Mythic Crown",
    "kind": "skill",
    "rank": "Ultimate",
    "resource": "stamina",
    "cost": 48,
    "cooldown": 7,
    "element": "ice",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 10,
      "strength": 4
    },
    "basicAbilityBonus": {
      "endurance": 10,
      "strength": 4
    },
    "description": "Snow Arc: Mythic Crown is a Ultimate Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_common_085",
    "name": "Skybolt Arc",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Skybolt Arc is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_common_086",
    "name": "Razorwind Arc",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Razorwind Arc is a Common Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_earth_common_087",
    "name": "Obsidian Arc",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "endurance": 1
    },
    "description": "Obsidian Arc is a Common Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_water_common_088",
    "name": "Current Arc",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "dexterity": 1,
      "magic": 1
    },
    "description": "Current Arc is a Common Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_fire_common_089",
    "name": "Ember Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "magic": 1
    },
    "description": "Ember Reversal is a Common Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_ice_common_090",
    "name": "Glacier Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 1,
      "strength": 1
    },
    "basicAbilityBonus": {
      "endurance": 1,
      "strength": 1
    },
    "description": "Glacier Reversal is a Common Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_lightning_common_091",
    "name": "Volt Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Volt Reversal is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_common_092",
    "name": "Sky Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Sky Reversal is a Common Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_earth_common_093",
    "name": "Mountain Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "endurance": 1
    },
    "description": "Mountain Reversal is a Common Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_water_common_094",
    "name": "Tsunami Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "dexterity": 1,
      "magic": 1
    },
    "description": "Tsunami Reversal is a Common Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_fire_common_095",
    "name": "Blaze Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "magic": 1
    },
    "description": "Blaze Reversal is a Common Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_ice_common_096",
    "name": "Pale Reversal",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 1,
      "strength": 1
    },
    "basicAbilityBonus": {
      "endurance": 1,
      "strength": 1
    },
    "description": "Pale Reversal is a Common Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_lightning_common_097",
    "name": "Storm Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Storm Crash is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_common_098",
    "name": "Zephyr Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Zephyr Crash is a Common Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_earth_common_099",
    "name": "Ironwood Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "endurance": 1
    },
    "description": "Ironwood Crash is a Common Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_water_common_100",
    "name": "River Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "dexterity": 1,
      "magic": 1
    },
    "description": "River Crash is a Common Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_fire_common_101",
    "name": "Flame Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "magic": 1
    },
    "description": "Flame Crash is a Common Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_ice_common_102",
    "name": "Winter Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 1,
      "strength": 1
    },
    "basicAbilityBonus": {
      "endurance": 1,
      "strength": 1
    },
    "description": "Winter Crash is a Common Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_lightning_common_103",
    "name": "Magnet Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Magnet Crash is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_common_104",
    "name": "Whisper Crash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Whisper Crash is a Common Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_earth_common_105",
    "name": "Stone Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "endurance": 1
    },
    "description": "Stone Thrust is a Common Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_water_common_106",
    "name": "Rain Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "dexterity": 1,
      "magic": 1
    },
    "description": "Rain Thrust is a Common Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_fire_common_107",
    "name": "Cinder Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "magic": 1
    },
    "description": "Cinder Thrust is a Common Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_ice_common_108",
    "name": "Snow Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 1,
      "strength": 1
    },
    "basicAbilityBonus": {
      "endurance": 1,
      "strength": 1
    },
    "description": "Snow Thrust is a Common Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_lightning_common_109",
    "name": "Skybolt Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Skybolt Thrust is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_common_110",
    "name": "Razorwind Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Razorwind Thrust is a Common Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_earth_common_111",
    "name": "Obsidian Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "endurance": 1
    },
    "description": "Obsidian Thrust is a Common Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_water_common_112",
    "name": "Current Thrust",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "dexterity": 1,
      "magic": 1
    },
    "description": "Current Thrust is a Common Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_fire_common_113",
    "name": "Ember Cleave",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 1,
      "magic": 1
    },
    "basicAbilityBonus": {
      "strength": 1,
      "magic": 1
    },
    "description": "Ember Cleave is a Common Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_ice_common_114",
    "name": "Glacier Cleave",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 1,
      "strength": 1
    },
    "basicAbilityBonus": {
      "endurance": 1,
      "strength": 1
    },
    "description": "Glacier Cleave is a Common Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_lightning_common_115",
    "name": "Volt Cleave",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "agility": 1,
      "dexterity": 1
    },
    "description": "Volt Cleave is a Common Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_skill_wind_unique_116",
    "name": "Sky Cleave: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Sky Cleave: Legend Form is a Unique Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_unique_117",
    "name": "Mountain Cleave: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "endurance": 2
    },
    "description": "Mountain Cleave: Legend Form is a Unique Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_unique_118",
    "name": "Tsunami Cleave: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "dexterity": 6,
      "magic": 2
    },
    "description": "Tsunami Cleave: Legend Form is a Unique Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_unique_119",
    "name": "Blaze Cleave: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "magic": 2
    },
    "description": "Blaze Cleave: Legend Form is a Unique Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_unique_120",
    "name": "Pale Cleave: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 6,
      "strength": 2
    },
    "basicAbilityBonus": {
      "endurance": 6,
      "strength": 2
    },
    "description": "Pale Cleave: Legend Form is a Unique Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_unique_121",
    "name": "Storm Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Storm Pursuit: Legend Form is a Unique Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_unique_122",
    "name": "Zephyr Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Zephyr Pursuit: Legend Form is a Unique Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_unique_123",
    "name": "Ironwood Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "endurance": 2
    },
    "description": "Ironwood Pursuit: Legend Form is a Unique Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_unique_124",
    "name": "River Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "dexterity": 6,
      "magic": 2
    },
    "description": "River Pursuit: Legend Form is a Unique Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_unique_125",
    "name": "Flame Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "magic": 2
    },
    "description": "Flame Pursuit: Legend Form is a Unique Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_unique_126",
    "name": "Winter Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 6,
      "strength": 2
    },
    "basicAbilityBonus": {
      "endurance": 6,
      "strength": 2
    },
    "description": "Winter Pursuit: Legend Form is a Unique Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_unique_127",
    "name": "Magnet Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Magnet Pursuit: Legend Form is a Unique Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_unique_128",
    "name": "Whisper Pursuit: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Whisper Pursuit: Legend Form is a Unique Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_unique_129",
    "name": "Stone Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "endurance": 2
    },
    "description": "Stone Mantle: Legend Form is a Unique Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_unique_130",
    "name": "Rain Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "dexterity": 6,
      "magic": 2
    },
    "description": "Rain Mantle: Legend Form is a Unique Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_unique_131",
    "name": "Cinder Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "magic": 2
    },
    "description": "Cinder Mantle: Legend Form is a Unique Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_unique_132",
    "name": "Snow Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 6,
      "strength": 2
    },
    "basicAbilityBonus": {
      "endurance": 6,
      "strength": 2
    },
    "description": "Snow Mantle: Legend Form is a Unique Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_unique_133",
    "name": "Skybolt Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Skybolt Mantle: Legend Form is a Unique Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_unique_134",
    "name": "Razorwind Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Razorwind Mantle: Legend Form is a Unique Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_unique_135",
    "name": "Obsidian Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "endurance": 2
    },
    "description": "Obsidian Mantle: Legend Form is a Unique Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_unique_136",
    "name": "Current Mantle: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "dexterity": 6,
      "magic": 2
    },
    "description": "Current Mantle: Legend Form is a Unique Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_skill_fire_unique_137",
    "name": "Ember Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "statusScaling": {
      "strength": 0.034,
      "magic": 0.014
    },
    "bonusStats": {
      "strength": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "magic": 2
    },
    "description": "Ember Form: Legend Form is a Unique Fire martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "fire",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "sword",
      "axe"
    ],
    "weaponRequirementText": "Equip Sword / Axe"
  },
  {
    "id": "v113_skill_ice_unique_138",
    "name": "Glacier Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "statusScaling": {
      "endurance": 0.026,
      "strength": 0.022
    },
    "bonusStats": {
      "endurance": 6,
      "strength": 2
    },
    "basicAbilityBonus": {
      "endurance": 6,
      "strength": 2
    },
    "description": "Glacier Form: Legend Form is a Unique Ice martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "shield"
    ],
    "weaponRequirementText": "Equip Spear / Shield"
  },
  {
    "id": "v113_skill_lightning_unique_139",
    "name": "Volt Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "statusScaling": {
      "agility": 0.031,
      "dexterity": 0.018
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Volt Form: Legend Form is a Unique Lightning martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "dagger",
      "rapier"
    ],
    "weaponRequirementText": "Equip Dagger / Rapier"
  },
  {
    "id": "v113_skill_wind_unique_140",
    "name": "Sky Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "statusScaling": {
      "agility": 0.033,
      "dexterity": 0.017
    },
    "bonusStats": {
      "agility": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "agility": 6,
      "dexterity": 2
    },
    "description": "Sky Form: Legend Form is a Unique Wind martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "bow",
      "dagger"
    ],
    "weaponRequirementText": "Equip Bow / Dagger"
  },
  {
    "id": "v113_skill_earth_unique_141",
    "name": "Mountain Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "statusScaling": {
      "strength": 0.027,
      "endurance": 0.027
    },
    "bonusStats": {
      "strength": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "strength": 6,
      "endurance": 2
    },
    "description": "Mountain Form: Legend Form is a Unique Earth martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "hammer",
      "mace"
    ],
    "weaponRequirementText": "Equip Hammer / Mace"
  },
  {
    "id": "v113_skill_water_unique_142",
    "name": "Tsunami Form: Legend Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Skill Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "statusScaling": {
      "dexterity": 0.029,
      "magic": 0.015
    },
    "bonusStats": {
      "dexterity": 6,
      "magic": 2
    },
    "basicAbilityBonus": {
      "dexterity": 6,
      "magic": 2
    },
    "description": "Tsunami Form: Legend Form is a Unique Water martial technique. It uses weapon rhythm and Basic Ability scaling instead of a Physical element.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "martial-skill",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiresWeaponType": [
      "spear",
      "staff"
    ],
    "weaponRequirementText": "Equip Spear / Staff"
  },
  {
    "id": "v113_spell_water_ultimate_001",
    "name": "Tide Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_002",
    "name": "Rain Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Rain Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_003",
    "name": "Mist Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_004",
    "name": "River Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "River Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_005",
    "name": "Abyssal Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Abyssal Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_006",
    "name": "Tsunami Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_007",
    "name": "Moonwell Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Moonwell Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_008",
    "name": "Current Lance: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Current Lance: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_009",
    "name": "Tide Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_010",
    "name": "Rain Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Rain Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_011",
    "name": "Mist Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_012",
    "name": "River Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "River Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_013",
    "name": "Abyssal Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Abyssal Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_014",
    "name": "Tsunami Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_015",
    "name": "Aerial Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Aerial Seal: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_016",
    "name": "Current Seal: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Current Seal: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_017",
    "name": "Gale Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Gale Nova: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_018",
    "name": "Root Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Root Nova: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_019",
    "name": "Mist Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Nova: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_020",
    "name": "Sky Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Sky Nova: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_021",
    "name": "Mountain Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Mountain Nova: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_022",
    "name": "Tsunami Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Nova: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_023",
    "name": "Aerial Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Aerial Nova: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_024",
    "name": "Briar Nova: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Briar Nova: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_025",
    "name": "Tide Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Ward: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_026",
    "name": "Zephyr Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Zephyr Ward: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_027",
    "name": "Ironwood Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Ironwood Ward: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_028",
    "name": "River Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "River Ward: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_029",
    "name": "Tempest Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Tempest Ward: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_030",
    "name": "Terra Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Terra Ward: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_031",
    "name": "Moonwell Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Moonwell Ward: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_032",
    "name": "Whisper Ward: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Whisper Ward: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_033",
    "name": "Stone Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Stone Veil: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_034",
    "name": "Rain Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Rain Veil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_035",
    "name": "Cyclone Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Cyclone Veil: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_036",
    "name": "Granite Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Granite Veil: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_037",
    "name": "Abyssal Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Abyssal Veil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_038",
    "name": "Razorwind Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Razorwind Veil: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_039",
    "name": "Obsidian Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Obsidian Veil: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_040",
    "name": "Current Veil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Current Veil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_041",
    "name": "Gale Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Gale Crown: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_042",
    "name": "Root Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Root Crown: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_043",
    "name": "Mist Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Crown: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_044",
    "name": "Sky Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Sky Crown: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_045",
    "name": "Mountain Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Mountain Crown: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_046",
    "name": "Tsunami Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Crown: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_047",
    "name": "Aerial Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Aerial Crown: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_048",
    "name": "Briar Crown: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Briar Crown: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_049",
    "name": "Tide Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Prism: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_050",
    "name": "Zephyr Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Zephyr Prism: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_051",
    "name": "Ironwood Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Ironwood Prism: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_052",
    "name": "River Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "River Prism: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_053",
    "name": "Tempest Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Tempest Prism: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_054",
    "name": "Terra Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Terra Prism: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_055",
    "name": "Moonwell Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Moonwell Prism: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_056",
    "name": "Whisper Prism: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Whisper Prism: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_057",
    "name": "Stone Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Stone Torrent: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_058",
    "name": "Rain Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Rain Torrent: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_059",
    "name": "Cyclone Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Cyclone Torrent: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_060",
    "name": "Granite Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Granite Torrent: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_061",
    "name": "Abyssal Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Abyssal Torrent: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_062",
    "name": "Razorwind Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Razorwind Torrent: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_063",
    "name": "Obsidian Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Obsidian Torrent: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_064",
    "name": "Current Torrent: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Current Torrent: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_065",
    "name": "Gale Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Gale Mandala: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_066",
    "name": "Root Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Root Mandala: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_067",
    "name": "Mist Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Mandala: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_068",
    "name": "Sky Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Sky Mandala: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_069",
    "name": "Mountain Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Mountain Mandala: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_070",
    "name": "Tsunami Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Mandala: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_071",
    "name": "Aerial Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Aerial Mandala: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_072",
    "name": "Briar Mandala: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Briar Mandala: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_073",
    "name": "Tide Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Sigil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_074",
    "name": "Zephyr Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Zephyr Sigil: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_075",
    "name": "Ironwood Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Ironwood Sigil: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_076",
    "name": "River Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "River Sigil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_077",
    "name": "Tempest Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Tempest Sigil: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_078",
    "name": "Terra Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Terra Sigil: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_079",
    "name": "Moonwell Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Moonwell Sigil: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_080",
    "name": "Whisper Sigil: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Whisper Sigil: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_081",
    "name": "Stone Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Stone Chorus: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_082",
    "name": "Rain Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Rain Chorus: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_083",
    "name": "Cyclone Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Cyclone Chorus: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_084",
    "name": "Granite Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Granite Chorus: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_085",
    "name": "Abyssal Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Abyssal Chorus: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_086",
    "name": "Razorwind Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Razorwind Chorus: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_087",
    "name": "Obsidian Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Obsidian Chorus: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_088",
    "name": "Current Chorus: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Current Chorus: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_089",
    "name": "Gale Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Gale Halo: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_090",
    "name": "Root Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Root Halo: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_091",
    "name": "Mist Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Mist Halo: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_092",
    "name": "Sky Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Sky Halo: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_093",
    "name": "Mountain Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Mountain Halo: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_094",
    "name": "Tsunami Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tsunami Halo: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_095",
    "name": "Aerial Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Aerial Halo: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_096",
    "name": "Briar Halo: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Briar Halo: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_ultimate_097",
    "name": "Tide Sphere: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "water",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 10,
      "dexterity": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "dexterity": 4
    },
    "description": "Tide Sphere: Mythic Crown is a Ultimate Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_ultimate_098",
    "name": "Zephyr Sphere: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "wind",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 10,
      "agility": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "agility": 4
    },
    "description": "Zephyr Sphere: Mythic Crown is a Ultimate Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 5,
        "chance": 75
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_ultimate_099",
    "name": "Ironwood Sphere: Mythic Crown",
    "kind": "spell",
    "rank": "Ultimate",
    "resource": "mana",
    "cost": 48,
    "cooldown": 7,
    "element": "earth",
    "target": "enemy",
    "power": 68,
    "price": 1450,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 10,
      "endurance": 4
    },
    "basicAbilityBonus": {
      "magic": 10,
      "endurance": 4
    },
    "description": "Ironwood Sphere: Mythic Crown is a Ultimate Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 5,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "ultimate",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_100",
    "name": "River Sphere: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "River Sphere: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_101",
    "name": "Tempest Sphere: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Tempest Sphere: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_102",
    "name": "Terra Sphere: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Terra Sphere: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_103",
    "name": "Moonwell Sphere: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Moonwell Sphere: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_104",
    "name": "Pale Sphere: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Pale Sphere: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_105",
    "name": "Storm Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Storm Gate: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_106",
    "name": "Zephyr Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Zephyr Gate: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_107",
    "name": "Ironwood Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Ironwood Gate: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_108",
    "name": "River Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "River Gate: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_109",
    "name": "Crystal Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Crystal Gate: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_110",
    "name": "Azure Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Azure Gate: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_111",
    "name": "Aerial Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Aerial Gate: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_112",
    "name": "Briar Gate: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Briar Gate: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_113",
    "name": "Tide Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Tide Miracle: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_114",
    "name": "Glacier Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Glacier Miracle: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_115",
    "name": "Volt Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Volt Miracle: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_116",
    "name": "Sky Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Sky Miracle: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_117",
    "name": "Mountain Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Mountain Miracle: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_118",
    "name": "Tsunami Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Tsunami Miracle: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_119",
    "name": "Hoarfrost Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Hoarfrost Miracle: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_120",
    "name": "Surge Miracle: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Surge Miracle: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_121",
    "name": "Gale Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Gale Command: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_122",
    "name": "Root Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Root Command: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_123",
    "name": "Mist Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Mist Command: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_124",
    "name": "Snow Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Snow Command: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_125",
    "name": "Skybolt Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Skybolt Command: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_126",
    "name": "Razorwind Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Razorwind Command: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_127",
    "name": "Obsidian Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Obsidian Command: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_128",
    "name": "Current Command: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Current Command: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_129",
    "name": "Frost Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Frost Script: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_130",
    "name": "Thunder Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Thunder Script: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_131",
    "name": "Cyclone Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Cyclone Script: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_132",
    "name": "Granite Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Granite Script: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_133",
    "name": "Abyssal Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Abyssal Script: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_134",
    "name": "Winter Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Winter Script: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_135",
    "name": "Magnet Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Magnet Script: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_136",
    "name": "Whisper Script: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Whisper Script: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_137",
    "name": "Stone Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Stone Bloom: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_138",
    "name": "Rain Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Rain Bloom: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_139",
    "name": "Rime Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Rime Bloom: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_140",
    "name": "Tempest Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Tempest Bloom: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_141",
    "name": "Tempest Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Tempest Bloom: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_142",
    "name": "Terra Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Terra Bloom: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_unique_143",
    "name": "Moonwell Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "water",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 6,
      "dexterity": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "dexterity": 2
    },
    "description": "Moonwell Bloom: Legend Form is a Unique Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_unique_144",
    "name": "Pale Bloom: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Pale Bloom: Legend Form is a Unique Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_unique_145",
    "name": "Storm Pulse: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Storm Pulse: Legend Form is a Unique Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_unique_146",
    "name": "Zephyr Pulse: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 6,
      "agility": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "agility": 2
    },
    "description": "Zephyr Pulse: Legend Form is a Unique Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 4,
        "chance": 60
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_unique_147",
    "name": "Ironwood Pulse: Legend Form",
    "kind": "spell",
    "rank": "Unique",
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 42,
    "price": 760,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 6,
      "endurance": 2
    },
    "basicAbilityBonus": {
      "magic": 6,
      "endurance": 2
    },
    "description": "Ironwood Pulse: Legend Form is a Unique Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "unique",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_common_148",
    "name": "River Pulse",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "River Pulse is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_149",
    "name": "Crystal Pulse",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Crystal Pulse is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_150",
    "name": "Azure Pulse",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Azure Pulse is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_151",
    "name": "Aerial Pulse",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Aerial Pulse is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_152",
    "name": "Briar Pulse",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Briar Pulse is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_153",
    "name": "Tide Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Tide Sanctum is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_154",
    "name": "Glacier Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Glacier Sanctum is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_155",
    "name": "Volt Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Volt Sanctum is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_156",
    "name": "Sky Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Sky Sanctum is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_157",
    "name": "Mountain Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Mountain Sanctum is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_158",
    "name": "Tsunami Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Tsunami Sanctum is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_159",
    "name": "Hoarfrost Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Hoarfrost Sanctum is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_160",
    "name": "Surge Sanctum",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Surge Sanctum is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_161",
    "name": "Gale Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Gale Lance is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_162",
    "name": "Root Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Root Lance is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_163",
    "name": "Mist Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Mist Lance is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_164",
    "name": "Snow Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Snow Lance is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_165",
    "name": "Skybolt Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Skybolt Lance is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_166",
    "name": "Razorwind Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Razorwind Lance is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_167",
    "name": "Obsidian Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Obsidian Lance is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_168",
    "name": "Current Lance",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Current Lance is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_169",
    "name": "Frost Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Frost Seal is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_170",
    "name": "Thunder Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Thunder Seal is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_171",
    "name": "Cyclone Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Cyclone Seal is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_172",
    "name": "Granite Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Granite Seal is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_173",
    "name": "Abyssal Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Abyssal Seal is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_174",
    "name": "Winter Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Winter Seal is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_175",
    "name": "Magnet Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Magnet Seal is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_176",
    "name": "Whisper Seal",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Whisper Seal is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_177",
    "name": "Stone Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Stone Nova is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_178",
    "name": "Rain Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Rain Nova is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_179",
    "name": "Rime Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Rime Nova is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_180",
    "name": "Tempest Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Tempest Nova is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_181",
    "name": "Tempest Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Tempest Nova is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_182",
    "name": "Terra Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Terra Nova is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_183",
    "name": "Moonwell Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "Moonwell Nova is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_184",
    "name": "Pale Nova",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Pale Nova is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_185",
    "name": "Storm Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Storm Ward is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_186",
    "name": "Zephyr Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Zephyr Ward is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_187",
    "name": "Ironwood Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Ironwood Ward is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_common_188",
    "name": "River Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "water",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 1,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "dexterity": 1
    },
    "description": "River Ward is a Common Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.22
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_ice_common_189",
    "name": "Crystal Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Crystal Ward is a Common Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_lightning_common_190",
    "name": "Azure Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Azure Ward is a Common Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_wind_common_191",
    "name": "Aerial Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 1,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "agility": 1
    },
    "description": "Aerial Ward is a Common Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 2,
        "chance": 25
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_earth_common_192",
    "name": "Briar Ward",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "earth",
    "target": "enemy",
    "power": 16,
    "price": 150,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 1,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 1,
      "endurance": 1
    },
    "description": "Briar Ward is a Common Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "common",
      "basic-ability-scaling"
    ]
  },
  {
    "id": "v113_spell_water_extra_193",
    "name": "Tide Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 3,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "dexterity": 1
    },
    "description": "Tide Veil: Adept Form is a Extra Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.38
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_ice_extra_194",
    "name": "Glacier Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 3,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "endurance": 1
    },
    "description": "Glacier Veil: Adept Form is a Extra Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_extra_195",
    "name": "Volt Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 3,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "agility": 1
    },
    "description": "Volt Veil: Adept Form is a Extra Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_extra_196",
    "name": "Sky Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 3,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "agility": 1
    },
    "description": "Sky Veil: Adept Form is a Extra Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_extra_197",
    "name": "Mountain Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 3,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "endurance": 1
    },
    "description": "Mountain Veil: Adept Form is a Extra Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_extra_198",
    "name": "Tsunami Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 3,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "dexterity": 1
    },
    "description": "Tsunami Veil: Adept Form is a Extra Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.38
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  },
  {
    "id": "v113_spell_fire_extra_199",
    "name": "Blaze Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.041,
      "strength": 0.014
    },
    "statusScaling": {
      "magic": 0.041,
      "strength": 0.014
    },
    "bonusStats": {
      "magic": 3,
      "strength": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "strength": 1
    },
    "description": "Blaze Veil: Adept Form is a Extra Fire spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "fire",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "fire",
    "masterySkillId": "mastery_fire",
    "masteryRequirementText": "Fire Element Mastery"
  },
  {
    "id": "v113_spell_ice_extra_200",
    "name": "Pale Veil: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "statusScaling": {
      "magic": 0.038,
      "endurance": 0.017
    },
    "bonusStats": {
      "magic": 3,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "endurance": 1
    },
    "description": "Pale Veil: Adept Form is a Extra Ice spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "ice",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "ice",
    "masterySkillId": "mastery_ice",
    "masteryRequirementText": "Ice Element Mastery"
  },
  {
    "id": "v113_spell_lightning_extra_201",
    "name": "Storm Crown: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "statusScaling": {
      "magic": 0.038,
      "agility": 0.018
    },
    "bonusStats": {
      "magic": 3,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "agility": 1
    },
    "description": "Storm Crown: Adept Form is a Extra Lightning spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "lightning",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "lightning",
    "masterySkillId": "mastery_lightning",
    "masteryRequirementText": "Lightning Element Mastery"
  },
  {
    "id": "v113_spell_wind_extra_202",
    "name": "Zephyr Crown: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "statusScaling": {
      "magic": 0.034,
      "agility": 0.019,
      "dexterity": 0.009
    },
    "bonusStats": {
      "magic": 3,
      "agility": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "agility": 1
    },
    "description": "Zephyr Crown: Adept Form is a Extra Wind spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "status",
        "status": "haste",
        "duration": 3,
        "chance": 40
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "wind",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "wind",
    "masterySkillId": "mastery_wind",
    "masteryRequirementText": "Wind Element Mastery"
  },
  {
    "id": "v113_spell_earth_extra_203",
    "name": "Ironwood Crown: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "statusScaling": {
      "magic": 0.034,
      "endurance": 0.019
    },
    "bonusStats": {
      "magic": 3,
      "endurance": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "endurance": 1
    },
    "description": "Ironwood Crown: Adept Form is a Extra Earth spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "earth",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "earth",
    "masterySkillId": "mastery_earth",
    "masteryRequirementText": "Earth Element Mastery"
  },
  {
    "id": "v113_spell_water_extra_204",
    "name": "River Crown: Adept Form",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 15,
    "cooldown": 2,
    "element": "water",
    "target": "enemy",
    "power": 26,
    "price": 340,
    "source": "Balanced Elemental Spell Library",
    "origin": "shop",
    "acquisition": "Shop",
    "scaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "statusScaling": {
      "magic": 0.039,
      "dexterity": 0.012,
      "endurance": 0.008
    },
    "bonusStats": {
      "magic": 3,
      "dexterity": 1
    },
    "basicAbilityBonus": {
      "magic": 3,
      "dexterity": 1
    },
    "description": "River Crown: Adept Form is a Extra Water spell formula. It scales from Basic Abilities and belongs to the balanced six-element grimoire.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.38
      }
    ],
    "tags": [
      "v1.1.3-balanced",
      "elemental-spell",
      "water",
      "extra",
      "basic-ability-scaling"
    ],
    "requiredMastery": "water",
    "masterySkillId": "mastery_water",
    "masteryRequirementText": "Water Element Mastery"
  }
];

export const BALANCED_ABILITY_LIBRARIES = [
  {
    "id": "balanced_elemental_skill_library",
    "name": "Balanced Elemental Skill Library",
    "description": "v1.1.3 skills added to make all six elements and core ranks evenly represented.",
    "stock": [
      "v113_skill_water_ultimate_001",
      "v113_skill_water_ultimate_002",
      "v113_skill_water_ultimate_003",
      "v113_skill_water_ultimate_004",
      "v113_skill_water_ultimate_005",
      "v113_skill_water_ultimate_006",
      "v113_skill_water_ultimate_007",
      "v113_skill_water_ultimate_008",
      "v113_skill_water_ultimate_009",
      "v113_skill_water_ultimate_010",
      "v113_skill_water_ultimate_011",
      "v113_skill_earth_ultimate_012",
      "v113_skill_water_ultimate_013",
      "v113_skill_earth_ultimate_014",
      "v113_skill_water_ultimate_015",
      "v113_skill_earth_ultimate_016",
      "v113_skill_water_ultimate_017",
      "v113_skill_earth_ultimate_018",
      "v113_skill_water_ultimate_019",
      "v113_skill_earth_ultimate_020",
      "v113_skill_water_ultimate_021",
      "v113_skill_earth_ultimate_022",
      "v113_skill_water_ultimate_023",
      "v113_skill_earth_ultimate_024",
      "v113_skill_water_ultimate_025",
      "v113_skill_wind_ultimate_026",
      "v113_skill_earth_ultimate_027",
      "v113_skill_water_ultimate_028",
      "v113_skill_wind_ultimate_029",
      "v113_skill_earth_ultimate_030",
      "v113_skill_water_ultimate_031",
      "v113_skill_wind_ultimate_032",
      "v113_skill_earth_ultimate_033",
      "v113_skill_water_ultimate_034",
      "v113_skill_wind_ultimate_035",
      "v113_skill_earth_ultimate_036",
      "v113_skill_water_ultimate_037",
      "v113_skill_wind_ultimate_038",
      "v113_skill_earth_ultimate_039",
      "v113_skill_water_ultimate_040",
      "v113_skill_wind_ultimate_041",
      "v113_skill_earth_ultimate_042",
      "v113_skill_water_ultimate_043",
      "v113_skill_lightning_ultimate_044",
      "v113_skill_wind_ultimate_045",
      "v113_skill_earth_ultimate_046",
      "v113_skill_water_ultimate_047",
      "v113_skill_lightning_ultimate_048",
      "v113_skill_wind_ultimate_049",
      "v113_skill_earth_ultimate_050",
      "v113_skill_water_ultimate_051",
      "v113_skill_ice_ultimate_052",
      "v113_skill_lightning_ultimate_053",
      "v113_skill_wind_ultimate_054",
      "v113_skill_earth_ultimate_055",
      "v113_skill_water_ultimate_056",
      "v113_skill_ice_ultimate_057",
      "v113_skill_lightning_ultimate_058",
      "v113_skill_wind_ultimate_059",
      "v113_skill_earth_ultimate_060",
      "v113_skill_water_ultimate_061",
      "v113_skill_ice_ultimate_062",
      "v113_skill_lightning_ultimate_063",
      "v113_skill_wind_ultimate_064",
      "v113_skill_earth_ultimate_065",
      "v113_skill_water_ultimate_066",
      "v113_skill_ice_ultimate_067",
      "v113_skill_lightning_ultimate_068",
      "v113_skill_wind_ultimate_069",
      "v113_skill_earth_ultimate_070",
      "v113_skill_water_ultimate_071",
      "v113_skill_ice_ultimate_072",
      "v113_skill_lightning_ultimate_073",
      "v113_skill_wind_ultimate_074",
      "v113_skill_earth_ultimate_075",
      "v113_skill_water_ultimate_076",
      "v113_skill_fire_ultimate_077",
      "v113_skill_ice_ultimate_078",
      "v113_skill_lightning_ultimate_079",
      "v113_skill_wind_ultimate_080",
      "v113_skill_earth_ultimate_081",
      "v113_skill_water_ultimate_082",
      "v113_skill_fire_ultimate_083",
      "v113_skill_ice_ultimate_084",
      "v113_skill_lightning_common_085",
      "v113_skill_wind_common_086",
      "v113_skill_earth_common_087",
      "v113_skill_water_common_088",
      "v113_skill_fire_common_089",
      "v113_skill_ice_common_090",
      "v113_skill_lightning_common_091",
      "v113_skill_wind_common_092",
      "v113_skill_earth_common_093",
      "v113_skill_water_common_094",
      "v113_skill_fire_common_095",
      "v113_skill_ice_common_096",
      "v113_skill_lightning_common_097",
      "v113_skill_wind_common_098",
      "v113_skill_earth_common_099",
      "v113_skill_water_common_100",
      "v113_skill_fire_common_101",
      "v113_skill_ice_common_102",
      "v113_skill_lightning_common_103",
      "v113_skill_wind_common_104",
      "v113_skill_earth_common_105",
      "v113_skill_water_common_106",
      "v113_skill_fire_common_107",
      "v113_skill_ice_common_108",
      "v113_skill_lightning_common_109",
      "v113_skill_wind_common_110",
      "v113_skill_earth_common_111",
      "v113_skill_water_common_112",
      "v113_skill_fire_common_113",
      "v113_skill_ice_common_114",
      "v113_skill_lightning_common_115",
      "v113_skill_wind_unique_116",
      "v113_skill_earth_unique_117",
      "v113_skill_water_unique_118",
      "v113_skill_fire_unique_119",
      "v113_skill_ice_unique_120",
      "v113_skill_lightning_unique_121",
      "v113_skill_wind_unique_122",
      "v113_skill_earth_unique_123",
      "v113_skill_water_unique_124",
      "v113_skill_fire_unique_125",
      "v113_skill_ice_unique_126",
      "v113_skill_lightning_unique_127",
      "v113_skill_wind_unique_128",
      "v113_skill_earth_unique_129",
      "v113_skill_water_unique_130",
      "v113_skill_fire_unique_131",
      "v113_skill_ice_unique_132",
      "v113_skill_lightning_unique_133",
      "v113_skill_wind_unique_134",
      "v113_skill_earth_unique_135",
      "v113_skill_water_unique_136",
      "v113_skill_fire_unique_137",
      "v113_skill_ice_unique_138",
      "v113_skill_lightning_unique_139",
      "v113_skill_wind_unique_140",
      "v113_skill_earth_unique_141",
      "v113_skill_water_unique_142"
    ]
  },
  {
    "id": "balanced_elemental_spell_library",
    "name": "Balanced Elemental Spell Library",
    "description": "v1.1.3 spells added to make all six elements and core ranks evenly represented.",
    "stock": [
      "v113_spell_water_ultimate_001",
      "v113_spell_water_ultimate_002",
      "v113_spell_water_ultimate_003",
      "v113_spell_water_ultimate_004",
      "v113_spell_water_ultimate_005",
      "v113_spell_water_ultimate_006",
      "v113_spell_water_ultimate_007",
      "v113_spell_water_ultimate_008",
      "v113_spell_water_ultimate_009",
      "v113_spell_water_ultimate_010",
      "v113_spell_water_ultimate_011",
      "v113_spell_water_ultimate_012",
      "v113_spell_water_ultimate_013",
      "v113_spell_water_ultimate_014",
      "v113_spell_wind_ultimate_015",
      "v113_spell_water_ultimate_016",
      "v113_spell_wind_ultimate_017",
      "v113_spell_earth_ultimate_018",
      "v113_spell_water_ultimate_019",
      "v113_spell_wind_ultimate_020",
      "v113_spell_earth_ultimate_021",
      "v113_spell_water_ultimate_022",
      "v113_spell_wind_ultimate_023",
      "v113_spell_earth_ultimate_024",
      "v113_spell_water_ultimate_025",
      "v113_spell_wind_ultimate_026",
      "v113_spell_earth_ultimate_027",
      "v113_spell_water_ultimate_028",
      "v113_spell_wind_ultimate_029",
      "v113_spell_earth_ultimate_030",
      "v113_spell_water_ultimate_031",
      "v113_spell_wind_ultimate_032",
      "v113_spell_earth_ultimate_033",
      "v113_spell_water_ultimate_034",
      "v113_spell_wind_ultimate_035",
      "v113_spell_earth_ultimate_036",
      "v113_spell_water_ultimate_037",
      "v113_spell_wind_ultimate_038",
      "v113_spell_earth_ultimate_039",
      "v113_spell_water_ultimate_040",
      "v113_spell_wind_ultimate_041",
      "v113_spell_earth_ultimate_042",
      "v113_spell_water_ultimate_043",
      "v113_spell_wind_ultimate_044",
      "v113_spell_earth_ultimate_045",
      "v113_spell_water_ultimate_046",
      "v113_spell_wind_ultimate_047",
      "v113_spell_earth_ultimate_048",
      "v113_spell_water_ultimate_049",
      "v113_spell_wind_ultimate_050",
      "v113_spell_earth_ultimate_051",
      "v113_spell_water_ultimate_052",
      "v113_spell_wind_ultimate_053",
      "v113_spell_earth_ultimate_054",
      "v113_spell_water_ultimate_055",
      "v113_spell_wind_ultimate_056",
      "v113_spell_earth_ultimate_057",
      "v113_spell_water_ultimate_058",
      "v113_spell_wind_ultimate_059",
      "v113_spell_earth_ultimate_060",
      "v113_spell_water_ultimate_061",
      "v113_spell_wind_ultimate_062",
      "v113_spell_earth_ultimate_063",
      "v113_spell_water_ultimate_064",
      "v113_spell_wind_ultimate_065",
      "v113_spell_earth_ultimate_066",
      "v113_spell_water_ultimate_067",
      "v113_spell_wind_ultimate_068",
      "v113_spell_earth_ultimate_069",
      "v113_spell_water_ultimate_070",
      "v113_spell_wind_ultimate_071",
      "v113_spell_earth_ultimate_072",
      "v113_spell_water_ultimate_073",
      "v113_spell_wind_ultimate_074",
      "v113_spell_earth_ultimate_075",
      "v113_spell_water_ultimate_076",
      "v113_spell_wind_ultimate_077",
      "v113_spell_earth_ultimate_078",
      "v113_spell_water_ultimate_079",
      "v113_spell_wind_ultimate_080",
      "v113_spell_earth_ultimate_081",
      "v113_spell_water_ultimate_082",
      "v113_spell_wind_ultimate_083",
      "v113_spell_earth_ultimate_084",
      "v113_spell_water_ultimate_085",
      "v113_spell_wind_ultimate_086",
      "v113_spell_earth_ultimate_087",
      "v113_spell_water_ultimate_088",
      "v113_spell_wind_ultimate_089",
      "v113_spell_earth_ultimate_090",
      "v113_spell_water_ultimate_091",
      "v113_spell_wind_ultimate_092",
      "v113_spell_earth_ultimate_093",
      "v113_spell_water_ultimate_094",
      "v113_spell_wind_ultimate_095",
      "v113_spell_earth_ultimate_096",
      "v113_spell_water_ultimate_097",
      "v113_spell_wind_ultimate_098",
      "v113_spell_earth_ultimate_099",
      "v113_spell_water_unique_100",
      "v113_spell_wind_unique_101",
      "v113_spell_earth_unique_102",
      "v113_spell_water_unique_103",
      "v113_spell_ice_unique_104",
      "v113_spell_lightning_unique_105",
      "v113_spell_wind_unique_106",
      "v113_spell_earth_unique_107",
      "v113_spell_water_unique_108",
      "v113_spell_ice_unique_109",
      "v113_spell_lightning_unique_110",
      "v113_spell_wind_unique_111",
      "v113_spell_earth_unique_112",
      "v113_spell_water_unique_113",
      "v113_spell_ice_unique_114",
      "v113_spell_lightning_unique_115",
      "v113_spell_wind_unique_116",
      "v113_spell_earth_unique_117",
      "v113_spell_water_unique_118",
      "v113_spell_ice_unique_119",
      "v113_spell_lightning_unique_120",
      "v113_spell_wind_unique_121",
      "v113_spell_earth_unique_122",
      "v113_spell_water_unique_123",
      "v113_spell_ice_unique_124",
      "v113_spell_lightning_unique_125",
      "v113_spell_wind_unique_126",
      "v113_spell_earth_unique_127",
      "v113_spell_water_unique_128",
      "v113_spell_ice_unique_129",
      "v113_spell_lightning_unique_130",
      "v113_spell_wind_unique_131",
      "v113_spell_earth_unique_132",
      "v113_spell_water_unique_133",
      "v113_spell_ice_unique_134",
      "v113_spell_lightning_unique_135",
      "v113_spell_wind_unique_136",
      "v113_spell_earth_unique_137",
      "v113_spell_water_unique_138",
      "v113_spell_ice_unique_139",
      "v113_spell_lightning_unique_140",
      "v113_spell_wind_unique_141",
      "v113_spell_earth_unique_142",
      "v113_spell_water_unique_143",
      "v113_spell_ice_unique_144",
      "v113_spell_lightning_unique_145",
      "v113_spell_wind_unique_146",
      "v113_spell_earth_unique_147",
      "v113_spell_water_common_148",
      "v113_spell_ice_common_149",
      "v113_spell_lightning_common_150",
      "v113_spell_wind_common_151",
      "v113_spell_earth_common_152",
      "v113_spell_water_common_153",
      "v113_spell_ice_common_154",
      "v113_spell_lightning_common_155",
      "v113_spell_wind_common_156",
      "v113_spell_earth_common_157",
      "v113_spell_water_common_158",
      "v113_spell_ice_common_159",
      "v113_spell_lightning_common_160",
      "v113_spell_wind_common_161",
      "v113_spell_earth_common_162",
      "v113_spell_water_common_163",
      "v113_spell_ice_common_164",
      "v113_spell_lightning_common_165",
      "v113_spell_wind_common_166",
      "v113_spell_earth_common_167",
      "v113_spell_water_common_168",
      "v113_spell_ice_common_169",
      "v113_spell_lightning_common_170",
      "v113_spell_wind_common_171",
      "v113_spell_earth_common_172",
      "v113_spell_water_common_173",
      "v113_spell_ice_common_174",
      "v113_spell_lightning_common_175",
      "v113_spell_wind_common_176",
      "v113_spell_earth_common_177",
      "v113_spell_water_common_178",
      "v113_spell_ice_common_179",
      "v113_spell_lightning_common_180",
      "v113_spell_wind_common_181",
      "v113_spell_earth_common_182",
      "v113_spell_water_common_183",
      "v113_spell_ice_common_184",
      "v113_spell_lightning_common_185",
      "v113_spell_wind_common_186",
      "v113_spell_earth_common_187",
      "v113_spell_water_common_188",
      "v113_spell_ice_common_189",
      "v113_spell_lightning_common_190",
      "v113_spell_wind_common_191",
      "v113_spell_earth_common_192",
      "v113_spell_water_extra_193",
      "v113_spell_ice_extra_194",
      "v113_spell_lightning_extra_195",
      "v113_spell_wind_extra_196",
      "v113_spell_earth_extra_197",
      "v113_spell_water_extra_198",
      "v113_spell_fire_extra_199",
      "v113_spell_ice_extra_200",
      "v113_spell_lightning_extra_201",
      "v113_spell_wind_extra_202",
      "v113_spell_earth_extra_203",
      "v113_spell_water_extra_204"
    ]
  }
];
