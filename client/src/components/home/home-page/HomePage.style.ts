import { type SxProps, type Theme } from '@mui/material';

const hero: SxProps<Theme> = {
  minHeight: { xs: '78vh', md: '88vh' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  px: { xs: 3, md: 6 },
  maxWidth: 1280,
  mx: 'auto',
};

const brand: SxProps<Theme> = {
  fontSize: { xs: '2.7rem', sm: '4rem', md: '6rem' },
  fontWeight: 200,
  letterSpacing: { xs: '0.14em', md: '0.2em' },
  lineHeight: 1,
};

const tagline: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 4,
  maxWidth: 520,
};

const gate: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
  borderTop: '1px solid',
  borderColor: 'divider',
};

const gateItem: SxProps<Theme> = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  px: { xs: 3, md: 6 },
  py: { xs: 5, md: 8 },
  borderBottom: '1px solid',
  borderInlineEnd: { md: '1px solid' },
  borderColor: 'divider',
  transition: 'background-color 220ms ease',
  '&:hover': { bgcolor: 'rgba(245, 243, 240, 0.04)' },
};

const gateIndex: SxProps<Theme> = {
  color: 'text.secondary',
  display: 'block',
  mb: 2,
};

const gateDescription: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 1.5,
};

const Styles = { hero, brand, tagline, gate, gateItem, gateIndex, gateDescription };

export default Styles;
