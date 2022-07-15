import React from 'react';

export default function Tab({ children, href, isActive = false, onClick }) {
  const className = isActive
    ? 'text-[#111111] after:absolute after:left-0 after:w-full after:-bottom-[10px] after:border-b-[2px] after:border-[#9A884C]'
    : 'text-[#999999]';
  return (
    <a
      href={href}
      className={`relative cursor-pointer font-sans font-medium text-base tracking-[0.04rem] ${className} mx-4`}
      onClick={onClick}>
      {children}
    </a>
  );
}
