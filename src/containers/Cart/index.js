/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import TextField from '@material-ui/core/TextField';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckOut = (props) => {
  const [toggle, setToggle] = useState(true);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(1);
  const [alertError, setAlertError] = useState(false);

  const { state } = props.location;

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productInfoState.productInfo);
  const product = productDetails && productDetails.productInfo

  useEffect(() => {
    dispatch({ type: 'PRODUCT_INFO_REQUEST', productId: location.state });
  }, []);

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

  const onDecrement = () => {
    count > 1 && setCount(count - 1)
  }

  const onIncrement = () => {
    setCount(count + 1)
  }

  const submit = () => {
    if (!fullName || !mobile || !address || !country || !city || !zipCode || !email) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      message.success(` ${fullName} Thank you for Your Purchase!!`)
      const checkOut = {
        fullName,
        mobile,
        address,
        city,
        country,
        zipCode,
        email,
      };
      console.log('test', checkOut)
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
                  <Row>
                    <Col sm={12}>
                      <div>
                        <span className="titleproduct">
                          Shopping Cart
                        </span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-list">
                        <Row>
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
                        </Row>
                        <Row>
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
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col xsOffset={7} sm={5}>
                      <Col xs={6}>
                        <div className="total">
                          <div className="sub-total">
                            Total
                          </div>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="total">
                          <div className="sub-price">
                            $200
                          </div>
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </div>
              </Col>
              {(!toggle || state === 'addCart' && < Col md={5}>
                <div className="proceed-list">
                  <div>
                    <h3 className="subtotal">
                      Subtotal (1 item): $ 123.00
                    </h3>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block modal-button"
                      onClick={onProceedBuy}
                    >
                      Proceed to Buy
                    </button>
                  </div>
                </div>
              </Col>)}
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
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default CheckOut;
