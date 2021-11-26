/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactTable from 'react-table';
import Table from '../../../components/Table';
import Sidebar from '../../../components/Sidebar';
import { history } from '../../../routes';
import Loader from '../../../components/Loader';

const ProductList = ({ storeId }) => {

  const dispatch = useDispatch();
  const productListInfo = useSelector((state) => state.productListState.productList);
  const isLoading = useSelector((state) => state.productListState.isLoading);

  useEffect(() => {
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
  }, [])

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
    <div className="vendor-product-list">
      <div >
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
                          width: 70,
                          className: 'price-table',
                        },
                        {
                          Header: 'Product Name',
                          accessor: 'productName',
                          sortable: true,
                          width: 230,
                          className: 'price-table',
                        },
                        {
                          Header: 'Reserved',
                          accessor: 'stockReserve',

                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'SOH',
                          accessor: 'stockHand',
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'Sold',
                          accessor: 'stockSold',
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'Price',
                          accessor: 'finalPrice',
                          className: 'price-table',
                        },
                        {
                          Header: 'Status',
                          accessor: 'status',
                          filterable: false,
                          sortable: false,
                          width: 150,
                          className: 'price-table',
                        },
                        {
                          Header: 'Analyze',
                          filterable: false,
                          sortable: false,
                          Cell: (info) => (
                            <span className="btn-sign" onClick={() => viewProduct(info)}><i class="fas fa-sign-in-alt"></i></span>
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
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductList;