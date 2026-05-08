import { CONFIG } from "../config.js";
import { addLog } from "../core/utils.js";
import { syncResourcesToStats } from "./leveling.js";

export function startRun(state) {
  state.meta.totalRuns += 1;
  state.run = {
    active: true,
    mapId: "ember_tower",
    floor: 0,
    highestFloor: 0,
    roomsCleared: 0,
    routeStep: 0,
    danger: 15,
    biomeId: "goblin_warrens",
    routeNodes: [],
    currentNode: null,
    supplies: { torchlight: 3, keys: 1, rations: 2, scoutTokens: 1, wardStones: 1, lockpicks: 2 },
    goals: [],
    summary: {
      nodesCleared: 0,
      battlesWon: 0,
      elitesDefeated: 0,
      bossesDefeated: 0,
      eventsResolved: 0,
      treasuresOpened: 0,
      secretsFound: 0,
      highDangerClears: 0,
      nodesWithoutRest: 0,
      goldEarned: 0,
      xpEarned: 0,
      itemsFound: 0,
      lastResult: "Run started"
    }
  };
  state.combat = null;
  state.ui.runSummary = null;
  syncResourcesToStats(state.player);
  state.screen = "map";
  addLog(state, `<strong>Run started:</strong> Emberfall Tower shifts into a new route board.`);
}

function buildRunSummary(run, result = "Returned to Hub") {
  if (!run) return null;
  return {
    result,
    floor: run.floor ?? 0,
    highestFloor: run.highestFloor ?? 0,
    roomsCleared: run.roomsCleared ?? 0,
    danger: run.danger ?? 0,
    ...(run.summary ?? {})
  };
}

export function endRunDefeat(state) {
  const lost = Math.floor(state.player.gold * CONFIG.defeatGoldLossRate);
  if (state.run) state.run.summary = { ...(state.run.summary ?? {}), lastResult: `Defeat: lost ${lost} gold` };
  state.ui.runSummary = buildRunSummary(state.run, "Defeat");
  state.player.gold = Math.max(0, state.player.gold - lost);
  state.run = null;
  state.combat = null;
  state.player.statusEffects = [];
  const stats = syncResourcesToStats(state.player);
  state.player.hp = Math.max(1, Math.floor(stats.maxHp * 0.55));
  state.player.mana = Math.floor(stats.maxMana * 0.45);
  state.player.stamina = Math.floor(stats.maxStamina * 0.45);
  state.ui.battleResult = {
    outcome: "Defeat",
    enemyName: "Dungeon Encounter",
    battleType: "defeat",
    xp: 0,
    danger: state.ui.runSummary?.danger ?? 0,
    runActive: false,
    message: `You were defeated and lost ${lost} gold. The run ended.`,
    logLines: (state.log ?? []).slice(0, 8).map(l => l.text),
    runSummary: state.ui.runSummary
  };
  state.screen = "battle-result";
  addLog(state, `<strong>Defeat:</strong> dungeon progress was lost and ${lost} gold scattered into the tower.`);
}

export function leaveRun(state) {
  if (state.run) state.run.summary = { ...(state.run.summary ?? {}), lastResult: "Returned safely to the Hub" };
  state.ui.runSummary = buildRunSummary(state.run, "Returned to Hub");
  state.run = null;
  state.combat = null;
  state.screen = "hub";
  addLog(state, "You leave the dungeon run and return to the hub.");
}
