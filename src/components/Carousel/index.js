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
    content: 'Food Avenue',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Fashion District',
    imgUrl: 'images/2_Fashion.png',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Health & Wellness',
    imgUrl: 'images/3_Health.png',
  },
];

const cardsDataMiddle = [
  {
    id: 4,
    title: 'CARD 4',
    content: 'Speciality Services',
    imgUrl: 'images/4_Speciality.png',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'IK Thrift Store',
    imgUrl: 'images/5_Thrift.png',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Grocery & Fresh Produce',
    imgUrl: 'images/6_Grocery.png',
  },
];

const cardsDataBottom = [
  {
    id: 7,
    title: 'CARD 7',
    content: 'Appliances & Tech Gadgets',
    imgUrl: 'images/7_applicance.png',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Hardware & Industrial Supplies',
    imgUrl: 'images/8_hardware.png',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
  },
];

const cardsDataMobile = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Food Avenue',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Fashion District',
    imgUrl: 'images/2_Fashion.png',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Health & Wellness',
    imgUrl: 'images/3_Health.png',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Speciality Services',
    imgUrl: 'images/4_Speciality.png',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'IK Thrift Store',
    imgUrl: 'images/5_Thrift.png',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Grocery & Fresh Produce',
    imgUrl: 'images/6_Grocery.png',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Appliances & Tech Gadgets',
    imgUrl: 'images/7_applicance.png',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Hardware & Industrial Supplies',
    imgUrl: 'images/8_hardware.png',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselTop = () => (
  <Carousel
    // ssr
    // infinite
    // autoPlay
    // autoPlaySpeed={3000}
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
    // infinite
    // autoPlay
    // autoPlaySpeed={3000}
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
    // infinite
    // autoPlay
    // autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataBottom.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

export const CarouselMobile = () => (
  <Carousel
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataMobile.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);
