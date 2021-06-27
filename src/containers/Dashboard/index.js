/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
// import { Modal, Header, ModalBody, ModalFooter } from 'react-bootstrap'
import ReactTable from 'react-table';
import Headerbar from '../../components/Headerbar';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
// import Upload from '../../components/Upload';
import Sidebar from '../../components/Sidebar';
import Overlay from '../../components/Overlay';
import Desk from '../../components/Desk';


// const productData = [
//   {
//     _id: '1',
//     company: 'Nike',
//     email: 'nike@gmail.com',
//     status: 'pending',
//     soh: '100',
//     country: 'America',
//     poster: '123456789012',
//   },
// ]

const Dashboard = () => {
  const [rtl, setRtl] = useState();
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();
  //const [alert, setAlert] = useState('');

  // const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state.vendorListState.vendorList && state.vendorListState.vendorList.data);
  // const userData = useSelector((state) => state.retreiveBannerState.retreiveBanner);



  vendorList && vendorList.map((info, i) => {
    info.id = i + 1
  })
  console.log('vendorlist', vendorList)
  // temproraily for demo
  // const button = login.user.type === 'admin' ? 'APPROVE' : 'UPLOAD';

  // const login = {user:'APPROVE', email: 'appu'}

  // const button = login.user ? 'APPROVE' : 'UPLOAD';

  // useEffect(() => {
  //   const { email } = login.user;
  //   dispatch({ type: 'BANNER_RETRIEVE_REQUEST', email });
  // }, []);

  // const onClick = () => {
  //   setShow(true);
  // };


  useEffect(() => {
    dispatch({ type: 'VENDOR_LIST_REQUEST' });
  }, [])

  const hidePopup = () => {
    setShow(false);
  };

  // RTL 
  const onRtl = (rtl) => {
    setRtl(rtl)
  }

  const handleShow = (info) => {
    // console.log('info',info)
  setShow(true);
  setInfo(info.original)
  }

  const onClose = () => {
    setShow(false)
  };

  const onSubmit = () => {
    console.log("infoooo",info)
    const status = {
email: info.email,
regStatus: 'accepted',
    }
    dispatch({ type: 'VENDOR_STATUS_REQUEST', status });
  };

  return (
    <div className={`wrapper ${rtl ? 'rtl' : ''}`}>
      {/* <Upload showPopup={show} hidePopup={hidePopup} /> */}
      {/* <Overlay show={show} onHide={hidePopup} primary="accept"
        secondary="reject" onSubmitSecondary={console.log('reject')}
        onSubmitPrimary={console.log('Accept')} alert={'successful'} /> */}
        <Desk
          // width={500}
          // placement="right"
          // closable={false}
          info={info}
          onClose={onClose}
          show={show}
          submit={onSubmit}
          />
      <Sidebar />
      <div>
      </div>
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
                    data={vendorList}
                    filterable
                    columns={[
                      {
                        Header: '#',
                        accessor: 'id',
                        filterable: false,
                        width: 50,
                      },
                      {
                        Header: 'Company',
                        accessor: 'companyName',
                      },
                      {
                        Header: 'E-Mail',
                        accessor: 'email',
                        width: 250,
                      },
                      {
                        Header: 'Country',
                        accessor: 'country',
                      },
                      {
                        Header: 'Registered',
                        accessor: '21/3/2019',
                      },
                      // {
                      //   Header: 'Bank Account',
                      //   accessor: 'bankAccount',
                      // },
                      // {
                      //   Header: 'WiPay Account',
                      //   accessor: 'wipayAccount',
                      // },
                      {
                        Header: 'Status',
                        accessor: 'status',
                      },
                      {
                        Header: 'Action',
                        // accessor: 'status',
                        filterable: false,
                        sortable: false,
                        Cell: (original) => (
                          // <div className="actions-right">
                          <span className="btn-sign" onClick={()=>handleShow(original)}><i class="fab fa-react"></i></span>
                          // </div>
                        ),
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
