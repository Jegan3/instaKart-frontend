/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';
import Headerbar from '../../../components/Headerbar';
import StoreInfo from '../StoreInfo';
import AddProduct from '../AddProduct';
import ProductList from '../ProductList';

const Store = (props) => {
  const [current, setToggle] = useState('storeinfo');
  const [header, setHeader] = useState();
  const [productEdit, setProductEdit] = useState(false);
  const [upDatedHeader, setUpdatedHeader] = useState(true);

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);
  const productListInfo = useSelector((state) => state.productListState.productList);

  const storeId = props.location.state || sessionStorage.newStoreId
  const upDatedHeaderName = upDatedHeader ? storeInfo && storeInfo.storeInfo.storeName : header;

  useEffect(() => {
    if (productEdit) {
      setToggle('addproduct')
    }
  }, [productEdit])

  useEffect(() => {
    if (!productEdit) {
      setToggle('storeinfo')
    }
    dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
    dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
    setUpdatedHeader(true)
  }, [props.location.state])

  const storeHeader = info => {
    setHeader(info)
    setUpdatedHeader(false)
  }

  const editPage = () => {
    setProductEdit(true)
  }

  const handleClick = e => {
    setToggle(e.key);
  };

  return (
    <div className="wrapper">
      <div className="rightside-panel">
        <Headerbar headerName={upDatedHeaderName} />
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="card">
          <Menu.Item key="storeinfo" >
            Store Info
          </Menu.Item>
          <Menu.Item key="addproduct" disabled={storeInfo && storeInfo.storeInfo.emailId === ''} >
            {productEdit ? <div>Edit Product </div> : <div>Add Product</div>}
          </Menu.Item>
          <Menu.Item key="productlist" disabled={productListInfo && productListInfo.length === 0}>
            Product List
          </Menu.Item>
        </Menu>
        {current === 'storeinfo' && <StoreInfo setStoreHeader={storeHeader} storeId={storeId} />}
        {current === 'addproduct' && <AddProduct storeId={storeId} editPage={productEdit} />}
        {current === 'productlist' && <ProductList storeId={storeId} productEdit={editPage} />}
      </div>
    </div>
  )
}

export default Store;