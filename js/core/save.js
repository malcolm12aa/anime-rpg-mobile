import { CONFIG } from "../config.js";
import { hydrateState } from "./state.js";

function storageAvailable() {
  try {
    const key = `${CONFIG.storageKey}-test`;
    localStorage.setItem(key, "1");
    localStorage.removeItem(key);
    return true;
  } catch (_error) {
    return false;
  }
}

export function saveGame(state) {
  if (!storageAvailable()) return false;
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
  return true;
}

export function loadGame() {
  if (!storageAvailable()) return null;
  const raw = localStorage.getItem(CONFIG.storageKey);
  if (!raw) return null;
  try {
    return hydrateState(JSON.parse(raw));
  } catch (error) {
    console.warn("Save file could not be loaded.", error);
    return null;
  }
}

export function deleteSave() {
  if (!storageAvailable()) return false;
  localStorage.removeItem(CONFIG.storageKey);
  return true;
}
