/*eslint-disable*/
import React, { useEffect } from "react";
// import IntroBanner from '../../components/IntroBanner';
import Footer from "../../components/Footer";
import Header from "../../components/Headers";
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselMobile, CarouselNewEStore, } from "../../components/Carousel";
import { Banners } from "../../components/Banners";

const Home = () => {

  return (
    <div className="body-container welcome">
      <div>
        <Header welcome />
      </div>
      <h2>
        Welcome To The Caribbean&#39;s Unified <br />
        e-Commerce Portal
      </h2>
      <div className="intro-banner">
        <Banners />
      </div>
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
      <div className="bg-welcome-top">
        <div className="arrival">
          <h5>Second Banner</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className="bg-welcome-pro">
        <div className="arrival">
          <h5>New Promotions</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className="bg-welcome">
        <div className="arrival">
          <h5>Advertising</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className="bg-welcome-pro">
        <div className="arrival">
          <h5>E-Stores Near You</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className="bg-welcome">
        <div className="arrival">
          <h5>TimeCap Vids</h5>
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
};

export default Home;
