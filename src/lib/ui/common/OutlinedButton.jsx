import React from 'react';

export default function OutlinedButton({ children, icon }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center px-5 py-2 lg:px-7 xl:px-9 xl:py-3 border border-solid border-[#C0C0C0] active:bg-[#E5E3DA] transition-colors">
      <span className="font-sans font-normal text-xs lg:text-sm xl:text-base uppercase tracking-[0.1rem] text-[#111111]">
        {children}
      </span>
      {icon && <img className="w-4 ml-3" src={icon} alt="button icon" />}
    </button>
  );
}
