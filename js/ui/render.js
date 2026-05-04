import { app } from "./dom.js";
import { mainMenu, saveMenu, characterCreate, hub, statusScreen, progressionScreen, classRegistryScreen, skillsScreen, inventoryScreen, shopScreen, mapScreen, battleScreen, eventScreen, recruitScreen, achievementsScreen, updatesScreen, notFound } from "./screens.js";

const screens = {
  "main-menu": mainMenu,
  "save-menu": saveMenu,
  "character-create": characterCreate,
  hub,
  status: statusScreen,
  progression: progressionScreen,
  "class-registry": classRegistryScreen,
  skills: skillsScreen,
  inventory: inventoryScreen,
  shop: shopScreen,
  map: mapScreen,
  battle: battleScreen,
  event: eventScreen,
  recruit: recruitScreen,
  achievements: achievementsScreen,
  updates: updatesScreen
};

export function render(state) {
  const root = app();
  const screen = screens[state.screen] ?? notFound;
  root.innerHTML = screen(state);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
