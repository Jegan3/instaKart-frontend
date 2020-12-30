/* eslint-disable react/prop-types */
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };


// function ReactCarousel() {
//   return (
//     <div>
//       <Carousel responsive={responsive}>
//         <div>Item 1</div>
//         <div>Item 2</div>
//         <div>Item 3</div>
//         <div>Item 4</div>
//       </Carousel>
//     </div>
//   );
// }

// export default ReactCarousel;

import React from 'react';
import Carousel from 'react-multi-carousel';
// import { Image } from 'semantic-ui-react';
import Card from '../Card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
// const images = [
//   'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
// ];

const cardsData = [
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
  {
    id: 4,
    title: 'CARD 4',
    content: 'Peter Parker',
    imgUrl: 'https://unsplash.it/200/202',
  },
];
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => (
  <Carousel
    ssr
    partialVisbile
    deviceType={deviceType}
    itemClass="image-item"
    responsive={responsive}
  >
    {/* {images.slice(0, 5).map((image) => (
      <Image
        draggable={false}
        style={{ width: '100%', height: '100%' }}
        src={image}
      />
    ))} */}
    {cardsData.slice(0, 5).map((card) => (
      // <img
      //   src={image}
      //   alt="www.google.com"
      // />
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />

    ))}
  </Carousel>
);

export default Simple;

