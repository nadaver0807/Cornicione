import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  textAlign: 'center',
  px: 3,
  py: { xs: 10, md: 16 },
  background: 'radial-gradient(ellipse at top, rgba(200, 110, 50, 0.14), transparent 60%)',
};

const label: SxProps<Theme> = {
  fontSize: '0.72rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'text.secondary',
};

const title: SxProps<Theme> = {
  maxWidth: 860,
  mx: 'auto',
  mt: 4,
  fontSize: { xs: '1.9rem', md: '3rem' },
};

const subtitle: SxProps<Theme> = { color: 'text.secondary', mt: 4 };

const Styles = { section, label, title, subtitle };

export default Styles;
