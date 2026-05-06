import { ITEMS } from "../data/items.js";
import { CRAFTING_RECIPES, MATERIAL_DROP_TABLE } from "../data/crafting.js";
import { addInventory, addLog, byId, randInt, weightedChoice } from "../core/utils.js";
import { trackQuestProgress } from "./quests.js";
import { syncResourcesToStats } from "./leveling.js";

function qty(player, itemId) {
  return Number(player?.inventory?.[itemId] ?? 0);
}

function hasMaterials(player, materials = {}) {
  return Object.entries(materials).every(([itemId, amount]) => qty(player, itemId) >= Number(amount ?? 0));
}

function spendMaterials(player, materials = {}) {
  for (const [itemId, amount] of Object.entries(materials)) {
    player.inventory[itemId] = Math.max(0, qty(player, itemId) - Number(amount ?? 0));
    if (player.inventory[itemId] <= 0) delete player.inventory[itemId];
  }
}

export function getCraftingRecipesForStation(station) {
  return CRAFTING_RECIPES.filter(recipe => recipe.station === station);
}

export function canCraftRecipe(player, recipe) {
  const cost = recipe?.cost ?? {};
  if (!recipe) return { ok: false, reason: "Missing recipe." };
  if ((player.gold ?? 0) < (cost.gold ?? 0)) return { ok: false, reason: `Need ${cost.gold} gold.` };
  if (!hasMaterials(player, cost.materials ?? {})) return { ok: false, reason: "Missing materials." };
  return { ok: true, reason: "Ready." };
}

export function craftRecipe(state, recipeId) {
  const recipe = CRAFTING_RECIPES.find(item => item.id === recipeId);
  if (!recipe) return addLog(state, "Crafting recipe not found.");
  const check = canCraftRecipe(state.player, recipe);
  if (!check.ok) return addLog(state, `${recipe.name} cannot be crafted: ${check.reason}`);
  const cost = recipe.cost ?? {};
  state.player.gold -= cost.gold ?? 0;
  spendMaterials(state.player, cost.materials ?? {});
  addInventory(state.player, recipe.output.itemId, recipe.output.qty ?? 1);
  trackQuestProgress(state, "goldSpent", cost.gold ?? 0);
  addLog(state, `<strong>Crafted:</strong> ${recipe.name} → ${byId(ITEMS, recipe.output.itemId)?.name ?? recipe.output.itemId} x${recipe.output.qty ?? 1}.`);
}

function equippedItemIds(player) {
  return Object.entries(player.equipment ?? {}).filter(([, itemRef]) => typeof itemRef === "string" && itemRef && !itemRef.startsWith("loot:"));
}

export function upgradeEquippedGear(state) {
  const entries = equippedItemIds(state.player);
  if (!entries.length) return addLog(state, "Equip a normal weapon or armor piece before upgrading.");
  const [slot, itemId] = entries[0];
  const upgrades = state.player.itemUpgrades ??= {};
  const current = upgrades[itemId] ??= { level: 0, runeSlots: 0, scaling: 0 };
  const nextLevel = current.level + 1;
  const goldCost = 60 + nextLevel * 40;
  const oreCost = 1 + Math.floor(nextLevel / 2);
  if ((state.player.gold ?? 0) < goldCost) return addLog(state, `Need ${goldCost} gold to upgrade ${byId(ITEMS, itemId)?.name ?? itemId}.`);
  if (qty(state.player, "iron_ore") < oreCost) return addLog(state, `Need ${oreCost} Iron Ore to upgrade gear.`);
  state.player.gold -= goldCost;
  spendMaterials(state.player, { iron_ore: oreCost });
  current.level = nextLevel;
  trackQuestProgress(state, "goldSpent", goldCost);
  syncResourcesToStats(state.player);
  addLog(state, `<strong>Forged:</strong> ${byId(ITEMS, itemId)?.name ?? itemId} in ${slot} upgraded to +${current.level}.`);
}

export function addRuneSlot(state) {
  const entries = equippedItemIds(state.player);
  if (!entries.length) return addLog(state, "Equip a normal item before opening a rune slot.");
  const [slot, itemId] = entries[0];
  const upgrades = state.player.itemUpgrades ??= {};
  const current = upgrades[itemId] ??= { level: 0, runeSlots: 0, scaling: 0 };
  if (current.runeSlots >= 3) return addLog(state, "That item already has the current maximum of 3 rune slots.");
  const goldCost = 100 + current.runeSlots * 75;
  const shardCost = 1 + current.runeSlots;
  if ((state.player.gold ?? 0) < goldCost) return addLog(state, `Need ${goldCost} gold to add a rune slot.`);
  if (qty(state.player, "rune_shard") < shardCost) return addLog(state, `Need ${shardCost} Rune Shard(s).`);
  state.player.gold -= goldCost;
  spendMaterials(state.player, { rune_shard: shardCost });
  current.runeSlots += 1;
  trackQuestProgress(state, "goldSpent", goldCost);
  syncResourcesToStats(state.player);
  addLog(state, `<strong>Rune Slot Added:</strong> ${byId(ITEMS, itemId)?.name ?? itemId} in ${slot} now has ${current.runeSlots} rune slot(s).`);
}

export function improveScaling(state) {
  const entries = equippedItemIds(state.player);
  if (!entries.length) return addLog(state, "Equip a normal item before improving scaling.");
  const [slot, itemId] = entries[0];
  const upgrades = state.player.itemUpgrades ??= {};
  const current = upgrades[itemId] ??= { level: 0, runeSlots: 0, scaling: 0 };
  const goldCost = 120 + current.scaling * 90;
  const crystalCost = 1 + current.scaling;
  if ((state.player.gold ?? 0) < goldCost) return addLog(state, `Need ${goldCost} gold to improve scaling.`);
  if (qty(state.player, "storm_crystal") < crystalCost) return addLog(state, `Need ${crystalCost} Storm Crystal(s).`);
  state.player.gold -= goldCost;
  spendMaterials(state.player, { storm_crystal: crystalCost });
  current.scaling += 1;
  trackQuestProgress(state, "goldSpent", goldCost);
  syncResourcesToStats(state.player);
  addLog(state, `<strong>Scaling Improved:</strong> ${byId(ITEMS, itemId)?.name ?? itemId} in ${slot} now has scaling +${current.scaling}.`);
}

export function grantMaterialDrop(state, floor = 1, count = 1) {
  const pool = MATERIAL_DROP_TABLE.filter(entry => (entry.minFloor ?? 1) <= floor);
  const gained = [];
  for (let i = 0; i < count; i += 1) {
    const pick = weightedChoice(pool);
    const qty = randInt(1, floor >= 8 ? 3 : 2);
    addInventory(state.player, pick.id, qty);
    gained.push(`${byId(ITEMS, pick.id)?.name ?? pick.id} x${qty}`);
  }
  if (gained.length) addLog(state, `<strong>Materials gathered:</strong> ${gained.join(", ")}.`);
}

export function materialCostText(materials = {}) {
  return Object.entries(materials).map(([id, amount]) => `${byId(ITEMS, id)?.name ?? id} x${amount}`).join(", ") || "No materials";
}
