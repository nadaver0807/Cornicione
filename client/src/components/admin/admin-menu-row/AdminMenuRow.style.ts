import { type SxProps, type Theme } from '@mui/material';

const row: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  py: 2,
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const thumb: SxProps<Theme> = {
  width: 56,
  height: 56,
  objectFit: 'cover',
  flexShrink: 0,
  bgcolor: 'action.hover',
};

const details: SxProps<Theme> = {
  flexGrow: 1,
  minWidth: 0,
};

const name: SxProps<Theme> = {
  fontWeight: 400,
};

const meta: SxProps<Theme> = {
  color: 'text.secondary',
};

const Styles = { row, thumb, details, name, meta };

export default Styles;
