import { type SxProps, type Theme } from '@mui/material';

const layout: SxProps<Theme> = {
  display: 'grid',
  gap: { xs: 6, md: 8 },
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  alignItems: 'start',
};

const details: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

const detailRow: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  borderBottom: '1px solid',
  borderColor: 'divider',
  pb: 2.5,
};

const detailLabel: SxProps<Theme> = {
  color: 'text.secondary',
  letterSpacing: '0.24em',
  fontSize: '0.7rem',
};

const detailValue: SxProps<Theme> = {
  color: 'text.primary',
  textDecoration: 'none',
  fontSize: '1.05rem',
  '&:hover': { opacity: 0.7 },
};

const formTitle: SxProps<Theme> = {
  mb: 3,
};

const statusRow: SxProps<Theme> = {
  mt: 4,
};

const Styles = {
  layout,
  details,
  detailRow,
  detailLabel,
  detailValue,
  formTitle,
  statusRow,
};

export default Styles;
