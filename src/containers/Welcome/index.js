/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactCarousel from '../../components/Carousel';
import Intro from '../../components/Intro';
import Sports from '../../components/Sports';
import Footer from '../../components/Footer';

const Welcome = () => (
  <div className="BodyContainer">
    <h2>WELCOME TO THE WORLD LARGEST</h2>
    <h2>VIRTUAL SHOPPING MALL</h2>
    <div className="Arrivals">
      <Intro />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h4>
     # NEW ARRIVALS #
        </h4>
        <ReactCarousel />
      </div>
      <br />
    </div>
    <div className="Arrivals">
      <h4>
     # OFFERS #
      </h4>
      <ReactCarousel />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h4>
     # RESTAURENTS NEAR YOU #
        </h4>
        <ReactCarousel />
      </div>
      <br />
    </div>
    <div className="Arrivals">
      <Sports />
    </div>
    <div className="Arrivals">
      <h4>
     # FASHION STORES NEAR YOU #
      </h4>
      <ReactCarousel />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h4>
     # SPECIALITY STORES NEAR YOU #
        </h4>
        <ReactCarousel />
      </div>
      <br />
    </div>
    <div className="PicRow">
      <img className="AddPic" src="https://image.shutterstock.com/image-vector/hardcore-stylized-logo-600w-248196712.jpg" />
      <img className="AddPic" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-fitness-logo-png-png-image_3586442.jpg" />
      <img className="AddPic" src="https://png.pngtree.com/element_pic/00/16/07/08577e840a3202a.jpg" />
      <img className="AddPic" src="https://image.shutterstock.com/image-vector/hardcore-stylized-logo-600w-248196712.jpg" />
      <img className="AddPic" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-fitness-logo-png-png-image_3586442.jpg" />
      <img className="AddPic" src="https://png.pngtree.com/element_pic/00/16/07/08577e840a3202a.jpg" />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
export default Welcome;
