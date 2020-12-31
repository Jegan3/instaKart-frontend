import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
];
function index() {
  return (
    <div className="Pic-container">
      <div>
        <Slide easing="ease">
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
        </Slide>
      </div>
    </div>
  );
}

export default index;
