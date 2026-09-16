'use client';

import Styles from '@components/layout/header/Header.style';
import NavDrawer from '@components/layout/nav-drawer/NavDrawer';
import NavLink from '@components/shared/nav-link/NavLink';
import AppLink from '@components/shared/app-link/AppLink';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import { NAV_LINKS, SECONDARY_NAV_LINKS, SITE } from '@shared/consts/site.const';
import { Route } from '@shared/enums/route.enum';
import { useState, type FC } from 'react';
import { useCart } from '@/hooks/cart/useCart';

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { totals, setIsOpen } = useCart();

  return (
    <AppBar position='sticky' elevation={0} sx={Styles.appBar}>
      <Toolbar sx={Styles.toolbar} disableGutters>
        <AppLink href={Route.Home} sx={Styles.brand}>
          {SITE.name.toUpperCase()}
        </AppLink>
        <Box component='nav' sx={Styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <Box sx={Styles.secondaryNav}>
            {SECONDARY_NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </Box>
        </Box>
        <Box sx={Styles.actions}>
          <IconButton sx={Styles.cartButton} onClick={() => setIsOpen(true)} aria-label='עגלה'>
            <Badge badgeContent={totals.itemsCount} color='primary'>
              <ShoppingBagOutlinedIcon fontSize='small' />
            </Badge>
          </IconButton>
          <IconButton sx={Styles.menuButton} onClick={() => setIsNavOpen(true)} aria-label='תפריט'>
            <MenuIcon fontSize='small' />
          </IconButton>
        </Box>
      </Toolbar>
      <NavDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </AppBar>
  );
};

export default Header;
