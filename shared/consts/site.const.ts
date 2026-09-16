import { Route } from '@shared/enums/route.enum';
import { type NavLink, type OpeningWindow, type SiteConfig } from '@shared/types/site.type';

export const SITE: SiteConfig = {
  name: 'Cornicione',
  tagline: 'פיצה נפוליטנית, בצק בתסיסה ארוכה',
  description:
    'Cornicione — פיצה נפוליטנית בעבודת יד, בצק בהידרציה גבוהה ובתסיסה ארוכה, ' +
    'טאבון וחומרי גלם נבחרים.',
  ownerName: 'טבע',
  phone: '055-228-9055',
  email: 'tevabobo99@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/pizza_cornicione_',
    whatsapp: 'https://wa.me/972552289055',
    whatsappGroup: 'https://chat.whatsapp.com/Hn9uBUua9bmIvS3RHb6JTj?mode=gi_t',
  },
};

/** משפט הפתיחה של האתר, בניסוח של טבע. */
export const WELCOME_MESSAGE =
  'ברוכים הבאים לקורניצ׳ונה. פיצה נפוליטנית מודרנית, המוכנה לפי הזמנה, ' +
  'עם חומרי גלם איכותיים שנבחרו בקפידה.';

/** חלון הפעילות הקבוע של הטייקאווי והמשלוחים. */
export const TAKEAWAY_WINDOW: OpeningWindow = {
  dayLabel: 'ימי חמישי',
  hoursLabel: '17:00–22:00',
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
  {
    href: Route.Menu,
    label: 'טייקאווי ומשלוחים',
    description: `${TAKEAWAY_WINDOW.dayLabel} | ${TAKEAWAY_WINDOW.hoursLabel}`,
  },
  { href: Route.About, label: 'מה זה Cornicione', description: 'הסיפור, הבצק והגישה' },
  { href: Route.Business, label: 'Cornicione & More', description: 'פופ־אפים ושיתופי פעולה' },
  { href: Route.PrivateEvents, label: 'אירועים פרטיים', description: 'החוויה אצלכם' },
];

/** אזורים משניים — קיימים בניווט, אך לא מתחרים בארבעת האזורים המרכזיים. */
export const SECONDARY_NAV_LINKS: NavLink[] = [
  { href: Route.Gallery, label: 'גלריה', description: 'תמונות מהטאבון ומהערבים' },
  { href: Route.Contact, label: 'יצירת קשר', description: 'טלפון, וואטסאפ וטופס' },
];

export const QUERY_STALE_TIME_MS = 5 * 60 * 1000;
