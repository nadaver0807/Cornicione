import { type SxProps, type Theme } from '@mui/material';

const drawer: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: { xs: '100%', sm: 420 },
    bgcolor: 'background.default',
  },
};

const header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 3,
  py: 2.5,
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const items: SxProps<Theme> = {
  flex: 1,
  overflowY: 'auto',
  px: 3,
  py: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

const item: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 2,
  pb: 2.5,
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const itemMeta: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '0.78rem',
  mt: 0.5,
};

const quantityRow: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  mt: 1,
};

const footer: SxProps<Theme> = {
  px: 3,
  py: 3,
  borderTop: '1px solid',
  borderColor: 'divider',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const totalRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
};

const empty: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: 'center',
  py: 8,
};

const container: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const Styles = {
  drawer,
  header,
  items,
  item,
  itemMeta,
  quantityRow,
  footer,
  totalRow,
  empty,
  container,
};

export default Styles;
