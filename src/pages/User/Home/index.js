/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextLoop from "react-text-loop";
import { Row, Col, Grid } from 'react-bootstrap';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { CarouselFirst, CarouselSecond, CarouselThird, CarouselNewEStoreVideo } from '../../../components/Carousel';
import { Banners, SecondaryBanners } from '../../../components/Banners';
import Particle from '../../../components/Particle';

const Home = () => {

  const dispatch = useDispatch();
  const advertisement = useSelector((state) => state.getYourAds.advertisement);

  useEffect(() => {
    // dispatch it once mounted
    setTimeout(
      () => { window.dispatchEvent(new Event('resize')); },
      700
    );
    dispatch({ type: 'GET_YOUR_ADS_REQUEST' });
  }, []);

  return (
    <Grid fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <div className='body-container home'>
          <div className='particles-main'>
            <Particle color='#28a4d9' number='700' direction='top' />
          </div>
          <h2>
            The Caribbean&#39;s
            <TextLoop className='text-loop-home' springConfig={{ stiffness: 70, damping: 31 }}
              adjustingSpeed={500}>
              <span>Joined</span>
              <span>Linked</span>
              <span>Unified</span>
            </TextLoop>
            E-Commerce Website
          </h2>
          {advertisement && Object.keys(advertisement.userAds).length !== 0 && advertisement.userAds.primaryBanner ? <div className='intro-banner'>
            <Banners primaryBanner={advertisement && advertisement.userAds} />
          </div> : ''}
          <div className='arrival intro-banner-style'>
            <CarouselFirst />
            <CarouselSecond />
            <CarouselThird />
          </div>
          {advertisement && Object.keys(advertisement.userAds).length !== 0 && advertisement.userAds.secondaryBanner ? <div className='bg-home-ban'>
            <div className='particles-sub'>
              <Particle color='#f5f5f5' number='150' direction='bottom' />
            </div>
            <div className='arrival secondary-banner-style'>
              <SecondaryBanners secondaryBanner={advertisement && advertisement.userAds} />
            </div>
            <br />
          </div> : ''}

          {advertisement && Object.keys(advertisement.userAds).length !== 0 && advertisement.userAds.video ? <div className='bg-home'>
            <div className='arrival time-cap'>
              <div className="promo-videos">
                <CarouselNewEStoreVideo video={advertisement && advertisement.userAds} />
              </div>
            </div>
            <br />
          </div> : ''}
        </div>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
};

export default Home;
