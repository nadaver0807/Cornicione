import { type SxProps, type Theme } from '@mui/material';

const wrapper: SxProps<Theme> = {
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 3,
  textAlign: 'center',
  px: 3,
};

const message: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 420,
};

const Styles = { wrapper, message };

export default Styles;
