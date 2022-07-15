import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="text-center mb-14">
      <span className="block font-sans uppercase font-medium text-[0.8125rem] tracking-[0.12rem] text-[#7A7A7A] mb-5">
        {subtitle}
      </span>
      <h2 className="relative font-serif font-normal capitalize text-5xl text-[#111111] before:relative before:block before:w-full before:h-[1px] before:bg-[#E0E0E0] before:top-6">
        <span className="bg-booksaw relative inline-block z-10 px-20">
          {title}
        </span>
      </h2>
    </header>
  );
}
