import { type SxProps, type Theme } from '@mui/material';

const paper: SxProps<Theme> = {
  maxWidth: 420,
};

const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  pb: 1,
};

const title: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
};

const dot: SxProps<Theme> = {
  width: 9,
  height: 9,
  borderRadius: '50%',
  bgcolor: '#D9534F',
  flexShrink: 0,
};

const message: SxProps<Theme> = {
  color: 'text.secondary',
};

const window: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'divider',
  px: 2,
  py: 1.5,
  letterSpacing: '0.1em',
  fontSize: '0.85rem',
};

const actions: SxProps<Theme> = {
  px: 3,
  pb: 3,
};

const Styles = { paper, content, title, dot, message, window, actions };

export default Styles;
