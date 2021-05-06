/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Grid } from 'react-bootstrap';
import Select from 'react-select';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';

const VendorInfo = () => {
  // const [name, setName] = useState('');

  const products = [
    { value: 'Bakery and Coffee', label: 'Bakery and Coffee' },
    { value: 'Drinks and Cocktails', label: 'Drinks and Cocktails ' },
    { value: 'Electronics ', label: 'Electronics' },
    { value: 'Grocery', label: 'Grocery' },
    { value: 'Restaurants and Food', label: 'VRestaurants and Food ' },
    { value: 'Home and Garden', label: 'Home and Garden' },
    { value: 'Hardware and Equipment', label: 'Hardware and Equipment ' },
    { value: 'Pharmacy and Health', label: 'Pharmacy and Health' },
    { value: 'Beauty', label: 'Beauty' },
    { value: 'Clothing and Accessories', label: 'Clothing and Accessories' },
    { value: 'Books and Paper Goods', label: 'Books and Paper Goods' },
    { value: 'Party and Event Supplies', label: 'Party and Event Supplies' },
  ];

  const banks = [
    { value: 'First Citizens', label: 'First Citizens' },
    { value: 'Republic Bank', label: 'Republic Bank' },
    { value: 'JMMB', label: 'MMB' },
    { value: 'Scotiabank', label: 'Scotiabank' },
    { value: 'RBC Royal Bank', label: 'RBC Royal Bank' },
    { value: 'First Caribbean', label: 'First Caribbean' },
    { value: 'Citibank', label: 'Citibank' },
    { value: 'Bank of Baroda', label: 'Bank of Baroda' },
    { value: 'Agricultural Development Bank', label: 'Agricultural Development Bank ' },
    { value: 'Ansa Merchant Bank', label: 'Ansa Merchant Bank' },
    { value: 'CAF Trinidad & Tobago', label: 'CAF Trinidad & Tobago' },
  ];

  // const Option = props => {
  //   return ( <div> <components.Option {...props}>
  //   <input type="checkbox" checked={props.isSelected}
  //   onChange={() => null} /> <label>{props.value}</label>
  //   </components.Option> </div> );
  //   };

  return (
    <Grid fluid>
      <Header header />
      <Row>
        <Col className="vendorinfo" >
          <Row>
            <Col lg={12} className="sub-heading">
              Basic Information
            </Col>
          </Row>
          <Form className="login-form">
            <Row>
              <Col md={6} sm={12}>
                <label >What is your first name? *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  // value={userName}
                  // onChange={onUserName}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12}>
                <label >What is your surname? *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Surname"
                  // value={userName}
                  // onChange={onUserName}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12}>
                <label >Email *</label>
                <input
                  type="Email"
                  className="form-control"
                  placeholder="Email"
                  // value={userName}
                  // onChange={onUserName}
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12} >
                <label >What is your company's name? *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  // value={userName}
                  // onChange={onUserName}
                  maxLength={30}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <label >Where is your business located? *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Located"
                  maxLength={30}
                />
              </Col>
              <Col md={6} sm={12}>
                <label >Select upto three products. *</label>
                <Select
                  type="text"
                  isMulti
                  placeholder="Choose Products"
                  maxLength={15}
                  options={products}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <label >Choose your bank. *</label>
                <Select
                  type="text"
                  placeholder="Choose Bank."
                  maxLength={15}
                  options={banks}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="signup-submit" >
                <label className="form-check-label">
                  <input type="checkbox" className="form-radio" />
                  <small>&emsp;&ensp;By clicking Submit, you agree to our <span className="btn-link" >Terms & Conditions and Privacy Policy.</span></small>
                </label>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="signup-submit" >
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block modal-button"
                >
                  Proceed
                </button>
              </Col>
              <Col md={12} sm={12} className="login-error-signup" >
                <span className="login-error-msg">
                  {/* {errorMsg} */}
                </span>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
};

export default VendorInfo;
