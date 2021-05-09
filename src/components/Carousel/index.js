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

const businessRowFirst = [
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
    imgUrl: 'images/2_Fashion.jpg',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Health & Wellness',
    imgUrl: 'images/3_Health.png',
  },
];

const businessRowSecond = [
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
    url: 'http://vaibhavk13.sg-host.com/',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Grocery & Fresh Produce',
    imgUrl: 'images/6_Grocery.png',
  },
];

const businessRowThird = [
  {
    id: 7,
    title: 'CARD 7',
    content: 'Appliances & Tech Gadgets',
    imgUrl: 'images/7_applicance.jpg',
  },
  {
    id: 8,
    title: 'CARD 8',
    content: 'Automotive, Hardware & Industrial Supplies',
    imgUrl: 'images/8_hardware.png',
  },
  {
    id: 9,
    title: 'CARD 9',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
  },
];

const businessRowFourth = [
  {
    id: 10,
    title: 'CARD 10',
    content: 'Insta-Kart Elearning',
    imgUrl: 'images/10_TechGadgets.jpg',
    url: 'https://instakartelearning.com/chess-school/',
  },
  {
    id: 11,
    title: 'CARD 11',
    content: 'Social Media',
    imgUrl: 'images/11_TimeCap.png',
  },
  {
    id: 12,
    title: 'CARD 12',
    content: 'Wholesale Suppliers & Drop Shipping',
    imgUrl: 'images/12_WholesaleDS.jpg',
  },
];

const caroDataNewEStore = [
  {
    id: 1,
    title: 'CARD 1',
    imgUrl: 'images/pizza.jpg',
  },
  {
    id: 2,
    title: 'CARD 2',
    imgUrl: 'images/italian.jpg',
  },
  {
    id: 3,
    title: 'CARD 3',
    imgUrl: 'images/new.jpg',
  },
  {
    id: 4,
    title: 'CARD 4',
    imgUrl: 'images/sales.jpg',
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
    imgUrl: 'images/2_Fashion.jpg',
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
    imgUrl: 'images/7_applicance.jpg',
  },
  {
    id: 8,
    title: 'CARD 8',
    content: 'Automotive, Hardware & Industrial Supplies',
    imgUrl: 'images/8_hardware.png',
  },
  {
    id: 9,
    title: 'CARD 9',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselFirst = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowFirst.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} url={card.url} />
    ))}
  </Carousel>
);

export const CarouselSecond = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowSecond.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} url={card.url} />
    ))}
  </Carousel>
);

export const CarouselThird = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowThird.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} url={card.url} />
    ))}
  </Carousel>
);

export const CarouselFourth = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowFourth.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} url={card.url} />
    ))}
  </Carousel>
);

export const CarouselMobile = () => (
  <Carousel
    // ssr
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

export const CarouselNewEStore = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {caroDataNewEStore.map((card) => (
      <Card title={card.title} imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);
