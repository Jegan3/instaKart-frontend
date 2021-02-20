import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid, Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import Headerbar from '../../components/HeaderBar';
import Sidebar from '../../components/SideBar';
import { history } from '../../routes';
// react component used to create charts
// react components used to create a SVG / Vector map
// import { VectorMap } from 'react-jvectormap';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
// import Card from '../../components/Card';
import Upload from '../../components/Upload';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const login = useSelector((state) => state.loginState.login);
  const userData = useSelector((state) => state.retreiveBannerState.retreiveBanner);
  const dispatch = useDispatch();

  const button = login.user.type === 'admin' ? 'APPROVE' : 'UPLOAD';

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

  return (
    <div className="wrapper">
      <Upload showPopup={show} hidePopup={hidePopup} />
      <Sidebar history={history} />
      <div className="main-panel">
        <Headerbar headerName="Lunch Box" />
        <div className="main-content">
          <Grid fluid>
            <Row>
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fas fa-archive fa-sm circle-icon-1" />}
                  statsText="Order Received"
                  statsValue="634"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} md={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-truck fa-sm circle-icon-2" />}
                  statsText="Total Delivery"
                  statsValue="1054"
                //   statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
                />
              </Col>
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-sm circle-icon-3" />}
                  statsText="Cancel Orders"
                  statsValue="6"
                //   statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} md={12}>
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
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-sm circle-icon-5" />}
                  statsText="Today Ordered"
                  statsValue="0"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fas fa-shipping-fast fa-sm circle-icon-6" />}
                  statsText="Today Delivered  "
                  statsValue="0"
                //   statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
                />
              </Col>
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-sm circle-icon-7" />}
                  statsText="Today Sales"
                  statsValue="6"
                //   statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
                />
              </Col>
              <Col lg={3} md={12}>
                <StatsCard
                  bigIcon={<i className="fas fa-users fa-sm circle-icon-8" />}
                  statsText="Total Customers"
                  statsValue="1100"
                //   statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
                />
              </Col>
            </Row>
            <Table
              title=""
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
          </Grid>
        </div>
      </div>
    </div>
  );
  // }
};

export default Dashboard;
