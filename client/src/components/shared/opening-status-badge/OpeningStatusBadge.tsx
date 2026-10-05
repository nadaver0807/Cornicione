'use client';

import { useOpeningStatus } from '@/hooks/opening-hours/useOpeningStatus';
import Styles from '@components/shared/opening-status-badge/OpeningStatusBadge.style';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

/** מציג אם מקבלים הזמנות כרגע — נורה ירוקה/אדומה והודעה קצרה. */
const OpeningStatusBadge: FC<{ isProminent?: boolean }> = ({ isProminent = false }) => {
  const { status } = useOpeningStatus();

  if (!status) {
    return null;
  }

  const dotStyle = isProminent
    ? status.isOpen
      ? Styles.openDotProminent
      : Styles.closedDotProminent
    : status.isOpen
      ? Styles.openDot
      : Styles.closedDot;

  return (
    <Box sx={isProminent ? Styles.badgeProminent : Styles.badge}>
      <Box sx={dotStyle} />
      <Typography sx={isProminent ? Styles.labelProminent : Styles.label}>
        {status.message}
      </Typography>
    </Box>
  );
};

export default OpeningStatusBadge;
