import { type SxProps, type Theme } from '@mui/material';

const link: SxProps<Theme> = {
  position: 'fixed',
  top: 8,
  insetInlineStart: 8,
  zIndex: 2000,
  px: 2,
  py: 1,
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  textDecoration: 'none',
  transform: 'translateY(-200%)',
  '&:focus-visible': { transform: 'translateY(0)' },
};

const Styles = { link };

export default Styles;
