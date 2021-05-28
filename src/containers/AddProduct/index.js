/*eslint-disable*/
import React, { useRef } from 'react';
import { Grid, Row, Col, Form } from 'react-bootstrap';
import Select from 'react-select';
import Headerbar from '../../components/HeaderBar';
import SideBar from '../../components/SideBar';

const AddProduct = () => {
  const sideBarRef = useRef();
  return (
    <div className="wrapper">
      {/* <Upload showPopup={show} hidePopup={hidePopup} /> */}
      <SideBar ref={sideBarRef} />
      <div className="rightside-panel">
        <Headerbar headerName="Add Product" />
        <div className="add-product">
          <Grid fluid>
            <Row className="form-content card">
              <Col md={6}>
                <Row>
                  <Col sm={12}>
                    <label className="signup-label">Product Name <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={7}>
                    <label className="signup-label">Select Category <span className="red-star">*</span></label>
                    <Select
                      type="text"
                      className="prof-select "
                      placeholder="Select Category."
                      isSearchable={false}
                    />
                  </Col>
                  <Col sm={5}>
                    <label className="signup-labels">Type <span className="red-star">*</span></label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label className="form-check-label" for="exampleRadios1">
                        Veg
                      </label>
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                      <label className="form-check-label" for="exampleRadios1">
                        Non veg
                       </label>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <label className="signup-label">List Price <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                    />
                  </Col>
                  <Col sm={4}>
                    <label className="signup-label">Sell Price <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                    />
                  </Col>
                  <Col sm={4}>
                    <label className="signup-label">Total Amount <span className="red-star">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      maxLength={30}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col sm={12}>
                    <div className='select-file'>
                      <label className="signup-label">Select File <span className="red-star">*</span></label>
                      <div className='file-input'>
                        <input type='file' />
                        <span className='button'>Choose</span>
                        <span className='label' >No file selected </span>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className="form-group">
                      <label className="signup-label">Message.. <span className="red-star">*</span></label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row >
            <Col md={12} className="btns-style">
              <Col md={6} lg={6} sm={6} xs={6} className="modal-row " >
                <button
                  type="button"
                  className="btn btn-primary  btn-block modal-button "
                // onClick={Login}
                >
                  Submit
                      </button>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="modal-row" >
                <button
                  type="button"
                  className="btn btn-primary btn-block modal-button "
                //onClick={Signup}
                >
                  Cancel
                      </button>
              </Col>
              {/* <Col md={12} sm={12} className="login-error" >
                      <span className="login-error-msg">{errorMsg}</span>
                    </Col> */}
            </Col>
          </Row> 
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
