/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import TextField from '@material-ui/core/TextField';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Loader from '../../../components/Loader';
import { history } from '../../../routes';

const Cart = ({ location }) => {
  const [toggle, setToggle] = useState(true);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState('');
  const [count, setCount] = useState();
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const addCart = useSelector((state) => state.addCartState.addCart);
  const buyNow = useSelector((state) => state.addCartState.buyNow);
  const cart = useSelector((state) => state.cartState.cart);
  const isLoading = useSelector((state) => state.cartState.isLoading);
  const checkout = useSelector((state) => state.checkoutState.checkout);

  //passing buyNowproduct details
  const buyNowDetails = []
  buyNowDetails.push(buyNow);

  //passing state and api value 
  const productList = location.state === 'addCart' ? cart && cart.cartInfo : buyNowDetails;
  const currency = productList && productList.length && productList[0].totalPrice.replace(/\d+([,.]\d+)?\s*/g, '');
  const subTotal = productList && productList.map(item => parseFloat(item.totalPrice.replace(/[^.0-9\.]+/g, ''))).reduce((prev, curr) => prev + curr, 0)
  // admin charges
  const adminFee = subTotal * 0.025;
  // trinidad tobago wipay charges
  const wipayFee = subTotal * 0.035 + 1.70;
  const orderTotal = subTotal + adminFee + wipayFee;

  useEffect(() => {
    dispatch({ type: 'CART_REQUEST' });
  }, [count, addCart]);

  useEffect(() => {
    if (checkout && checkout.url) {
      window.location.assign(checkout.url);
    }
  }, [checkout]);

  const onMobile = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setMobile(e.target.value)
    }
  }

  const onFullName = (e) => {
    if (e.target.value.match('^[a-zA-Z ]*$')) {
      setFullName(e.target.value);
    }
  };

  const onAddress = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setAddress(e.target.value)
    }
  }

  const onZipCode = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setZipCode(e.target.value)
    }
  }

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onCountry = (e) => {
    if (e.target.value.match('^[a-zA-Z]*$')) {
      setCountry(e.target.value);
    };
  }

  const onCity = (e) => {
    if (e.target.value.match('^[a-zA-Z]*$')) {
      setCity(e.target.value);
    }
  };

  const onProceedBuy = () => {
    setToggle(false)
  }

  const onDecrement = (info) => {

    if (location.state === 'addCart' && info.quantity > 1) {

      const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
      const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const addToCart = {
        productId: info.productId,
        totalPrice: `${currency}${parseFloat(productPrice * (info.quantity - 1)).toFixed(2)}`,
        quantity: info.quantity - 1,
      }
      dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
      setCount(info.quantity - 1)

    } else if (location.state === 'buyNow' && info.quantity > 1) {
      const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
      const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const addToCart = {
        productId: info.productId,
        productName: info.productName,
        productImage: info.productImage,
        productPrice: info.productPrice,
        totalPrice: `${currency}${parseFloat(productPrice * (info.quantity - 1)).toFixed(2)}`,
        quantity: info.quantity - 1,
      }
      dispatch({ type: 'BUY_NOW', buyNow: addToCart });
      setCount(info.quantity - 1)
    }
  }

  const onIncrement = (info) => {

    if (location.state === 'addCart') {
      const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
      const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const addToCart = {
        productId: info.productId,
        totalPrice: `${currency}${parseFloat(productPrice * (info.quantity + 1)).toFixed(2)}`,
        quantity: info.quantity + 1,
      }
      dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });

    } else {
      const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
      const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

      const addToCart = {
        productId: info.productId,
        productName: info.productName,
        productImage: info.productImage,
        productPrice: info.productPrice,
        totalPrice: `${currency}${parseFloat(productPrice * (info.quantity + 1)).toFixed(2)}`,
        quantity: info.quantity + 1,
      }
      dispatch({ type: 'BUY_NOW', buyNow: addToCart });
    }
  }

  const onRemove = (info) => {
    const addToCart = {
      productId: info.productId,
      totalPrice: '',
      quantity: 0,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
  }

  const submit = () => {
    if (!fullName || !mobile || !address || !country || !city || !zipCode || !email) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      message.success(` ${fullName} Thank you for Your Purchase!!`)
      const checkout = {
        fullName,
        mobile,
        address,
        city,
        country,
        zipCode,
        email,
        cartTotalPrice: subTotal,
        currency
      };
      dispatch({ type: 'CHECKOUT_REQUEST', checkout });
    };
  }

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <Grid fluid>
          <div className="checkout-details">
            <Row>
              <Col md={7}>
                <div className="product-card">
                  <Col md={12} >
                    <div className="shop-cart">
                      <span className="titleproduct">
                        Shopping Cart
                      </span>
                    </div>
                  </Col>
                  {!subTotal ?
                    (isLoading ? <div> {isLoading && <Loader />} </div> : <Row>
                      <div className='basket'>
                        Your Bucket Is Empty
                      </div>
                    </Row>) :
                    <Row>
                      <Row>
                        <Col md={12}>
                          <div className="product-items">
                            {productList && productList.map((info) =>
                              <Row className="product-info-details">
                                <div >
                                  <Col md={3}>
                                    <img className="img-fluid" src={info && info.productImage} />
                                  </Col>
                                  <Col md={3}>
                                    <div className="productlist">
                                      <div className="product-name">{info && info.productName}</div>
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="productlist">
                                      <div className='quanity-check'>
                                        <span>QTY</span>
                                        <span className="quanitybtn"
                                          onClick={() => onDecrement(info)}> - </span>
                                        {info && info.quantity}
                                        <span className="quanitybtn"
                                          onClick={() => onIncrement(info)}> + </span>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={3}>
                                    <div className="product-price">
                                      <div className="product-name">{info && info.totalPrice}</div>
                                    </div>
                                    <br />
                                    {location.state === 'addCart' && <div className="product-remove" onClick={() => onRemove(info)}>Remove</div>}
                                  </Col>
                                </div>
                              </Row>)}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <div className="col-sm-12" >
                          <div className="final-total col-sm-9 ">
                            <div className="sub-total">
                              Subtotal
                            </div>
                          </div>
                          <div className="total col-sm-3">
                            <div className="sub-price">
                              {`${currency}${parseFloat(subTotal).toFixed(2)}`}
                            </div>
                          </div>
                        </div>
                        <div className=" col-sm-12 " >
                          <div className="total col-sm-9 ">
                            <div className="sub-total">
                              Admin Fee<span className="tax-info">(2.5%)</span>
                            </div>
                          </div>
                          <div className="total col-sm-3">
                            <div className="admin-service">
                              {`${currency}${parseFloat(adminFee).toFixed(2)}`}
                            </div>
                          </div>
                        </div>
                        <div className=" col-sm-12 " >
                          <div className="total col-sm-9 ">
                            <div className="sub-total">
                              Wipay Fee<span className="tax-info">(3.5% + $0.25 USD)</span>
                            </div>
                          </div>
                          <div className="total col-sm-3">
                            <div className="admin-service">
                              {`${currency}${parseFloat(wipayFee).toFixed(2)}`}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=" col-sm-12 " >
                            <div className="final-total col-sm-9 ">
                              <div className="sub-total">
                                Order Total
                              </div>
                            </div>
                            <div className="total col-sm-3">
                              <div className="sub-price">
                                {`${currency}${parseFloat(orderTotal).toFixed(2)}`}
                              </div>
                            </div>
                          </div>
                          <div className="btn-end col-sm-5">
                            <div className="proceed-butn">
                              {location.state === 'addCart' && <div>
                                <button
                                  type="button "
                                  className="proceedbtn  modal-button"
                                  onClick={onProceedBuy}
                                >
                                  Proceed to Buy
                                </button>
                              </div>}
                            </div>
                          </div>
                        </div>
                      </Row>
                    </Row>}
                </div>
              </Col>
              {(!toggle || location.state === 'buyNow') &&
                <Col md={5}>
                  <ScrollAnimation animateIn='bounceInDown' duration={3}>
                    <div className="product-card">
                      <Row>
                        <Col md={12}>
                          <div className="billing-card">
                            <Row>
                              <Col xs={12}>
                                <h4 className="address-title">Shipping Address</h4>
                              </Col>
                              <Col xs={12} >
                                <TextField id="standard-name"
                                  label="Full Name"
                                  className="checkout-feild"
                                  value={fullName}
                                  onChange={onFullName}
                                  maxLength={30}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <TextField
                                  label="Phone Number"
                                  onChangeText={(text) => this.onTextChange(text)}
                                  className="checkout-feild"
                                  value={mobile}
                                  onChange={onMobile}
                                  maxLength={10}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <TextField id="standard-name"
                                  label="Address"
                                  className="checkout-feild"
                                  maxLength={30}
                                  value={address}
                                  onChange={onAddress}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <TextField id="standard-name"
                                  label="City"
                                  className="checkout-feild"
                                  value={city}
                                  onChange={onCity}
                                  maxLength={30}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <TextField id="standard-name"
                                  label="Country"
                                  className="checkout-feild"
                                  value={country}
                                  onChange={onCountry}
                                  maxLength={30}
                                  error={alertError} />
                              </Col>
                              <Col xs={12}>
                                <TextField id="standard-name"
                                  label="Zip-Code"
                                  className="checkout-feild"
                                  maxLength={5}
                                  value={zipCode}
                                  onChange={onZipCode}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <TextField id="standard-name"
                                  label="Email"
                                  className="checkout-feild"
                                  maxLength={30}
                                  value={email}
                                  onChange={onEmail}
                                  error={alertError}
                                />
                              </Col>
                              <Col xs={12}>
                                <div className="checkoutbtn">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={submit}
                                  >
                                    Checkout
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <Row>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </ScrollAnimation>
                </Col>}
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
