import { type SxProps, type Theme } from '@mui/material';

const card: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  transition: 'border-color 220ms ease',
  '&:hover': { borderColor: 'rgba(245, 243, 240, 0.28)' },
};

const media: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  aspectRatio: '4 / 3',
  bgcolor: '#0F0F0F',
  overflow: 'hidden',
};

const soldOutOverlay: SxProps<Theme> = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'rgba(10, 10, 10, 0.72)',
  letterSpacing: '0.24em',
  fontSize: '0.8rem',
};

const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  p: 3,
  flex: 1,
};

const titleRow: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: 2,
};

const description: SxProps<Theme> = {
  color: 'text.secondary',
};

const price: SxProps<Theme> = {
  whiteSpace: 'nowrap',
  fontWeight: 400,
};

const actions: SxProps<Theme> = {
  px: 3,
  pb: 3,
};

const image: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const closedHint: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: 'center',
  mt: 1.5,
};

const Styles = {
  card,
  media,
  soldOutOverlay,
  content,
  titleRow,
  description,
  price,
  actions,
  image,
  closedHint,
};

export default Styles;
