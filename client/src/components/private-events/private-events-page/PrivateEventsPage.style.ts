import { type SxProps, type Theme } from '@mui/material';

const gallery: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: 2,
};

const galleryImage: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '3 / 4',
  objectFit: 'cover',
  bgcolor: '#101010',
  border: '1px solid',
  borderColor: 'divider',
};

const paragraph: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 620,
  mt: 2.5,
};

const ctaBox: SxProps<Theme> = {
  borderTop: '1px solid',
  borderColor: 'divider',
  pt: { xs: 6, md: 9 },
};

const formWrapper: SxProps<Theme> = {
  mt: 4,
};

const Styles = { gallery, galleryImage, paragraph, ctaBox, formWrapper };

export default Styles;
