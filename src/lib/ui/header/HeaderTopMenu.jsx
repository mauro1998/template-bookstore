import React from 'react';
import accountIcon from '../../../assets/icons/menu/account.svg';
import cartIcon from '../../../assets/icons/menu/cart.svg';
import searchIcon from '../../../assets/icons/menu/search.svg';

function HeaderTopMenuButton({ label, icon, href = '#' }) {
  return (
    <a href={href} className="flex items-center px-6 py-2 last:-mr-6">
      <img
        src={icon}
        alt="icon"
        className="text-[#111111] relative -top-[2px]"
      />
      <span className="font-sans font-normal text-xs uppercase text-[#777777] ml-2">
        {label}
      </span>
    </a>
  );
}

export default function HeaderTopMenu() {
  return (
    <div className="flex items-center justify-end">
      <HeaderTopMenuButton label="Account" icon={accountIcon} />
      <div className="w-[1px] h-4 bg-[#E0E0E0]" />
      <HeaderTopMenuButton label="Cart:(0$)" icon={cartIcon} />
      <div className="w-[1px] h-4 bg-[#E0E0E0]" />
      <HeaderTopMenuButton label="Search" icon={searchIcon} />
    </div>
  );
}
