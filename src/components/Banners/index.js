/*eslint-disable*/
import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Banners = ({ primaryBanner }) => (
  <div className="banners">
    <Carousel pauseOnHover={false}>
      { primaryBanner && primaryBanner.primaryBanner.map((item, index) => <Carousel.Item >
        <img
          className="d-block w-100"
          src={item}
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

export const SecondaryBanners = ({ secondaryBanner }) => (
  <div className="banners">
    <Carousel>
      {secondaryBanner && secondaryBanner.secondaryBanner.map((item, index) => <Carousel.Item >
        <img
          className="d-block w-100"
          src={item}
        />
      </Carousel.Item>)}
    </Carousel>
  </div>
);
