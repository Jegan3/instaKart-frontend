/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid, Button } from 'react-bootstrap';
import { Modal, Header, ModalBody, ModalFooter }from 'react-bootstrap'
import ReactTable from 'react-table';
import Headerbar from '../../components/Headerbar';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
// import Upload from '../../components/Upload';
import Sidebar from '../../components/Sidebar';


const productData = [
  {
    _id: '1',
    company: 'Nike',
    email: 'nike@gmail.com',
    status: 'pending',
    soh: '100',
    country: 'America',
    poster: '123456789012',
  },
]
const Dashboard = () => {
  const [rtl, setRtl] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // const onButton = () => {
  //   alert('raki')
  //   // <Alert
  //   //   message="Info Text"
  //   //   description="Info Description Info Description Info Description Info Description"
  //   //   type="info"
  //   //   action={
  //   //     <Space direction="vertical">
  //   //       <Button size="small" type="primary">
  //   //         Accept
  //   //       </Button>
  //   //       <Button size="small" danger type="ghost">
  //   //         Decline
  //   //       </Button>
  //   //     </Space>
  //   //   }
  //   //   closable
  //   // />
  // }

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
                    //  data={userData && userData.userData}
                    data={productData}
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
                        Header: 'Country',
                        accessor: 'country',
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
                        // Cell: (original) => (
                        //   <div className="actions-right">
                        //     <Button className="btn btn-danger" simple onClick={() => onClick(original)}>{button}</Button>
                        //   </div>),
                      },
                      {
                        Header: 'Action',
                        accessor: 'name',
                        filterable: false,
                        sortable: false,
                        Cell: (original) => (
                          <div className="actions-right">
                            <Button className="btn btn-danger" onClick={handleShow}>click me</Button>
                            <Modal show={show} onHide={handleClose} animation={false}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                              </Modal.Header>
                              <Modal.Body></Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
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
