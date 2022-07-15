import React from 'react';
import HeaderNavbarLogo from './HeaderNavbarLogo';
import HeaderNavbarMenu from './HeaderNavbarMenu';

export default function HeaderNavbar() {
  return (
    <nav className="container px-4 mx-auto flex items-center justify-between">
      <HeaderNavbarLogo />
      <HeaderNavbarMenu />
    </nav>
  );
}
