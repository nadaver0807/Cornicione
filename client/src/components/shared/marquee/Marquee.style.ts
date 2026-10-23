import { type SxProps, type Theme } from '@mui/material';

const scroll = {
  '@keyframes marquee-scroll': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(50%)' },
  },
};

const wrapper: SxProps<Theme> = {
  overflow: 'hidden',
  py: { xs: 1.75, md: 2.25 },
  borderTop: '2px solid currentColor',
  borderBottom: '2px solid currentColor',
  ...scroll,
};

const wrapperLight: SxProps<Theme> = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
};

const wrapperDark: SxProps<Theme> = {
  bgcolor: 'secondary.dark',
  color: 'secondary.contrastText',
};

const track: SxProps<Theme> = {
  display: 'flex',
  width: 'max-content',
  animation: 'marquee-scroll 28s linear infinite',
  direction: 'ltr',
};

const group: SxProps<Theme> = {
  display: 'flex',
  flexShrink: 0,
};

const item: SxProps<Theme> = {
  fontFamily: 'var(--font-heading)',
  fontSize: { xs: '1.1rem', md: '1.4rem' },
  fontWeight: 800,
  letterSpacing: '0.01em',
  whiteSpace: 'nowrap',
  px: 3,
  direction: 'rtl',
};

const Styles = { wrapper, wrapperLight, wrapperDark, track, group, item };

export default Styles;
