import { type SxProps, type Theme } from '@mui/material';

const group: SxProps<Theme> = {
  '&:not(:last-of-type)': {
    mb: { xs: 8, md: 12 },
  },
};

const description: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 620,
  mb: 5,
};

const grid: SxProps<Theme> = {
  display: 'grid',
  gap: 2,
  gridTemplateColumns: {
    xs: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  },
};

const image: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  display: 'block',
  bgcolor: 'action.hover',
};

const placeholder: SxProps<Theme> = {
  border: '1px dashed',
  borderColor: 'divider',
  color: 'text.secondary',
  px: 3,
  py: 6,
  textAlign: 'center',
  fontSize: '0.9rem',
};

const Styles = { group, description, grid, image, placeholder };

export default Styles;
