import { type SxProps, type Theme } from '@mui/material';

const OPEN_COLOR = '#4CAF50';
const CLOSED_COLOR = '#D9534F';

const badge: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1.25,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 99,
  px: 2.5,
  py: 1,
};

const badgeProminent: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1.75,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 99,
  px: 3,
  py: 1.75,
  bgcolor: 'rgba(245, 243, 240, 0.04)',
};

const dot: SxProps<Theme> = {
  width: 9,
  height: 9,
  borderRadius: '50%',
  flexShrink: 0,
};

const openDot: SxProps<Theme> = {
  ...dot,
  bgcolor: OPEN_COLOR,
  boxShadow: `0 0 0 3px ${OPEN_COLOR}22, 0 0 12px ${OPEN_COLOR}`,
  animation: 'cornicione-pulse 2s ease-in-out infinite',
  '@keyframes cornicione-pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.45 },
  },
};

const closedDot: SxProps<Theme> = {
  ...dot,
  bgcolor: CLOSED_COLOR,
  boxShadow: `0 0 0 3px ${CLOSED_COLOR}22, 0 0 12px ${CLOSED_COLOR}`,
};

const dotProminent = {
  width: 14,
  height: 14,
};

const openDotProminent: SxProps<Theme> = {
  ...openDot,
  ...dotProminent,
};

const closedDotProminent: SxProps<Theme> = {
  ...closedDot,
  ...dotProminent,
};

const label: SxProps<Theme> = {
  fontSize: 14,
  color: 'text.primary',
};

const labelProminent: SxProps<Theme> = {
  fontSize: 16,
  color: 'text.primary',
  letterSpacing: '0.04em',
};

const Styles = {
  badge,
  badgeProminent,
  openDot,
  closedDot,
  openDotProminent,
  closedDotProminent,
  label,
  labelProminent,
};

export default Styles;
