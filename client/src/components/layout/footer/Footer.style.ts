import { type SxProps, type Theme } from '@mui/material';

const footer: SxProps<Theme> = {
  borderTop: '1px solid',
  borderColor: 'divider',
  py: { xs: 7, md: 9 },
  px: 3,
  textAlign: 'center',
  bgcolor: 'background.default',
};

const title: SxProps<Theme> = {
  fontFamily: 'var(--font-serif), serif',
  fontSize: '1.6rem',
  fontWeight: 300,
  letterSpacing: '0.2em',
};

const links: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 3,
  mt: 3,
};

const link: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '0.85rem',
  textDecoration: 'none',
  '&:hover': { color: 'text.primary' },
};

const copyright: SxProps<Theme> = { color: 'text.secondary', fontSize: '0.75rem', mt: 4 };

const Styles = { footer, title, links, link, copyright };

export default Styles;
