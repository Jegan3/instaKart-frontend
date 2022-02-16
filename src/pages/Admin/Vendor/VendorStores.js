/*eslint-disable*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const VendorStores = () => {
  return (
    <div>
      <Row className='vendor-details-bottom-card'>
        <Row className='vendor-details-card'>
          <div className='store-detail-card'>
            <Col sm={6}>
              <Row className='vendor-card'>
                <div className='vendor-stores-card'>
                  <Col sm={4}>
                    <img
                      className="vendor-logo"
                      src="images/10_TechGadgets.jpg"
                    />
                  </Col>
                  <Col sm={8}>
                    <label className='info-label'>
                      Fashion Stores
                    </label>
                    <div>
                      <text>Store Discription Store Discription Store Discription Store Discription Store Discription Store Discription</text>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className='vendor-card'>
                <div className='vendor-stores-card'>
                  <Col sm={4}>
                    <img
                      className="vendor-logo"
                      src="images/11_TimeCap.png"
                    />
                  </Col>
                  <Col sm={8}>
                    <label className='info-label'>
                      Fashion Stores
                    </label>
                    <div>
                      <text>Store Discription Store Discription Store Discription Store Discription Store Discription Store Discription</text>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          </div>
        </Row>
        <Row className='vendor-details-card'>
          <div className='store-detail-card'>
            <Col sm={6}>
              <Row className='vendor-card'>
                <div className='vendor-stores-card'>
                  <Col sm={4}>
                    <img
                      className="vendor-logo"
                      src="images/ads-banner.jpeg"
                    />
                  </Col>
                  <Col sm={8}>
                    <label className='info-label'>
                      Fashion Stores
                    </label>
                    <div>
                      <text>Store Discription Store Discription Store Discription Store Discription Store Discription Store Discription</text>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className='vendor-card'>
                <div className='vendor-stores-card'>
                  <Col sm={4}>
                    <img
                      className="vendor-logo"
                      src="images/pic1.png"
                    />
                  </Col>
                  <Col sm={8}>
                    <label className='info-label'>
                      Fashion Stores
                    </label>
                    <div>
                      <text>Store Discription Store Discription Store Discription Store Discription Store Discription Store Discription</text>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default VendorStores;
