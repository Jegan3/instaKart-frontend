/*eslint-disable*/
import React, { useRef } from 'react';
import { Grid, Row } from 'react-bootstrap';
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
    status: 'available',
    soh: '123',
  },
  {
    id: '5',
    imgUrl: 'images/1_Food.png',
    title: 'Buffalo Chicken Wings',
    status: 'available',
    soh: '156',
  },
  {
    id: '6',
    imgUrl: 'images/1_Food.png',
    title: 'abc',
    status: 'available',
    soh: '143',
  },
  {
    id: '7',
    imgUrl: 'images/1_Food.png',
    title: 'Grilled Chicken  Sandwich',
    status: 'available',
    soh: '200',
  }
]

const status = [
  { value: 'Available', label: 'Available' },
  { value: 'Not-Available', label: 'Not-Available' },
];

const ProductList = () => {
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
                  <ReactTable
                    data={productData}
                    filterable
                    columns={[
                      {
                        Header: '#',
                        accessor: 'id',
                        filterable: false,
                        sortable: true,
                        style: {
                          textAlign: 'center',
                        },
                        width: 50,
                      },

                      {
                        Header: 'Product Name',
                        accessor: 'title',
                        // Cell: (row) => (<div>({row.imgUrl },{row.title})</div>),
                        filterable: false,
                        sortable: true,
                        width: 250,
                        style: {
                          textAlign: 'center',
                        },
                      },

                      {
                        Header: 'Status',
                        accessor: 'status',
                        filterable: false,
                        sortable: false,
                        width: 250,
                        style: {
                          textAlign: 'center',
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
                        Header: 'SOH',
                        accessor: 'soh',
                        filterable: false,
                        sortable: false,
                        style: {
                          textAlign: 'center',
                        },
                        width: 100,
                      }
                    ]
                    }
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