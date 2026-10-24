'use client';

import {
  GALLERY_IMAGES,
  type GalleryCategory,
} from '@components/gallery/gallery-page/GalleryPage.const';
import { useCallback, useMemo, useState } from 'react';

/** מצב הגלריה: סינון לפי קטגוריה והתמונה הפתוחה בלייטבוקס. */
export const useGalleryPage = () => {
  const [filter, setFilter] = useState<GalleryCategory>('ALL');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === 'ALL' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((i) => i.category === filter)),
    [filter],
  );

  const changeFilter = useCallback((value: GalleryCategory) => {
    setFilter(value);
    setOpenIndex(null);
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);

  const move = useCallback(
    (step: number) =>
      setOpenIndex((current) =>
        current === null ? null : (current + step + images.length) % images.length,
      ),
    [images.length],
  );

  return { filter, images, openIndex, changeFilter, open: setOpenIndex, close, move };
};
