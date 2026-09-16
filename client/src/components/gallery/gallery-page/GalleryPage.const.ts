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

/**
 * קבוצות הגלריה — כל שצריך כדי להוסיף תמונות הוא להוסיף פריטים למערך.
 * קבוצה ריקה לא מוצגת כלל, ולכן אפשר להשאיר מקום לתמונות שטרם הגיעו.
 */
export const GALLERY_GROUPS: GalleryGroup[] = [
  {
    eyebrow: 'הפיצות',
    title: 'מהטאבון',
    description: 'שוליים מנומרים, מרקם פתוח ורגע אחד מדויק של אש.',
    images: [],
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
    images: [],
  },
];
