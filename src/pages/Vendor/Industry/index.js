/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Menu, TimePicker, message } from 'antd';
import Headerbar from '../../../components/Headerbar';
import Loader from '../../../components/Loader';
import StoreInfo from '../StoreInfo';
import AddProduct from '../AddProduct';
import ProductList from '../ProductList';


const Industry = (props) => {
  const [current, setToggle] = useState('profile')

  // const profile = () => {
  //   setToggle(1)
  // }

  // const addProduct = () => {
  //   setToggle(2)
  // }

  // const productList = () => {
  //   setToggle(3)
  // }
  const storeId = props.location.state

  const handleClick = e => {
    console.log('click ', e);
    setToggle(e.key);
  };

  return (
    <div className="wrapper">
      {/* {isLoading && <Loader />} */}
      {/* <Sidebar /> */}
      <div className="rightside-panel">
        <Headerbar headerName="Store Name" />
        {/* <div className="main-content general-info"> */}
        {/* <Grid fluid> */}
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="card">
          <Menu.Item key="profile" >
            Store Info
          </Menu.Item>
          <Menu.Item key="addproduct" >
            Add Product
          </Menu.Item>
          <Menu.Item key="productlist" >
            Product List
          </Menu.Item>
        </Menu>
        {current === 'profile' && <StoreInfo storeId={storeId}/>}
        {current === 'addproduct' && <AddProduct storeId={storeId}/>}
        {current === 'productlist' && <ProductList storeId={storeId}/>}
        {/* </Grid> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Industry;