import { type SxProps, type Theme } from '@mui/material';

const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  maxWidth: 520,
};

const row: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
};

const hint: SxProps<Theme> = {
  color: 'text.secondary',
};

const feedback: SxProps<Theme> = {
  fontSize: 14,
  color: 'text.secondary',
};

const Styles = { form, row, hint, feedback };

export default Styles;
