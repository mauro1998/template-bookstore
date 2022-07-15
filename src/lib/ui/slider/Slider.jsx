import React, { useState } from 'react';
import arrowLeftIcon from '../../../assets/icons/buttons/arrow-left.svg';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import SliderDots from './SliderDots';

function SliderButton({ icon, position }) {
  const classname = `absolute z-20 top-0 bottom-0 m-auto cursor-pointer border border-solid border-[#E5E3DA] rounded-full w-14 aspect-square flex justify-center items-center bg-booksaw active:bg-[#E5E3DA] transition-colors ${position}`;

  return (
    <button type="button" className={classname}>
      <img src={icon} alt="slider button icon" />
    </button>
  );
}

export default function Slider({
  render,
  count = 1,
  showButtons = true,
  dotsStyles,
}) {
  const [activeSlideIndex, setSlideIndex] = useState(0);
  const onChangeSlideIndex = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="relative h-full">
      {showButtons && <SliderButton icon={arrowLeftIcon} position="left-3" />}
      <div className="relative container px-4 mx-auto h-full">
        {render(activeSlideIndex)}

        <div className={dotsStyles}>
          <SliderDots
            count={count}
            activeIndex={activeSlideIndex}
            onChange={onChangeSlideIndex}
          />
        </div>
      </div>
      {showButtons && <SliderButton icon={arrowRightIcon} position="right-3" />}
    </div>
  );
}
