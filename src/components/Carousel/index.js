/*eslint-disable*/
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, ReviewCard } from '../Card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 2,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1,
    // slidesToSlide: 2,
  },
};

const responsiveAds = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 3,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 2,
    // slidesToSlide: 2,
  },
};

const responsiveReview = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 3,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 2,
    // slidesToSlide: 2,
  },
};

const responsiveThrift = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 3,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 2,
    // slidesToSlide: 2,
  },
};

const responsiveThriftCategory = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 4,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 2,
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
    content: 'Medical Supplies, Health & Wellness',
    imgUrl: 'images/3_Health.png',
  },
];


const reviewCardDetails = [
  {
    id: 1,
    title: 'Rakesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
    date: '12/1/2021',
  },
  {
    id: 2,
    title: 'Sumesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/test.jpeg',
    date: '18/1/2021',
  },
  {
    id: 3,
    title: 'Hrithik',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
    date: '31/1/2021',
  },
  {
    id: 4,
    title: 'Rakesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/test1.jpeg',
    date: '15/1/2021',
  },
  {
    id: 5,
    title: 'Sumesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 6,
    title: 'Hrithik',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 7,
    title: 'Rakesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 8,
    title: 'Sumesh',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
  },
  {
    id: 9,
    title: 'Hrithik',
    content: 'Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    imgUrl: 'images/1_Food.png',
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
    // btnUrl: 'http://vaibhavk13.sg-host.com/',
    btnUrl: '/thriftstore',
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
    btnUrl: 'https://instakartelearning.com/chess-school/',
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

const cardsDataNewEStore = [
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
  {
    id: 5,
    title: 'CARD 1',
    imgUrl: 'images/pizza.jpg',
  },
  {
    id: 6,
    title: 'CARD 2',
    imgUrl: 'images/italian.jpg',
  },
  {
    id: 7,
    title: 'CARD 3',
    imgUrl: 'images/new.jpg',
  },
  {
    id: 8,
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
    btnUrl: '/advertisement',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Fashion District',
    imgUrl: 'images/2_Fashion.jpg',
    btnUrl: '/advertisement',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Health & Wellness',
    imgUrl: 'images/3_Health.png',
    btnUrl: '/advertisement',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Speciality Services',
    imgUrl: 'images/4_Speciality.png',
    btnUrl: '/advertisement',
  },
  {
    id: 5,
    title: 'CARD 5',
    content: 'IK Thrift Store',
    imgUrl: 'images/5_Thrift.png',
    btnUrl: '/advertisement',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Grocery & Fresh Produce',
    imgUrl: 'images/6_Grocery.png',
    btnUrl: '/advertisement',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Appliances & Tech Gadgets',
    imgUrl: 'images/7_applicance.jpg',
    btnUrl: '/advertisement',
  },
  {
    id: 8,
    title: 'CARD 8',
    content: 'Automotive, Hardware & Industrial Supplies',
    imgUrl: 'images/8_hardware.png',
    btnUrl: '/advertisement',
  },
  {
    id: 9,
    title: 'CARD 9',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
    btnUrl: '/advertisement',
  },
];

const fisrtAdsDetails = [
  {
    id: 1,
    title: 'CARD 1',
    imgUrl: 'images/comingsoon.gif',
  },
  {
    id: 2,
    title: 'CARD 2',
    imgUrl: 'images/comingsoon.gif',
  },
  {
    id: 3,
    title: 'CARD 3',
    imgUrl: 'images/comingsoon.gif',
  },
  {
    id: 4,
    title: 'CARD 4',
    imgUrl: 'images/comingsoon.gif',
  },
  {
    id: 5,
    title: 'CARD 5',
    imgUrl: 'images/comingsoon.gif',
  },
  {
    id: 6,
    title: 'CARD 6',
    imgUrl: 'images/comingsoon.gif',
  },
];

const thriftStoreCategoryUp = [
  {
    id: 1,
    title: 'Appliances',
    imgUrl: 'images/Appliances.jpg',
  },
  {
    id: 2,
    title: 'Books',
    imgUrl: 'images/Books.jpg',
  },
  {
    id: 3,
    title: 'Baby Products',
    imgUrl: 'images/Toys & Baby Products.jpg',
  },
  {
    id: 4,
    title: 'Clothing',
    imgUrl: 'images/Clothing.jpg',
  },
  {
    id: 5,
    title: 'Donate',
    imgUrl: 'images/Donation.jpg',
  },
  {
    id: 6,
    title: 'Furniture',
    imgUrl: 'images/Furniture.jpg',
  },
];

const thriftStoreCategoryBottom = [
  {
    id: 7,
    title: 'Footwear',
    imgUrl: 'images/Footware.jpg',
  },
  {
    id: 8,
    title: 'Miscellaneous',
    imgUrl: 'images/Misc.png',
  },
  {
    id: 9,
    title: 'Electronics & Mobile Phones',
    imgUrl: 'images/Mobile Phones.jpg',
  },
  {
    id: 10,
    title: 'Real Estate',
    imgUrl: 'images/Real-Estate.jpg',
  },
  {
    id: 11,
    title: 'Hand & Power Tools',
    imgUrl: 'images/Tools.jpg',
  },
  {
    id: 12,
    title: 'Vehicles',
    imgUrl: 'images/Vehicles.jpg',
  },
];


export const CarouselThriftStoreCategoryUp = () => (
  <Carousel
    responsive={responsiveThriftCategory}
  >
    {thriftStoreCategoryUp.map((card) => (
      <Card title={card.title} className='card' imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);


export const CarouselThriftStoreCategoryBottom = () => (
  <Carousel
    responsive={responsiveThriftCategory}
  >
    {thriftStoreCategoryBottom.map((card) => (
      <Card title={card.title} className='card' imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselFirst = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowFirst.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} btnUrl={card.btnUrl} />
    ))}
  </Carousel>
);

export const CarouselSecond = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowSecond.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} btnUrl={card.btnUrl} />
    ))}
  </Carousel>
);

