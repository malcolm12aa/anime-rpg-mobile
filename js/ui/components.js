import { ITEMS } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { byId, formatStat, titleCase } from "../core/utils.js";
import { BASIC_ABILITIES, formatBasicAbility } from "../systems/basic-abilities.js";
import { STATUS_INFO } from "../systems/effects.js";
import { escapeHtml } from "./dom.js";

export function button(label, action, value = "", cls = "") {
  return `<button class="${cls}" data-action="${action}" data-value="${value}">${label}</button>`;
}

function navGroup(title, items) {
  return `<div class="nav-group"><span>${title}</span><div>${items.join("")}</div></div>`;
}

export function nav(state) {
  if (!state.player) return "";
  return `<nav class="navbar dark-guild-nav" aria-label="Game navigation">
    ${button("Hub", "go", "hub", "nav-home")}
    ${navGroup("Character", [
      button("Status / Class", "go", "status", "secondary"),
      button("Skills", "go", "skills", "secondary"),
      button("Inventory", "go", "inventory", "secondary"),
      button("Build", "go", "build-summary", "secondary")
    ])}
    ${navGroup("Adventure", [
      button("Map", "go", "map", "secondary"),
      button("Quests", "go", "quests", "secondary"),
      button("Tracker", "go", "unlock-tracker", "secondary"),
      button("Achievements", "go", "achievements", "secondary")
    ])}
    ${navGroup("Town", [
      button("Shop", "go", "shop", "secondary"),
      button("Crafting", "go", "crafting", "secondary"),
      button("Registry", "go", "class-registry", "secondary"),
      button("Save/Load", "openSaveMenu", "", "ghost")
    ])}
  </nav>${devMenu(state)}`;
}

function devMenu(state) {
  const open = Boolean(state.ui?.devMenuOpen);
  return `<button class="dev-fab" data-action="toggleDevMenu" title="Open testing menu" aria-label="Open testing menu">⚙️</button>
  ${open ? `<aside class="dev-panel card">
    <div class="row between"><h3>Testing Menu</h3><button class="ghost mini-button" data-action="toggleDevMenu">✕</button></div>
    <p class="small">Use this for testing builds. It changes only the current character/save.</p>
    <h4>Money</h4>
    <div class="dev-actions">${button("+100 Gold", "devAdjust", "gold:100", "secondary")}${button("-100 Gold", "devAdjust", "gold:-100", "ghost")}${button("+1000 Gold", "devAdjust", "gold:1000", "secondary")}</div>
    <h4>EXP</h4>
    <div class="dev-actions">${button("+100 EXP", "devAdjust", "xp:100", "secondary")}${button("-100 EXP", "devAdjust", "xp:-100", "ghost")}${button("+1000 EXP", "devAdjust", "xp:1000", "secondary")}</div>
    <h4>Class Levels</h4>
    <div class="dev-actions">${button("+1 Level Point", "devAdjust", "level:1", "secondary")}${button("-1 Level", "devAdjust", "level:-1", "ghost")}${button("+10 Level Points", "devAdjust", "level:10", "secondary")}</div>
  </aside>` : ""}`;
}


export function bar(label, current, max, type = "hp") {
  const safeMax = Math.max(1, max ?? 1);
  const pct = Math.max(0, Math.min(100, Math.round((current / safeMax) * 100)));
  return `<div class="small row between"><span>${label}</span><strong>${current}/${safeMax}</strong></div><div class="bar ${type}"><span style="width:${pct}%"></span></div>`;
}

export function statGrid(stats) {
  const basicRows = stats.basicAbilities?.rows ?? BASIC_ABILITIES.map(ability => ({
    ...ability,
    currentValue: 0,
    currentRank: "I",
    totalValue: 0,
    totalDisplay: formatBasicAbility(0)
  }));
  const derivedKeys = [
    ["maxHp", "Max HP"],
    ["maxMana", "Max Mana"],
    ["maxStamina", "Max Stamina"],
    ["attack", "Attack"],
    ["magic", "Spell Power"],
    ["defense", "Defense"],
    ["speed", "Speed"]
  ];
  return `<div class="ability-grid">${basicRows.map(row => `<article class="ability-card">
    <div class="row between"><span>${row.name}</span><strong class="ability-rank">${row.currentRank} ${row.currentValue}</strong></div>
    <div class="ability-meter"><span style="width:${Math.max(0, Math.min(100, Math.floor((row.currentValue / 999) * 100)))}%"></span></div>
    <p class="small">Stacked background total: <strong>${row.totalValue}</strong> (${row.totalDisplay})</p>
    <p class="small">${row.scaling}</p>
  </article>`).join("")}</div>
  <div class="rank-key"><strong>Rank Key:</strong> I 0–99 · H 100–199 · G 200–299 · F 300–399 · E 400–499 · D 500–599 · C 600–699 · B 700–799 · A 800–899 · S 900–999</div>
  <h3>Derived Status Scaling</h3>
  <div class="stat-grid derived-grid">${derivedKeys.map(([key, label]) => `<div class="stat"><span>${label}</span><strong>${stats[key] ?? 0}</strong></div>`).join("")}</div>`;
}

