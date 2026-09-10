import { type SxProps, type Theme } from '@mui/material';

const dialogPaper: SxProps<Theme> = {
  bgcolor: 'background.default',
  backgroundImage: 'none',
};

const title: SxProps<Theme> = {
  px: 4,
  pt: 4,
  pb: 1,
};

const content: SxProps<Theme> = {
  px: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const sectionLabel: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 2,
};

const actions: SxProps<Theme> = {
  px: 4,
  pb: 4,
  pt: 3,
  gap: 1,
};

const Styles = { dialogPaper, title, content, sectionLabel, actions };

export default Styles;
