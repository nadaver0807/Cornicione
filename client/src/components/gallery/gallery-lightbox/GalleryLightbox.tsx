'use client';

import Styles from '@components/gallery/gallery-lightbox/GalleryLightbox.style';
import { type GalleryImage } from '@components/gallery/gallery-page/GalleryPage.const';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, IconButton } from '@mui/material';
import { type FC, type KeyboardEvent } from 'react';

type GalleryLightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
  onMove: (step: number) => void;
};

/** תצוגה מוגדלת — Escape סוגר, והחיצים עוברים בין תמונות (RTL: ימין = הקודמת). */
const GalleryLightbox: FC<GalleryLightboxProps> = ({ image, onClose, onMove }) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      onMove(1);
    }

    if (event.key === 'ArrowRight') {
      onMove(-1);
    }
  };

  return (
    <Dialog
      open={Boolean(image)}
      onClose={onClose}
      fullScreen
      onKeyDown={handleKeyDown}
      aria-label="תצוגה מוגדלת של תמונה"
      slotProps={{ paper: { sx: Styles.paper } }}
    >
      <IconButton onClick={onClose} aria-label="סגירת התמונה" sx={Styles.close}>
        <CloseIcon />
      </IconButton>
      <IconButton onClick={() => onMove(-1)} aria-label="התמונה הקודמת" sx={Styles.prev}>
        <ChevronRightIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={() => onMove(1)} aria-label="התמונה הבאה" sx={Styles.next}>
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      {image ? <Box component="img" src={image.src} alt={image.alt} sx={Styles.image} /> : null}
    </Dialog>
  );
};

export default GalleryLightbox;
