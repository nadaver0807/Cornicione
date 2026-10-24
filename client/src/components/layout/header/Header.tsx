'use client';

import Styles from '@components/layout/header/Header.style';
import NavDrawer from '@components/layout/nav-drawer/NavDrawer';
import AppLink from '@components/shared/app-link/AppLink';
import NavLink from '@components/shared/nav-link/NavLink';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { NAV_LINKS, SECONDARY_NAV_LINKS, SITE } from '@shared/consts/site.const';
import { Route } from '@shared/enums/route.enum';
import { useState, type FC } from 'react';

const HEADER_LINKS = [...NAV_LINKS, ...SECONDARY_NAV_LINKS];

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <AppBar component="header" position="fixed" sx={Styles.appBar}>
      <Toolbar sx={Styles.toolbar} disableGutters>
        <AppLink href={Route.Home} sx={Styles.brand}>
          {SITE.name.toUpperCase()}
        </AppLink>
        <Box component="nav" aria-label="ניווט ראשי" sx={Styles.nav}>
          {HEADER_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </Box>
        <Box sx={Styles.actions}>
          <AppLink href={Route.Menu} sx={Styles.cta}>
            להזמנה
          </AppLink>
          <IconButton
            sx={Styles.menuButton}
            onClick={() => setIsNavOpen(true)}
            aria-label="פתיחת תפריט הניווט"
            aria-expanded={isNavOpen}
            aria-haspopup="dialog"
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
      <NavDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </AppBar>
  );
};

export default Header;
