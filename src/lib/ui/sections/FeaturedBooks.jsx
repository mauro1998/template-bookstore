import React from 'react';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import book1 from '../../../assets/images/book-1.svg';
import book2 from '../../../assets/images/book-2.svg';
import book3 from '../../../assets/images/book-3.svg';
import book4 from '../../../assets/images/book-4.svg';
import uid from '../../util/util';
import BookThumbnail from '../common/BookThumbnail';
import FlatButton from '../common/FlatButton';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Slider from '../slider/Slider';

export default function FeaturedBooks() {
  const books = [
    {
      title: 'Simple way of piece life',
      author: 'Armor Ramsey',
      price: 40,
      image: book1,
    },
    {
      title: 'Great travel at desert',
      author: 'Sanchit Howdy',
      price: 38,
      image: book2,
    },
    {
      title: 'The lady beauty Scarlett',
      author: 'Arthur Doyle',
      price: 45,
      image: book3,
    },
    {
      title: 'Once upon a time',
      author: 'Klien Marry',
      price: 35,
      image: book4,
    },
  ];

  return (
    <Slider
      dotsStyles="absolute bottom-8 flex items-center justify-center w-full"
      showButtons={false}
      count={3}
      render={() => (
        <Section className="lg:h-screen">
          <div className="container px-4 mx-auto relative flex flex-col justify-center h-full">
            <SectionHeader
              title="Featured Books"
              subtitle="Some quality items"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
              {books.map((book) => (
                <BookThumbnail
                  key={uid()}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  image={book.image}
                />
              ))}
            </div>

            <hr className="mb-6" />

            <div className="absolute bottom-8 right-0 z-10">
              <FlatButton icon={arrowRightIcon}>View All Products</FlatButton>
            </div>
          </div>
        </Section>
      )}
    />
  );
}
