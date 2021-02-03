/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import ReactCarousel from '../../components/Carousel';
import IntroBanner from '../../components/IntroBanner';
// import SportsBanner from '../../components/SportsBanner';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import Banners from '../../components/Banners';

const Welcome = () => (
  <div className="bodyContainer">
    <div>
      <Header />
    </div>
    <div className="intro-banner">
      <Banners />
    </div>
    <h2>Welcome To The Caribbean&#39;s Largest</h2>
    <h2>e-Commerce Portal</h2>
    <div>
      <IntroBanner />
    </div>
    <div className="bg1">
      <div className="Arrival">
        <h5>
          # E-LEARNING COURSES #
        </h5>
        <a href="https://instakartelearning.com/chess-school/" target="_blank">
          <img className="pic" alt="#" src="images/chess.png" />
        </a>
      </div>
      <br />
    </div>
    {/* <div className="Arrivals">
      <h4>
        # OFFERS #
      </h4>
      <ReactCarousel />
    </div> */}
    {/* <div className="bg1">
      <div className="Arrival">
        <h5>
          # RESTAURANTS NEAR YOU #
        </h5>
        <ReactCarousel />
      </div>
      <br />
    </div> */}
    {/* <div className="Arrivals">
      <SportsBanner />
    </div>
    <div className="Arrivals">
      <h4>
        # FASHION STORES NEAR YOU #
      </h4>
      <ReactCarousel />
    </div> */}
    {/* <div className="bg1">
      <div className="Arrival">
        <h5>
          # SPECIALITY STORES NEAR YOU #
        </h5>
        <ReactCarousel />
      </div>
      <br />
    </div> */}
    <div className="fitness-pic">
      <img className="addpic" src="images/icon-tcap.png" />
      <img className="addpic" src="images/instakart.png" />
      <img className="addpic" src="images/glorii_Logo4.png" />
      {/* <img className="addpic" src="https://image.shutterstock.com/image-vector/hardcore-stylized-logo-600w-248196712.jpg" />
      <img className="addpic" src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-fitness-logo-png-png-image_3586442.jpg" /> */}
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
export default Welcome;
