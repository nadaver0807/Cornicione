import { type SxProps, type Theme } from '@mui/material';

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 6,
};

const card: SxProps<Theme> = {
  position: 'relative',
  borderRadius: '16px',
  overflow: 'hidden',
  p: { xs: 3, md: 4 },
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  transition: 'transform 260ms ease, box-shadow 260ms ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 8px 24px rgba(28, 25, 23, 0.08)',
  },
};

const cardHighlight: SxProps<Theme> = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  border: 'none',
};

const image: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  borderRadius: 3,
};

const index: SxProps<Theme> = {
  opacity: 0.6,
};

const description: SxProps<Theme> = {
  flex: 1,
};

const Styles = { grid, card, cardHighlight, image, index, description };

export default Styles;
