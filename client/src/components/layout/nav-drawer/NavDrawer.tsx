'use client';

import Styles from '@components/layout/nav-drawer/NavDrawer.style';
import AppLink from '@components/shared/app-link/AppLink';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { NAV_LINKS, SITE } from '@shared/consts/site.const';
import { type FC } from 'react';

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer: FC<NavDrawerProps> = ({ isOpen, onClose }) => (
  <Drawer anchor="left" open={isOpen} onClose={onClose} sx={Styles.drawer}>
    <Box sx={Styles.header}>
      <Typography variant="overline">{SITE.name.toUpperCase()}</Typography>
      <IconButton onClick={onClose} aria-label="סגירה">
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
    <Box sx={Styles.list}>
      {NAV_LINKS.map((link) => (
        <AppLink key={link.href} href={link.href} onClick={onClose} sx={Styles.linkTitle}>
          {link.label}
          <Typography sx={Styles.linkDescription}>{link.description}</Typography>
        </AppLink>
      ))}
    </Box>
  </Drawer>
);

export default NavDrawer;
