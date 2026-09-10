import { type SxProps, type Theme } from '@mui/material';

const layout: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  bgcolor: 'background.default',
};

const main: SxProps<Theme> = {
  flex: 1,
};

const Styles = { layout, main };

export default Styles;
