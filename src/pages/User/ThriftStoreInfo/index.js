/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { CarouselNewEStoreAds, CarouselReviewCard } from '../../../components/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { MaterialTabs } from '../../../components/TabScroll';

const ThriftStoreInfo = ({ location }) => {

  const dispatch = useDispatch();
  const thriftStoreInfotype = useSelector((state) => state.thriftStoreInfoState.thriftStoreInfo);

  const { countryName, cityName, storeLogo, address, storeName, emailId, mobile, zipCode, aboutStore } = thriftStoreInfotype ? thriftStoreInfotype.storeInfo : '';

  // For Header Menu 
  const module = location.state.module

  useEffect(() => {
    dispatch({ type: 'THRIFT_STORE_INFO_REQUEST', thriftStoreInfoId: location.state.thriftStore });
  }, [])

  return (
    <div className="store-page">
      <Header header module={module} />
      <div className="jumbotron fluid"
        style={storeLogo ? { backgroundImage: `url(${storeLogo})` } : { backgroundImage: `url(images/Your-logo-here..png)` }} >
        <Grid fluid>
          <Row className="bg-trans">
            <Col sm={12}>
              <ScrollAnimation animateIn='bounceInDown' duration={3}>
                <h1 className='title-store'>
                  {storeName}
                </h1>
              </ScrollAnimation>
            </Col>
            <Col sm={12}>
              <ScrollAnimation animateIn='bounceInDown' duration={7}>
                <h1 className='subtitle-store'>
                  {/* The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                in the taste buds and was passed down from generations to generations. Established way
                The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                in the taste buds and was passed down from generations to generations. Established way
                The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                in the taste buds and was passed down from generations to generations. Established way
                The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                in the taste buds and was passed down from generations to generations. Established way */}
                  {aboutStore}
                </h1>
              </ScrollAnimation>
            </Col>
            <Col sm={12}>
              <ScrollAnimation animateIn='bounceInDown' duration={21}>
                <div>
                  <h1 className='address-store'>
                    Business Address:
                    <br /> <br />
                    {address}
                    <br />
                    {cityName}
                    <br />
                    {countryName}
                    <br />
                    {zipCode}
                    {/* <br />
                  US
                  <br /><br /> */}
                    <br />
                    {mobile}
                    <br />
                    {emailId}
                  </h1>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Grid>
      </div>

      <div>
        <Row>
          <Col>
            <div className="products-storeinfo">
              <span className="ik-ads">Products</span>
              <div className='scroll-tab'>
                < MaterialTabs />
              </div>
            </div>
          </Col>
          <Col >
          {/* commented temporarily */}
            {/* <div className='bg-adss'>
              <div className='arrival-ads'>
                <span className="ik-ads">Reviews</span>
                < CarouselReviewCard />
              </div>
              <br />
            </div> */}
          </Col>
          <Col sm={12}>
            <div className='bg-ads'>
              <div className='arrival-ads'>
                <span className="ik-ads">Similar stores</span>
                <CarouselNewEStoreAds />
              </div>
              <br />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default ThriftStoreInfo;
