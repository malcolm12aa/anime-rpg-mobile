import { ITEMS } from "../data/items.js";
import { LOOT_AFFIXES, LOOT_BASE_ITEM_IDS, LOOT_RARITIES } from "../data/loot.js";
import { addLog, byId, choice, uid, weightedChoice } from "../core/utils.js";

function pickRarity(floor = 1, bonusWeight = 0) {
  const pool = LOOT_RARITIES
    .filter(rarity => (rarity.minFloor ?? 1) <= floor)
    .map(rarity => ({ ...rarity, weight: Math.max(0.1, rarity.weight + (rarity.minFloor <= floor ? bonusWeight : 0)) }));
  return weightedChoice(pool);
}

function mergeStats(...sets) {
  const out = {};
  for (const set of sets) for (const [key, value] of Object.entries(set ?? {})) out[key] = (out[key] ?? 0) + value;
  return out;
}

export function createRandomLoot(floor = 1, bonusWeight = 0) {
  const base = byId(ITEMS, choice(LOOT_BASE_ITEM_IDS)) ?? ITEMS.find(item => item.type === "equipment");
  const rarity = pickRarity(floor, bonusWeight);
  const affix = choice(LOOT_AFFIXES);
  const rarityStats = Object.fromEntries(Object.keys(base.stats ?? { str: 1 }).map(key => [key, rarity.statBonus]));
  const stats = mergeStats(base.stats, affix.stats, rarityStats);
  return {
    id: uid("loot"),
    baseId: base.id,
    name: `${rarity.name} ${affix.name} ${base.name}`,
    type: "equipment",
    slot: base.slot,
    rarity: rarity.name,
    rarityId: rarity.id,
    affix: affix.name,
    affixId: affix.id,
    element: affix.element,
    stats,
    price: Math.floor((base.price ?? 50) * rarity.goldValue),
    description: `${base.description} ${affix.description} Generated as ${rarity.name} loot from dungeon rewards.`
  };
}

export function grantGeneratedLoot(state, floor = 1, bonusWeight = 0) {
  state.player.loot ??= [];
  const loot = createRandomLoot(floor, bonusWeight);
  state.player.loot.unshift(loot);
  state.player.loot = state.player.loot.slice(0, 50);
  addLog(state, `<strong>Loot found:</strong> ${loot.name} <span class="pill">${loot.rarity}</span> <span class="pill">${loot.affix}</span>.`);
  return loot;
}

export function getGeneratedLoot(player, lootRef) {
  const id = String(lootRef ?? "").replace(/^loot:/, "");
  return (player?.loot ?? []).find(item => item.id === id);
}

export function describeGeneratedLoot(loot) {
  if (!loot) return "Unknown generated loot";
  const stats = Object.entries(loot.stats ?? {}).map(([key, value]) => `${value >= 0 ? "+" : ""}${value} ${key.toUpperCase()}`).join(", ");
  return `${loot.name} · ${loot.rarity} · ${loot.affix} · ${stats || "No stats"}`;
}
