import { type SxProps, type Theme } from '@mui/material';

const brand: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  fontWeight: 300,
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  color: 'text.primary',
  textDecoration: 'none',
};

const microLabel: SxProps<Theme> = {
  fontSize: '0.72rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'text.secondary',
};

const underlineLink: SxProps<Theme> = {
  display: 'inline-block',
  color: 'text.primary',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(242, 239, 233, 0.4)',
  pb: 0.75,
  transition: 'border-color 200ms ease',
  cursor: 'pointer',
  '&:hover': { borderBottomColor: 'text.primary' },
};

const Styles = { brand, microLabel, underlineLink };

export default Styles;
