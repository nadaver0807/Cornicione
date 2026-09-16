import { WEEKDAY_PLURAL_LABEL, type Weekday } from '@shared/enums/weekday.enum';
import { type OpeningHours, type OpeningStatus } from '@shared/types/opening-hours.type';

/** ממיר `HH:mm` למספר הדקות מתחילת היום. */
const toMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);

  return hours * 60 + minutes;
};

/** מסיר אפס מוביל כדי שהתצוגה תהיה "9:00" ולא "09:00". */
const formatTime = (time: string): string => time.replace(/^0/, '');

export const buildWindowLabel = (openingHours: OpeningHours): string => {
  const day = WEEKDAY_PLURAL_LABEL[openingHours.weekday];
  const hours = `${formatTime(openingHours.openTime)}–${formatTime(openingHours.closeTime)}`;

  return `${day} | ${hours}`;
};

/** מחשב אם חלון ההזמנות פתוח כרגע ביחס לזמן שהתקבל. */
export const resolveOpeningStatus = (openingHours: OpeningHours, now: Date): OpeningStatus => {
  const windowLabel = buildWindowLabel(openingHours);
  const isMatchingDay = (now.getDay() as Weekday) === openingHours.weekday;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const isWithinHours =
    currentMinutes >= toMinutes(openingHours.openTime) &&
    currentMinutes < toMinutes(openingHours.closeTime);

  const isOpen = openingHours.isActive && isMatchingDay && isWithinHours;

  if (isOpen) {
    return { isOpen, windowLabel, message: 'פתוח להזמנות' };
  }

  const message = openingHours.closedMessage || `כרגע לא מקבלים הזמנות · ${windowLabel}`;

  return { isOpen, windowLabel, message };
};
