/*eslint-disable*/
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from "react-player";
import { ThriftCategoryCard, Card, ThriftStoreNearYouCard, ThriftProductsCard, ReviewCard, ThriftStoreInfoCategoriesCard } from '../Card';

const responsive = {
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

const responsiveVideo = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 1,
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

const responsiveThriftStoreInfoCategories = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    //slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 6,
    // slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 4,
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
    breakpoint: { max: 3000, min: 1250 },
    items: 5,
    // slidesToSlide: 4,
  },
  desktopTwo: {
    breakpoint: { max: 1250, min: 1024 },
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

const businessRowFirst = [
  {
    id: 1,
    title: 'CARD 1',
    content: 'Food Avenue',
    imgUrl: 'images/1_Food.png',
    path: '/comingsoon',
  },
  {
    id: 2,
    title: 'CARD 2',
    content: 'Fashion District',
    imgUrl: 'images/2_Fashion.jpg',
    path: '/comingsoon',
  },
  {
    id: 3,
    title: 'CARD 3',
    content: 'Medical Supplies, Health & Wellness',
    imgUrl: 'images/3_Health.png',
    path: '/comingsoon',
  },
  {
    id: 4,
    title: 'CARD 4',
    content: 'Speciality Services',
    imgUrl: 'images/4_Speciality.png',
    path: '/comingsoon',
  },
];

const businessRowSecond = [
  {
    id: 5,
    title: 'CARD 5',
    content: 'Thrift Store',
    imgUrl: 'images/5_Thrift.png',
    path: '/thriftstore',
  },
  {
    id: 6,
    title: 'CARD 6',
    content: 'Grocery & Fresh Produce',
    imgUrl: 'images/6_Grocery.png',
    path: '/comingsoon',
  },
  {
    id: 7,
    title: 'CARD 7',
    content: 'Appliances & Tech Gadgets',
    imgUrl: 'images/7_applicance.jpg',
    path: '/comingsoon',
  },
  {
    id: 8,
    title: 'CARD 8',
    content: 'Automotive, Hardware, Industrial & Safety Supplies',
    imgUrl: 'images/8_hardware.png',
    path: '/comingsoon',
  },
];

const businessRowThird = [
  {
    id: 9,
    title: 'CARD 9',
    content: 'Home & Garden Supplies',
    imgUrl: 'images/9_home.png',
    path: '/comingsoon',
  },
  {
    id: 10,
    title: 'CARD 10',
    content: 'E-learning',
    imgUrl: 'images/10_TechGadgets.jpg',
    path: '/comingsoon',
  },
  {
    id: 11,
    title: 'CARD 11',
    content: 'Social Media',
    imgUrl: 'images/11_TimeCap.png',
    path: '/comingsoon',
  },
  {
    id: 12,
    title: 'CARD 12',
    content: 'Wholesale Suppliers & Drop Shipping',
    imgUrl: 'images/12_WholesaleDS.jpg',
    path: '/comingsoon',
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

export const ThriftStoreInfoCategories = ({ product, module }) => (
  <Carousel
    responsive={responsiveThriftStoreInfoCategories}
    //centerMode={true}
    infinite={true}
  >
    {product ? product.product.map((card) => (
      <ThriftStoreInfoCategoriesCard title={card.productName} product={card._id} className='card'
        imgUrl={card.productImages[0]} path={'/productinfo'} module={module} />
    )) : []}
  </Carousel>
);

export const ThriftStoreCategory = ({ thriftCategoryType, module }) => (
  <span>
    <Carousel
      responsive={responsiveThriftCategory}
    >
      {thriftCategoryType ? thriftCategoryType.categoryDetails.slice(0, 6).map((item) => (
        <ThriftCategoryCard title={item.categoryName} thriftCategoryType={item._id} className='card' imgUrl={item.categoryImage}
          path={'/categorypage'} module={module} />
      )) : []}
    </Carousel>
    <Carousel
      responsive={responsiveThriftCategory}
    >
      {thriftCategoryType ? thriftCategoryType.categoryDetails.slice(6, 12).map((item) => (
        <ThriftCategoryCard title={item.categoryName} thriftCategoryType={item._id} className='card' imgUrl={item.categoryImage}
          path={'/categorypage'} module={module} />
      )) : []}
    </Carousel>
  </span>
);

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarouselFirst = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowFirst.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} path={card.path} />
    ))}
  </Carousel>
);

export const CarouselSecond = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowSecond.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} path={card.path} />
    ))}
  </Carousel>
);

export const CarouselThird = () => (
  <Carousel
    // ssr
    responsive={responsive}
  >
    {businessRowThird.map((card) => (
      <Card key={card.id} className='card' content={card.content} imgUrl={card.imgUrl} path={card.path} />
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

export const ThriftStoreNearYou = ({ thriftDetails, module, setLogin }) => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {thriftDetails ? thriftDetails.thriftStore.map((info) => (
      <ThriftStoreNearYouCard key={info.estoreId} thriftStore={info.estoreId} imgUrl={info.storeLogo} path={`/thriftstoreinfo`} country={info.countryName} storeName={info.storeName} setLogin={setLogin} module={module} />
    )) : []}
  </Carousel>
);

// New promotion and new addition carousel card
export const ThriftProducts = ({ products, module, setLogin }) => (
  <Carousel
    // ssr
    infinite
    // autoPlay
    autoPlaySpeed={3000}
    responsive={responsiveThrift}
  >
    {products ? products.map((info) => (
      <ThriftProductsCard key={info.productId}
        product={info.productId} imgUrl={info.productImage} path={'/productinfo'} finalPrice={info.finalPrice} productPrice={info.productPrice} discount={info.discount} productName={info.productName} setLogin={setLogin} module={module} />
    )) : []}
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

export const CarouselNewEStoreVideo = ({ video }) => (
  <Carousel
    infinite
    responsive={responsiveVideo}
  >
    {video ? video.video.map((item) => (
      <ReactPlayer className="homevideo-prop" url={item} width="100%" height="100%" controls={true} />
    )) : []}
  </Carousel>
);
