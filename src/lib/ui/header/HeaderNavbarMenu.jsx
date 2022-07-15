import React from 'react';
import barsIcon from '../../../assets/icons/menu/bars.svg';
import uid from '../../util/util';

export default function HeaderNavbarMenu() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Pages', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'Articles', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="flex items-center">
      <div className="hidden lg:flex">
        {links.map((link) => (
          <a
            key={uid()}
            className="font-sans font-normal uppercase px-5 text-base text-[#111111] first:text-[#74642F]"
            href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="cursor-pointer ml-10 p-3 -mr-3">
        <img src={barsIcon} alt="menu icon" />
      </div>
    </nav>
  );
}