export function statusPills(list = []) {
  if (!list.length) return `<span class="pill">No status effects</span>`;
  return list.map(s => `<span class="pill status">${STATUS_INFO[s.id]?.icon ?? "•"} ${STATUS_INFO[s.id]?.name ?? titleCase(s.id)} ${s.duration}</span>`).join(" ");
}

export function inventoryList(player, mode = "normal") {
  const entries = Object.entries(player.inventory ?? {});
  if (!entries.length) return `<p class="small">Inventory is empty.</p>`;
  return `<div class="item-card-grid inventory-card-grid">${entries.map(([itemId, qty]) => {
    const item = byId(ITEMS, itemId);
    if (!item) return "";
    const action = item.type === "consumable" ? (mode === "battle" ? "battleItem" : "useItem") : item.type === "equipment" ? "equipItem" : "";
    const isEquipment = item.type === "equipment";
    const isConsumable = item.type === "consumable";
    const rarity = item.rarity ?? (item.type === "material" ? "Material" : "Common");
    const setText = item.set ? `<span class="pill item-tag">Set: ${titleCase(item.set)}</span>` : "";
    const slotText = item.slot ? `<span class="pill item-tag">${titleCase(item.slot)}</span>` : "";
    const itemTags = [item.type, item.kind, item.element, ...(item.tags ?? [])].filter(Boolean).slice(0, 5)
      .map(tag => `<span class="pill item-tag">${escapeHtml(titleCase(String(tag)))}</span>`).join(" ");
    const scalingText = itemScalingText(item);
    const bonusText = itemBonusText(item);
    const armorText = item.armorBonus ? `<div class="item-stat-row"><span>Armor Bonus</span><strong>${escapeHtml(item.armorBonus)}</strong></div>` : "";
    const effectText = isConsumable ? consumableEffectText(item) : "";
    return `<article class="item-card rarity-${rarityClass(rarity)} ${isEquipment ? "equipment-card" : ""} ${isConsumable ? "consumable-card" : ""}">
      <div class="item-card-head">
        <div class="item-icon">${itemIcon(item)}</div>
        <div class="item-title-block">
          <h3>${escapeHtml(item.name)}</h3>
          <p class="small"><span class="item-rarity-label">${escapeHtml(rarity)}</span> · ${escapeHtml(titleCase(item.type ?? "item"))} · Qty ${qty}</p>
        </div>
      </div>
      <p class="item-description">${escapeHtml(item.description ?? "No description listed.")}</p>
      <div class="item-tags">${slotText}${setText}${itemTags}</div>
      <div class="item-shop-meta">
        ${bonusText}
        ${scalingText}
        ${armorText}
        ${effectText}
      </div>
      ${action ? button(item.type === "equipment" ? "Equip Item" : "Use Item", action, item.id, "secondary") : `<span class="pill passive-pill">Material</span>`}
    </article>`;
  }).join("")}</div>`;
}

function itemBonusText(item = {}) {
  if (!item.stats) return "";
  return `<div class="item-stat-row"><span>Bonus Stats</span><strong>${escapeHtml(Object.entries(item.stats).map(([k, v]) => `${v >= 0 ? "+" : ""}${v} ${formatStat(k)}`).join(" · "))}</strong></div>`;
}

function itemScalingText(item = {}) {
  const scaling = item.scalingStats ?? item.scaling;
  if (!scaling) return "";
  return `<div class="item-stat-row"><span>Status Scaling</span><strong>${escapeHtml(Object.entries(scaling).map(([k, v]) => `${titleCase(k)} × ${Number(v).toFixed ? Number(v).toFixed(2) : v}`).join(" · "))}</strong></div>`;
}

function consumableEffectText(item = {}) {
  const effects = (item.effects ?? []).map(effect => {
    if (effect.type === "healFlat") return `Heal ${effect.amount ?? 0} HP`;
    if (effect.type === "restore") return `Restore ${effect.amount ?? 0} ${titleCase(effect.resource ?? "resource")}`;
    if (effect.type === "cleanse") return "Cleanse status effects";
    if (effect.type === "damageEnemy") return `Deal ${effect.amount ?? 0} ${titleCase(effect.element ?? "item")} damage`;
    if (effect.type === "statusSelf") return `Gain ${titleCase(effect.status ?? "status")}`;
    if (effect.type === "statusEnemy") return `Inflict ${titleCase(effect.status ?? "status")}`;
    return titleCase(effect.type ?? "effect");
  });
  if (!effects.length) return "";
  return `<div class="item-stat-row"><span>Effect</span><strong>${escapeHtml(effects.join(" · "))}</strong></div>`;
}

function rarityClass(rarity = "common") {
  return String(rarity).toLowerCase().replace(/[^a-z0-9]+/g, "-") || "common";
}

