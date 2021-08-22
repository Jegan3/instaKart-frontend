/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Menu, TimePicker, message } from 'antd';
import Headerbar from '../../../components/Headerbar';
import Loader from '../../../components/Loader';
import Profile from '../Profile';
import AddProduct from '../AddProduct';
import ProductList from '../ProductList';


const ThriftStoreVendor = () => {
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

const handleClick = e => {
  console.log('click ', e);
  setToggle(e.key );
};

  return (
    <div className="wrapper">
      {/* {isLoading && <Loader />} */}
      {/* <Sidebar /> */}
      <div className="rightside-panel">
        <Headerbar headerName="Store Name" />
        {/* <div className="main-content general-info"> */}
          {/* <Grid fluid> */}
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="profile" >
          Profile 
        </Menu.Item>
        <Menu.Item key="addproduct" >
          Add Product 
        </Menu.Item>
        <Menu.Item key="productlist" >
          Product List
        </Menu.Item>
        </Menu>
        {current === 'profile' && <Profile/>}
        {current === 'addproduct' && <AddProduct/>}
        {current === 'productlist' && <ProductList/>}
          {/* </Grid> */}
        {/* </div> */}
    </div>
    </div>
  )
}

export default ThriftStoreVendor;