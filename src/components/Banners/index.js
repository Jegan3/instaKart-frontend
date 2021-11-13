/*eslint-disable*/
import React from 'react';
import { Carousel } from 'react-bootstrap';

const prod = ["https://instakartstaging.s3.amazonaws.com/thriftstore/d888bb95-5077-4946-8ce5-f597a290aef6.png","https://instakartstaging.s3.amazonaws.com/thriftstore/6c45d2cb-81fb-49b3-bf4c-548532dcfdb7.png"]

// export const Banners = () => (
//   <div className="banners">
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="images/pic3.png"
//           alt="Third slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="images/pic4.png"
//           alt="fourth slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//   </div>
// );



export const Banners = () => (
  <div className="banners">
<Carousel>
{prod.map(item => <Carousel.Item>
  <img
    className="d-block w-100"
    src={item}
    // alt="Third slide"
  />
</Carousel.Item>)}
</Carousel>
  </div>
);



export const ThriftBanners = () => (
  <div className="banners">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/pic1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/pic2.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export const SecondaryBanners = () => (
  <div className="bottom-banners">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/pic3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/pic4.png"
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);




