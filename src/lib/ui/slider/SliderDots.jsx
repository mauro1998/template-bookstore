import React from 'react';
import uid from '../../util/util';

function SliderDot({ isActive = false, onChange }) {
  const outerActiveStyles = isActive
    ? 'border border-solid border-[#D7D5CC]'
    : '';
  const outerStyles = `w-8 aspect-square rounded-full relative transition-all mr-2 hover:border hover:border-solid hover:border-[#D7D5CC] active:bg-[rgba(0,0,0,.05)] ${outerActiveStyles}`;
  const innerActiveStyles = isActive
    ? 'after:bg-[#74642F]'
    : 'after:bg-[#D7D5CC]';
  const innerStyles = `after:block after:absolute after:m-auto after:top-0 after:left-0 after:bottom-0 after:right-0 after:w-3 after:aspect-square after:rounded-full after:transition-all active:after:bg-[#74642F] ${innerActiveStyles}`;
  const styles = `${outerStyles} ${innerStyles}`;

  return <button type="button" className={styles} onClick={onChange} />;
}

export default function SliderDots({ count, activeIndex = 0, onChange }) {
  return (
    <div className="flex">
      {new Array(count).fill(null).map((_, i) => (
        <SliderDot
          key={uid()}
          isActive={i === activeIndex}
          onChange={() => onChange(i)}
        />
      ))}
    </div>
  );
}
