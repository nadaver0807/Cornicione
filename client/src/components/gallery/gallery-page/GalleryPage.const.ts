import { COLLABORATIONS } from '@components/collaborations/collaborations-page/CollaborationsPage.const';

export type GalleryCategory = 'ALL' | 'PIZZAS' | 'EVENTS' | 'COLLABORATIONS' | 'TEVA';

export type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'ALL'>;
};

export const GALLERY_FILTERS: { value: GalleryCategory; label: string }[] = [
  { value: 'ALL', label: 'הכל' },
  { value: 'PIZZAS', label: 'פיצות ואווירה' },
  { value: 'EVENTS', label: 'אירועים פרטיים' },
  { value: 'COLLABORATIONS', label: 'שיתופי פעולה' },
  { value: 'TEVA', label: 'טבע' },
];

const ROOT_ALTS = [
  'להבות הטאבון',
  'בצק בפתיחה ידנית',
  'פיצה נאפוליטנית בתקריב',
  'פיצה עם שוליים מנומרים',
  'חומרי גלם טריים',
  'פיצה טרייה יוצאת מהאש',
  'בצק בתסיסה ארוכה',
  'פתיחת הבצק ביד',
  'פיצה לפני הכנסה לטאבון',
  'אווירה ליד הטאבון',
  'פיצה מוכנה להגשה',
];

const PIZZA_IMAGES: GalleryImage[] = ROOT_ALTS.map((alt, index) => ({
  src: `/images/image-${index + 1}.jpeg`,
  alt,
  category: 'PIZZAS',
}));

const EVENT_IMAGES: GalleryImage[] = Array.from({ length: 26 }, (_, index) => ({
  src: `/images/business/private-events/private-event-${index + 1}.jpeg`,
  alt: `אירוע פרטי של Cornicione, תמונה ${index + 1}`,
  category: 'EVENTS',
}));

const COLLABORATION_IMAGES: GalleryImage[] = COLLABORATIONS.flatMap((item) =>
  item.images.map((image) => ({ ...image, category: 'COLLABORATIONS' as const })),
);

const TEVA_IMAGES: GalleryImage[] = [
  {
    src: '/images/about/teva/teva-1.jpg',
    alt: 'טבע, בעל ויוצר Cornicione, בעבודה',
    category: 'TEVA',
  },
];

/** כל תמונות האתר במקום אחד — לשורש `/images` ולתיקיות המשנה. */
export const GALLERY_IMAGES: GalleryImage[] = [
  ...PIZZA_IMAGES,
  ...TEVA_IMAGES,
  ...EVENT_IMAGES,
  ...COLLABORATION_IMAGES,
];
