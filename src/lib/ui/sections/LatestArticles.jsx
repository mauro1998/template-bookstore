import React from 'react';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import logo1 from '../../../assets/icons/social/social-v1.svg';
import logo2 from '../../../assets/icons/social/social-v2.svg';
import logo4 from '../../../assets/icons/social/social-v4.svg';
import reading1 from '../../../assets/images/reading-1.png';
import reading2 from '../../../assets/images/reading-2.png';
import reading3 from '../../../assets/images/reading-3.png';
import uid from '../../util/util';
import OutlinedButton from '../common/OutlinedButton';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';

export default function LatestArticles() {
  const articles = [
    {
      title: 'Reading books always makes the moments happy',
      date: '2 aug, 2021',
      category: 'inspiration',
      image: reading1,
      href: '#',
    },
    {
      title: 'Reading books always makes the moments happy',
      date: '2 aug, 2021',
      category: 'inspiration',
      image: reading2,
      href: '#',
    },
    {
      title: 'Reading books always makes the moments happy',
      date: '2 aug, 2021',
      category: 'inspiration',
      image: reading3,
      href: '#',
    },
  ];

  const socialLinks = [logo1, logo4, logo2];

  return (
    <Section className="lg:h-screen">
      <div className="container px-4 mx-auto relative flex flex-col justify-center h-full">
        <SectionHeader title="Latest articles" subtitle="Read our articles" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {articles.map((article) => (
            <div key={uid()} className="relative select-none">
              <a
                href={article.href}
                className="cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
                <img
                  draggable="false"
                  className="block mb-8"
                  src={article.image}
                  alt="people reading books"
                />
                <span className="block font-serif font-normal text-[0.9375rem] text-[#74642F] tracking-[0.06rem] mb-3">
                  {article.date}
                </span>
                <h3 className="font-serif font-normal text-2xl leading-10 mb-7">
                  {article.title}
                </h3>
                <hr className="border-[#C8C8C8]" />
              </a>
              <div className="flex justify-between mt-4">
                <span className="uppercase font-sans font-normal tracking-[0.12em] text-[#777777] text-[0.9375rem]">
                  {article.category}
                </span>
                <div className="flex items-end relative -top-1">
                  {socialLinks.map((logo) => (
                    <a key={uid()} href="/" className="py-2 px-2 first:-ml-3">
                      <img src={logo} alt="social icon" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <OutlinedButton icon={arrowRightIcon}>
            read all articles
          </OutlinedButton>
        </div>
      </div>
    </Section>
  );
}
