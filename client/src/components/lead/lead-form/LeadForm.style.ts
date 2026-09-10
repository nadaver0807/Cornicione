import { type SxProps, type Theme } from '@mui/material';

const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
  maxWidth: 520,
};

const actions: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  mt: 1,
  flexWrap: 'wrap',
};

const feedback: SxProps<Theme> = {
  color: 'text.secondary',
};

const Styles = { form, actions, feedback };

export default Styles;
