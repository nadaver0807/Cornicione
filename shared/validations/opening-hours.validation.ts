import { Weekday } from '@shared/enums/weekday.enum';
import { optionalString } from '@shared/validations/common.validation';
import { z } from 'zod';

/** שעה בפורמט `HH:mm` בלבד. */
const timeOfDay = () =>
  z
    .string()
    .trim()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'שעה חייבת להיות בפורמט HH:mm');

export const updateOpeningHoursSchema = z
  .object({
    weekday: z.nativeEnum(Weekday),
    openTime: timeOfDay(),
    closeTime: timeOfDay(),
    isActive: z.boolean(),
    closedMessage: optionalString(200),
  })
  .refine((value) => value.openTime < value.closeTime, {
    message: 'שעת הסגירה חייבת להיות אחרי שעת הפתיחה',
    path: ['closeTime'],
  });

export type UpdateOpeningHoursPayload = z.infer<typeof updateOpeningHoursSchema>;
