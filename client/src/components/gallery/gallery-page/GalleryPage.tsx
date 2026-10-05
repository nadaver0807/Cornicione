import { GALLERY_GROUPS } from '@components/gallery/gallery-page/GalleryPage.const';
import GallerySection from '@components/gallery/gallery-section/GallerySection';
import PageHero from '@components/shared/page-hero/PageHero';
import { Box } from '@mui/material';
import { type FC } from 'react';

/** גלריה — תמונות בלבד, באותה שפה כהה ומינימליסטית. */
const GalleryPage: FC = () => (
  <Box>
    <PageHero
      eyebrow='גלריה'
      title='Cornicione במבט'
      subtitle='הפיצות, הבצק, הטאבון והערבים — בתמונות.'
    />
    {GALLERY_GROUPS.map((group) => (
      <GallerySection key={group.title} group={group} />
    ))}
  </Box>
);

export default GalleryPage;
