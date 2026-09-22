import { Route } from '@shared/enums/route.enum';
import { type NavLink, type OpeningWindow, type SiteConfig } from '@shared/types/site.type';

export const SITE: SiteConfig = {
  name: 'Cornicione',
  tagline: 'פיצה נפוליטנית, בצק בתסיסה ארוכה',
  description:
    'Cornicione — פיצה נפוליטנית בעבודת יד, בצק בהידרציה גבוהה ובתסיסה ארוכה, טאבון וחומרי גלם נבחרים.',
  ownerName: 'טבע',
  phone: '050-0000000',
  email: 'hello@cornicione.co.il',
  social: {
    instagram: 'https://www.instagram.com/cornicione',
    whatsapp: 'https://wa.me/972552289055',
    whatsappGroup: 'https://chat.whatsapp.com/Hn9uBUua9bmIvS3RHb6JTj?mode=gi_t',
  },
};

/** חלון הפעילות הקבוע של הטייקאווי והמשלוחים. */
export const TAKEAWAY_WINDOW: OpeningWindow = {
  dayLabel: 'ימי חמישי',
  hoursLabel: '16:00–22:00',
};

/** הודעה מוכנה מראש לפנייה בוואטסאפ לפי נושא. */
export const WHATSAPP_MESSAGE = {
  general: 'היי טבע, הגעתי מהאתר של Cornicione ורציתי לשאול משהו',
  business: 'היי טבע, אני מנהל/ת מקום ומעניין אותי שיתוף פעולה עם Cornicione',
  privateEvent: 'היי טבע, אשמח לשמוע על Cornicione באירוע פרטי',
} as const;

/** בונה קישור וואטסאפ עם הודעה מוכנה. */
export const buildWhatsappLink = (message: string): string =>
  `${SITE.social.whatsapp}?text=${encodeURIComponent(message)}`;

/** ארבעת האזורים המרכזיים של האתר. */
export const NAV_LINKS: NavLink[] = [
  { href: Route.Menu, label: 'טייקאווי ומשלוחים', description: 'ימי חמישי | 16:00–22:00' },
  { href: Route.About, label: 'מה זה Cornicione', description: 'הסיפור, הבצק והגישה' },
  { href: Route.Business, label: 'Cornicione × עסקים', description: 'פופ־אפים ושיתופי פעולה' },
  { href: Route.PrivateEvents, label: 'אירועים פרטיים', description: 'החוויה אצלכם' },
];

export const QUERY_STALE_TIME_MS = 5 * 60 * 1000;
