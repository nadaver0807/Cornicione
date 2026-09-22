import { NONO_GALLERY } from '@components/business/business-page/BusinessPage.const';

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryGroup = {
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

/** תמונות הפיצות המוגמרות. */
const PIZZA_IMAGES: GalleryImage[] = [
  { src: '/images/image-2.jpeg', alt: 'פיצה נאפוליטנית מהטאבון' },
  { src: '/images/image-4.jpeg', alt: 'פיצה עם שוליים מנומרים' },
  { src: '/images/image-6.jpeg', alt: 'פיצה טרייה יוצאת מהאש' },
];

/** תמונות מהתהליך — בצק והכנה. */
const PROCESS_IMAGES: GalleryImage[] = [
  { src: '/images/image-7.jpeg', alt: 'בצק בתסיסה ארוכה' },
  { src: '/images/image-8.jpeg', alt: 'פתיחת הבצק ביד' },
  { src: '/images/image-9.jpeg', alt: 'הפיצה בהכנה לפני הטאבון' },
];

/**
 * קבוצות הגלריה — כל שצריך כדי להוסיף תמונות הוא להוסיף פריטים למערך.
 * קבוצה ריקה לא מוצגת כלל, ולכן אפשר להשאיר מקום לתמונות שטרם הגיעו.
 */
export const GALLERY_GROUPS: GalleryGroup[] = [
  {
    eyebrow: 'הפיצות',
    title: 'מהטאבון',
    description: 'שוליים מנומרים, מרקם פתוח ורגע אחד מדויק של אש.',
    images: PIZZA_IMAGES,
  },
  {
    eyebrow: 'Nono',
    title: 'ערבי פיצה ב־Nono',
    description: 'תיעוד מהערבים בבית הקפה — הטאבון, העבודה, הקהל והאווירה.',
    images: NONO_GALLERY,
  },
  {
    eyebrow: 'התהליך',
    title: 'הבצק והעבודה',
    description: 'תסיסה ארוכה, פתיחה ביד וכל מה שקורה לפני שהפיצה נכנסת לאש.',
    images: PROCESS_IMAGES,
  },
];
