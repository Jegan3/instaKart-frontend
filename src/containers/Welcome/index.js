/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import IntroBanner from '../../components/IntroBanner';
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
    <h2>Welcome To The Caribbean&#39;s Unified</h2>
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
    <div className="fitness-pic">
      <img className="addpic" src="images/icon-tcap.png" />
      <img className="addpic" src="images/instakart.png" />
      <img className="addpic" src="images/glorii_Logo4.png" />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
export default Welcome;
