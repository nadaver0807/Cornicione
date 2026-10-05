import { type SxProps, type Theme } from '@mui/material';

const appBar: SxProps<Theme> = {
  bgcolor: 'rgba(10, 10, 10, 0.86)',
  backdropFilter: 'blur(14px)',
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const toolbar: SxProps<Theme> = {
  maxWidth: 1280,
  width: '100%',
  mx: 'auto',
  px: { xs: 2, md: 5 },
  minHeight: { xs: 62, md: 76 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
};

const brand: SxProps<Theme> = {
  fontSize: { xs: '1.05rem', md: '1.25rem' },
  fontWeight: 400,
  letterSpacing: '0.34em',
  color: 'text.primary',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

const nav: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  gap: 4,
};

const cartButton: SxProps<Theme> = {
  color: 'text.primary',
};

const menuButton: SxProps<Theme> = {
  display: { xs: 'inline-flex', md: 'none' },
  color: 'text.primary',
};

const actions: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
};

const secondaryNav: SxProps<Theme> = {
  display: { xs: 'none', lg: 'flex' },
  alignItems: 'center',
  gap: 3,
  pl: 3,
  ml: 1,
  borderLeft: '1px solid',
  borderColor: 'divider',
};

const Styles = {
  appBar,
  toolbar,
  brand,
  nav,
  secondaryNav,
  cartButton,
  menuButton,
  actions,
};

export default Styles;
