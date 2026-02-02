import { DAILY_GOAL_DEFAULT } from "./constants";
import { getTodayISO } from "./dates";
import { getNumber, incNumber, setNumber } from "./storage";

const PREFIX = "sipsnap:";

export function getTodayKey() {
  return `${PREFIX}day:${getTodayISO()}`;
}

export function getTodayCount() {
  return getNumber(getTodayKey(), 0);
}

export function getDailyGoal() {
  return getNumber(`${PREFIX}dailyGoal`, DAILY_GOAL_DEFAULT);
}

export function setDailyGoal(value: number) {
  setNumber(`${PREFIX}dailyGoal`, value);
}

export function logGlass() {
  const today = incNumber(getTodayKey(), 1);
  const totalGlasses = incNumber(`${PREFIX}totalGlasses`, 1);
  const plays = incNumber(`${PREFIX}plays`, 1);
  const bestDay = Math.max(getNumber(`${PREFIX}bestDay`, 0), today);
  setNumber(`${PREFIX}bestDay`, bestDay);

  return {
    today,
    totalGlasses,
    plays,
    bestDay,
  };
}

export function getStatsSnapshot() {
  return {
    today: getTodayCount(),
    totalGlasses: getNumber(`${PREFIX}totalGlasses`, 0),
    plays: getNumber(`${PREFIX}plays`, 0),
    bestDay: getNumber(`${PREFIX}bestDay`, 0),
  };
}
