import React from 'react';

export default function QuoteOfTheDay() {
  return (
    <section className="bg-[#EDEBE4]">
      <div className="py-40 container px-4 mx-auto my-5">
        <h2 className="relative font-serif capitalize font-normal text-3xl md:text-4xl lg:text-5xl lg:after:content-vector after:absolute after:top-6 after:left-0 after:right-0 after:m-auto text-center mb-14">
          Quote of the day
        </h2>
        <p className="text-center font-sans font-normal text-[#7A7A7A] leading-10 text-2xl mb-5">
          “The more that you read, the more things you will know.
          <br />
          The more that you learn, the more places you’ll go.”
        </p>
        <p className="text-center capitalize font-serif font-normal text-[#111111] text-xl">
          Dr. Seuss
        </p>
      </div>
    </section>
  );
}
