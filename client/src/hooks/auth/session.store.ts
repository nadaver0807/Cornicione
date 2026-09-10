import { type AdminSession } from '@shared/types/auth.type';

const STORAGE_KEY = 'cornicione.session';

const listeners = new Set<() => void>();

let snapshot: AdminSession | null = null;
let isHydrated = false;

const read = (): AdminSession | null => {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const stored = raw ? (JSON.parse(raw) as AdminSession) : null;

  if (stored && new Date(stored.expiresAt).getTime() <= Date.now()) {
    window.localStorage.removeItem(STORAGE_KEY);

    return null;
  }

  return stored;
};

export const getSession = (): AdminSession | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!isHydrated) {
    snapshot = read();
    isHydrated = true;
  }

  return snapshot;
};

export const getSessionToken = (): string => getSession()?.token ?? '';

export const setSession = (session: AdminSession | null): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (session) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }

  snapshot = session;
  isHydrated = true;

  listeners.forEach((listener) => listener());
};

/** מנוי לשינויים בהתחברות, לשימוש עם `useSyncExternalStore`. */
export const subscribeToSession = (listener: () => void): (() => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};
