/*eslint-disable*/
import React from 'react';
// import IntroBanner from '../../components/IntroBanner';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import Banners from '../../components/Banners';
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselMobile, CarouselNewEStore } from '../../components/Carousel';

const Welcome = () => (
  <div className="body-container welcome">
    <div>
      <Header welcome />
    </div>
    <div className="intro-banner">
      <Banners />
    </div>
    <h2>Welcome To The Caribbean&#39;s Unified <br />e-Commerce Portal</h2>
    {/* {window.screen.width <= 464 ?
      <div className="arrival">
        <CarouselMobile />
      </div> :
      <div className="arrival">
        <CarouselFirst />
        <CarouselSecond />
        <CarouselThird />
        <CarouselFourth />
      </div>} */}
    <div className="arrival">
      <CarouselFirst />
      <CarouselSecond />
      <CarouselThird />
      <CarouselFourth />
    </div>
    <div className="bg-welcome">
      <div className="arrival">
        <CarouselNewEStore />
      </div>
      <br />
    </div>
    <div className="promotions">
      <h5>
        Promotions
      </h5>
      <CarouselNewEStore />
    </div>
    <br />
    <div className="bg-welcome">
      <div className="arrival">
        <h5>
          E-Store Near You
        </h5>
        <CarouselNewEStore />
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
