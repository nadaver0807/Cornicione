import { type SxProps, type Theme } from '@mui/material';

const header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  flexWrap: 'wrap',
  mb: 4,
};

const tabs: SxProps<Theme> = {
  borderBottom: '1px solid',
  borderColor: 'divider',
  mb: 4,
};

const state: SxProps<Theme> = {
  color: 'text.secondary',
  py: 4,
};

const orders: SxProps<Theme> = {
  display: 'grid',
  gap: 3,
  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
};

const Styles = { header, tabs, state, orders };

export default Styles;
