/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { message } from 'antd';
import TextField from '@material-ui/core/TextField';
import ScrollAnimation from 'react-animate-on-scroll';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const CheckOut = (props) => {
  const [toggle, setToggle] = useState(true);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [zipCode, setZipCode] = useState();
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
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
    if (e.target.value.match('^[2-9]\d{2}-\d{3}-\d{4}$')) {
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

  const onCardName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9 ]*$')) {
      setCardName(e.target.value);
    }
  };

  const onCardNumber = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setCardNumber(e.target.value);
    }
  };

  const onProceedBuy = () => {
    setToggle(false)
  }

  const onMonth = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setMonth(e.target.value)
    }
  }

  const onYear = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setYear(e.target.value)
    }
  }

  const onCvv = (e) => {
    if (e.target.value.match('^[0-9]*$')) {
      setCvv(e.target.value)
    }
  }

  const onDecrement = () => {
    count > 1 && setCount(count - 1)
  }

  const onIncrement = () => {
    setCount(count + 1)
  }

  const submit = () => {
    if (!fullName || !mobile || !address || !country || !city || !zipCode || !email || !cardName || !cardNumber || !month || !year || !cvv
    ) {
      setAlertError(true)
      message.error('Please fill all the fields')
    } else {
      message.success(` ${fullName} Thank you for Your Purchase!!`)
      const checkOut = {
        fullName,
        mobile,
        address,
        country,
        city,
        zipCode,
        email,
        cardName,
        month,
        year,
        cvv,
      };
      console.log('working')
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
              <Col md={6}>
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
                              <div className="product-name">
                                <div className="product-name">{product && product.productName}</div>
                              </div>
                            </Col>
                            <Col xs={3}>
                              <div className="productquanity">
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
                            </Col>
                            <Col xs={1}>
                              <span className="close">&#10005;</span>
                            </Col>
                          </div>
                          <div className="align-items-center">
                            <Col xs={3}>
                              <img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" />
                            </Col>
                            <Col xs={6}>
                              <div className="name-price">
                                <div className="product-name">Cotton T-shirt</div>
                                <div className="product-price">$213</div>
                              </div>
                            </Col>
                            <Col xs={2}>
                              <div className="productquanity">1</div>
                            </Col>
                            <Col xs={1}>
                              <span className="close">&#10005;</span>
                            </Col>
                          </div>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="total">
                        <div className="sub-total">
                          Sub Total
                        </div>
                        <div className="sub-price">
                          $200
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              {(!toggle || state === 'addCart' && < Col md={6}>

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
                <Col md={3}>
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
                                  label="Country"
                                  className="checkout-feild"
                                  value={country}
                                  onChange={onCountry}
                                  maxLength={30}
                                  error={alertError} />
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
                                  label="Zip-Code"
                                  className="checkout-feild"
                                  maxLength={10}
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
                            </Row>
                          </div>
                          <Row>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </ScrollAnimation>
                </Col>}
              {(!toggle || state === 'buyNow') && <Col md={3}>
                <ScrollAnimation animateIn='bounceInUp' duration={3}>
                  <div className="product-card">
                    <Row>
                      <Col sm={12}>
                        <div className="billing-card">
                          <Row>
                            <Col xs={12}>
                              <h4 className="address-title">Card Details</h4>
                            </Col>
                            <Col xs={12}>
                              <div className="cardlist">
                                <Card >
                                  <CardContent>
                                    <CardMedia
                                      style={{ height: "25px" }}
                                      component="img"
                                      image="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_downloads_symbol_350x200.png"
                                    />
                                    <Typography
                                      color="textSecondary"
                                      className='cardnumber'
                                      gutterBottom>
                                      1122 3344 5566 7788
                                    </Typography>
                                    <div>
                                      <span className="namecard">
                                        Jennifer Aniston
                                      </span>
                                      <span className="yearcard">
                                        mm/yy
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </Col>
                            <Col xs={12}>
                              <TextField id="standard-name"
                                label="Card Name"
                                className="checkout-feild"
                                maxLength={30}
                                value={cardName}
                                onChange={onCardName}
                                error={alertError}
                              />
                            </Col>
                            <Col xs={12}>
                              <TextField id="standard-name"
                                label="Card Number"
                                className="checkout-feild"
                                maxLength={18}
                                value={cardNumber}
                                onChange={onCardNumber}
                                error={alertError}
                              />
                            </Col>
                            <Col xs={12}>
                              <div className="type-img">
                                <Typography
                                  variant="h6"
                                  display="block" >
                                  Expiration card
                                </Typography>
                                <CardMedia
                                  style={{ height: "25px" }}
                                  dir="rtl"
                                  component="img"
                                  image="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_downloads_symbol_350x200.png"
                                />
                              </div>
                              <Row>
                                <Col xs={4}>
                                  <TextField id="standard-name"
                                    label="mm"
                                    className="checkout-feild"
                                    value={month}
                                    onChange={onMonth}
                                    maxLength={2}
                                    minLength={2}
                                    error={alertError}
                                  />
                                </Col>
                                <Col xs={4}>
                                  <TextField id="standard-name"
                                    label="yyy"
                                    className="checkout-feild"
                                    value={year}
                                    onChange={onYear}
                                    maxLength={2}
                                    minLength={2}
                                    error={alertError}
                                  />
                                </Col>
                                <Col xs={4}>
                                  <TextField id="standard-name"
                                    label="cvv"
                                    className="checkout-feild"
                                    value={cvv}
                                    onChange={onCvv}
                                    maxLength={3}
                                    minLength={3}
                                    error={alertError}
                                  />
                                </Col>
                              </Row>
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
