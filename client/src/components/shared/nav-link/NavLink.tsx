'use client';

import AppLink from '@components/shared/app-link/AppLink';
import Styles from '@components/shared/nav-link/NavLink.style';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const NavLink: FC<NavLinkProps> = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <AppLink href={href} onClick={onClick} sx={isActive ? Styles.activeLink : Styles.link}>
      {label}
    </AppLink>
  );
};

export default NavLink;
