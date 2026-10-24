import { type SxProps, type Theme } from '@mui/material';

const section: SxProps<Theme> = {
  maxWidth: 1280,
  mx: 'auto',
  px: { xs: 3, md: 6 },
  py: { xs: 6, md: 10 },
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 8, md: 12 },
};

const row: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  gap: { xs: 3, md: 8 },
  alignItems: 'center',
};

const rowReverse: SxProps<Theme> = {
  ...row,
  direction: { md: 'ltr' },
  '& > *': { direction: 'rtl' },
};

const image: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  display: 'block',
  border: '1px solid',
  borderColor: 'divider',
};

const text: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
};

const eyebrow: SxProps<Theme> = {
  color: 'text.secondary',
};

const body: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 460,
};

const cta: SxProps<Theme> = {
  mt: 1,
  fontSize: '0.9rem',
  color: 'text.primary',
  borderBottom: '1px solid rgba(242, 239, 233, 0.4)',
  pb: 0.5,
  '&:hover': { borderBottomColor: 'text.primary' },
};

const Styles = { section, row, rowReverse, image, text, eyebrow, body, cta };

export default Styles;
