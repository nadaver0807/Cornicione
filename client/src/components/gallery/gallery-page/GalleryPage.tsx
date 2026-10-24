'use client';

import { GALLERY_FILTERS } from '@components/gallery/gallery-page/GalleryPage.const';
import Styles from '@components/gallery/gallery-page/GalleryPage.style';
import { useGalleryPage } from '@components/gallery/gallery-page/useGalleryPage';
import GalleryLightbox from '@components/gallery/gallery-lightbox/GalleryLightbox';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, ButtonBase } from '@mui/material';
import { type FC } from 'react';

/** גלריה כללית — סינון לפי קטגוריה, רשת רספונסיבית ולייטבוקס. */
const GalleryPage: FC = () => {
  const { filter, images, openIndex, changeFilter, open, close, move } = useGalleryPage();

  return (
    <Box>
      <PageHero
        eyebrow="גלריה"
        title="Cornicione במבט"
        subtitle="הפיצות, הבצק, הטאבון והערבים — בתמונות."
      />
      <PageSection>
        <Box role="group" aria-label="סינון תמונות לפי קטגוריה" sx={Styles.filters}>
          {GALLERY_FILTERS.map((item) => (
            <ButtonBase
              key={item.value}
              onClick={() => changeFilter(item.value)}
              aria-pressed={filter === item.value}
              sx={filter === item.value ? Styles.filterActive : Styles.filter}
            >
              {item.label}
            </ButtonBase>
          ))}
        </Box>
        <Box component="ul" aria-live="polite" sx={Styles.grid}>
          {images.map((image, index) => (
            <Box component="li" key={image.src} sx={Styles.item}>
              <ButtonBase
                onClick={() => open(index)}
                aria-label={`הגדלת תמונה: ${image.alt}`}
                aria-haspopup="dialog"
                sx={Styles.tile}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  sx={Styles.image}
                />
              </ButtonBase>
            </Box>
          ))}
        </Box>
      </PageSection>
      <GalleryLightbox
        image={openIndex === null ? null : images[openIndex]}
        onClose={close}
        onMove={move}
      />
    </Box>
  );
};

export default GalleryPage;
