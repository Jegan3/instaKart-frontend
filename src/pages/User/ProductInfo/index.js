/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';
import { Rate, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { history } from '../../../routes';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ImageSlider from '../../../components/ImageSlider';
import ReactPlayer from "react-player";
import { CarouselNewEStoreAds, CarouselReviewCard } from '../../../components/Carousel';
import Loader from '../../../components/Loader';

const ProductInfo = ({ location }) => {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(1);
  const [login, setLogin] = useState(false);
  const [productMessage, setProductMessage] = useState('');
  const [background, setBackground] = useState(false);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const product = productDetails && productDetails.productInfo
  const addCart = useSelector((state) => state.addCartState.addCart);
  const isLoadingProduct = useSelector((state) => state.productInfoState.isLoading);
  const userLogin = useSelector((state) => state.loginState.login);
  // For Header Menu 
  const module = location.state.module

  const productImages = product && product.productImages.map(item => ({
    original: item,
    thumbnail: item,
  }))

  const userCountry = userLogin && userLogin.user.countryName || sessionStorage.countryName
  const productVideo = product && product.productVideo[0]

  useEffect(() => {
    dispatch({ type: 'PRODUCT_INFO_REQUEST', productId: location.state.product });
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
    const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
    const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

    const addToCart = {
      productId: product._id,
      totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
      quantity: count,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
    history.push({ pathname: '/cart', state: 'addCart' });
    window.scrollTo(0, 0);
  }

  // const onAddCart = () => {
  //   const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
  //   const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

  //   const addToCart = {
  //     productId: product._id,
  //     totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
  //     quantity: count,
  //   }
  //   if (sessionStorage.type === 'user') {
  //     // const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
  //     // const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

  //     // const addToCart = {
  //     //   productId: product._id,
  //     //   totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
  //     //   quantity: count,
  //     // }

  //     dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
  //     history.push({ pathname: '/cart', state: 'addCart' });
  //   } else if (sessionStorage.type === 'vendor') {
  //     message.error('Please Login As User');
  //   }

  //   else {
  //     // const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
  //     // const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

  //     // const addToCart = {
  //     //   productId: product._id,
  //     //   totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
  //     //   quantity: count,
  //     // }
  //     // history.push({pathname: '/productinfo', state:addToCart})
  //     dispatch({ type: 'ADD_CART_GLOBAL', addCartGlobal: addToCart });
  //     setLogin(true)

  //   }
  //   window.scrollTo(0, 0);
  // }

  const onBuyNow = () => {
    if (userCountry !== ('Trinidad & Tobago' || 'Guyana')) {
      const { confirm } = Modal;
      confirm({
        title: 'Do you Want to buy?',
        icon: <ExclamationCircleOutlined />,
        content: 'Would you like to inform the seller About your Enquiry? ',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
      });
    } else {

      const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
      const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const buyNowProduct = {
        productId: product._id,
        productName: product && product.productName,
        productImage: product && product.productImages,
        totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
        quantity: count,
        productPrice: `${currency}${parseFloat(productPrice).toFixed(2)}`
      }
      history.push({ pathname: '/cart', state: 'buyNow' });
      dispatch({ type: 'BUY_NOW', buyNow: buyNowProduct });
      window.scrollTo(0, 0);
    }
  }

  // const onBuyNow = () => {
  //   const productPrice = product.finalPrice.replace(/[^.0-9\.]+/g, '');
  //   const currency = product.finalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

  //   const buyNowProduct = {
  //     productId: product._id,
  //     productName: product && product.productName,
  //     productImage: product && product.productImages,
  //     totalPrice: `${currency}${parseFloat(productPrice * count).toFixed(2)}`,
  //     quantity: count,
  //     productPrice: `${currency}${parseFloat(productPrice).toFixed(2)}`
  //   }

  //   if (sessionStorage.type === 'user') {
  //     history.push({ pathname: '/cart', state: 'buyNow' });
  //     dispatch({ type: 'BUY_NOW', buyNow: buyNowProduct });
  //   }
  //   else if (sessionStorage.type === 'vendor') {
  //     message.error('Please Login As User');
  //   } else {
  //     setLogin(true)
  //   }
  //   window.scrollTo(0, 0);
  // }

  const hideloginCart = () => {
    setLogin(false)
  }

  const onProceed = () => {
    const enquiry = {
      productId: product._id,
      message: productMessage,
    };
    message.success('Hi.(name) this msg has successfully sent to Seller!')
    setProductMessage('')
    dispatch({ type: 'PRODUCT_MESSAGE_REQUEST', enquiry });
  };

  return (
    <div className="ads-control product-info-page">
      <Header loginCart={login} hideloginCart={hideloginCart} module={module} />
      <div className="jumbotron jumbotron-fluid"
        style={{ backgroundImage: `url(${!background ? product && product.productImages[0] : background})` }}
      >
        <div className='ads-page'>
          {isLoadingProduct && <Loader />}
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
                        <Col sm={3} className="btnads">
                          <button className={`butn-ads ${toggle === 1 && `active`}`} onClick={onDescription}>
                            Description
                          </button>
                        </Col>
                        <Col sm={3} className="btnads">
                          <button className={`butn-ads ${toggle === 2 && `active`}`} onClick={onWarranty}>
                            Warranty
                          </button>
                        </Col>
                        <Col sm={3} className="btnads">
                          <button className={`butn-ads ${toggle === 3 && `active`}`} onClick={onShipping}>
                            Shipping & Pickup
                          </button>
                        </Col>
                        <Col sm={3} className="btnads">
                          <button className={`butn-ads ${toggle === 4 && `active`}`} onClick={onMessage}>
                            Message Seller
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
                      <div className='button-dsgn'>
                        <div className="col-sm-5 qty-buynow-btn">
                          <div className='quanity'>
                            <span>QTY</span>
                            <span className="quanitybtns"
                              onClick={onDecrement}> - </span>
                            {count}
                            <span className="quanitybtns"
                              onClick={onIncrement}> + </span>
                          </div>
                        </div>
                        {userCountry === ('Trinidad & Tobago' || 'Guyana') && <div className="col-sm-4">
                          <button className='buybtn' onClick={onAddCart}>Add To Cart</button>
                        </div>}
                        <div className="col-sm-3 qty-buynow-btn">
                          <button className='buybtn' onClick={onBuyNow}>Buy Now</button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
            {productVideo ? <div className="video-related">
              <Row className='position-bottom'>
                <div className>
                  <Col md={12}>
                    <div className="video-ads">
                      <ReactPlayer className="video-prop" url={productVideo} width="100%" height="100%" controls={true} />
                    </div>
                  </Col>
                </div>
              </Row>
            </div> : ''}
            <div className="video-related">
              <Row className='position-bottom'>
                <div ClassName="ik-ads">
                  <Col md={12}>
                    {/* <div className='bg-ads'>
                      <div className='arrival-ads'>
                        <span className="ik-ads">Reviews</span>
                        < CarouselReviewCard />
                      </div>
                    </div> */}
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
