'use client';

import Styles from '@components/shared/app-link/AppLink.style';
import { Box, type SxProps, type Theme } from '@mui/material';
import Link from 'next/link';
import { type FC, type ReactNode } from 'react';

type AppLinkProps = {
  href: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  children: ReactNode;
};

/** עוטף את `next/link` בגבול לקוח, כדי שדפי שרת יוכלו לקשר בלי להפוך ללקוח. */
const AppLink: FC<AppLinkProps> = ({ href, sx, onClick, children }) => (
  <Box component={Link} href={href} onClick={onClick} sx={{ ...Styles.link, ...sx }}>
    {children}
  </Box>
);

export default AppLink;
