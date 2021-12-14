/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Menu } from 'antd';
import Headerbar from '../../../components/Headerbar';
import Loader from '../../../components/Loader';
import StoreInfo from '../StoreInfo';
import AddProduct from '../AddProduct';
import ProductList from '../ProductList';

const Industry = (props) => {
  const [current, setToggle] = useState('storeinfo');
  const [header, setHeader] = useState();

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);
  const productListInfo = useSelector((state) => state.productListState.productList);

  useEffect(() => {
    dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
    setToggle('storeinfo')
  }, [props.location.state])

  const storeId = props.location.state

  const handleClick = e => {
    setToggle(e.key);
  };

  const setStoreHeader = info => {
    setHeader(info)
  }

  return (
    <div className="wrapper">
      <div className="rightside-panel">
        <Headerbar headerName={header ? header : storeInfo && storeInfo.storeInfo.storeName} />
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="card">
          <Menu.Item key="storeinfo" >
            Store Info
          </Menu.Item>
          <Menu.Item key="addproduct" disabled={storeInfo && storeInfo.storeInfo.emailId === ''} >
            Add Product
          </Menu.Item>
          <Menu.Item key="productlist" disabled={productListInfo && productListInfo.length === 0}>
            Product List
          </Menu.Item>
        </Menu>
        {current === 'storeinfo' && <StoreInfo setStoreHeader={setStoreHeader} storeId={storeId} />}
        {current === 'addproduct' && <AddProduct storeId={storeId} />}
        {current === 'productlist' && <ProductList storeId={storeId} />}
      </div>
    </div>
  )
}

export default Industry;