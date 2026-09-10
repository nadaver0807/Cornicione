import { type SxProps, type Theme } from '@mui/material';

const footer: SxProps<Theme> = {
  borderTop: '1px solid',
  borderColor: 'divider',
  px: { xs: 3, md: 6 },
  py: { xs: 6, md: 8 },
  mt: 10,
};

const inner: SxProps<Theme> = {
  maxWidth: 1280,
  mx: 'auto',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  gap: 5,
};

const brand: SxProps<Theme> = {
  letterSpacing: '0.34em',
  fontSize: '1.1rem',
  fontWeight: 300,
};

const tagline: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 1.5,
  maxWidth: 320,
};

const column: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
};

const link: SxProps<Theme> = {
  color: 'text.secondary',
  textDecoration: 'none',
  fontSize: '0.85rem',
  '&:hover': { color: 'text.primary' },
};

const copyright: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '0.75rem',
  letterSpacing: '0.1em',
  mt: 6,
  textAlign: 'center',
};

const Styles = { footer, inner, brand, tagline, column, link, copyright };

export default Styles;
