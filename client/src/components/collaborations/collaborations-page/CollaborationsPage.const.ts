export type Collaboration = {
  name: string;
  eyebrow: string;
  description: string;
  images: { src: string; alt: string }[];
};

export const NONO_VIDEO_URL = '/videos/oven.mp4';

/** שיתופי הפעולה והפופ־אפים — להוספת שותף חדש מוסיפים פריט למערך. */
export const COLLABORATIONS: Collaboration[] = [
  {
    name: 'Nono',
    eyebrow: 'ערבי פיצה',
    description:
      'ערבי פיצה בבית הקפה Nono — הטאבון מוקם במקום, כל בצק נפתח ביד מול האורחים, ' +
      'והמקום נהפך לערב אחר לגמרי.',
    images: [1, 2, 3, 4, 5, 6].map((index) => ({
      src: `/images/business/collaborations/nono/nono-${index}.jpeg`,
      alt: `ערב פיצה של Cornicione בבית הקפה Nono, תמונה ${index}`,
    })),
  },
  {
    name: 'ערב Rooftop',
    eyebrow: 'פופ־אפ',
    description: 'פופ־אפ חד־פעמי על גג — פיצה נאפוליטנית טרייה, אווירה פתוחה ושקיעה.',
    images: [1, 2, 3].map((index) => ({
      src: `/images/business/collaborations/rooftop/rooftop-${index}.jpeg`,
      alt: `פופ־אפ פיצה Rooftop, תמונה ${index}`,
    })),
  },
];

export const COLLABORATION_PARAGRAPHS = [
  'Cornicione יכולה לעבוד עם מקום קיים — ערב פיצה, פופ־אפ חד־פעמי או שיתוף פעולה קבוע.',
  'אני מגיע עם הבצק, הטאבון והתפעול — המקום נשאר המקום שלכם.',
];
