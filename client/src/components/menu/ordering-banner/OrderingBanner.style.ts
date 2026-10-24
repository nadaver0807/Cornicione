import { type SxProps, type Theme } from '@mui/material';

const banner: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 2,
  border: '1px solid',
  borderColor: 'divider',
  px: 3,
  py: 2.5,
  mb: 6,
  bgcolor: 'rgba(245, 243, 240, 0.04)',
};

const bannerClosed: SxProps<Theme> = {
  ...banner,
  borderInlineStart: '3px solid #D9534F',
};

const bannerOpen: SxProps<Theme> = {
  ...banner,
  borderInlineStart: '3px solid #4CAF50',
};

const dot: SxProps<Theme> = {
  width: 9,
  height: 9,
  borderRadius: '50%',
  flexShrink: 0,
  mt: 1,
};

const dotClosed: SxProps<Theme> = { ...dot, bgcolor: '#D9534F' };

const dotOpen: SxProps<Theme> = { ...dot, bgcolor: '#4CAF50' };

const title: SxProps<Theme> = {
  fontWeight: 400,
  color: 'text.primary',
};

const message: SxProps<Theme> = {
  color: 'text.secondary',
};

const Styles = { bannerClosed, bannerOpen, dotClosed, dotOpen, title, message };

export default Styles;