function itemIcon(item = {}) {
  const text = `${item.name ?? ""} ${item.type ?? ""} ${item.slot ?? ""} ${item.description ?? ""}`.toLowerCase();
  if (text.includes("potion") || text.includes("draught") || text.includes("elixir") || text.includes("tonic") || text.includes("vial")) return "🧪";
  if (text.includes("bomb")) return "💣";
  if (text.includes("sword") || text.includes("blade") || text.includes("rapier") || text.includes("sabre") || text.includes("scimitar")) return "⚔️";
  if (text.includes("bow") || text.includes("crossbow")) return "🏹";
  if (text.includes("staff") || text.includes("wand") || text.includes("rod") || text.includes("grimoire") || text.includes("catalyst") || text.includes("orb")) return "✦";
  if (text.includes("shield")) return "🛡";
  if (text.includes("helm") || text.includes("circlet") || text.includes("hood")) return "⛑";
  if (text.includes("robe") || text.includes("armor") || text.includes("plate") || text.includes("vest") || text.includes("mantle")) return "◈";
  if (text.includes("boots") || text.includes("greaves")) return "🥾";
  if (text.includes("ring") || text.includes("charm") || text.includes("badge") || text.includes("talisman")) return "◇";
  if (item.type === "material") return "◆";
  return "✧";
}

export function skillList(player, mode = "normal") {
  const skills = (player.skills ?? []).map(id => byId(SKILLS, id)).filter(Boolean);
  if (!skills.length) return `<p class="small">No skills learned yet.</p>`;
  return `<div class="ability-card-grid">${skills.map(skill => {
    const cd = player.cooldowns?.[skill.id] ?? 0;
    const disabled = mode === "battle" && cd > 0 ? "disabled" : "";
    const isPassive = skill.kind === "passive" || skill.resource === "none";
    const cost = isPassive ? "Passive" : (skill.resource ? `${skill.cost} ${skill.resource}` : "Free");
    const icon = abilityIcon(skill);
    const tags = (skill.tags ?? []).slice(0, 5).map(tag => `<span class="pill ability-tag">${tag}</span>`).join(" ");
    const scaling = skill.scaling ? Object.entries(skill.scaling).map(([key, value]) => `${titleCase(key)} × ${Number(value).toFixed(3)}`).join(" · ") : "Default class scaling";
    return `<article class="ability-card rank-${String(skill.rank ?? "common").toLowerCase()} ${isPassive ? "passive-card" : ""}">
      <div class="ability-card-head">
        <div class="ability-icon">${icon}</div>
        <div><h3>${skill.name}</h3><p class="small">${skill.rank ?? "Common"} · ${skill.kind ?? "ability"} · ${skill.element ?? "neutral"}</p></div>
      </div>
      <p class="ability-description">${skill.description}</p>
      <div class="ability-stat-row"><span>Cost</span><strong>${cost}</strong></div>
      <div class="ability-stat-row"><span>Cooldown</span><strong>${skill.cooldown ?? 0}${cd ? ` · ${cd} left` : ""}</strong></div>
      <div class="ability-stat-row"><span>Power</span><strong>${skill.power ?? 0}</strong></div>
      <div class="ability-stat-row"><span>Status Scaling</span><strong>${scaling}</strong></div>
      ${tags ? `<div class="ability-tags">${tags}</div>` : ""}
      ${mode === "battle" && !isPassive ? `<button ${disabled} data-action="skill" data-value="${skill.id}">${cd ? "Cooldown" : "Use Ability"}</button>` : (isPassive ? `<span class="pill passive-pill">Passive</span>` : "")}
    </article>`;
  }).join("")}</div>`;
}

function abilityIcon(skill = {}) {
  const text = `${skill.name ?? ""} ${skill.element ?? ""} ${skill.kind ?? ""}`.toLowerCase();
  if (text.includes("fire") || text.includes("flame") || text.includes("burn")) return "🔥";
  if (text.includes("ice") || text.includes("frozen") || text.includes("frost")) return "❄️";
  if (text.includes("lightning") || text.includes("storm") || text.includes("thunder")) return "⚡";
  if (text.includes("heal") || text.includes("mend") || text.includes("holy")) return "✚";
  if (text.includes("dark") || text.includes("shadow") || text.includes("curse")) return "☾";
  if (text.includes("poison") || text.includes("venom") || text.includes("toxic")) return "☠";
  if (text.includes("resist") || text.includes("guard") || text.includes("shield")) return "🛡";
  if (text.includes("ultimate")) return "👑";
  if (text.includes("spell") || text.includes("mana") || text.includes("arcane")) return "✦";
  return "◆";
}

export function combatLog(state) {
  const lines = (state.log ?? []).slice(0, 18).map(l => `<div class="log-line">${l.text}</div>`).join("");
  return `<section class="card log"><h3>Combat Log</h3>${lines || `<div class="log-line">No log entries yet.</div>`}</section>`;
}
