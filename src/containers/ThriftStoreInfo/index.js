/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { CarouselNewEStoreAds } from '../../components/Carousel';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import { Tabs } from '../../components/TabScroll';

const ThriftStoreInfo = (props) => {

  const dispatch = useDispatch();
  const thriftStoreInfotype = useSelector((state) => state.thriftStoreInfoState.thriftStoreInfo);
  
  const {countryName, cityName, logo, address, storeName, emailId} = thriftStoreInfotype ? thriftStoreInfotype.storeInfo : '' ;

  useEffect(() => {
    dispatch({ type: 'THRIFT_STORE_INFO_REQUEST', thriftStoreInfoId: props.location.state });
  }, [])

  return (
    <div className="store-page">
      <Header header />
      <div className="jumbotron fluid"
      style={{ backgroundImage: `url(${logo})` }}
      >
        <Grid fluid>
          <Row className="bg-trans">
            <Col sm={12}>
              <h1 className='title-store'>
               {storeName}
              </h1>
            </Col>
            <Col sm={12}>
              <h1 className='Subtitle-store'>
                The Disaster Café unlocks the tales of traditions, tastes, and flavors that lingered
                in the taste buds and was passed down from generations to generations. Established way
              </h1>
            </Col>
            <Col sm={12}>
              <div>
                <h1 className='address-store'>
                  Business Address:
                  <br /> <br />
               {address}
                  <br />
                   { countryName} {cityName}
                  <br />
                  11205
                  <br />
                  US
                  <br /><br />
                  {emailId}
                </h1>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <div>
        <Row>
          {/* <Col>
                <div>
                  <span className="ik-ads">Categories</span>
                  <div className='scroll-tab'>
                    <Tabs />
                  </div>
                </div>
              </Col> */}
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
