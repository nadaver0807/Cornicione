const REFRESH_INTERVAL_MS = 60 * 1000;

const listeners = new Set<() => void>();

let snapshot = 0;
let timer: ReturnType<typeof setInterval> | null = null;

/** מקצר את חותמת הזמן לדקה, כדי שהסנאפשוט יישאר יציב. */
const toMinuteStamp = (): number => Math.floor(Date.now() / REFRESH_INTERVAL_MS);

/** שעון משותף שמדווח על מעבר דקה. */
export const subscribeToClock = (listener: () => void): (() => void) => {
  listeners.add(listener);

  if (!timer) {
    snapshot = toMinuteStamp();

    timer = setInterval(() => {
      const next = toMinuteStamp();

      if (next === snapshot) {
        return;
      }

      snapshot = next;
      listeners.forEach((current) => current());
    }, REFRESH_INTERVAL_MS);
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
};

export const getClockSnapshot = (): number => snapshot || toMinuteStamp();

/** בשרת אין שעון חי — ערך קבוע מונע חוסר התאמה בהידרציה. */
export const getClockServerSnapshot = (): number => 0;
