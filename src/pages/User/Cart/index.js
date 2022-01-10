/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import TextField from '@material-ui/core/TextField';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Header from '../../../components/Header';
import { Locale } from '../../../constants/Locale';
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
  const [validate, setValidate] = useState('');
  const [alertError, setAlertError] = useState(false);

  const dispatch = useDispatch();
  const buyNow = useSelector((state) => state.addCartState.buyNow);
  const cart = useSelector((state) => state.cartState.cart);
  const isLoadingCart = useSelector((state) => state.cartState.isLoading);
  const isLoadingAddCart = useSelector((state) => state.addCartState.isLoading);
  const checkout = useSelector((state) => state.checkoutState.checkout);

  //store buyNow details in sessionstorage
  if (buyNow) {
    sessionStorage.buyNow = JSON.stringify(buyNow)
  }

  //passing buyNowproduct details
  const buyNowDetails = []
  if (location.state === 'buyNow') {
    buyNowDetails.push(buyNow || JSON.parse(sessionStorage.buyNow));
  }

  //passing state and api value 
  const productList = location.state === 'addCart' ? cart && cart.cartInfo : buyNowDetails;
  const currency = productList && productList.length && productList[0].totalPrice.replace(/\d+([,.]\d+)?\s*/g, '');
  const subTotal = productList && productList.map(item => parseFloat(item.totalPrice.replace(/[^.0-9\.]+/g, ''))).reduce((prev, curr) => prev + curr, 0)

  // admin charges
  const adminFee = subTotal * 0.025;
  // trinidad tobago wipay charges
  const wipayFee = (subTotal + adminFee) * 0.035 + 1.70;
  // wipay total 
  const wipayTotal = subTotal + adminFee;
  const orderTotal = subTotal + adminFee + wipayFee;

  useEffect(() => {
    if (location.state !== 'buyNow') {
      dispatch({ type: 'CART_REQUEST' });
    }
  }, [count]);

  // useEffect(() => {
  //     dispatch({ type: 'CART_REQUEST' });   
  // }, [count]);

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

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const valid = validateEmail(email);

  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value)
    }
  }

  const onCountry = (e) => {
    setCountry(e.target.value);
  };

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
      setCount(info.quantity + 1)
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
      setCount(info.quantity + 1)
    }
  }

  const onRemove = (info) => {
    const addToCart = {
      productId: info.productId,
      totalPrice: '',
      quantity: 0,
    }
    dispatch({ type: 'ADD_CART_REQUEST', addToCart: addToCart });
    setCount(0)
  }

  const onProceed = () => {
    const currencyDetails = {
      cartTotalPrice: wipayTotal.toFixed(2),
      currency
    };
    history.push({ pathname: '/checkout', state: currencyDetails });
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {location.state === 'addCart' ?
        <Header /> : <Header cartIcon />
      }
      <div className="checkout-page">
        <Grid fluid className="fluid-scroll">
          <div className="checkout-details" >
            <Row>
              <Col md={8}>
                <div className="product-card">
                  <Col md={12} >
                    <div className="shop-cart">
                      <span className="titleproduct">
                        Shopping Cart
                      </span>
                    </div>
                  </Col>
                  {isLoadingCart || isLoadingAddCart ? <Loader /> : <Row>
                    {!subTotal ? <div className='basket'>
                      Your Bucket Is Empty
                    </div> :
                      <Row>
                        <Row>
                          <Col md={12}>
                            <div className="product-items">
                              {productList && productList.map((info) =>
                                <Row className="product-info-details">
                                  <div >
                                    <Col sm={3}>
                                      <img className="img-fluid" src={info && info.productImage} />
                                    </Col>
                                    <Col sm={3}>
                                      <div className="productlist">
                                        <div className="product-name">{info && info.productName}</div>
                                      </div>
                                    </Col>
                                    <Col sm={3}>
                                      <div className="productlist nowrap">
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
                                    <Col sm={3}>
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
                      </Row>}
                  </Row>}
                </div>
              </Col>
              <Col md={4} className="scroll-fix">
                <div className="product-card list">
                  <Row>
                    <Col md={12} >
                      <div className="billing-card clr">
                        <Row>
                          <Col md={12}>
                            <div className="summary">
                              <span>
                                Summary
                              </span>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="items-list">
                              <span className="items">
                                ITEMS
                              </span>
                              <span className="items">
                                $132
                              </span>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className='bottom'>
                              <label className="give-code ">GIVE CODE</label>
                              <input
                                type="text"
                                className="form-control "
                                placeholder="Enter Code"
                                // value={storeName}
                                // onChange={onStoreName}
                                maxLength={30}
                              />
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="items-list">
                              <span className="items">
                                Subtotal
                              </span>
                              <span className="items">
                                {`${currency}${parseFloat(subTotal).toFixed(2)}`}
                              </span>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="items-list">
                              <div className="sub-total">
                                Admin Fee<span className="tax-info">(2.5%)</span>
                              </div>
                              <div className="admin-service">
                                {`${currency}${parseFloat(adminFee).toFixed(2)}`}
                              </div>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="items-list">
                              <div className="sub-total">
                                Wipay Fee<span className="tax-info">(3.5% + $0.25 USD)</span>
                              </div>
                              <div className="admin-service">
                                {`${currency}${parseFloat(wipayFee).toFixed(2)}`}
                              </div>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="items-list">
                              <span className="items">
                                Order Total
                              </span>
                              <span className="items">
                                {`${currency}${parseFloat(orderTotal).toFixed(2)}`}
                              </span>
                            </div>
                          </Col>

                          <Col xs={12}>
                            <div className="checkoutbtn">
                              <Button
                                variant="contained"
                                color="primary"
                                // className="proceedbtn  modal-button"
                                onClick={onProceed}
                              >
                                Proceed to Buy
                              </Button>
                            </div>
                            <div className="checkoutbtn">
                              <Button
                                variant="contained"
                                color="primary"
                              // className="proceedbtn  modal-button"
                              // onClick={submit}
                              >
                                Cash on Delivery
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
