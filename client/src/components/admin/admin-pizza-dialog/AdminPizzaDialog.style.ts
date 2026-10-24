import { type SxProps, type Theme } from '@mui/material';

const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
  pt: '8px !important',
};

const error: SxProps<Theme> = {
  color: 'error.main',
};

const Styles = { content, error };

export default Styles;
