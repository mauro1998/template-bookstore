import React from 'react';
import img1 from '../../../assets/images/logo-pic-1.svg';
import img2 from '../../../assets/images/logo-pic-2.svg';
import img3 from '../../../assets/images/logo-pic-3.svg';
import img4 from '../../../assets/images/logo-pic-4.svg';
import img5 from '../../../assets/images/logo-pic-5.svg';
import uid from '../../util/util';

export default function PanelAssociatedWith() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-12 bg-[#EDEBE4]">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {images.map((img) => (
          <div key={uid()} className="flex-1 text-center">
            <img
              className="inline-block align-middle"
              src={img}
              alt="associated with logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
