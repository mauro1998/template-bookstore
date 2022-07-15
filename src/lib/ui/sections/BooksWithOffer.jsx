import React from 'react';
import arrowRightIcon from '../../../assets/icons/buttons/arrow-right.svg';
import book1 from '../../../assets/images/off-book-1.svg';
import book2 from '../../../assets/images/off-book-2.svg';
import book3 from '../../../assets/images/off-book-3.svg';
import book4 from '../../../assets/images/off-book-4.svg';
import uid from '../../util/util';
import BookThumbnail from '../common/BookThumbnail';
import FlatButton from '../common/FlatButton';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Slider from '../slider/Slider';

export default function BooksWithOffer() {
  const books = [
    {
      title: 'Way of happiness',
      author: 'Ananda Kumar',
      price: 40,
      originalPrice: 50,
      image: book1,
    },
    {
      title: 'Fashion System',
      author: 'Kevin Spear',
      price: 35,
      originalPrice: 40,
      image: book2,
    },
    {
      title: 'Musical',
      author: 'Karim Achard',
      price: 36,
      originalPrice: 45,
      image: book3,
    },
    {
      title: 'Life of seacrits',
      author: 'Galista Marie',
      price: 32,
      originalPrice: 45,
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
              title="Books With Offer"
              subtitle="Grab your opportunity"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
              {books.map((book) => (
                <BookThumbnail
                  key={uid()}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  originalPrice={book.originalPrice}
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
