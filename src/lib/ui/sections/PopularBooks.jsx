import React, { useState } from 'react';
import book1 from '../../../assets/images/pop-book-1.svg';
import book2 from '../../../assets/images/pop-book-2.svg';
import book3 from '../../../assets/images/pop-book-3.svg';
import book4 from '../../../assets/images/pop-book-4.svg';
import book5 from '../../../assets/images/pop-book-5.svg';
import book6 from '../../../assets/images/pop-book-6.svg';
import book7 from '../../../assets/images/pop-book-7.svg';
import book8 from '../../../assets/images/pop-book-8.svg';
import uid from '../../util/util';
import BookThumbnail from '../common/BookThumbnail';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Tab from '../common/Tab';

function Tabs() {
  const [tabs, updateTabs] = useState([
    {
      label: 'All Genre',
      active: true,
    },
    {
      label: 'Business',
      active: false,
    },
    {
      label: 'Technology',
      active: false,
    },
    {
      label: 'Adventure',
      active: false,
    },
    {
      label: 'Romantic',
      active: false,
    },
    {
      label: 'Fictional',
      active: false,
    },
  ]);

  const onClickTab = (index) => {
    updateTabs((state) =>
      state.map((tab, i) => ({
        ...tab,
        active: i === index,
      })),
    );
  };

  return (
    <>
      {tabs.map((tab, i) => (
        <Tab key={uid()} isActive={tab.active} onClick={() => onClickTab(i)}>
          {tab.label}
        </Tab>
      ))}
    </>
  );
}

function Books() {
  const [books] = useState([
    {
      title: 'Portrait photography',
      author: 'Adam Silber',
      price: 45,
      image: book1,
    },
    {
      title: 'Once upon a time',
      author: 'Klien Marry',
      price: 35,
      image: book2,
    },
    {
      title: 'Tips of simple lifestyle',
      author: 'Bratt Smith',
      price: 35,
      image: book3,
    },
    {
      title: 'Just felt from outside',
      author: 'Nicole Wilson',
      price: 40,
      image: book4,
    },
    {
      title: 'Peaceful Enlightment',
      author: 'Marmik Lama',
      price: 45,
      image: book5,
    },
    {
      title: 'Great travel at desert',
      author: 'Sanchit Howdy',
      price: 38,
      image: book6,
    },
    {
      title: 'Life among the pirates',
      author: 'David Woodard',
      price: 38,
      image: book7,
    },
    {
      title: 'Simple way of piece life',
      author: 'Armor Ramsey',
      price: 40,
      image: book8,
    },
  ]);

  return (
    <>
      {books.map((book) => (
        <BookThumbnail
          key={uid()}
          title={book.title}
          author={book.author}
          price={book.price}
          image={book.image}
        />
      ))}
    </>
  );
}

export default function PopularBooks() {
  return (
    <Section>
      <div className="container px-4 mx-auto relative flex flex-col justify-center pt-24">
        <SectionHeader title="Popular Books" subtitle="Some quality items" />

        <div className="flex justify-center mb-14">
          <Tabs />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <Books />
        </div>

        <hr className="mb-6" />
      </div>
    </Section>
  );
}