export const CarouselThird = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowThird.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} btnUrl={card.btnUrl} />
    ))}
  </Carousel>
);

export const CarouselFourth = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowFourth.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} btnUrl={card.btnUrl} />
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
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} />
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
    {cardsDataMobile.map((card) => (
      <Card key={card.id} className='card' imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);


export const CarouselStoreInfo = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsive}
  >
    {cardsDataNewEStore.map((card) => (
      <Card key={card.id} className='card' imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

export const CarouselNewEStoreAds = () => (
  <Carousel
    // ssr
    infinite
    autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveAds}
  >
    {cardsDataNewEStore.map((card) => (
      <Card key={card.id} className='card' imgUrl={card.imgUrl} />
    ))}
  </Carousel>
);

export const CarouselThriftStore = ({ thriftDetails }) => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {thriftDetails ? thriftDetails.thriftStore.map((info) => (
      <Card key={info.countryName} className='card' imgUrl={info.logo} btnUrl={`/thriftstoreinfo`} country={info.countryName} productName={info.storeName} body />
    )) : <Card />}
  </Carousel>
);

export const CarouselThriftNewAdditions = ({ thriftDetails }) => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {thriftDetails ? thriftDetails.productsInfo.map((info) => (
      <Card key={info.productName} className='card' imgUrl={info.productImage} btnUrl={'/productinfo'} price={info.finalPrice} productName={info.productName} body />
    )) : <Card />}
  </Carousel>
);

export const CarouselAdsDetails = () => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {fisrtAdsDetails.map((card) => (
      <Card key={card.id} imgUrl={card.imgUrl} className="card-thriftcards" body />
    ))}
  </Carousel>
);
export const CarouselThriftPromotions = () => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {cardsDataMobile.map((card) => (
      <Card key={card.id} imgUrl={card.imgUrl} className="card-thriftcards" body />
    ))}
  </Carousel>
);

export const CarouselReviewCard = () => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveReview}
  >
    {reviewCardDetails.map((card) => (
      <ReviewCard key={card.id} imgUrl={card.imgUrl} title={card.title} date={card.date} content={card.content} />
    ))}
  </Carousel>
);