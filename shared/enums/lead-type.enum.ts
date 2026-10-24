export enum LeadType {
  Business = 'BUSINESS',
  Collaboration = 'COLLABORATION',
  PrivateEvent = 'PRIVATE_EVENT',
  General = 'GENERAL',
}

export const LEAD_TYPE_LABEL: Record<LeadType, string> = {
  [LeadType.Business]: 'שיתוף פעולה עסקי',
  [LeadType.Collaboration]: 'שיתוף פעולה / פופ־אפ',
  [LeadType.PrivateEvent]: 'אירוע פרטי',
  [LeadType.General]: 'פנייה כללית',
};
