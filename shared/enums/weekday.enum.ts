/** ימות השבוע כפי שמוחזרים מ-`Date.getDay()`. */
export enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export const WEEKDAY_LABEL: Record<Weekday, string> = {
  [Weekday.Sunday]: 'ראשון',
  [Weekday.Monday]: 'שני',
  [Weekday.Tuesday]: 'שלישי',
  [Weekday.Wednesday]: 'רביעי',
  [Weekday.Thursday]: 'חמישי',
  [Weekday.Friday]: 'שישי',
  [Weekday.Saturday]: 'שבת',
};

/** תווית בצורת "ימי חמישי" לשימוש בכותרות. */
export const WEEKDAY_PLURAL_LABEL: Record<Weekday, string> = {
  [Weekday.Sunday]: 'ימי ראשון',
  [Weekday.Monday]: 'ימי שני',
  [Weekday.Tuesday]: 'ימי שלישי',
  [Weekday.Wednesday]: 'ימי רביעי',
  [Weekday.Thursday]: 'ימי חמישי',
  [Weekday.Friday]: 'ימי שישי',
  [Weekday.Saturday]: 'שבת',
};
