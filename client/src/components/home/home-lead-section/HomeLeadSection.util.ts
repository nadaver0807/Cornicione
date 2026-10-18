import { LeadType } from '@shared/enums/lead-type.enum';
import { email, israeliPhone, requiredString } from '@shared/validations/common.validation';
import { z } from 'zod';

export const LEAD_TYPE_OPTIONS = [
  { value: LeadType.PrivateEvent, label: 'אירוע פרטי' },
  { value: LeadType.Business, label: 'אירוע חברה' },
  { value: LeadType.General, label: 'פופ-אפ ושיתופי פעולה' },
] as const;

export const formSchema = z.object({
  leadType: z.nativeEnum(LeadType),
  fullName: requiredString(80),
  phone: israeliPhone(),
  email: email().optional().or(z.literal('')),
  guests: requiredString(10),
  eventDate: z.string().optional(),
  isDateOpen: z.boolean(),
  details: z.string().max(800).optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const DEFAULTS: FormValues = {
  leadType: LeadType.PrivateEvent,
  fullName: '',
  phone: '',
  email: '',
  guests: '',
  eventDate: '',
  isDateOpen: false,
  details: '',
};

/** השרת שומר טקסט חופשי — מחברים אליו את פרטי האירוע. */
export const buildMessage = (values: FormValues): string =>
  [
    `אורחים: ${values.guests}`,
    values.isDateOpen ? 'תאריך: עוד לא סגור' : values.eventDate ? `תאריך: ${values.eventDate}` : '',
    values.details ?? '',
  ]
    .filter(Boolean)
    .join(' | ');
