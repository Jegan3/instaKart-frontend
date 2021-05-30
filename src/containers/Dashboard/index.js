/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid, Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import Headerbar from '../../components/HeaderBar';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
import Upload from '../../components/Upload';
import SideBar from '../../components/Sidebar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [rtl, setRtl] = useState();

  const login = useSelector((state) => state.loginState.login);
  const userData = useSelector((state) => state.retreiveBannerState.retreiveBanner);

  // temproraily for demo
  // const button = login.user.type === 'admin' ? 'APPROVE' : 'UPLOAD';

  const button = login.user ? 'APPROVE' : 'UPLOAD';

  useEffect(() => {
    const { email } = login.user;
    dispatch({ type: 'BANNER_RETRIEVE_REQUEST', email });
  }, []);

  const onClick = () => {
    setShow(true);
  };

  const hidePopup = () => {
    setShow(false);
  };

  // RTL 
  const onRtl = (rtl) => {
    setRtl(rtl)
  }
 
  return (
    <div className={`wrapper ${rtl ? 'rtl' : ''}`}>
      {/* <Upload showPopup={show} hidePopup={hidePopup} /> */}
      <SideBar />
      <div className="rightside-panel">
        <Headerbar headerName="Dashboard" setRtlCallback={onRtl} />
        <div className="main-content">
          <Grid fluid>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-archive fa-xs icon-1" />}
                  statsText="Order Received"
                  statsValue="634"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-truck fa-xs icon-2" />}
                  statsText="Total Delivery"
                  statsValue="1054"
                //   statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-xs icon-3" />}
                  statsText="Cancel Orders"
                  statsValue="6"
                //   statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-xs icon-4" />}
                  statsText="Net Earning"
                  statsValue="15000"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-xs icon-5" />}
                  statsText="Today Ordered"
                  statsValue="0"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-shipping-fast fa-xs icon-6" />}
                  statsText="Today Delivered"
                  statsValue="0"
                //   statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-xs icon-7" />}
                  statsText="Today Sales"
                  statsValue="6"
                //   statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-users fa-xs icon-8" />}
                  statsText="Total Customers"
                  statsValue="1100"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
            </Row>
            <Row>
              <Table
                title="RECENT ORDER REQUESTED"
                content={
                  <ReactTable
                    data={userData && userData.userData}
                    filterable
                    columns={[
                      {
                        Header: '#',
                        accessor: '_id',
                      },
                      {
                        Header: 'E-Mail',
                        accessor: 'email',
                      },
                      {
                        Header: 'Poster',
                        accessor: 'poster',
                      },
                      {
                        Header: 'Status',
                        accessor: 'name',
                        filterable: false,
                        sortable: false,
                        Cell: (original) => (
                          <div className="actions-right">
                            <Button className="btn btn-danger" simple onClick={() => onClick(original)}>{button}</Button>
                          </div>),
                      },
                    ]}
                    defaultPageSize={10}
                    // showPaginationTop
                    showPaginationBottom
                    className="-striped -highlight"
                  />
                }
              />
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
  // }
};

export default Dashboard;
