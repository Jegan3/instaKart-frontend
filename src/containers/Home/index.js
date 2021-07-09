/*eslint-disable*/
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselMobile, CarouselNewEStore, } from '../../components/Carousel';
import { Banners, SecondaryBanners } from '../../components/Banners';
import Particles from '../../components/Particle';

const Home = () => {
  return (
    <div className='body-container home'>
       <div className='particles-js'>
        <Particles />
          </div>
      <div>
        <Header />
      </div>
      <h2>
        Welcome To The Caribbean&#39;s Unified <br />
        e-Commerce Portal
      </h2>
      <div className='intro-banner'>
        <Banners />
      </div>
      {/* {window.screen.width <= 464 ?
      <div className='arrival'>
        <CarouselMobile />
      </div> :
      <div className='arrival'>
        <CarouselFirst />
        <CarouselSecond />
        <CarouselThird />
        <CarouselFourth />
      </div>} */}
        <div className='arrival'>
          <CarouselFirst />
          <CarouselSecond />
          <CarouselThird />
          <CarouselFourth />
        </div>
      <div className='bg-home-ban'>
        <div className='arrival'>
          <SecondaryBanners />
        </div>
        <br />
      </div>
      <div className='bg-home-pro'>
        <div className='arrival'>
          <h5>New Promotions</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className='bg-home'>
        <div className='arrival'>
          <h5>IK Ads</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className='bg-home-pro'>
        <div className='arrival'>
          <h5>E-Stores Near You</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div className='bg-home'>
        <div className='arrival'>
          <h5>TimeCap VLogs</h5>
          <CarouselNewEStore />
        </div>
        <br />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
