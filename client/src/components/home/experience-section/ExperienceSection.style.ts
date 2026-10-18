import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  maxWidth: 1280,
  mx: 'auto',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 12 },
  scrollMarginTop: 72,
};

const stack: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: { xs: 6, md: 4 },
};

const image: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '4 / 5',
  objectFit: 'cover',
  display: 'block',
  filter: 'contrast(1.05) saturate(0.9)',
};

const caption: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  alignItems: 'baseline',
  borderTop: '1px solid',
  borderColor: 'divider',
  mt: 2,
  pt: 2,
};

const numeral: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  color: 'text.secondary',
  letterSpacing: '0.15em',
  minWidth: 36,
};

const pillars: SxProps<Theme> = { ...stack, mt: { xs: 10, md: 14 } };

const description: SxProps<Theme> = { color: 'text.secondary', mt: 1.5, mb: 3 };

const Styles = { section, stack, image, caption, numeral, pillars, description };

export default Styles;
