import { type SxProps, type Theme } from '@mui/material';

const root: SxProps<Theme> = {
  position: 'fixed',
  insetInlineEnd: 16,
  bottom: 24,
  zIndex: 1300,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 1,
};

const panel: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  minWidth: 200,
  p: 2,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
};

const title: SxProps<Theme> = {
  fontSize: '0.72rem',
  letterSpacing: '0.25em',
  color: 'text.secondary',
  mb: 1,
};

const fab: SxProps<Theme> = {
  bgcolor: 'background.paper',
  color: 'text.primary',
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: 'none',
  '&:hover': { bgcolor: 'background.paper' },
};

const Styles = { root, panel, title, fab };

export default Styles;
