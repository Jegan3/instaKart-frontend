/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import ReactTable from 'react-table';
// import { message } from 'antd';
import Table from '../../../components/Table';
//import StatsCard from '../StatsCard';
//import Desk from '../Desk';
import Headerbar from '../../../components/Headerbar';


const userList = [
    { id: 1, transactionId: 123456789, email: "jegan@gmail.com", country: " Gayana", date: "23/2/2021", price: "$30", status: 'pending' },
    { id: 2, transactionId: 987654321, email: "philip@gmail.com", country: " T and T", date: "23/2/2021", price: "$60", status: 'pending' },
    { id: 3, transactionId: 564783920, email: 'arun@gmail.com', country: " Gayana", date: "23/2/2021", price: "$90", status: 'delivered' },
    { id: 4, transactionId: 123456789, email: "hari@gmail.com", country: " Gayana", date: "23/2/2021", price: "$10", status: 'pending' },
    { id: 5, transactionId: 987654321, email: "messi@gmail.com", country: " Gayana", date: "23/2/2021", price: "$60", status: 'delivered' },
]

const User = () => {

    const [rtl, setRtl] = useState();
    // const [show, setShow] = useState(false);
    // const [info, setInfo] = useState();

  // RTL 
  const onRtl = (rtl) => {
    setRtl(rtl)
  }

    return (
        <div className={`wrapper ${rtl ? 'rtl' : ''}`}>
            {/* <Desk
                info={info}
                onClose={onClose}
                show={show}
                submit={onSubmit}
                reject={onReject}
            /> */}
            <div className="rightside-panel">
                <Headerbar headerName="UserDetail" setRtlCallback={onRtl} />
                <div className="main-content">
                    <Grid fluid>
                    {/* {(isLoadingList || isLoadingStatus) && <Loader />} */}
                        <Row>
                            <Table
                                content={
                                    <ReactTable
                                        data={userList}
                                        filterable
                                        columns={[
                                            {
                                                Header: '#',
                                                accessor: 'id',
                                                filterable: false,
                                                sortable: false,
                                                width: 80,
                                            },
                                            {
                                                Header: 'Transaction Id',
                                                accessor: 'transactionId',
                                                width: 150,
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

export default User;
