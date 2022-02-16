/*eslint-disable*/
import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const VendorProfile = () => {
  return (
    <div className='wrapper'>
      <div className='vendor-details-page'>
        <div className="rightside-panel">
          <div className="vendor-main-content">
            <Grid fluid>
              <Row className='vendor-details-bottom-card'>
                <div className='detail-card'>
                  <Col sm={6}>
                    <div className='personal-card'>
                      <label className='info-label'>
                        Personal
                      </label>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>First Name</label>
                        </Col >
                        <Col sm={9}>
                          <div>Manikandan</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Last Name</label>
                        </Col >
                        <Col sm={9}>
                          <div>Manikandan</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Email Address</label>
                        </Col >
                        <Col sm={9}>
                          <div>Manikandan@gmail.com</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Contact No</label>
                        </Col >
                        <Col sm={9}>
                          <div>9999999999</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Location</label>
                        </Col >
                        <Col sm={9}>
                          <div>Manikandan<br />No 22, chennai<br />India</div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className='other-card'>
                      <label className='info-label'>
                        Business
                      </label>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Company Name</label>
                        </Col >
                        <Col sm={9}>
                          <div>Dhinam</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Industry Type</label>
                        </Col >
                        <Col sm={9}>
                          <div>Appliances & Tech</div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className='other-card'>
                      <label className='info-label'>
                        Account
                      </label>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Bank</label>
                        </Col >
                        <Col sm={9}>
                          <div>First CitiZens</div>
                        </Col>
                      </Row>
                      <Row className='vendor-info-card'>
                        <Col sm={3} >
                          <label>Bank Account Number</label>
                        </Col >
                        <Col sm={9}>
                          <div>123654789987456</div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </div>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
