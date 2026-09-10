import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  py: { xs: 8, md: 14 },
};

const eyebrow: SxProps<Theme> = {
  color: 'text.secondary',
  display: 'block',
  mb: 2,
};

const title: SxProps<Theme> = {
  maxWidth: 760,
  mb: 4,
};

const Styles = { section, eyebrow, title };

export default Styles;
