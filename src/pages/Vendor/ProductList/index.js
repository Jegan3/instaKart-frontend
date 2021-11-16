/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactTable from 'react-table';
import Select from 'react-select';
import Headerbar from '../../../components/Headerbar';
import Table from '../../../components/Table';
import Sidebar from '../../../components/Sidebar';
import { history } from '../../../routes';
import Loader from '../../../components/Loader';

const ProductList = ({ storeId }) => {
  const [status, setStatus] = useState()

  const dispatch = useDispatch();
  const productListInfo = useSelector((state) => state.productListState.productList);
  const isLoading = useSelector((state) => state.productListState.isLoading);

  useEffect(() => {
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
  }, [])

  console.log('storeId', storeId)
  // const capitalizeFirstLetter = (string) => {
  //   console.log('string', string)
  //   string.charAt(0).toUpperCase() + string.slice(1)
  // }

  // const onStatus = (info, value) => {
  //   // const option =  { value: info.original.status, label: info.original.status}
  //   // console.log('item',item)
  //   // const { original } = item;
  //   console.log("e", info)
  //   console.log("value", value)
  //   setStatus(value[info.index])


  // } 

  productListInfo && productListInfo.map((info, i) => {
    info.id = i + 1
  })

  const viewProduct = (info) => {
    const { original } = info;
    history.push({
      pathname: `/addproduct/${original.id}`,
      state: original,
    });
  }

  return (
    <div >
      {/* <Upload showPopup={show} hidePopup={hidePopup} />  */}
      {/* <Sidebar /> */}
      <div >
        {/* <Headerbar headerName="Product List" /> */}
        <div className="main-content">
          {isLoading && <Loader />}
          <Grid fluid>
            <Row>
              <Table
                title=""
                content={
                  <Row className="margin-control">
                    <ReactTable
                      data={productListInfo}
                      filterable
                      columns={[
                        {
                          Header: '#',
                          accessor: 'id',
                          // filterable: false,
                          //sortable: true,
                          width: 70,
                          className: 'price-table',
                        },
                        {
                          Header: 'Product Name',
                          accessor: 'productName',
                          // Cell: (row) => (<div>({row.title})</div>),
                          // filterable: false,
                          sortable: true,
                          width: 230,
                          className: 'price-table',
                        },
                        {
                          Header: 'Reserved',
                          accessor: 'stockReserve',
                          // filterable: false,
                          // sortable: false,
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'SOH',
                          accessor: 'stockHand',
                          // filterable: false,
                          // sortable: false,
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'Sold',
                          accessor: 'stockSold',
                          // filterable: false,
                          // sortable: false,
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'Price',
                          accessor: 'finalPrice',
                          className: 'price-table',
                          // filterable: false,
                          // sortable: false,
                          // width: 100,
                        },
                        // {
                        //   Header: 'Remove',
                        //   accessor: 'remove',
                        //   filterable: false,
                        //   filterable: false,
                        //   sortable: false,
                        // },
                        {
                          Header: 'Status',
                          accessor: 'status',
                          filterable: false,
                          sortable: false,
                          width: 150,
                          className: 'price-table',
                        },
                        // {
                        //   Header: 'Status',
                        //   // accessor: 'status',
                        //   filterable: false,
                        //   sortable: false,
                        //   width: 180,
                        //   style: {
                        //     textAlign: 'left', overflow: 'visible'
                        //   },
                        //   Cell: (info) => (
                        //     <div>
                        //       <Select
                        //         key={info.original.id}
                        //         name="Status"
                        //         placeholder="Status"
                        //         defaultValue={{ value: info.original.status, label: `${info.original.status.charAt(0).toUpperCase()}${info.original.status.slice(1)}` }}
                        //         value={status}
                        //         options={statusOptions}
                        //         onChange={(value) => onStatus(info, value)}
                        //         // onChange={onStatus}
                        //         isSearchable={false}
                        //       />
                        //     </div>
                        //   ),
                        // },
                        {
                          Header: 'Analyze',
                          filterable: false,
                          sortable: false,
                          Cell: (info) => (
                            <span className="btn-sign" onClick={() => viewProduct(info)}><i className="fab fa-react"></i></span>
                          ),
                        },
                      ]
                      }
                      defaultPageSize={10}
                      // showPaginationTop
                      showPaginationBottom
                      className="-striped -highlight"
                    />
                  </Row>
                }
              />
            </Row>
            <Row md={12} className="margin-control">
              {/* <Col className="product-button"> */}
              <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-butn"
                // onClick={onSubmit}
                >
                  Submit
                </button>
              </Col>
              <Col lg={2} md={3} sm={4} xs={6} className="product-button">
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-butn"
                // onClick={onCancel}
                >
                  Cancel
                </button>
              </Col>
              {/* </Col> */}
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductList;