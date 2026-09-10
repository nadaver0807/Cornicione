import { type SxProps, type Theme } from '@mui/material';

const fab: SxProps<Theme> = {
  position: 'fixed',
  insetInlineStart: { xs: 16, md: 28 },
  bottom: { xs: 16, md: 28 },
  zIndex: 1200,
  bgcolor: 'background.paper',
  color: 'text.primary',
  border: '1px solid',
  borderColor: 'divider',
  '&:hover': { bgcolor: 'background.paper', borderColor: 'text.primary' },
};

const Styles = { fab };

export default Styles;
