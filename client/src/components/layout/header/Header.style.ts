import { type SxProps, type Theme } from '@mui/material';

const appBar: SxProps<Theme> = {
  bgcolor: 'rgba(11, 11, 10, 0.72)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const toolbar: SxProps<Theme> = {
  maxWidth: 1280,
  width: '100%',
  mx: 'auto',
  px: { xs: 2.5, md: 5 },
  minHeight: { xs: 60, md: 72 },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
};

const brand: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: { xs: '0.95rem', md: '1.1rem' },
  letterSpacing: '0.25em',
  color: 'text.primary',
  textDecoration: 'none',
};

const nav: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  gap: 4,
};

const cta: SxProps<Theme> = {
  display: { xs: 'none', sm: 'inline-block' },
  fontSize: '0.85rem',
  color: 'text.primary',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(242, 239, 233, 0.4)',
  pb: 0.5,
  '&:hover': { borderBottomColor: 'text.primary' },
};

const menuButton: SxProps<Theme> = {
  display: { xs: 'inline-flex', md: 'none' },
  color: 'text.primary',
};

const actions: SxProps<Theme> = { display: 'flex', alignItems: 'center', gap: 2 };

const Styles = { appBar, toolbar, brand, nav, cta, menuButton, actions };

export default Styles;
