/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import Headerbar from '../../components/HeaderBar';
import Sidebar from '../../components/SideBar';
import { history } from '../../routes';
// react component used to create charts
// react components used to create a SVG / Vector map
// import { VectorMap } from 'react-jvectormap';
// import Card from '../../components/Card';
import StatsCard from '../../components/StatsCard';

// import {
//   dataPie,
//   dataSales,
//   optionsSales,
//   responsiveSales,
//   // dataBar,
//   // optionsBar,
//   // responsiveBar,
//   tableData,
// } from '../../constants/Variables';

// const mapData = {
//     AU: 760,
//     BR: 550,
//     CA: 120,
//     DE: 1300,
//     FR: 540,
//     GB: 690,
//     GE: 200,
//     IN: 200,
//     RO: 600,
//     RU: 300,
//     US: 2920,
// };

class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar history={history} />
                <div className="main-panel">
                    <Headerbar headerName="Lunch Box" />
                    <div className="main-content">
                        <Grid fluid>
                            <Row>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-archive fa-sm circle-icon-1" />}
                                      statsText="Order Received"
                                      statsValue="634"
                                    //   statsIcon={<i className="fa fa-refresh" />}
                                    // statsIconText="Updated now"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-truck fa-sm circle-icon-2" />}
                                      statsText="Total Delivery"
                                      statsValue="1054"
                                    //   statsIcon={<i className="fa fa-calendar-o" />}
                                    // statsIconText="Last day"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fa fa-cart-plus fa-sm circle-icon-3" />}
                                      statsText="Cancel Orders"
                                      statsValue="6"
                                    //   statsIcon={<i className="fa fa-clock-o" />}
                                    // statsIconText="In the last hour"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-rupee-sign fa-sm circle-icon-4" />}
                                      statsText="Net Earning"
                                      statsValue="15000"
                                    //   statsIcon={<i className="fa fa-refresh" />}
                                    // statsIconText="Updated now"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fa fa-cart-plus fa-sm circle-icon-5" />}
                                      statsText="Today Ordered"
                                      statsValue="0"
                                    //   statsIcon={<i className="fa fa-refresh" />}
                                    // statsIconText="Updated now"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-shipping-fast fa-sm circle-icon-6" />}
                                      statsText="Today Delivered"
                                      statsValue="0"
                                    //   statsIcon={<i className="fa fa-calendar-o" />}
                                    // statsIconText="Last day"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-rupee-sign fa-sm circle-icon-7" />}
                                      statsText="Today Sales"
                                      statsValue="6"
                                    //   statsIcon={<i className="fa fa-clock-o" />}
                                    // statsIconText="In the last hour"
                                    />
                                </Col>
                                <Col lg={3} sm={6}>
                                    <StatsCard
                                      bigIcon={<i className="fas fa-users fa-sm circle-icon-8" />}
                                      statsText="Total Customers"
                                      statsValue="1100"
                                    //   statsIcon={<i className="fa fa-refresh" />}
                                    // statsIconText="Updated now"
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
