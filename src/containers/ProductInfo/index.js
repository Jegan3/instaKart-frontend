/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import { Rate } from 'antd';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageGallery';
import Desk from '../../components/Desk';
import { CarouselNewEStoreAds } from '../../components/Carousel';

const images = [

  {
    original: 'images/1_Food.png',
    thumbnail: 'images/1_Food.png',
  },
  // {
  //   original: 'images/1_Food.png',
  //   thumbnail: 'images/1_Food.png',
  // },
  // {
  //   original: 'images/1_Food.png',
  //   thumbnail: 'images/1_Food.png',
  // }
];


const Ads = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState('true');
  const [background, setBackground] = useState(`${images[0].thumbnail}`);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const thriftDetails = useSelector((state) => state.thriftDetailsState.thriftDetails);
  const abcd = thriftDetails && thriftDetails.productsInfo

  const abc = abcd && abcd.map(item => ({
    original: item.productImage,
    thumbnail: item.productImage,
  }))

  useEffect(() => {
    dispatch({ type: 'THRIFT_DETAILS_REQUEST' });
  }, [])

  const onWarranty = () => {
    setToggle(false)
  }

  const onDescription = () => {
    setToggle(true)
  }

  const onBackground = (images) => {
    setBackground(images.thumbnail)
  }

  const handleShow = () => {
    setShow(true);
  }

  const hidePopup = () => {
    setShow(false);
  };

  const onClose = () => {
    setShow(false)
  };

  return (
    <div className="ads-control">
      <Desk
        //info={info}
        onClose={onClose}
        show={show}
      />
      <Header header />
      <div className="jumbotron jumbotron-fluid"
        //style={{ backgroundImage: `url(${someObject.someImage})` }}
        style={{backgroundImage: `url(${background})`}}
      >
        <div className='ads-page'>
          <Grid fluid>
            <Row className='position-top justify-content-center'>
              <div className="product-sides">
                <Col md={7}>
                  <Row>
                    <Col sm={12}>
                      <h1 className='product-title'>Nike Roshe Run</h1>
                    </Col>
                    <Col sm={12}>
                      <Row>
                        <Col sm={4}>
                          <h3 className="sale">$114.99</h3>
                        </Col>
                        <Col sm={4}>
                          <div className="review-rate" title="good">
                            {/* <div className="stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div> */}
                            <Rate disabled defaultValue={3} />
                            <p>807</p>
                          </div>
                        </Col>
                        <Col sm={4}>
                          <h3 className="see-all">Reviews</h3>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12}>
                      <Row>
                        <Col sm={4}>
                          <button className="butn-ads"
                            onClick={onWarranty}
                          >
                            Description
                          </button>
                        </Col>
                        <Col sm={4}>
                          <button className="butn-ads"
                            onClick={onWarranty}
                          >
                            Warranty
                          </button>
                        </Col>
                        <Col sm={4}>
                          <button className="butn-ads" onClick={onDescription}>
                            Shipping
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12}>
                      <div className='desc-warni'>
                        {toggle ?
                          <div className="first" className="active">
                            <p className='subtitle-lorem' >With a highly breathable  upper and casual silouette,
                              the Nike Roshe Run is  definately a perfect model for summer. For Spring /Summer 2013 a
                              fresh Mint Green colorway's version of this 'yet classic' pair is now available to order.</p>
                          </div> :
                          <div className="second" className="active">
                            <p className='subtitle-lorem' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at viverra est,
                              eu finibus mauris. Quisque tempus vestibulum fringilla. Morbi tortor eros,
                              sollicitudin eu arcu sit amet, aliquet sagittis dolor.</p>
                          </div>}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={5}>
                  <Row>
                    <Col md={12}>
                      <div className="leftads-side">
                        <ImageSlider
                          background={onBackground}
                          images={abc}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="col-sm-6">
                        <div className='quanity'>
                          <span>QTY</span>
                          <span className=" quanitybtns" onClick={() => setCount(count + 1)}> + </span>
                          {count}
                          <span className=" quanitybtns" onClick={() => setCount(count - 1)}> - </span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <button className='buybtn' onClick={() => handleShow()}> Buy</button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
            <div className="video-related">
              <Row className='position-bottom'>
                <div className>
                  <Col md={12}>
                    <div className="video-ads">
                      <iframe
                        width="70%"
                        height="400"
                        className="directorypress-video-iframe fitvidsignore"
                        src="//www.youtube.com/embed/6bxcjXYkWrY"
                        frameBorder="0"
                        allowFullScreen=""
                      />
                    </div>
                  </Col>
                </div>
              </Row>
              </div>
              <div className="video-related">
              <Row className='position-bottom'>
                <div ClassName="ik-ads">
                  <Col md={12}>
                    <div className='bg-ads'>
                      <div className='arrival-ads'>
                        <span className="ik-ads">Reviews</span>
                        <CarouselNewEStoreAds />
                      </div>
                      <br />
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
              <div className="video-related">
              <Row className='position-bottom'>
                <div ClassName="ik-ads">
                  <Col md={12}>
                    <div className='bg-ads'>
                      <div className='arrival-ads'>
                        <span className="ik-ads">Related products</span>
                        <CarouselNewEStoreAds />
                      </div>
                      <br />
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ads;
