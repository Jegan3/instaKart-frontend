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
  const [productEnable, setProductEnable] = useState(false)
  const [listEnable, setListEnable] = useState(false)

  const dispatch = useDispatch();
  const storeInfo = useSelector((state) => state.storeInfoState.storeInfo);
  const productListInfo = useSelector((state) => state.productListState.productList);
  const addProductEnable = useSelector((state) => state.storeInfoUpdateState.storeInfoUpdate);
  const ListEnable = useSelector((state) => state.addProductState.addProduct);

  const storeId = props.location.state.storeId || sessionStorage.newStoreId
  const productId = productEdit ? props.location.state.productId : false
  const upDatedHeaderName = upDatedHeader ? storeInfo && storeInfo.storeInfo.storeName : header;
  const productSuccess = addProductEnable && addProductEnable.status;
  const listSuccess = ListEnable && ListEnable.status;

  useEffect(() => {
    if (productSuccess || storeInfo && storeInfo.storeInfo.emailId) {
      setProductEnable(true)
    } if (listSuccess) {
      setListEnable(true)
    }
    if (productListInfo && productListInfo.length > 0) {
      setListEnable(true)
    }
  }, [productSuccess, listSuccess, storeInfo, productListInfo])

  useEffect(() => {
    if (productEdit) {
      setToggle('addproduct')
    }
  }, [productEdit])

  useEffect(() => {
    if (!productEdit) {
      setToggle('storeinfo')
    }
    // dispatch({ type: 'VENDOR_COMPANY_DETAILS_REQUEST' });
    // dispatch({ type: 'PRODUCT_LIST_REQUEST', storeId });
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
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" disabledOverflow={true} className="card">
          <Menu.Item key="storeinfo" >
            Store Info
          </Menu.Item>
          <Menu.Item key="addproduct"
            disabled={!productEnable}
          >
            {productEdit ? <div>Edit Product </div> : <div>Add Product</div>}
          </Menu.Item>
          <Menu.Item key="productlist"
            disabled={!listEnable}
          >
            Product List
          </Menu.Item>
        </Menu>
        {current === 'storeinfo' && <StoreInfo setStoreHeader={storeHeader} storeId={storeId} />}
        {current === 'addproduct' && <AddProduct storeId={storeId} productId={productId} editPage={productEdit} />}
        {current === 'productlist' && <ProductList storeId={storeId} productEdit={editPage} />}
      </div>
    </div>
  )
}

export default Store;