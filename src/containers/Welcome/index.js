/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactCarousel from '../../components/Carousel';
import IntroBanner from '../../components/IntroBanner';
import SportsBanner from '../../components/SportsBanner';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import Banner from '../../components/Banners';

const Welcome = () => (
  <div className="bodyContainer">
    <div className="IntroDiv">
      <Header />
    </div>
    <h2>WELCOME TO THE WORLD LARGEST</h2>
    <h2>VIRTUAL SHOPPING MALL</h2>
    <div className="introBanner">
      <Banner />
    </div>
    <div>
      <IntroBanner />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h5>
          # NEW ARRIVALS #
        </h5>
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
        <h5>
          # RESTAURANTS NEAR YOU #
        </h5>
        <ReactCarousel />
      </div>
      <br />
    </div>
    <div className="Arrivals">
      <SportsBanner />
    </div>
    <div className="Arrivals">
      <h4>
        # FASHION STORES NEAR YOU #
      </h4>
      <ReactCarousel />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h5>
          # SPECIALITY STORES NEAR YOU #
        </h5>
        <ReactCarousel />
      </div>
      <br />
    </div>
    <div className="fitness-pic">
      <img className="addpic" src="https://image.shutterstock.com/image-vector/hardcore-stylized-logo-600w-248196712.jpg" />
      <img className="addpic" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-fitness-logo-png-png-image_3586442.jpg" />
      <img className="addpic" src="https://png.pngtree.com/element_pic/00/16/07/08577e840a3202a.jpg" />
      <img className="addpic" src="https://image.shutterstock.com/image-vector/hardcore-stylized-logo-600w-248196712.jpg" />
      <img className="addpic" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-fitness-logo-png-png-image_3586442.jpg" />
      <img className="addpic" src="https://png.pngtree.com/element_pic/00/16/07/08577e840a3202a.jpg" />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
export default Welcome;
