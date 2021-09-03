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
import { history } from '../../../routes';

const Cart = (props) => {
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

  const { state } = props.location;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const addCart = useSelector((state) => state.addCartState.addCart);
  const cart = useSelector((state) => state.cartState.cart);
  const checkout = useSelector((state) => state.checkoutState.checkout);
  const product = productDetails && productDetails.productInfo
  // const cartDetails = cart && cart.cartInfo

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
      // if (e.target.value.match('^[2-9]\d{2}-\d{3}-\d{4}$')) {
      //  if (/^[2-9]\d{2}-\d{3}-\d{4}$/.test(e.target.value)) {
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
    info.quantity > 1 && setCount(info.quantity - 1)

    const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
    const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

    const addToCart = {
      productId: info.productId,
      totalPrice: `${currency}${Math.round(productPrice * (info.quantity - 1)).toFixed(2)}`,
      quantity: info.quantity - 1,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
  }

  const onIncrement = (info) => {

    const productPrice = info.productPrice.replace(/[^.0-9\.]+/g, '');
    const currency = info.productPrice.replace(/\d+([,.]\d+)?\s*/g, '');

    // setCount(info.quantity + 1)
    const addToCart = {
      productId: info.productId,
      totalPrice: `${currency}${Math.round(productPrice * (info.quantity + 1)).toFixed(2)}`,
      quantity: info.quantity + 1,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
  }

  const onRemove = (info) => {

    const addToCart = {
      productId: info.productId,
      totalPrice: '',
      quantity: 0,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
  }

  const currency = cart && cart.cartInfo[0].totalPrice.replace(/\d+([,.]\d+)?\s*/g, '');

  const subTotal = cart && cart.cartInfo
    .map(item => parseFloat(item.totalPrice.replace(/[^.0-9\.]+/g, '')))
    .reduce((prev, curr) => prev + curr, 0);

  const adminFee = subTotal * 0.025
  const serviceTax = subTotal * 0.15
  const total = subTotal + adminFee + serviceTax

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
        cartTotalPrice: parseFloat(total).toFixed(2),
        currency
      };
      console.log('test', checkout)
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
              <Col sm={7}>
                <div className="product-card">
                  <Row>
                    <Col sm={12} >
                      <div className="shop-cart">
                        <span className="titleproduct">
                          Shopping Cart
                        </span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-items">
                        {cart && cart.cartInfo.map((info) =>
                          <Row className="product-info-details">
                            <div >
                              <Col sm={3}>
                                <img className="img-fluid" src={info && info.productImage} />
                              </Col>
                              <Col sm={4}>
                                <div className="productlist">
                                  <div className="product-name">{info && info.productName}</div>
                                </div>
                              </Col>
                              <Col sm={3}>
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
                              <Col sm={2}>
                                <div className="product-price">
                                  <div className="product-name">{info && info.totalPrice}</div>
                                </div>
                                <br />
                                <div className="product-remove" onClick={() => onRemove(info)}>Remove</div>
                              </Col>
                            </div>
                          </Row>)}
                        {/* <Row>
                          <div className="align-items-center">
                            <Col xs={3}>
                              <img className="img-fluid" src={product && product.productImages[0]} />
                            </Col>
                            <Col xs={4}>
                              <div className="productlist">
                                <div className="product-name">{product && product.productName}</div>
                              </div>
                            </Col>
                            <Col xs={3}>
                              <div className="productlist">
                                <div className='quanity-check'>
                                  <span>QTY</span>
                                  <span className="quanitybtn"
                                    onClick={onDecrement}> - </span>
                                  {count}
                                  <span className="quanitybtn"
                                    onClick={onIncrement}> + </span>
                                </div>
                              </div>
                            </Col>
                            <Col xs={2}>
                              <div className="product-price">
                                <div className="product-name">{product && product.finalPrice}</div>
                              </div>
                              <br />
                              <div className="product-remove">Remove</div>
                            </Col>
                          </div>
                        </Row> */}
                      </div>
                    </Col>
                  </Row>
                  {(!toggle || state === 'buyNow') && <Row >
                    <Col xsOffset={7} sm={5}>
                      <Col xs={5}>
                        <div className="total">
                          <div className="sub-total">
                            Total
                          </div>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <div className="total">
                          <div className="subprice">
                            {`${currency}${parseFloat(total).toFixed(2)}`}
                          </div>
                        </div>
                      </Col>
                    </Col>
                  </Row>}
                </div>
              </Col>
              {(!toggle || state === 'buyNow') &&
                <Col md={5}>
                  <ScrollAnimation animateIn='bounceInDown' duration={3}>
                    <div className="product-card">
                      <Row>
                        <Col sm={12}>
                          <div className="billing-card">
                            <Row>
                              <Col xs={12}>
                                <h4 className="address-title">Shipping Address</h4>
                              </Col>
                              <Col xs={12} >
                                <TextField id="standard-name"
                                  label="Full Name"
                                  // className={alertError && !fullName ? ' checkout-feild alert-error' : 'checkout }
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
            <Row>
              <div className=" col-sm-7 " >
                <div className="total col-sm-10 ">
                  <div className="sub-total">
                    Admin Fee<span className="tax-info">(2.5%)</span>
                  </div>
                </div>
                <div className="total col-sm-2">
                  <div className="admin-service">
                    {`${currency}${parseFloat(adminFee).toFixed(2)}`}
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className=" col-sm-7 " >
                <div className="total col-sm-10 ">
                  <div className="sub-total">
                    Service Tax<span className="tax-info">(15%)</span>
                  </div>
                </div>
                <div className="total col-sm-2">
                  <div className="admin-service">
                    {`${currency}${parseFloat(serviceTax).toFixed(2)}`}
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              {(!toggle || state === 'addCart' && <Row >
                <div >
                  <div className=" col-sm-7 " >
                    <div className="final-total col-sm-10 ">
                      <div className="sub-total">
                        Total
                      </div>
                    </div>
                    <div className="total col-sm-2">
                      <div className="sub-price">
                        {`${currency}${parseFloat(total).toFixed(2)}`}
                      </div>
                    </div>
                  </div>
                  <div className="btn-end col-sm-5">
                    <div className="proceed-butn">
                      <div>
                        <button
                          type="button"
                          className="proceedbtn  modal-button"
                          onClick={onProceedBuy}
                        >
                          Proceed to Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>)}
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
