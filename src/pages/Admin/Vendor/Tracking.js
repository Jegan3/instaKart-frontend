/*eslint-disable*/
import React from 'react';
import { Steps } from 'antd';
import { Col, Row, Grid, Thumbnail } from 'react-bootstrap';

const Tracking = () => {

    const { Step } = Steps;

    return (
        <div className='tracking'>
            <Grid fluid>sss
                <div className='tracking-card'>
                    <Row>
                        <Row>
                            <Col>
                                <div className="header-tracking">
                                    <div className=" track">
                                        Track & Trace
                                    </div>
                                    <div className="tracking-id">
                                        Please type your tracking ID
                                    </div>

                                </div>
                            </Col>
                            <Col>
                                <div className='search'>
                                    <div className="search-box">
                                        <button className="btn-search"><i className="fas fa-search"></i></button>
                                        <input type="text" className="input-search" placeholder="Type to Search..." />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="image">
                            <Col md={8}>
                                <div class="img">
                                    <Thumbnail src="images/search..jpeg" className="img-search" />
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col>
                            <div className='header-list'>
                                <div className="exp-year">
                                    <div className='expected'>
                                        Expected Completion
                                    </div>
                                    <div className='year'>
                                        oct 12,2022
                                    </div>
                                </div>
                                <div className='order'>
                                    order 1
                                </div>
                            </div>
                        </Col>
                        <Row className='vendor-details-bottom-card'>
                            <Col>
                                <Steps progressDot current={1}>
                                    <Step title="Ordered" description="Wed 22nd jul 22" />
                                    <Step title="Packed" description="Wed 22nd jul 22" />
                                    <Step title="Shipped" description="Thur 23nd jul 22" />
                                    <Step title="Delivery" description="Expected by on Fri 25nd jul 22" />
                                </Steps>
                            </Col>
                            <Col>
                                <div className='shipment'>
                                    Shipment yet to be delivered
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col>
                            <div className="header-tracking">
                                <div className=" track">
                                    Product not Found
                                </div>
                                <div className="tracking-id">
                                    Please type your valid tracking ID
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Grid>
        </div>
    );
};

export default Tracking;
