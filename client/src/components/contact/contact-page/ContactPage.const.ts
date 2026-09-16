import { SITE, WHATSAPP_MESSAGE, buildWhatsappLink } from '@shared/consts/site.const';

export type ContactDetail = {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
};

/** דרכי הפנייה הישירות — לפני הטופס, למי שמעדיף ליצור קשר מיד. */
export const CONTACT_DETAILS: ContactDetail[] = [
  { label: 'טלפון', value: SITE.phone, href: `tel:${SITE.phone}` },
  { label: 'אימייל', value: SITE.email, href: `mailto:${SITE.email}` },
  {
    label: 'וואטסאפ',
    value: 'שליחת הודעה',
    href: buildWhatsappLink(WHATSAPP_MESSAGE.general),
    isExternal: true,
  },
  {
    label: 'קבוצת עדכונים',
    value: 'הצטרפות לקבוצה',
    href: SITE.social.whatsappGroup,
    isExternal: true,
  },
  {
    label: 'אינסטגרם',
    value: '@cornicione',
    href: SITE.social.instagram,
    isExternal: true,
  },
];
