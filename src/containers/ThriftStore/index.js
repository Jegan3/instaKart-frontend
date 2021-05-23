import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import Banners from '../../components/Banners';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import StatsCard from '../../components/StatsCard';
import { CarouselThriftStore } from '../../components/Carousel';

const ThriftStore = () => (
  <Grid fluid className="padding-control">
    <Header />
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
          bigIcon={<i className="item-icon fas fa-home fa-xs circle-icon-home" />}
          className="thift-store"
          priText="Real Estate"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-car fa-xs circle-icon-car" />}
          className="thift-store"
          priText="Vehicles"
          secText="6 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-mobile-alt fa-xs circle-icon-mobile" />}
          className="thift-store"
          priText="Mobile Phones"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-chair fa-xs circle-icon-chair" />}
          className="thift-store"
          priText="Furniture"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-cog fa-xs circle-icon-service" />}
          className="thift-store"
          priText="Footwear"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className="fas fa-desktop fa-xs circle-icon-tv" />}
          className="thift-store"
          priText="Appliances"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-briefcase fa-xs circle-icon-jobs" />}
          className="thift-store"
          priText="Tools"
          secText="3 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-tshirt fa-xs circle-icon-fashion" />}
          className="thift-store"
          priText="Clothing"
          secText="1 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-paw fa-xs circle-icon-animal" />}
          className="thift-store"
          priText="Miscellaneous"
          secText="2 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-book-open  fa-xs circle-icon-book" />}
          className="thift-store"
          priText="Education"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-truck-monster fa-xs circle-icon-toys" />}
          className="thift-store"
          priText="Baby Products"
          secText="0 Ads"
        />
      </Col>
      <Col xs={6} md={2} sm={4} lg={2} className="category-item">
        <StatsCard
          bigIcon={<i className=" item-icon fas fa-heart fa-xs circle-icon-heart" />}
          className="thift-store"
          priText="Donate"
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
