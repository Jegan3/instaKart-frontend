/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactTable from 'react-table';
import { message } from 'antd';
import Headerbar from '../../../components/Headerbar';
import Table from '../../../components/Table';
import StatsCard from '../../../components/StatsCard';
import Desk from '../../../components/Desk';
import Loader from '../../../components/Loader';

const Vendor = () => {
  const [rtl, setRtl] = useState();
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();

  const dispatch = useDispatch();
  const vendorList = useSelector((state) => state.vendorListState.vendorList && state.vendorListState.vendorList.data);
  const invalidVendorStatus = useSelector((state) => state.vendorStatusState.error);
  const validVendorStatus = useSelector((state) => state.vendorStatusState.status);
  const isLoadingStatus = useSelector((state) => state.vendorStatusState.isLoading);
  const isLoadingList = useSelector((state) => state.vendorListState.isLoading);

  //company details in count
  const totalCompany = vendorList && vendorList.filter((value) => {
    return value.status;
  }).length

  const activeCompany = vendorList && vendorList.filter((value) => {
    return value.status === 'accepted';
  }).length

  const rejectedCompany = vendorList && vendorList.filter((value) => {
    return value.status === 'rejected';
  }).length

  const pendingCompany = vendorList && vendorList.filter((value) => {
    return value.status === 'pending';
  }).length

  useEffect(() => {
    dispatch({ type: 'VENDOR_LIST_REQUEST' });
  }, [])

  useEffect(() => {
    if (validVendorStatus && validVendorStatus.status) {
      dispatch({ type: 'VENDOR_LIST_REQUEST' });
      message.success(validVendorStatus.message)
    } else if (invalidVendorStatus) {
      message.error('invalid Error');
    }
  }, [validVendorStatus, invalidVendorStatus]);

  vendorList && vendorList.map((info, i) => {
    info.id = i + 1, info.status = `${info.status.charAt(0).toUpperCase()}${info.status.slice(1)}`
  })

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
      <div className="rightside-panel">
        <Headerbar headerName="Vendor" setRtlCallback={onRtl} />
        <div className="main-content">
          <Grid fluid>
            {(isLoadingList || isLoadingStatus) && <Loader />}
            <Row>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-archive fa-xs icon-1" />}
                  statsText="Total Companies"
                  statsValue={totalCompany}
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-truck fa-xs icon-2" />}
                  statsText="Pending Companies"
                  statsValue={pendingCompany}
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fa fa-cart-plus fa-xs icon-3" />}
                  statsText="Rejected Companies"
                  statsValue={rejectedCompany}
                />
              </Col>
              <Col lg={3} md={6} sm={6}>
                <StatsCard
                  bigIcon={<i className="fas fa-rupee-sign fa-xs icon-4" />}
                  statsText="Active Companies"
                  statsValue={activeCompany}
                />
              </Col>
            </Row>
            <Row>
              <Table
                content={
                  <ReactTable
                    data={vendorList}
                    filterable
                    columns={[
                      {
                        Header: 'Avatar',
                        Cell: (info) => (
                          <div className="avatar-photo">
                            <img src="images/avatar.jpeg" />
                          </div>
                        ),
                        filterable: false,
                        sortable: false,
                        width: 100,
                      },
                      {
                        Header: 'Vendor Id',
                        accessor: 'vendorId',
                        width: 180,
                      },
                      {
                        Header: 'Company',
                        accessor: 'companyName',
                      },
                      {
                        Header: 'E-Mail',
                        accessor: 'email',
                        width: 280,
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
                        width: 150,
                      },
                      {
                        Header: 'Analyze',
                        filterable: false,
                        sortable: false,
                        width: 100,
                        Cell: (info) => (
                          <span className="btn-sign" onClick={() => handleShow(info)}>View</span>
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

export default Vendor;
