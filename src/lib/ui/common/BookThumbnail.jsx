import React from 'react';

export default function BookThumbnail({
  title,
  author,
  price,
  originalPrice,
  image,
}) {
  return (
    <div className="block mx-auto text-center max-w-[20.375rem] w-full">
      <div className="bg-[#EFEEE8] border border-[#EAE8DF] mb-6">
        {image && (
          <img
            draggable="false"
            className="inline-block"
            src={image}
            alt={title}
          />
        )}
      </div>
      <h3 className="font-serif font-normal capitalize text-base xl:text-[1.375rem] text-[#74642F] mb-2">
        {title}
      </h3>
      <span className="block font-sans font-normal text-sm text-[#888888] tracking-[0.02rem] mb-5">
        {author}
      </span>
      <div className="flex items-center justify-center">
        {originalPrice && (
          <span className="block font-serif font-normal text-xs line-through tracking-[0.02em] text-[#999999] mr-4">
            {`$ ${originalPrice.toFixed(2)}`}
          </span>
        )}
        <span className="block font-serif font-normal text-base lg:text-lg tracking-[0.02em] text-[#74642F]">
          {`$ ${price.toFixed(2)}`}
        </span>
      </div>
    </div>
  );
}
