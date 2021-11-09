/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactTable from 'react-table';
// import { message } from 'antd';
import Table from '../Table';
//import StatsCard from '../StatsCard';
import Desk from '../Desk';
import Headerbar from '../Headerbar';
// import Sidebar from '../Sidebar';

const userList = [
    { id: 1, userName: "Jegan", email: "jegan@gmail.com", country: " Gayana", date: "23/2/2021", price: "$30", status: 'pending' },
    { id: 2, userName: "philip", email: "philip@gmail.com", country: " T and T", date: "23/2/2021",price: "$60", status: 'pending' },
    { id: 3, userName: "Arun", email: 'arun@gmail.com', country: " Gayana", date: "23/2/2021", price: "$90",status: 'delivered' },
    { id: 4, userName: "hari", email: "hari@gmail.com", country: " Gayana", date: "23/2/2021", price: "$10",status: 'pending' },
    { id: 5, userName: "Messi", email: "messi@gmail.com", country: " Gayana", date: "23/2/2021", price: "$60",status: 'delivered' },
]

const UserDetails = () => {

    const [rtl, setRtl] = useState();
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState();

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
        // dispatch({ type: 'VENDOR_STATUS_REQUEST', status });
        setShow(false)
    };

    const onReject = () => {
        const status = {
            email: info.email,
            regStatus: 'rejected',
        }
        //dispatch({ type: 'VENDOR_STATUS_REQUEST', status });
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
                <Headerbar headerName="UserDetail" setRtlCallback={onRtl} />
                <div className="main-content">
                    <Grid fluid>
                        {/* <Row>
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
                        </Row> */}
                        <Row>
                            <Table
                                title="Users Information"
                                content={
                                    <ReactTable
                                        data={userList}
                                        filterable
                                        columns={[
                                            {
                                                Header: '#',
                                                accessor: 'id',
                                                width: 130,
                                            },
                                            {
                                                Header: 'User',
                                                accessor: 'userName',
                                                width: 110,
                                            },
                                            {
                                                Header: 'E-Mail',
                                                accessor: 'email',
                                                width: 200,
                                            },
                                            {
                                                Header: 'Country',
                                                accessor: 'country',
                                            },
                                            {
                                                Header: 'Purchased',
                                                accessor: 'date',
                                                width: 120,
                                            },
                                            {
                                                Header: 'Price',
                                                accessor: 'price',
                                                width: 100,
                                            },
                                            {
                                                Header: 'Status',
                                                accessor: 'status',
                                                width: 130,
                                            },
                                            {
                                                Header: 'More...',
                                                filterable: false,
                                                sortable: false,
                                                Cell: (info) => (
                                                    <span className="btn-sign" onClick={() => handleShow(info)}><i class="fas fa-sign-in-alt"></i></span>
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
}

export default UserDetails;
