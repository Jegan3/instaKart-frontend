import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 2,
  },
};

const cardsDataTop = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Clark Kent',
    imgUrl: 'https://unsplash.it/200/200',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Bruce Wayne',
    imgUrl: 'https://unsplash.it/201/200',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Peter Parker',
    imgUrl: 'https://unsplash.it/200/201',
  },
];

const cardsDataMiddle = [
  {
    id: 4,
    title: 'CARD 4',
    content: 'Shaun Paul',
    imgUrl: 'https://unsplash.it/200/202',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'Rock Anderson',
    imgUrl: 'https://unsplash.it/200/203',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'John Storm',
    imgUrl: 'https://unsplash.it/200/205',
  },
];

const cardsDataBottom = [
  {
    id: 7,
    title: 'CARD 7',
    content: 'Keith Parker',
    imgUrl: 'https://unsplash.it/203/207',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Keith Parker',
    imgUrl: 'https://unsplash.it/203/207',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Keith Parker',
    imgUrl: 'https://unsplash.it/203/207',
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselTop = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataTop.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

export const CarouselMiddle = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataMiddle.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

export const CarouselBottom = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataBottom.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

