import { type SxProps, type Theme } from '@mui/material';

const hero: SxProps<Theme> = {
  pt: { xs: 10, md: 16 },
  pb: { xs: 6, md: 10 },
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const eyebrow: SxProps<Theme> = {
  color: 'text.secondary',
  display: 'block',
  mb: 2.5,
};

const title: SxProps<Theme> = {
  maxWidth: 900,
};

const subtitle: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 620,
  mt: 3,
};

const Styles = { hero, eyebrow, title, subtitle };

export default Styles;
