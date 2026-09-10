import { type SxProps, type Theme } from '@mui/material';

const video: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '16 / 9',
  bgcolor: '#101010',
  border: '1px solid',
  borderColor: 'divider',
};

const gallery: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
  gap: 2,
  mt: 4,
};

const galleryImage: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '1 / 1',
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
  border: '1px solid',
  borderColor: 'divider',
  p: { xs: 4, md: 7 },
  mt: 4,
};

const formWrapper: SxProps<Theme> = {
  mt: 4,
};

const Styles = { video, gallery, galleryImage, paragraph, ctaBox, formWrapper };

export default Styles;
