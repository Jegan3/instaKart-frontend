/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactTable from 'react-table';
import Headerbar from '../../components/Headerbar';
import Table from '../../components/Table';
import Sidebar from '../../components/Sidebar';
import Select from 'react-select';

const productData = [
  {
    id: '1',
    imgUrl: 'https://i.ytimg.com/vi/uRXmA10PYM0/maxresdefault.jpg',
    title: 'Chicken Pies',
    status: 'available',
    soh: '100',
  },
  {
    id: '2',
    imgUrl: 'images/1_Food.png',
    title: 'Jamaican Patties',
    status: 'available',
    soh: '143',
  },
  {
    id: '3',
    imgUrl: 'images/1_Food.png',
    title: 'Lobster',
    status: 'available',
    soh: '213',
  },
  {
    id: '4',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Veg Cheese Sandwich',
    status: 'sold',
    soh: '123',
  },
  {
    id: '5',
    imgUrl: 'images/1_Food.png',
    title: 'Buffalo Chicken Wings',
    status: 'sold',
    soh: '156',
  },
  {
    id: '6',
    imgUrl: 'images/1_Food.png',
    title: 'Burger',
    status: 'reserve',
    soh: '143',
  },
  {
    id: '7',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'reserve',
    soh: '200',
  },
  {
    id: '8',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'reserve',
    soh: '200',
  },
  {
    id: '9',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'reserve',
    soh: '200',
  },{
    id: '10',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'reserve',
    soh: '200',
  }
]

const ProductList = () => {
  const [status, setStatus] = useState()
  console.log('status', status)

  // useEffect(() => {
  //   // console.log('prdouct',productData)
  //   // setStatus(abcd)
  // },[])

  const statusOptions = [
    { value: 'available', label: 'Available' },
    { value: 'sold', label: 'Sold' },
    { value: 'reserve', label: 'Reserve' },
  ];

  const capitalizeFirstLetter = (string) => {
    console.log('string', string)
    string.charAt(0).toUpperCase() + string.slice(1)
  }

  const onStatus = (info, value) => {
    // const option =  { value: info.original.status, label: info.original.status}
    // console.log('item',item)
    // const { original } = item;
    console.log("e", info)
    console.log("value", value)
    setStatus(value[info.index])
  }

  return (
    <div className="wrapper">
      {/* <Upload showPopup={show} hidePopup={hidePopup} />  */}
      <Sidebar />
      <div className="product-list">
        <Headerbar headerName="Product List" />
        <div className="main-content">
          <Grid fluid>
            <Row>
              <Table
                title=""
                data={productData}
                content={
                  <Row className="margin-control">
                    <ReactTable
                      data={productData}
                      filterable
                      columns={[
                        {
                          Header: '#',
                          accessor: 'id',
                          // filterable: false,
                          sortable: true,
                          width: 100,
                        },
                        {
                          Header: 'Product Name',
                          accessor: 'title',
                          // Cell: (row) => (<div>({row.imgUrl },{row.title})</div>),
                          // filterable: false,
                          sortable: true,
                          width: 250,
                        },
                        {
                          Header: 'Status',
                          // accessor: 'status',
                          filterable: false,
                          sortable: false,
                          width: 250,
                          style: {
                            textAlign: 'left', overflow: 'visible'
                          },
                          Cell: (info) => (
                            <div>
                              <Select
                                key={info.original.id}
                                name="Status"
                                placeholder="Status"
                                defaultValue={{ value: info.original.status, label: `${info.original.status.charAt(0).toUpperCase()}${info.original.status.slice(1)}` }}
                                value={status}
                                options={statusOptions}
                                onChange={(value) => onStatus(info, value)}
                                // onChange={onStatus}
                                isSearchable={false}
                              />
                            </div>
                          ),
                        }, {
                          Header: 'SOH',
                          accessor: 'soh',
                          // filterable: false,
                          sortable: false,
                          width: 100,
                        }
                      ]
                      }
                      defaultPageSize={10}
                      // showPaginationTop
                      showPaginationBottom
                      className="-striped -highlight"
                    />
                    <Row md={12} className="margin-control">
                      {/* <Col className="product-button"> */}
                      <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                        <button
                          type="button"
                          className="btn btn-primary btn-block modal-button"
                        // onClick={onSubmit}
                        >
                          Submit
                        </button>
                      </Col>
                      <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                        <button
                          type="button"
                          className="btn btn-primary btn-block modal-button"
                        // onClick={onCancel}
                        >
                          Cancel
                        </button>
                      </Col>
                      {/* </Col> */}
                    </Row>
                  </Row>
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