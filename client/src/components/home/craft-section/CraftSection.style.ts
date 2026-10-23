import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  bgcolor: 'secondary.dark',
  color: 'background.default',
  py: { xs: 8, md: 12 },
};

const title: SxProps<Theme> = {
  color: 'background.default',
  maxWidth: 760,
};

const subtitle: SxProps<Theme> = {
  color: 'rgba(250, 246, 240, 0.72)',
  mt: 2,
  maxWidth: 640,
};

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
  gap: { xs: 4, md: 3 },
  mt: 7,
};

const stat: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 0.75,
  fontFamily: 'var(--font-heading)',
  fontWeight: 900,
  fontSize: { xs: '2.4rem', md: '2.8rem' },
  color: 'primary.main',
  lineHeight: 1,
};

const unit: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 700,
};

const itemTitle: SxProps<Theme> = {
  color: 'background.default',
  mt: 1.5,
};

const itemDescription: SxProps<Theme> = {
  color: 'rgba(250, 246, 240, 0.72)',
  mt: 1,
};

const Styles = { section, title, subtitle, grid, stat, unit, itemTitle, itemDescription };

export default Styles;
