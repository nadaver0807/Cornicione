import { type SxProps, type Theme } from '@mui/material';

const hero: SxProps<Theme> = {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  px: 3,
  pt: 10,
  pb: 12,
};

const video: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
};

const overlay: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5) 50%, #0B0B0A)',
};

const content: SxProps<Theme> = { position: 'relative', zIndex: 2, maxWidth: 720 };

const title: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  fontWeight: 300,
  fontSize: { xs: '2.2rem', sm: '3.6rem', md: '4.8rem' },
  letterSpacing: { xs: '0.18em', md: '0.25em' },
  lineHeight: 1.1,
  paddingInlineStart: { xs: '0.18em', md: '0.25em' },
};

const subtitle: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: { xs: '0.8rem', md: '1rem' },
  letterSpacing: '0.35em',
  mt: 2,
  color: 'text.primary',
};

const signature: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  mt: 3,
  '&::before, &::after': {
    content: '""',
    width: 56,
    height: '1px',
    bgcolor: 'rgba(242,239,233,0.4)',
  },
};

const script: SxProps<Theme> = {
  fontFamily: 'var(--font-script), cursive',
  fontSize: { xs: '1.6rem', md: '2rem' },
  direction: 'ltr',
};

const poem: SxProps<Theme> = {
  mt: 6,
  color: 'rgba(242, 239, 233, 0.85)',
  fontSize: { xs: '0.95rem', md: '1.1rem' },
  lineHeight: 2,
};

const scrollLine: SxProps<Theme> = {
  position: 'absolute',
  bottom: 24,
  insetInlineStart: '50%',
  width: '1px',
  height: 56,
  bgcolor: 'rgba(242,239,233,0.5)',
  zIndex: 2,
};

const Styles = {
  hero,
  video,
  overlay,
  content,
  title,
  subtitle,
  signature,
  script,
  poem,
  scrollLine,
};

export default Styles;
