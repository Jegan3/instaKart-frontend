/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import { Rate } from 'antd';
import { history } from '../../routes';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import Desk from '../../components/Desk';
import { CarouselNewEStoreAds, CarouselReviewCard } from '../../components/Carousel';

const images = [
  {
    original: 'images/1_Food.png',
    thumbnail: 'images/1_Food.png',
  },
];

const ProductInfo = ({location}) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const [background, setBackground] = useState(`${images[0].thumbnail}`);

  const auth = sessionStorage.access;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const product = productDetails && productDetails.productInfo

  const productImages = product && product.productImages.map(item => ({
    original: item,
    thumbnail: item,
  }))

  useEffect(() => {
    dispatch({ type: 'PRODUCT_INFO_REQUEST', productId: location.state });
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

  const onAddCart = () => {
    if (auth) {
      history.push({ pathname: '/checkout', state: 'addCart' });
    } else {
      // history.push({ pathname: '/checkout', state: 'addCart' });
      setSignIn(true)
    }
    window.scrollTo(0, 0);
  }

  const onBuyNow = () => {
    history.push({ pathname: '/checkout', state: 'buyNow' });
    window.scrollTo(0, 0);
  }

  const hidePopup = () => {
    setShow(false);
  };

  const onClose = () => {
    setShow(false)
  };

  return (
    <div className="ads-control">
      <Header signIn={signIn} />
      <div className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(${background})` }}
      // style={product && { backgroundImage: `url(${productImages[0].thumbnail})`}}
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
                        <Col sm={3}>
                          <button className="butn-ads"
                            onClick={onWarranty}
                          >
                            Description
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className="butn-ads"
                            onClick={onWarranty}
                          >
                            Warranty
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className="butn-ads" onClick={onDescription}>
                            Shipping & Pickup
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className="butn-ads" onClick={onDescription}>
                            Message
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
                          images={productImages}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="col-sm-5">
                        <div className='quanity'>
                          <span>QTY</span>
                          <span className="quanitybtns" onClick={() => setCount(count + 1)}> + </span>
                          {count}
                          <span className="quanitybtns" onClick={() => setCount(count - 1)}> - </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <button className='buybtn' onClick={onAddCart}>Add To Cart</button>
                      </div>
                      <div className="col-sm-3">
                        <button className='buybtn' onClick={onBuyNow}>Buy Now</button>
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
                        < CarouselReviewCard />
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

export default ProductInfo;
