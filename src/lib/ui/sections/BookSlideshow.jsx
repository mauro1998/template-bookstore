import React from 'react';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import slideshowImage from '../../../assets/images/pic-1.svg';
import OutlinedButton from '../common/OutlinedButton';
import Section from '../common/Section';
import Slider from '../slider/Slider';

function Slide() {
  return (
    <div className="pt-[8.8125rem] h-full py-8 flex lg:items-center">
      <div className="lg:flex-1 xl:pl-20">
        <h1 className="font-serif font-normal xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-4">
          Life Of The Wild
        </h1>
        <p className="font-sans font-normal xl:text-base text-sm xl:leading-9 lg:leading-8 leading-7 text-[#7A7A7A] tracking-[0.04rem] lg:mb-20 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
          magna velit eleifend. Amet, quis urna, a eu.
        </p>
        <OutlinedButton icon={arrowRightIcon}>Read More</OutlinedButton>
      </div>

      <div
        className="hidden lg:block flex-1 h-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slideshowImage})` }}
      />
    </div>
  );
}

export default function BookSlideshow() {
  return (
    <Section className="lg:h-screen">
      <Slider
        count={3}
        render={() => <Slide />}
        dotsStyles="absolute bottom-8 xl:left-24"
      />
    </Section>
  );
}
