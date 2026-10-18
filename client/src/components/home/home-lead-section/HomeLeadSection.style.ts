import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  maxWidth: 760,
  mx: 'auto',
  px: { xs: 3, md: 6 },
  py: { xs: 8, md: 12 },
  scrollMarginTop: 72,
};

const form: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'divider',
  p: { xs: 3, md: 5 },
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

const subHeader: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 1.5,
  mt: 2,
  fontFamily: 'var(--font-serif-he), serif',
  fontSize: '1.2rem',
};

const submit: SxProps<Theme> = {
  bgcolor: '#E6DEC8',
  color: '#0B0B0A',
  fontWeight: 500,
  py: 1.75,
  borderRadius: 0,
  '&:hover': { bgcolor: '#F2EFE9' },
};

const note: SxProps<Theme> = { color: 'text.secondary', fontSize: '0.85rem', textAlign: 'center' };

const Styles = { section, form, subHeader, submit, note };

export default Styles;
