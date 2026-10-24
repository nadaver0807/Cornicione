import { type SxProps, type Theme } from '@mui/material';

const paper: SxProps<Theme> = {
  bgcolor: 'rgba(0, 0, 0, 0.94)',
  backgroundImage: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const image: SxProps<Theme> = {
  maxWidth: '92vw',
  maxHeight: '88vh',
  objectFit: 'contain',
};

const control: SxProps<Theme> = {
  position: 'absolute',
  color: 'text.primary',
  bgcolor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' },
};

const close: SxProps<Theme> = { ...control, top: 16, insetInlineEnd: 16 };

const prev: SxProps<Theme> = { ...control, top: '50%', insetInlineStart: 16 };

const next: SxProps<Theme> = { ...control, top: '50%', insetInlineEnd: 16 };

const Styles = { paper, image, close, prev, next };

export default Styles;
