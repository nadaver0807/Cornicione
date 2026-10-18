import { LeadType } from '@shared/enums/lead-type.enum';

export const PROCESS_STEPS = [
  { numeral: 'I', title: 'מקימים עמדה', image: '/images/business/nono/nono-1.jpeg' },
  { numeral: 'II', title: 'פותחים כל בצק ביד', image: '/images/business/nono/nono-2.jpeg' },
  { numeral: 'III', title: 'אופים מול האורחים', image: '/images/business/nono/nono-3.jpeg' },
] as const;

export const PILLARS = [
  {
    numeral: 'I',
    title: 'אירועים פרטיים',
    description:
      'חתונות בוטיק, ימי הולדת, מסיבות חצר ואירועים משפחתיים. אנחנו מגיעים עם הטאבון ומוציאים פיצות לוהטות לעיני האורחים ללא הפסקה.',
    cta: 'לתיאום אירוע פרטי',
    image: '/images/business/nono/nono-4.jpeg',
    leadType: LeadType.PrivateEvent,
  },
  {
    numeral: 'II',
    title: 'אירועי חברה וקהילה',
    description:
      'האקתונים, ימי גיבוש, הרמות כוסית ואירועי קהילה. כמויות גדולות, קצב גבוה, רמת שף.',
    cta: 'להצעת מחיר לחברות',
    image: '/images/business/rooftop/rooftop-1.jpeg',
    leadType: LeadType.Business,
  },
  {
    numeral: 'III',
    title: 'פופ-אפים',
    description:
      'ביקבים, מבשלות בירה וחצרות מיוחדות. הצטרפו לקבוצה השקטה וקבלו עדכון על הפופ-אפ הבא.',
    cta: 'להצטרפות לקבוצת הוואטסאפ',
    image: '/images/business/nono/nono-5.jpeg',
    leadType: null,
  },
] as const;
