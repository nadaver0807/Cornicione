import { type SxProps, type Theme } from '@mui/material';

const drawer: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: { xs: '100%', sm: 380 },
    bgcolor: 'background.default',
    borderInlineStart: '1px solid',
    borderColor: 'divider',
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

const list: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  px: 3,
  py: 4,
  gap: 3.5,
};

const linkTitle: SxProps<Theme> = {
  fontSize: '1.35rem',
  fontWeight: 300,
  color: 'text.primary',
  textDecoration: 'none',
};

const linkDescription: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '0.8rem',
  letterSpacing: '0.06em',
  mt: 0.5,
};

const Styles = { drawer, header, list, linkTitle, linkDescription };

export default Styles;
