/*eslint-disable*/
import React, { useEffect } from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import TextLoop from "react-text-loop";
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselMobile, CarouselNewEStore, } from '../../../components/Carousel';
import { Banners, SecondaryBanners } from '../../../components/Banners';
import Particle from '../../../components/Particle';

const Home = () => {

  useEffect(() => {
    // dispatch it once mounted
    setTimeout(
      () => { window.dispatchEvent(new Event('resize')); },
      700
    );
  }, []);

  return (
    <div className='body-container home'>
      <div className='particles-main'>
        <Particle color='#28a4d9' number='700' direction='top' />
      </div>
      <div>
        <Header />
      </div>
      {/* <h2>
        Welcome To The Caribbean&#39;s Unified <br />
        e-Commerce Portal
      </h2> */}
      <h2>
        The Caribbean&#39;s
        <TextLoop className='text-loop-home' springConfig={{ stiffness: 70, damping: 31 }}
          adjustingSpeed={500}>
          <span>Allied</span>
          <span>Linked</span>
          <span>Unified</span>
        </TextLoop>
        E-Commerce Website
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
        <div className='particles-sub'>
          <Particle color='#f5f5f5' number='150' direction='bottom' />
        </div>
        <div className='arrival'>
          <h5>New Promotions</h5>
          <div className='promotions'>
            <CarouselNewEStore />
          </div>
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
        <div className='particles-sub'>
          <Particle color='#f5f5f5' number='150' direction='bottom' />
        </div>
        <div className='arrival'>
          <h5>E-Stores Near You</h5>
          <div className='promotions'>
            <CarouselNewEStore />
          </div>
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