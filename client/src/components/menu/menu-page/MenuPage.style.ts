import { type SxProps, type Theme } from '@mui/material';

const notice: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 620,
  mt: 3,
};

const windowChip: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1.5,
  mt: 4,
  px: 2.5,
  py: 1.25,
  border: '1px solid',
  borderColor: 'divider',
  letterSpacing: '0.14em',
  fontSize: '0.8rem',
};

const categoryTitle: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 2,
  mb: 5,
};

const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  gap: 3,
};

const state: SxProps<Theme> = {
  color: 'text.secondary',
  py: 6,
};

const categoryGroup: SxProps<Theme> = {
  mb: 10,
};

const Styles = { notice, windowChip, categoryTitle, grid, state, categoryGroup };

export default Styles;
