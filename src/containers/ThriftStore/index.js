/*eslint-disable*/
import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
// import StatsCard from '../../components/StatsCard';
// import Card from '../../components/Card'
import { CarouselThriftStore, CarouselThriftStoreCategoryUp, CarouselThriftStoreCategoryBottom } from '../../components/Carousel';
import { ThriftBanners } from '../../components/Banners';


const ThriftStore = () => (
  <Grid fluid className="padding-control thrift">
    <div>
      <Header />
    </div>
    <h2>
      Welcome To The Caribbean&#39;s <br />
      Largest Thrift Shop
    </h2>
    <Row >
      <Col>
        <div className="intro-banner">
          <ThriftBanners />
        </div>
      </Col>
    </Row>
    <h2>Shop By Categories</h2>
    <Row className="cards-row ">
      <Row>
        <CarouselThriftStoreCategoryUp />
      </Row>
      <Row>
        <CarouselThriftStoreCategoryBottom />
      </Row>
    </Row>
    <Row>
      <div className="bg-thift">
        <div className="thift-ads">
          <h3>FEATURED ADS</h3>
          <h6>Buy & Sell Any Thing</h6>
          <CarouselThriftStore />
        </div>
        <br />
      </div>
    </Row>
    <Row>
      <div className="bg-thriftstore">
        <div className="thift-ads">
          <h3>FEATURED ADS</h3>
          <h6>Buy & Sell Any Thing</h6>
          <CarouselThriftStore />
        </div>
        <br />
      </div>
    </Row>
    <Row>
      <div className="bg-thift">
        <div className="thift-ads">
          <h3>FEATURED ADS</h3>
          <h6>Buy & Sell Any Thing</h6>
          <CarouselThriftStore />
        </div>
        <br />
      </div>
    </Row>
    <Row>
      <div className="bg-thriftstore">
        <div className="thift-ads">
          <h3>FEATURED ADS</h3>
          <h6>Buy & Sell Any Thing</h6>
          <CarouselThriftStore />
        </div>
        <br />
      </div>
    </Row>
    {/* <div className="footer-sell-btn pacz-grid">
      <a href="http://vaibhavk13.sg-host.com/submit-listing-2/" className="pacz-footer-sell-btn">Sell</a>
    </div> */}
    <Row>
      <Footer />
    </Row>
  </Grid>
);

export default ThriftStore;
