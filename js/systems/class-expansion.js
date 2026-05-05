import { RACE_EVOLUTION_EXPANSION } from "../data/race-evolution-expansion.js";
import { JOB_UPGRADE_EXPANSION } from "../data/job-upgrade-expansion.js";

export function getClassExpansionSummary() {
  return {
    raceEvolutions: RACE_EVOLUTION_EXPANSION.length,
    jobUpgrades: JOB_UPGRADE_EXPANSION.length,
    total: RACE_EVOLUTION_EXPANSION.length + JOB_UPGRADE_EXPANSION.length
  };
}
