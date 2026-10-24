'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'cornicione-a11y';
const FONT_STEPS = [100, 112, 125, 150];
const CHANGE_EVENT = 'cornicione-a11y-change';

type A11yState = {
  fontStep: number;
  isHighContrast: boolean;
  isMotionStopped: boolean;
};

const DEFAULT_STATE: A11yState = { fontStep: 0, isHighContrast: false, isMotionStopped: false };

let cachedRaw: string | null = null;
let cachedState: A11yState = DEFAULT_STATE;

/** קורא את ההעדפות מהדפדפן ומחזיר אובייקט יציב כל עוד לא השתנה דבר. */
const getSnapshot = (): A11yState => {
  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (raw !== cachedRaw) {
    cachedRaw = raw;

    try {
      cachedState = raw
        ? { ...DEFAULT_STATE, ...(JSON.parse(raw) as Partial<A11yState>) }
        : DEFAULT_STATE;
    } catch {
      cachedState = DEFAULT_STATE;
    }
  }

  return cachedState;
};

const getServerSnapshot = (): A11yState => DEFAULT_STATE;

const subscribe = (listener: () => void) => {
  window.addEventListener(CHANGE_EVENT, listener);

  return () => window.removeEventListener(CHANGE_EVENT, listener);
};

/** מחיל את ההעדפות על ה-`<html>` — גודל גופן, ניגודיות גבוהה ועצירת אנימציות. */
const applyState = (state: A11yState) => {
  const root = document.documentElement;

  root.style.setProperty('--a11y-font-size', `${FONT_STEPS[state.fontStep]}%`);
  root.dataset.a11yContrast = String(state.isHighContrast);
  root.dataset.a11yMotion = String(!state.isMotionStopped);
};

/** מצב הנגישות — נשמר בדפדפן ונטען מחדש בכל ביקור. */
export const useAccessibilityWidget = () => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => applyState(state), [state]);

  const update = useCallback((patch: Partial<A11yState>) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...getSnapshot(), ...patch }));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return {
    state,
    maxStep: FONT_STEPS.length - 1,
    increaseFont: () => update({ fontStep: Math.min(state.fontStep + 1, FONT_STEPS.length - 1) }),
    decreaseFont: () => update({ fontStep: Math.max(state.fontStep - 1, 0) }),
    toggleContrast: () => update({ isHighContrast: !state.isHighContrast }),
    toggleMotion: () => update({ isMotionStopped: !state.isMotionStopped }),
    reset: () => update(DEFAULT_STATE),
  };
};
