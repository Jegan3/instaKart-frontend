/*eslint-disable*/
import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselFourth, CarouselMobile, CarouselNewEStore, } from '../../components/Carousel';
import { Banners, SecondaryBanners } from '../../components/Banners';
import Particles from 'react-particles-js';
// import Particle from '../../components/Particle';

const Home = () => {

  useEffect(() => {
    // dispatch it once mounted
    setTimeout(
      ()=>{window.dispatchEvent(new Event('resize'));},
      1000
      );
  }, []);

  return (
    <div className='body-container home'>
      <div className='particles-main'>
        {/* <Particle color='#28a4d9' number='700' direction='top' /> */}
        <Particles
      params={{
        particles: {
          color: {
            value: '#28a4d9' ,
          },
          number: {
            value: '700',
            density: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
          },
          size: {
            value: '3',
            random: true,
            anim: {
              speed: '3',
              size_min: '0.3',
            },
          },
          move: {
            random: true,
            speed: '1',
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            // onhover: {
            //   enable: false,
            //   mode: 'bubble',
            // },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: '250',
              duration: '2',
              size: '0',
              opacity: ' 0',
            },
            repulse: {
              distance: '100',
              duration: '4',
            },
          },
        },
      }}
    />
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
        <div className='particles-sub'>
          {/* <Particle color='#f5f5f5' number='300' direction='left' /> */}
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
          {/* <Particle color='#f5f5f5' number='300' direction='right' /> */}
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
