import React from 'react';
import FlatButton from '../common/FlatButton';
import messageIcon from '../../../assets/icons/buttons/message.svg';

export default function NewsletterSubscribtion() {
  return (
    <section className="bg-[#EDEBE4]">
      <div className="py-40 container px-32 mx-auto my-5">
        <div className="flex gap-4">
          <h2 className="flex-1 relative font-serif capitalize font-normal text-3xl md:text-4xl lg:text-5xl leading-10 lg:leading-[4.0625rem] lg:after:content-vector after:absolute after:-bottom-8 after:left-0 after:m-auto text-left mb-14">
            Subscribe to
            <br />
            our newsletter
          </h2>
          <div className="flex-[1.2]">
            <p className="text-left font-sans font-normal text-[#7A7A7A] leading-8 tracking-[0.02rem] text-base mb-11">
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </p>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Enter your email addresss here"
                className="block w-full transition-all py-2 bg-transparent outline-none border-b-[1px] border-b-[#6F6F6F] focus:border-b-[#111111] placeholder:font-sans placeholder:font-normal placeholder:text-base placeholder:tracking-[0.04rem] placeholder:capitalize placeholder:text-[#7A7A7A] focus:placeholder:text-[#111111] placeholder:transition-colors"
              />
              <div className="absolute top-0 -right-4">
                <FlatButton icon={messageIcon}>SEND</FlatButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
