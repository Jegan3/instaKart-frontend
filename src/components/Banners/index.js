import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  'images/pic1.png',
  'images/pic2.png',
  'images/pic3.png',
  'images/pic4.png',

];

const Banners = () => (
  <div className="banner">
    <div>
      <Slide easing="ease" arrows={false}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
          </div>
        </div>
      </Slide>
    </div>
  </div>
);

export default Banners;
