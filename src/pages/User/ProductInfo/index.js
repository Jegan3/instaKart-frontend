/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import { Rate } from 'antd';
import { history } from '../../../routes';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ImageSlider from '../../../components/ImageSlider';
import { CarouselNewEStoreAds, CarouselReviewCard } from '../../../components/Carousel';

const ProductInfo = ({ location }) => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(1);
  const [login, setLogin] = useState(false);
  const [productMessage, setProductMessage] = useState('');
  const [background, setBackground] = useState(false);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const product = productDetails && productDetails.productInfo

  const productImages = product && product.productImages.map(item => ({
    original: item,
    thumbnail: item,
  }))

  // For Header Menu 
  const module = location.state.module;

  useEffect(() => {
    dispatch({ type: 'PRODUCT_INFO_REQUEST', productId: location.state });
  }, [])

  const onDescription = () => {
    setToggle(1)
  }

  const onWarranty = () => {
    setToggle(2)
  }

  const onShipping = () => {
    setToggle(3)
  }

  const onMessage = () => {
    setToggle(4)
  }

  const onDecrement = () => {
    count > 1 && setCount(count - 1)
  }

  const onIncrement = () => {
    setCount(count + 1)
  }

  const onBackground = (images) => {
    setBackground(images.thumbnail)
  }

  const onProductMessage = (e) => {
    setProductMessage(e.target.value)
  }

  const onAddCart = () => {
    if (sessionStorage.access) {
      const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
      const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const addToCart = {
        productId: product._id,
        totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
        quantity: count,
      }

      dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
      history.push({ pathname: '/cart', state: 'addCart' });
    } else {
      setLogin(true)
    }
    window.scrollTo(0, 0);
  }

  const onBuyNow = () => {
    if (sessionStorage.access) {
      history.push({ pathname: '/cart', state: 'buyNow' });
    } else {
      setLogin(true)
    }
    window.scrollTo(0, 0);
  }

  const hideloginCart = () => {
    setLogin(false)
  }

  const onProceed = () => {
    const enquiry = {
      productId: product._id,
      message: productMessage,
    };
    dispatch({ type: 'PRODUCT_MESSAGE_REQUEST', enquiry });
  };

  return (
    <div className="ads-control">
      <Header loginCart={login} hideloginCart={hideloginCart} module={module} />
      <div className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(${!background ? product && product.productImages[0] : background})` }}
      >
        <div className='ads-page'>
          <Grid fluid>
            <Row className='position-top justify-content-center'>
              <div className="product-sides">
                <Col md={7}>
                  <Row>
                    <Col sm={12}>
                      <h1 className='product-title'>{product && product.productName}</h1>
                    </Col>
                    <Col sm={12}>
                      <Row>
                        <Col sm={4}>
                          <h3 className="sale">{product && product.finalPrice}</h3>
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
                          <button className={`butn-ads ${toggle === 1 && `active`}`} onClick={onDescription}>
                            Description
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className={`butn-ads ${toggle === 2 && `active`}`} onClick={onWarranty}>
                            Warranty
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className={`butn-ads ${toggle === 3 && `active`}`} onClick={onShipping}>
                            Shipping & Pickup
                          </button>
                        </Col>
                        <Col sm={3}>
                          <button className={`butn-ads ${toggle === 4 && `active`}`} onClick={onMessage}>
                            Message
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12}>
                      <div className='desc'>
                        {toggle === 1 &&
                          <div>
                            <h3 className="prod-details" >{product && product.productDescription}</h3>
                          </div>}
                        {toggle === 2 &&
                          <div>
                            <h3 className="prod-details">{product && product.productWarranty}</h3>
                          </div>}
                        {toggle === 3 &&
                          <div>
                            <h3 className="prod-details">{product && product.productShipping}</h3>
                          </div>}
                        {toggle === 4 &&
                          <div className="product-info-message">
                            <textarea className=" form-control my-input"
                              name="message"
                              placeholder='type something..'
                              rows="4"
                              value={productMessage}
                              onChange={onProductMessage}
                              maxLength={500}
                            >
                            </textarea>
                            <button
                              type="button"
                              className="btn btn-primary btn-lg btn-block modal-button"
                              onClick={onProceed}
                            >
                              Proceed
                            </button>
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
                          <span className="quanitybtns"
                            onClick={onDecrement}> - </span>
                          {count}
                          <span className="quanitybtns"
                            onClick={onIncrement}> + </span>
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
