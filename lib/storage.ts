const memoryStore = new Map<string, number>();

function getStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const storage = window.localStorage;
    const testKey = "sipsnap:__test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch {
    return null;
  }
}

export function isLocalStorageAvailable() {
  return Boolean(getStorage());
}

export function getNumber(key: string, fallback = 0) {
  const storage = getStorage();
  if (!storage) {
    return memoryStore.get(key) ?? fallback;
  }
  const raw = storage.getItem(key);
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function setNumber(key: string, value: number) {
  const storage = getStorage();
  if (!storage) {
    memoryStore.set(key, value);
    return;
  }
  storage.setItem(key, String(value));
}

export function incNumber(key: string, delta = 1) {
  const next = getNumber(key, 0) + delta;
  setNumber(key, next);
  return next;
}
