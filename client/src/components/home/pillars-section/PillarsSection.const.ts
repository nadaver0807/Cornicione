import { LeadType } from '@shared/enums/lead-type.enum';

export const PILLARS = [
  {
    index: '01',
    title: 'אירועים פרטיים',
    highlight: true,
    description:
      'חתונות בוטיק, ימי הולדת, מסיבות חצר ואירועים משפחתיים. אנחנו מגיעים עם הטאבון, ' +
      'עמדת הפתיחה והאווירה, ומוציאים פיצות לוהטות לעיני האורחים ללא הפסקה.',
    ctaLabel: 'לתיאום אירוע פרטי',
    image: '/images/business/nono/nono-1.jpeg',
    leadType: LeadType.PrivateEvent,
  },
  {
    index: '02',
    title: 'אירועי חברה וקהילה',
    highlight: false,
    description:
      'פתרון קולינרי מושלם להאקתונים, ימי גיבוש, הרמות כוסית, משרדים ואירועי קהילה. ' +
      'התאמה לכמויות גדולות בקצב גבוה וברמת שף.',
    ctaLabel: 'להצעת מחיר לחברות',
    image: '/images/business/rooftop/rooftop-1.jpeg',
    leadType: LeadType.Business,
  },
  {
    index: '03',
    title: 'פופ-אפים',
    highlight: false,
    description:
      'מתארחים ביקבים, מבשלות בירה, חצרות ומקומות מיוחדים. ' +
      'הפופ-אפ הקרוב: תאריך, מיקום ושעות יפורסמו בקבוצת הוואטסאפ.',
    ctaLabel: 'הצטרפות לקבוצת הוואטסאפ',
    image: '/images/business/nono/nono-3.jpeg',
    leadType: null,
  },
] as const;
