/*eslint-disable*/
import React from 'react';
import { Steps } from 'antd';
import { Col, Row, Grid } from 'react-bootstrap';

const Tracking = () => {
    const { Step } = Steps;

    const searchBox = document.getElementById('searchBox'),
        googleIcon = document.getElementById('googleIcon');

    const onActive = () => {
        searchBox.classList.toggle('active');
    };

    return (
        <div className='tracking'>
            <Grid fluid>
                <div className='tracking-card'>
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
                        <Col>
                            <div>
                                <img src="images/search..jpeg" />
                            </div>
                        </Col>
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
                    </Row>
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
