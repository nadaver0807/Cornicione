import { type SxProps, type Theme } from '@mui/material';

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
  gridAutoRows: { xs: 160, md: 240 },
  gap: 2,
  mt: 6,
};

const image: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '16px',
  transition: 'transform 260ms ease',
  '&:hover': { transform: 'scale(1.03)' },
};

const tall: SxProps<Theme> = {
  gridRow: 'span 2',
};

const testimonials: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 5,
};

const testimonial: SxProps<Theme> = {
  borderRadius: '16px',
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  bgcolor: 'background.paper',
};

const author: SxProps<Theme> = {
  mt: 2,
  color: 'primary.main',
  fontWeight: 700,
};

const Styles = { grid, image, tall, testimonials, testimonial, author };

export default Styles;
