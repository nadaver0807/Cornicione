export type Teaser = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

/** תצוגות מקדימות של האזורים — כל אחת מובילה לעמוד ייעודי. */
export const TEASERS: Teaser[] = [
  {
    id: 'menu',
    eyebrow: 'טייקאווי ומשלוחים',
    title: 'מהטאבון אל השולחן שלכם',
    text: 'פיצה נאפוליטנית, פוקאצ׳ות ואנטיפסטי — מוכנים לפי הזמנה, פעם בשבוע.',
    cta: 'לתפריט',
    href: '/menu',
    image: '/images/image-2.jpeg',
    alt: 'פיצה נאפוליטנית טרייה עם שוליים מנומרים',
  },
  {
    id: 'about',
    eyebrow: 'הסיפור',
    title: 'טבע והפיצה',
    text: 'האיש שמאחורי Cornicione, ואהבה לבצק שתפח לאט.',
    cta: 'להכיר את טבע',
    href: '/about',
    image: '/images/about/teva/teva-1.jpg',
    alt: 'טבע, בעל ויוצר Cornicione, ליד הטאבון',
  },
  {
    id: 'events',
    eyebrow: 'אירועים פרטיים',
    title: 'הטאבון מגיע אליכם',
    text: 'חגיגה, יום הולדת או ערב חברים — פיצה שיוצאת מהאש מול האורחים.',
    cta: 'לאירועים פרטיים',
    href: '/private-events',
    image: '/images/business/private-events/private-event-1.jpeg',
    alt: 'טאבון ופיצות באירוע פרטי',
  },
  {
    id: 'collaborations',
    eyebrow: 'שיתופי פעולה',
    title: 'פופ־אפים וערבי פיצה',
    text: 'ערבים משותפים עם מסעדות, ברים ועסקים מקומיים.',
    cta: 'לשיתופי פעולה',
    href: '/collaborations',
    image: '/images/business/collaborations/nono/nono-2.jpeg',
    alt: 'ערב פיצה משותף בבית הקפה Nono',
  },
];
