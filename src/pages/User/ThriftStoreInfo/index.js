/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { CarouselNewEStoreAds, CarouselReviewCard } from '../../../components/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { MaterialTabs } from '../../../components/TabScroll';

const LocaleTemp = [
  {
    categoryName: 'Appliances',
    _id: '60df336164d2edca4efe65a1',
    product: [
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/4e28408a-38cb-4a5f-b99a-39fb5e22e205.jpeg'],
      },
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/4e28408a-38cb-4a5f-b99a-39fb5e22e205.jpeg'],
      },
    ],
  },
  {
    categoryName: 'Baby Product',
    _id: '60df336164d2edca4efe65a1',
    product: [
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/b46239c1-78fd-4248-a8ef-49bc041efff1.jpeg'],
      },
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/b46239c1-78fd-4248-a8ef-49bc041efff1.jpeg'],
      },
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/b46239c1-78fd-4248-a8ef-49bc041efff1.jpeg'],
      },
    ],
  },
  {
    categoryName: 'Book',
    _id: '60df336164d2edca4efe65a1',
    product: [
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/bd3f4c45-9731-447c-ae49-3c3d2832c09b.jpeg'],
      },
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/bd3f4c45-9731-447c-ae49-3c3d2832c09b.jpeg'],
      },
      {
        _id: '609251ec115d58506a6e9282',
        productName: 'edit product',
        productImages: ['https://instakartstaging.s3.amazonaws.com/thriftstore/bd3f4c45-9731-447c-ae49-3c3d2832c09b.jpeg'],
      },
    ],
  },
];

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
              <ScrollAnimation animateIn='bounceInDown' duration={7}>
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
              <ScrollAnimation animateIn='bounceInDown' duration={7}>
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
        <Row className='products'>
          <Col>
            <div className="products-storeinfo">
              <span className="ik-ads">Products</span>
              <div className='scroll-tab'>
                <MaterialTabs storeInfo={thriftStoreInfotype && thriftStoreInfotype.storeInfo.categoryDetails} />
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
          {/* <Col sm={12}>
            <div className='bg-ads'>
              <div className='arrival-ads'>
                <span className="ik-ads">Similar stores</span>
                <CarouselNewEStoreAds />
              </div>
              <br />
            </div>
          </Col> */}
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default ThriftStoreInfo;
