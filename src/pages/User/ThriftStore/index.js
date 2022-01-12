/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import TextLoop from "react-text-loop";
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { CarouselThriftNewAdditions, CarouselThriftNewPromotions, ThriftStoreNearYou, CarouselThriftStoreCategoryUp, CarouselThriftStoreCategoryBottom } from '../../../components/Carousel';
import { ThriftBanners } from '../../../components/Banners';
import Particle from '../../../components/Particle';

const ThriftStore = () => {
  const [login, setLogin] = useState(false);

  const setLoginModal = () => {
    setLogin(!login);
  }

  const hideloginCart = () => {
    setLogin(false)
  }

  const dispatch = useDispatch();
  const thriftDetails = useSelector((state) => state.thriftDetailsState.thriftDetails);

  const productInfo = thriftDetails && thriftDetails.productsInfo

  const newPromotionProducts = productInfo && productInfo.filter((value) => value.discount)
  const newAdditionProducts = productInfo && productInfo.filter((value) => !value.discount)


  console.log("newPromotionProducts", newPromotionProducts)
  console.log("newAdditionProducts", newAdditionProducts)


  useEffect(() => {
    dispatch({ type: 'THRIFT_DETAILS_REQUEST' });
  }, [])

  return (
    <Grid fluid className="padding-control thrift">
      <div className='particles-main'>
        <Particle color='#28a4d9' number='700' direction='bottom' />
      </div>
      <div>
        <Header loginCart={login} hideloginCart={hideloginCart} />
      </div>
      <h2 className="heading-text">
        The Caribbean&#39;s
        <TextLoop className='text-loop' springConfig={{ stiffness: 70, damping: 31 }}
          adjustingSpeed={500}>
          <span>Largest</span>
          <span>Biggest</span>
          <span>Greatest</span>
        </TextLoop>
        Thrift Shop
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
      </Row>
      <Row>
        <div className="bg-thrift">
          <div className="thrift-ads">
            <div className='particles-sub'>
              <Particle color='#f5f5f5' number='150' direction='top' />
            </div>
            <h3>THRIFT STORE NEAR YOU</h3>
            <ThriftStoreNearYou thriftDetails={thriftDetails} setLogin={setLoginModal} module='Thrift Store' />
          </div>
          <br />
        </div>
      </Row>
      <Row>
        <div className="bg-thriftstore">
          <div className="thrift-ads">
            <div className='particles-sub'>
              <Particle color='#f5f5f5' number='150' direction='top' />
            </div>
            <h3>NEW PROMOTIONS</h3>
            <CarouselThriftNewPromotions newPromotionProducts={newPromotionProducts} setLogin={setLoginModal} module='Thrift Store' />
          </div>
          <br />
        </div>
      </Row>
      <Row>
        <div className="bg-thrift">
          <div className="thrift-ads">
            <div className='particles-sub'>
              <Particle color='#f5f5f5' number='150' direction='top' />
            </div>
            <h3>NEW ADDITIONS</h3>
            <CarouselThriftNewAdditions newAdditionProducts={newAdditionProducts} setLogin={setLoginModal} module='Thrift Store' />
          </div>
          <br />
        </div>
      </Row>
      <div>
        <Footer />
      </div>
    </Grid>
  )
};

export default ThriftStore;
