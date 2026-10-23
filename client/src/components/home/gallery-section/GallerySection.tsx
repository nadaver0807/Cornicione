import { GALLERY_IMAGES } from '@components/home/gallery-section/GallerySection.const';
import SectionHeader from '@components/shared/section-header/SectionHeader';
import { Box } from '@mui/material';
import { type FC } from 'react';

/** גריד עריכתי דו-טורי עם גבהים משתנים. */
const GallerySection: FC = () => (
  <Box
    component="section"
    id="gallery"
    sx={{
      maxWidth: 1280,
      mx: 'auto',
      px: { xs: 3, md: 6 },
      py: { xs: 8, md: 12 },
      scrollMarginTop: 72,
    }}
  >
    <SectionHeader title="מהטאבון" label="GALLERIA" />
    <Box sx={{ columnCount: { xs: 1, sm: 2 }, columnGap: 2 }}>
      {GALLERY_IMAGES.map((image) => (
        <Box
          key={image.src}
          component="img"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          sx={{ width: '100%', display: 'block', mb: 2, filter: 'contrast(1.05) saturate(0.9)' }}
        />
      ))}
    </Box>
  </Box>
);

export default GallerySection;
