import { type SxProps, type Theme } from '@mui/material';

const wrapper: SxProps<Theme> = {
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: 3,
  py: { xs: 8, md: 12 },
};

const card: SxProps<Theme> = {
  width: '100%',
  maxWidth: 420,
  border: '1px solid',
  borderColor: 'divider',
  px: { xs: 3, md: 5 },
  py: { xs: 5, md: 6 },
};

const eyebrow: SxProps<Theme> = {
  color: 'text.secondary',
  display: 'block',
  mb: 2,
};

const title: SxProps<Theme> = {
  mb: 1,
};

const subtitle: SxProps<Theme> = {
  color: 'text.secondary',
  mb: 5,
};

const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

const feedback: SxProps<Theme> = {
  color: 'error.main',
  fontSize: 14,
};

const Styles = { wrapper, card, eyebrow, title, subtitle, form, feedback };

export default Styles;
