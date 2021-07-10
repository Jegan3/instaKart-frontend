/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactTable from 'react-table';
import { message } from 'antd';
import Headerbar from '../../components/Headerbar';
import Table from '../../components/Table';
import StatsCard from '../../components/StatsCard';
import Sidebar from '../../components/Sidebar';
import Desk from '../../components/Desk';
import Loader from '../../components/Loader';

const Dashboard = () => {
  const [rtl, setRtl] = useState();
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();

  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state.vendorListState.vendorList && state.vendorListState.vendorList.data);
  const invalidVendorStatus = useSelector((state) => state.vendorStatusState.error);
  const validVendorStatus = useSelector((state) => state.vendorStatusState.status);
  const isLoadingStatus = useSelector((state) => state.vendorStatusState.isLoading);
  const isLoadingList = useSelector((state) => state.vendorListState.isLoading);


  useEffect(() => {
    if (validVendorStatus && validVendorStatus.status) {
      dispatch({ type: 'VENDOR_LIST_REQUEST' });
      message.success('Thanks!, Basic info form is successfully updated with us')
    } else if (invalidVendorStatus) {
      message.error('invalid Error');
    }
  }, [validVendorStatus, invalidVendorStatus]);

  vendorList && vendorList.map((info, i) => {
    info.id = i + 1, info.status = `${info.status.charAt(0).toUpperCase()}${info.status.slice(1)}`
  })

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
    setShow(true);
    setInfo(info.original)
  }

  const onClose = () => {
    setShow(false)
  };

  const onSubmit = () => {
    const status = {
      email: info.email,
      regStatus: 'accepted',
    }
    dispatch({ type: 'VENDOR_STATUS_REQUEST', status });
    setShow(false)
  };

  const onReject = () => {
    const status = {
      email: info.email,
      regStatus: 'rejected',
    }
    dispatch({ type: 'VENDOR_STATUS_REQUEST', status });
    setShow(false)
  }

  return (
    <div className={`wrapper ${rtl ? 'rtl' : ''}`}>
      <Desk
        info={info}
        onClose={onClose}
        show={show}
        submit={onSubmit}
        reject={onReject}
      />
      <Sidebar />
      <div>
      </div>
      <div className="rightside-panel">
        <Headerbar headerName="Dashboard" setRtlCallback={onRtl} />
        <div className="main-content">
          <Grid fluid>
            {(isLoadingList || isLoadingStatus) && <Loader />}
            <Row>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-archive fa-xs icon-1" />}
                  statsText="Total Companies"
                  statsValue="634"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-truck fa-xs icon-2" />}
                  statsText="Pending Companies"
                  statsValue="105"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-xs icon-3" />}
                  statsText="Rejected Companies"
                  statsValue="6"
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-xs icon-4" />}
                  statsText="Active Companies"
                  statsValue="150"
                />
              </Col>
            </Row>
            <Row>
              <Table
                title="RECENT ORDER REQUESTED"
                content={
                  <ReactTable
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
                        accessor: 'countryName',
                      },
                      {
                        Header: 'Registered',
                        accessor: '21/3/2019',
                      },
                      {
                        Header: 'Status',
                        accessor: 'status',
                      },
                      {
                        Header: 'Analyze',
                        filterable: false,
                        sortable: false,
                        Cell: (info) => (
                          <span className="btn-sign" onClick={() => handleShow(info)}><i className="fab fa-react"></i></span>
                        ),
                      },
                    ]}
                    defaultPageSize={10}
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
};

export default Dashboard;
