import { LeadType } from '@shared/enums/lead-type.enum';
import { WHATSAPP_MESSAGE } from '@shared/consts/site.const';

export const LEAD_TYPE_OPTIONS = [
  { value: LeadType.PrivateEvent, label: 'אירוע פרטי' },
  { value: LeadType.Business, label: 'אירוע חברה' },
  { value: LeadType.General, label: 'שאלה כללית / שיתוף פעולה' },
] as const;

export const LEAD_WHATSAPP_MESSAGE: Record<LeadType, string> = {
  [LeadType.PrivateEvent]: WHATSAPP_MESSAGE.privateEvent,
  [LeadType.Business]: 'היי טבע, אשמח להצעת מחיר ל-Cornicione באירוע חברה',
  [LeadType.General]: WHATSAPP_MESSAGE.general,
};
