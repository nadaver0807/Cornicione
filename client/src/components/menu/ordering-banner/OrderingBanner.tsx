'use client';

import Styles from '@components/menu/ordering-banner/OrderingBanner.style';
import { useOpeningStatus } from '@/hooks/opening-hours/useOpeningStatus';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

/** באנר מצב ההזמנות — מוצג כשההזמנות סגורות, עם ההודעה שהמנהלן הגדיר. */
const OrderingBanner: FC = () => {
  const { status } = useOpeningStatus();

  if (!status) {
    return null;
  }

  return (
    <Box
      role="status"
      aria-live="polite"
      aria-label="מצב הזמנות טייקאווי"
      sx={status.isOpen ? Styles.bannerOpen : Styles.bannerClosed}
    >
      <Box sx={status.isOpen ? Styles.dotOpen : Styles.dotClosed} aria-hidden="true" />
      <Box>
        <Typography sx={Styles.title}>
          {status.isOpen ? 'ההזמנות פתוחות' : 'הזמנות הטייקאווי סגורות כרגע'}
        </Typography>
        <Typography variant="body2" sx={Styles.message}>
          {status.isOpen ? status.windowLabel : status.message}
        </Typography>
        {status.isOpen ? null : (
          <Typography variant="body2" sx={Styles.message}>
            אפשר לעיין בתפריט — ההזמנה תיפתח שוב בקרוב.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default OrderingBanner;
