import { ITEMS } from "../data/items.js";
import { addInventory, byId, chance, choice, randInt, addLog } from "../core/utils.js";
import { gainXp } from "./leveling.js";
import { grantMaterialDrop } from "./crafting.js";
import { grantGeneratedLoot } from "./loot.js";

const REWARD_ITEMS = ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "camp_ration", "ember_gem"];

export function grantBattleRewards(state, enemy) {
  const [minGold, maxGold] = enemy.gold ?? [8, 20];
  const gold = randInt(minGold, maxGold);
  state.player.gold += gold;
  gainXp(state, enemy.xp ?? 25);
  if (state.run?.summary) {
    state.run.summary.goldEarned = (state.run.summary.goldEarned ?? 0) + gold;
    state.run.summary.xpEarned = (state.run.summary.xpEarned ?? 0) + (enemy.xp ?? 25);
  }
  let itemText = "";
  if (chance(28) || state.player.statusEffects?.some(s => s.id === "lucky")) {
    const itemId = choice(REWARD_ITEMS);
    addInventory(state.player, itemId, 1);
    if (state.run?.summary) state.run.summary.itemsFound = (state.run.summary.itemsFound ?? 0) + 1;
    itemText = ` Found ${byId(ITEMS, itemId)?.name ?? itemId}.`;
  }
  if (chance(state.combat?.type === "boss" ? 80 : state.combat?.type === "elite" ? 55 : 24)) {
    grantMaterialDrop(state, state.run?.floor ?? 1, state.combat?.type === "boss" ? 3 : 1);
  }
  if (chance(state.combat?.type === "boss" ? 100 : state.combat?.type === "elite" ? 60 : 18)) {
    grantGeneratedLoot(state, state.run?.floor ?? 1, state.combat?.type === "boss" ? 2 : 0);
  }
  if (enemy.rewardDust) {
    state.meta.relicDust += enemy.rewardDust;
    itemText += ` Gained ${enemy.rewardDust} Relic Dust.`;
  }
  addLog(state, `<strong>Victory rewards:</strong> ${gold} gold, ${enemy.xp ?? 25} XP.${itemText}`);
}

export function grantEventReward(state, event) {
  if (event.gold) {
    const gold = randInt(event.gold[0], event.gold[1]);
    state.player.gold += gold;
    addLog(state, `Found ${gold} gold.`);
  }
  for (const itemId of event.items ?? []) {
    addInventory(state.player, itemId, 1);
    addLog(state, `Gained ${byId(ITEMS, itemId)?.name ?? itemId}.`);
  }
  for (const [itemId, amount] of Object.entries(event.materials ?? {})) {
    addInventory(state.player, itemId, amount);
    addLog(state, `Gained ${byId(ITEMS, itemId)?.name ?? itemId} x${amount}.`);
  }
  if (event.materialDrop) grantMaterialDrop(state, state.run?.floor ?? 1, event.materialDrop);
  if (event.lootDrop) grantGeneratedLoot(state, state.run?.floor ?? 1, event.lootBonus ?? 0);
  if (event.xp) {
    gainXp(state, event.xp);
    if (state.run?.summary) state.run.summary.xpEarned = (state.run.summary.xpEarned ?? 0) + event.xp;
  }
  if (event.relicDust) {
    state.meta.relicDust += event.relicDust;
    addLog(state, `Gained ${event.relicDust} Relic Dust.`);
  }
}
