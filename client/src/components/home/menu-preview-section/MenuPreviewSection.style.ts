import { type SxProps, type Theme } from '@mui/material';

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 6,
};

const card: SxProps<Theme> = {
  borderRadius: '16px',
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  bgcolor: 'background.paper',
  transition: 'transform 220ms ease, border-color 220ms ease',
  '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
};

const description: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 1,
};

const note: SxProps<Theme> = {
  mt: 5,
  color: 'primary.main',
  fontWeight: 700,
};

const Styles = { grid, card, description, note };

export default Styles;
