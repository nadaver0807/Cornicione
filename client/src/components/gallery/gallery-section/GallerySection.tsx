import { type GalleryGroup } from '@components/gallery/gallery-page/GalleryPage.const';
import Styles from '@components/gallery/gallery-page/GalleryPage.style';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

type GallerySectionProps = {
  group: GalleryGroup;
};

/** קבוצת תמונות אחת. כשאין עדיין תמונות מוצג מקום שמור במקום רשת ריקה. */
const GallerySection: FC<GallerySectionProps> = ({ group }) => (
  <Box sx={Styles.group}>
    <PageSection eyebrow={group.eyebrow} title={group.title}>
      <Typography sx={Styles.description}>{group.description}</Typography>
      {group.images.length ? (
        <Box sx={Styles.grid}>
          {group.images.map((image) => (
            <Box
              key={image.src}
              component='img'
              src={image.src}
              alt={image.alt}
              loading='lazy'
              sx={Styles.image}
            />
          ))}
        </Box>
      ) : (
        <Box sx={Styles.placeholder}>התמונות יתווספו בקרוב</Box>
      )}
    </PageSection>
  </Box>
);

export default GallerySection;
