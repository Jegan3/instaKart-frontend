/*eslint-disable*/
import React, { useRef } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Headerbar from '../../components/Headerbar';
import Sidebar from '../../components/Sidebar';

const AboutRestaurant = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="rightside-panel">
        <Headerbar headerName="About Restaurant" />
        <div className="main-content about-restaurant">
          <Grid fluid>
            <Row>
              <Row className='form-content card' >
                <Col md={6} >
                  <Col sm={7}>
                    <label className="signup-label">Select Currency <span className="red-star">*</span></label>
                    <Select
                      type="text"
                      className="prof-select "
                      placeholder="Select Category."
                      isSearchable={false}
                    />
                  </Col>
                  <Col sm={5}>
                    <label className="tax-label">Select Tax <span className="red-star">*</span></label>
                    <Select
                      type="text"
                      className="prof-select "
                      placeholder="Select Tax."
                      isSearchable={false}
                    />
                  </Col>
                </Col>
                <Col md={6}>
                  <Col sm={12}>
                    <div className='select-file'>
                      <label className="file-label">Upload Photo<span className="red-star">*</span></label>
                      <div className='file-input'>
                        <input type='file' />
                        <span className='button'>Choose</span>
                        <span className='label' >No file selected </span>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className="form-text">
                      <label className="signup-label">Description <span className="red-star">*</span></label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                  </Col>
                </Col>
              </Row>
              <Row className='form-content card resta'>
                <Col md={12} className="check-title">
                  <label className="title-label">Cusine</label>
                </Col>
                <Col md={12} sm={6}  >
                  <Col md={2}>
                    <div className="checkbox">
                      <label ><input type="checkbox" value="" /><span className="check-name"> Chinese</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Thai</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Authentic Indian</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">West Indian</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Grill and Bbq</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Pizza</span></label>
                    </div>
                  </Col>
                </Col>
                <Col md={12} sm={6}  >
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Italian</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Gournment</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Sushi</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Arabic</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Salad and Wrops</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Jerk</span></label>
                    </div>
                  </Col>
                </Col>
                <Col md={12} sm={6}  >
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Bakery</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Pubs and Bars</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Local</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Fast Food International</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Sea Food</span></label>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="checkbox">
                      <label><input type="checkbox" value="" /><span className="check-name">Cafes</span></label>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Row>
            <Row >
              <Col md={12} className="btn-restaurant">
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

export default AboutRestaurant;
