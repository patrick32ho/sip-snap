export function getTodayISO() {
  const now = new Date();
  return now.toISOString().slice(0, 10);
}
