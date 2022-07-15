import React from 'react';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import bgPattern1 from '../../../assets/images/bg-pattern-1.svg';
import bgPattern2 from '../../../assets/images/bg-pattern-2.svg';
import book from '../../../assets/images/book-5.svg';
import FlatButton from '../common/FlatButton';
import Section from '../common/Section';

export default function BestSellingBook() {
  return (
    <Section className="lg:h-screen">
      <div
        className="h-full w-full bg-[#EDEBE4] bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${bgPattern1})` }}>
        <div
          className="h-full w-full bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${bgPattern2})` }}>
          <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center">
            <img src={book} alt="book" />
            <div className="max-w-[30.375rem]">
              <h2 className="relative mb-14 font-serif font-normal text-3xl md:text-4xl lg:text-5xl lg:after:content-vector after:absolute after:top-6 after:left-0  text-center lg:text-left">
                Best Selling Book
              </h2>
              <span className="block font-sans font-medium text-[0.8125rem] uppercase text-[#888888] tracking-[0.16em] mb-8 text-center lg:text-left">
                By Timbur Hood
              </span>
              <h3 className="capitalize font-serif font-normal text-xl text-[#111111] mb-3 text-center lg:text-left">
                Birds Gonna Be Happy
              </h3>
              <p className="font-sans font-normal text-base text-[#7A7A7A] tracking-[0.02em] leading-8 mb-9 text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <span className="block font-serif font-normal text-[#74642F] capitalize tracking-[0.02em] mb-14 text-center lg:text-left">
                $ 45.00
              </span>
              <div className="block -ml-4 text-center lg:text-left">
                <FlatButton icon={arrowRightIcon}>Shop it now</FlatButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
