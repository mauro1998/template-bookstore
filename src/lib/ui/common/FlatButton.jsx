import React from 'react';

export default function FlatButton({ children, icon }) {
  return (
    <div className="inline-block">
      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 active:bg-[#E5E3DA] transition-colors">
        <span className="font-sans font-medium text-xs lg:text-sm xl:text-base capitalize tracking-[0.02rem] text-[#111111]">
          {children}
        </span>
        {icon && <img className="w-4 ml-3" src={icon} alt="button icon" />}
      </button>
    </div>
  );
}
