/*eslint-disable*/
import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { useState } from 'react';
import Headerbar from '../../../components/Headerbar';
import VendorOverview from './VendorOverview';
import VendorProfile from './VendorProfile';
import VendorProducts from './VendorStores';
import Tracking from './Tracking';

const VendorDetails = () => {

  const [toggle, setToggle] = useState(1);

  const onProfile = () => {
    setToggle(1)
  }

  const onOverview = () => {
    setToggle(2)
  }

  const onProducts = () => {
    setToggle(3)
  }

  const onTracking = () => {
    setToggle(4)
  }

  return (
    <div className='wrapper'>
      <div className="rightside-panel">
        <Headerbar headerName="Vendor Details" />
        <div className="vendor-main-content">
          <Grid fluid>
            <Row className='vendor-details-top-card'>
              <Col sm={12}>
                <div className="image-card">
                  <div className="top-banner-img">
                    <img src="images/newbanner.jpg" className="rounded img-fluid" />
                  </div>
                  <div className="bottom-details-info">
                    <Row className='vendor-name-info'>
                      <Col md={3} className="vendor-name-card">
                        <div className="name-detail">
                          <div className="profile-img">
                            <img src="images/avatar.jpeg" className="avatar-img img-fluid" />
                          </div>
                          <div className="vendor-name">
                            <h2>Nik Jone</h2>
                          </div>
                        </div>
                      </Col>
                      <Col md={8} className="vendor-options-card">
                        <Row>
                          <Col sm={3}>
                            <button className={`vendor-btn-style ${toggle === 1 && `btn-active`}`} onClick={onProfile}>
                              Profile
                            </button>
                          </Col>
                          <Col sm={3}>
                            <button className={`vendor-btn-style ${toggle === 2 && `btn-active`}`} onClick={onOverview}>
                              OverView
                            </button>
                          </Col>
                          <Col sm={3}>
                            <button className={`vendor-btn-style ${toggle === 3 && `btn-active`}`} onClick={onProducts}>
                              Products
                            </button>
                          </Col>
                          <Col sm={3}>
                            <button className={`vendor-btn-style ${toggle === 4 && `btn-active`}`} onClick={onTracking}>
                              Tracking
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              {toggle === 1 &&
                <div>
                  <VendorProfile />
                </div>}
              {toggle === 2 &&
                <div>
                  <VendorOverview />
                </div>}
              {toggle === 3 &&
                <div>
                  <VendorProducts />
                </div>}
              {toggle === 4 &&
                <div>
                  <Tracking />
                </div>}
            </Row>
          </Grid>
        </div>
      </div >
    </div >
  );
};

export default VendorDetails;
