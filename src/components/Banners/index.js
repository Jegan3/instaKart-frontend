/*eslint-disable*/
import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Banners = () => (
  <div className="banners">
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




