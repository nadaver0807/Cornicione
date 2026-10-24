import { WEEKDAY_PLURAL_LABEL } from '@shared/enums/weekday.enum';
import { type OpeningHours, type OpeningStatus } from '@shared/types/opening-hours.type';

/** מסיר אפס מוביל כדי שהתצוגה תהיה "9:00" ולא "09:00". */
const formatTime = (time: string): string => time.replace(/^0/, '');

export const buildWindowLabel = (openingHours: OpeningHours): string => {
  const day = WEEKDAY_PLURAL_LABEL[openingHours.weekday];
  const hours = `${formatTime(openingHours.openTime)}–${formatTime(openingHours.closeTime)}`;

  return `${day} | ${hours}`;
};

/** ההזמנות פתוחות רק כשהמנהלן הפעיל את `isOrderingEnabled`. */
export const resolveOpeningStatus = (openingHours: OpeningHours): OpeningStatus => {
  const windowLabel = buildWindowLabel(openingHours);
  const isOpen = openingHours.isOrderingEnabled;

  if (isOpen) {
    return { isOpen, windowLabel, message: 'פתוח להזמנות' };
  }

  const message = openingHours.closedMessage || 'הזמנות הטייקאווי סגורות כרגע';

  return { isOpen, windowLabel, message };
};
