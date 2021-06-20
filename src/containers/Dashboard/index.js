/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid, Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import Headerbar from '../../components/Headerbar';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
import Upload from '../../components/Upload';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  const [rtl, setRtl] = useState();
  
  const dispatch = useDispatch();
  const login = useSelector((state) => state.loginState.login);
  const userData = useSelector((state) => state.retreiveBannerState.retreiveBanner);

  // temproraily for demo
  // const button = login.user.type === 'admin' ? 'APPROVE' : 'UPLOAD';

  // const login = {user:'APPROVE', email: 'appu'}

  // const button = login.user ? 'APPROVE' : 'UPLOAD';

  // useEffect(() => {
  //   const { email } = login.user;
  //   dispatch({ type: 'BANNER_RETRIEVE_REQUEST', email });
  // }, []);

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
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="Dashboard" setRtlCallback={onRtl} />
        <div className="main-content">
          <Grid fluid>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-archive fa-xs icon-1" />}
                  statsText="Total Companies"
                  statsValue="634"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-truck fa-xs icon-2" />}
                  statsText="Pending Companies"
                  statsValue="105"
                //   statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-xs icon-3" />}
                  statsText="Rejected Companies"
                  statsValue="6"
                //   statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-xs icon-4" />}
                  statsText="Active Companies"
                  statsValue="150"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
            </Row>
            {/* <Row>
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
            </Row> */}
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
                        width: 100,
                      },
                      {
                        Header: 'Company',
                        accessor: 'company',
                      },
                      {
                        Header: 'E-Mail',
                        accessor: 'email',
                      },
                      {
                        Header: 'Bank Account Number',
                        accessor: 'poster',
                      },
                      {
                        Header: 'WiPay Account Number',
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
