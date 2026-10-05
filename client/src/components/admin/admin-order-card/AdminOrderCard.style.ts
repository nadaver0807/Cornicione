import { type SxProps, type Theme } from '@mui/material';

const card: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: 2,
};

const meta: SxProps<Theme> = {
  color: 'text.secondary',
};

const items: SxProps<Theme> = {
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: 'divider',
  py: 1.5,
};

const footer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
};

const statusField: SxProps<Theme> = {
  minWidth: 180,
};

const Styles = { card, header, meta, items, footer, statusField };

export default Styles;
