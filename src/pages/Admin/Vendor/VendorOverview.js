/*eslint-disable*/
import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

const VendorOverview = () => {
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
                        VendorOverview
                      </label>
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

export default VendorOverview;
