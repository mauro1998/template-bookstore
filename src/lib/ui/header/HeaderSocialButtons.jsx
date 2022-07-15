import React from 'react';
import logo1 from '../../../assets/icons/social/social-v1.svg';
import logo2 from '../../../assets/icons/social/social-v2.svg';
import logo3 from '../../../assets/icons/social/social-v3.svg';
import logo4 from '../../../assets/icons/social/social-v4.svg';
import logo5 from '../../../assets/icons/social/social-v5.svg';
import uid from '../../util/util';

export default function HeaderSocialButtons() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="lg:flex items-end hidden">
      {logos.map((logo) => (
        <a key={uid()} href="/" className="py-2 px-3 first:-ml-3">
          <img src={logo} alt="social icon" />
        </a>
      ))}
    </div>
  );
}
