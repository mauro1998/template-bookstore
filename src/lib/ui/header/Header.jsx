import React from 'react';
import HeaderNavbar from './HeaderNavbar';
import HeaderSocialButtons from './HeaderSocialButtons';
import HeaderTopMenu from './HeaderTopMenu';

export default function Header() {
  return (
    <header className="pt-6 absolute w-full bg-booksaw z-50">
      <div className="container px-4 flex lg:justify-between justify-end items-center mx-auto mb-3">
        <HeaderSocialButtons />
        <HeaderTopMenu />
      </div>
      <hr className="mb-6" />
      <HeaderNavbar />
    </header>
  );
}
