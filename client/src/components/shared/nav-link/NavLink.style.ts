import { type SxProps, type Theme } from '@mui/material';

const link: SxProps<Theme> = {
  position: 'relative',
  fontSize: '0.82rem',
  fontWeight: 400,
  letterSpacing: '0.14em',
  color: 'text.secondary',
  textDecoration: 'none',
  py: 0.5,
  transition: 'color 200ms ease',
  '&:hover': { color: 'text.primary' },
};

const activeLink: SxProps<Theme> = {
  ...link,
  color: 'text.primary',
  '&::after': {
    content: '""',
    position: 'absolute',
    insetInline: 0,
    bottom: 0,
    height: '1px',
    bgcolor: 'text.primary',
  },
};

const Styles = { link, activeLink };

export default Styles;
