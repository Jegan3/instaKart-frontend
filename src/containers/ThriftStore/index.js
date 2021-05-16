import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Banners from '../../components/Banners';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import StatsCard from '../../components/StatsCard';
import { CarouselThriftStore } from '../../components/Carousel';

const ThriftStore = () => (
  <Grid fluid>
    <Header header />
    <Row >
      <Col>
        <div className="intro-banner">
          <Banners />
        </div>
      </Col>
    </Row>
    <Row md={12} className="cards-row clearfix">
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-home fa-sm circle-icon-home" />}
          className="thift-store"
          priText="Real Estate"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-car fa-sm circle-icon-car" />}
          className="thift-store"
          priText="Vehicles"
          secText="6 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-mobile-alt fa-sm circle-icon-mobile" />}
          className="thift-store"
          priText="Mobile Phones"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-chair fa-sm circle-icon-chair" />}
          className="thift-store"
          priText="Furniture"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-truck-monster fa-sm circle-icon-service" />}
          className="thift-store"
          priText="Services"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-desktop fa-sm circle-icon-tv" />}
          className="thift-store"
          priText="Electronics"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-briefcase fa-sm circle-icon-jobs" />}
          className="thift-store"
          priText="Jobs"
          secText="3 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-tshirt fa-sm circle-icon-fashion" />}
          className="thift-store"
          priText="Fashion"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-cog fa-sm circle-icon-animal" />}
          className="thift-store"
          priText="Animal"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-book-open  fa-sm circle-icon-book" />}
          className="thift-store"
          priText="Education"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-truck-monster fa-sm circle-icon-toys" />}
          className="thift-store"
          priText="Baby Toys"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-heart fa-sm circle-icon-heart" />}
          className="thift-store"
          priText="Matrimonial"
          secText="0 Ads"
        />
      </Col>
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
    {/* <div className="footer-sell-btn pacz-grid">
      <a href="http://vaibhavk13.sg-host.com/submit-listing-2/" className="pacz-footer-sell-btn">Sell</a>
    </div> */}
    <Row>
      <Footer />
    </Row>
  </Grid>
);

export default ThriftStore;
