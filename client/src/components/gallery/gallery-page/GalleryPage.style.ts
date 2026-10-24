import { type SxProps, type Theme } from '@mui/material';

const filters: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1.5,
  mb: 5,
};

const filter: SxProps<Theme> = {
  px: 2.5,
  py: 1,
  border: '1px solid',
  borderColor: 'divider',
  color: 'text.secondary',
  fontSize: '0.85rem',
  letterSpacing: '0.08em',
  transition: 'color 200ms ease, border-color 200ms ease',
  '&:hover': { color: 'text.primary', borderColor: 'text.primary' },
};

const filterActive: SxProps<Theme> = {
  ...filter,
  color: 'primary.contrastText',
  bgcolor: 'primary.main',
  borderColor: 'primary.main',
  '&:hover': { color: 'primary.contrastText', borderColor: 'primary.main' },
};

const grid: SxProps<Theme> = {
  listStyle: 'none',
  m: 0,
  p: 0,
  columnCount: { xs: 2, md: 3 },
  columnGap: 2,
};

const item: SxProps<Theme> = {
  breakInside: 'avoid',
  mb: 2,
};

const tile: SxProps<Theme> = {
  display: 'block',
  width: '100%',
};

const image: SxProps<Theme> = {
  width: '100%',
  display: 'block',
  bgcolor: 'action.hover',
};

const Styles = { filters, filter, filterActive, grid, item, tile, image };

export default Styles;
