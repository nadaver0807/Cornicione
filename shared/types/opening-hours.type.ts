import { type Weekday } from '@shared/enums/weekday.enum';

/** שעות הפעילות של חלון ההזמנות, ניתנות לעריכה על ידי המנהלן. */
export type OpeningHours = {
  uuid: string;
  weekday: Weekday;
  /** שעת פתיחה בפורמט `HH:mm`. */
  openTime: string;
  /** שעת סגירה בפורמט `HH:mm`. */
  closeTime: string;
  /** כיבוי ידני — סוגר את ההזמנות גם ביום הפעילות. */
  isActive: boolean;
  /** הודעה שתוצג ללקוח כשסגור, למשל בגלל חופשה. */
  closedMessage: string;
};

export type GetOpeningHoursResponse = {
  openingHours: OpeningHours;
};

/** מצב הפעילות המחושב לרגע נתון. */
export type OpeningStatus = {
  isOpen: boolean;
  /** תווית מלאה, למשל "ימי חמישי | 17:00–22:00". */
  windowLabel: string;
  message: string;
};
