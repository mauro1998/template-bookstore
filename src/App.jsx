import React from 'react';
import Header from './lib/ui/header/Header';
import BestSellingBook from './lib/ui/sections/BestSellingBook';
import BookSlideshow from './lib/ui/sections/BookSlideshow';
import BooksWithOffer from './lib/ui/sections/BooksWithOffer';
import FeaturedBooks from './lib/ui/sections/FeaturedBooks';
import LatestArticles from './lib/ui/sections/LatestArticles';
import NewsletterSubscribtion from './lib/ui/sections/NewsletterSubscribtion';
import PanelAssociatedWith from './lib/ui/sections/PanelAssociatedWith';
import PopularBooks from './lib/ui/sections/PopularBooks';
import QuoteOfTheDay from './lib/ui/sections/QuoteOfTheDay';

function App() {
  return (
    <>
      <Header />
      <BookSlideshow />
      <PanelAssociatedWith />
      <FeaturedBooks />
      <BestSellingBook />
      <PopularBooks />
      <QuoteOfTheDay />
      <BooksWithOffer />
      <NewsletterSubscribtion />
      <LatestArticles />
    </>
  );
}

export default App;
