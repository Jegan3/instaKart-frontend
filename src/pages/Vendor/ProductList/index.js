/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import ReactTable from 'react-table';
import Table from '../../../components/Table';
import { history } from '../../../routes';
import Overlay from '../../../components/Overlay';
import { message } from 'antd';

const ProductList = ({ storeId, productEdit }) => {

  const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState('');
  const [remove, setRemove] = useState(false)

  const dispatch = useDispatch();
  const productListInfo = useSelector((state) => state.productListState.productList);
  const productDeleteInfo = useSelector((state) => state.productDeleteState.productDelete);

  const productMessage = productDeleteInfo && productDeleteInfo.message;

  useEffect(() => {
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
  }, [productDeleteInfo]);

  useEffect(() => {
    if (productMessage && remove) {
      message.success(productMessage)
    }
  }, [productMessage])

  // For Index
  productListInfo && productListInfo.map((info, i) => {
    info.id = i + 1;
  });

  const onHide = () => {
    setModal(false);
  };

  const viewProduct = (info) => {
    const { original } = info;
    productEdit()
    history.push({
      pathname: `/storedetails`,
      state: original.productId,
    });
  };

  const onDelete = (info) => {
    const { productId } = info.original;
    setModal(true);
    setRemove(true);
    setProductId(productId);
  };

  return (
    <div className="vendor-product-list">
      <div >
        <Overlay show={modal} onHide={onHide} productId={productId} title="Are you sure want to delete this product ?" />
        <div className="main-content">
          {/* {isLoading && <Loader />} */}
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
                          width: 50,
                          className: 'price-table',
                        },
                        {
                          Header: 'Product Id',
                          accessor: 'productId',
                          width: 220,
                          className: 'price-table',
                        },
                        {
                          Header: 'Product Name',
                          accessor: 'productName',
                          sortable: true,
                          width: 170,
                          className: 'price-table',
                        },
                        {
                          Header: 'Reserved',
                          accessor: 'stockReserve',

                          width: 70,
                          className: 'price-table',
                        },
                        {
                          Header: 'SOH',
                          accessor: 'stockHand',
                          width: 70,
                          className: 'price-table',
                        },
                        {
                          Header: 'Sold',
                          accessor: 'stockSold',
                          width: 70,
                          className: 'price-table',
                        },
                        {
                          Header: 'Price',
                          accessor: 'finalPrice',
                          className: 'price-table',
                          width: 100,
                        },
                        {
                          Header: 'Status',
                          accessor: 'status',
                          filterable: false,
                          sortable: false,
                          width: 100,
                          className: 'price-table',
                        },
                        {
                          Header: 'Remove',
                          filterable: false,
                          sortable: false,
                          width: 70,
                          Cell: (info) => (
                            <span className="btn-sign" onClick={() => onDelete(info)}><i className="fas fa-trash"></i></span>
                          ),
                        },
                        {
                          Header: 'Analyze',
                          filterable: false,
                          sortable: false,
                          width: 70,
                          Cell: (info) => (
                            <span className="btn-sign" onClick={() => viewProduct(info)}><i className="fas fa-sign-in-alt"></i></span>
                          ),
                        },
                      ]
                      }
                      defaultPageSize={10}
                      // showPaginationTop
                      showPaginationBottom
                      className="-striped -highlight"
                    />
                  </Row>}
              />
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
