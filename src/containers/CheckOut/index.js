/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckOut = () => {

  return (
    <div>
      <Header header />
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
                        {/* <span className="itemsproduct">
                        3 - items
                      </span> */}
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="product-list">
                        <Row>
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
              <Col md={3}>
                <div className="product-card">
                  <Row>
                    <Col sm={12}>
                      <div className="billing-card">
                        <Row>
                          <Col xs={12}>
                            <h4 className="address-title">Shipping Address</h4>
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Full Name"
                              className="checkout-feild"
                            />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Phone Number"
                              className="checkout-feild"
                            />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Address"
                              className="checkout-feild"
                            />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Country"
                              className="checkout-feild" />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="City"
                              className="checkout-feild" />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Zip-Code"
                              className="checkout-feild"
                            />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Email"
                              className="checkout-feild"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Row>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={3}>
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
                            />
                          </Col>
                          <Col xs={12}>
                            <TextField id="standard-name"
                              label="Card Number"
                              className="checkout-feild"
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
                                  select
                                  label="mm"
                                  className="checkout-feild"
                                />
                              </Col>
                              <Col xs={4}>
                                <TextField id="standard-name"
                                  select
                                  label="yyy"
                                  className="checkout-feild"
                                />
                              </Col>
                              <Col xs={4}>
                                <TextField id="standard-name"
                                  label="cvv"
                                  className="checkout-feild"
                                />
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={12}>
                            <div className="checkoutbtn">
                              <Button
                                variant="contained"
                                color="primary">
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
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  )
}

export default CheckOut
