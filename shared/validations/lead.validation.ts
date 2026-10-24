import { LeadType } from '@shared/enums/lead-type.enum';
import {
  email,
  enumValue,
  israeliPhone,
  optionalString,
  requiredString,
} from '@shared/validations/common.validation';
import { z } from 'zod';

export const createLeadSchema = z.object({
  leadType: enumValue(LeadType),
  fullName: requiredString(80),
  phone: israeliPhone(),
  email: email().optional().or(z.literal('')),
  /** שם העסק / המקום — רלוונטי לפניות עסקיות. */
  businessName: optionalString(120),
  /** פרטי אירוע פרטי — תאריך, כמות אורחים ומיקום. */
  eventDate: optionalString(40),
  guestCount: optionalString(10),
  location: optionalString(200),
  message: optionalString(1000),
});

export type CreateLeadPayload = z.infer<typeof createLeadSchema>;
