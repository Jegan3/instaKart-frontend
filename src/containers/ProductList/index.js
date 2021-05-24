/*eslint-disable*/
import React, { useRef } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ReactTable from 'react-table';
import Headerbar from '../../components/HeaderBar';
import Table from '../../components/Table';
import SideBar from '../../components/SideBar';
import Select from 'react-select';

const productData = [{
    id: '1',
    imgUrl: 'https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg',
    title: 'Chicken Pies',
    status: 'available',
    total: '100',
}, {
    id: '2',
    imgUrl: 'images/1_Food.png',
    title: 'Jamaican Patties',
    status: 'available',
    total: '143',
}, {
    id: '3',
    imgUrl: 'images/1_Food.png',
    title: 'Lobster',
    status: 'available',
    total: '213',
}, {
    id: '4',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Veg Cheese Sandwich',
    status: 'available',
    total: '123',
}, {
    id: '5',
    imgUrl: 'images/1_Food.png',
    title: 'Buffalo Chicken Wings',
    status: 'available',
    total: '156',
}, {
    id: '6',
    imgUrl: 'images/1_Food.png',
    title: 'abc',
    status: 'available',
    total: '143',
},
{
    id: '7',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'available',
    total: '200',
}];

const status = [
    { value: 'Available', label: 'Available' },
    { value: 'Not-Available', label: 'Not-Available' },

];

const ProductList = () => {
    const sideBarRef = useRef();
    return (
        <div className="wrapper">
            {/* <Upload showPopup={show} hidePopup={hidePopup} /> */}
            <SideBar ref={sideBarRef} />
            <div className="rightside-panel">
                <Headerbar headerName="Lunch Box" />
                <div className="table-content">
                    <Grid fluid>
                        <Row>
                            <Table
                                title=""
                                data={productData}
                                content={
                                    <ReactTable
                                        data={productData}
                                        filterable
                                        columns={[
                                            {
                                                Header: '#',
                                                accessor: 'id',
                                                filterable: false,
                                                sortable: false,
                                                style: {
                                                    textAlign: 'left',
                                                },
                                                // width: 100,
                                            },
                                            //   {
                                            //     Header: 'Product Name',
                                            //     accessor: 'imgUrl',
                                            //     filterable: false,
                                            //     sortable: false,
                                            //     style: {
                                            //       textAlign: 'left',
                                            //     },
                                            //     Cell: d => (
                                            //         <img
                                            //           src={d.row.original.imagURL}
                                            //           width={60}
                                            //           alt='Player'
                                            //         />
                                            //   },
                                            {
                                                Header: 'Product Name',
                                                accessor: 'title',
                                                // Cell: (row) => (<div>({row.imgUrl },{row.title})</div>),
                                                filterable: false,
                                                sortable: false,
                                                // width: 500,
                                                style: {
                                                    textAlign: 'left',
                                                },
                                            },

                                            {
                                                Header: 'Status',
                                                accessor: 'status',
                                                filterable: false,
                                                sortable: false,
                                                // width: 300,
                                                style: {
                                                    textAlign: 'left',
                                                },
                                                Cell: () => (
                                                    <div>
                                                        <Select
                                                            name="Status"
                                                            placeholder="Status"
                                                            // value={Status}
                                                            options={status}
                                                            isSearchable={false}
                                                        />
                                                    </div>
                                                ),
                                            }, {
                                                Header: 'total',
                                                accessor: 'total',
                                                filterable: false,
                                                sortable: false,
                                                style: {
                                                    textAlign: 'left',
                                                },
                                                width: 100,
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
};

export default ProductList;
