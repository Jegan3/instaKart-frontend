/*eslint-disable*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { history } from '../../../routes';

const VendorStores = () => {

  const storeId = "62023f6ebbe5d72307950217"

  const onProducts = () => {
    history.push({ pathname: '/storedetails', state: { storeId: storeId } });
  }

  return (
    <div>
      <Row className='vendor-details-bottom-card'>
        <Row className='vendor-details-card'>
          <div className='store-detail-card'>
            <Col sm={6}>
              <Row className='vendor-stores-card'>
                <Row className='store-info-name-label'>
                  <label className='store-name-label'>
                    Digi Stores
                  </label>
                </Row>
                <Row className='center-info-dgn'>
                  <Col sm={4} className="vendor-logo-dsn">
                    <img
                      className="vendor-logo"
                      src="images/10_TechGadgets.jpg"
                    />
                  </Col>
                  <Col sm={8}>
                    <Row className='total-value'>
                      <Col sm={6}>
                        <label className='store-info-product-label' onClick={onProducts} >
                          Products
                        </label>
                        <div className='count-dsn'>
                          41
                        </div>
                      </Col>
                      <Col sm={6}>
                        <label className='store-info-order-label'>
                          Orders
                        </label>
                        <div className='count-dsn'>
                          178
                        </div>
                      </Col>
                    </Row>
                    <div className='card-btm-details'>
                      <div className='card-products-categry' onClick={onProducts}>
                        Products
                      </div>
                      <div className='card-products-categry'>
                        Reviews
                      </div>
                      <div className='card-social-icon-insta'>
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                      </div>
                      <div className='card-social-icon-facebook'>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className='vendor-stores-card'>
                <Row className='store-info-name-label'>
                  <label className='store-name-label'>
                    Digi Stores
                  </label>
                </Row>
                <Row className='center-info-dgn'>
                  <Col sm={4} className="vendor-logo-dsn">
                    <img
                      className="vendor-logo"
                      src="images/10_TechGadgets.jpg"
                    />
                  </Col>
                  <Col sm={8}>
                    <Row className='total-value'>
                      <Col sm={6}>
                        <label className='store-info-product-label' onClick={onProducts} >
                          Products
                        </label>
                        <div className='count-dsn'>
                          41
                        </div>
                      </Col>
                      <Col sm={6}>
                        <label className='store-info-order-label'>
                          Orders
                        </label>
                        <div className='count-dsn'>
                          178
                        </div>
                      </Col>
                    </Row>
                    <div className='card-btm-details'>
                      <div className='card-products-categry' onClick={onProducts}>
                        Products
                      </div>
                      <div className='card-products-categry'>
                        Reviews
                      </div>
                      <div className='card-social-icon-insta'>
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                      </div>
                      <div className='card-social-icon-facebook'>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </div>
        </Row>
        <Row className='vendor-details-card'>
          <div className='store-detail-card'>
            <Col sm={6}>
              <Row className='vendor-stores-card'>
                <Row className='store-info-name-label'>
                  <label className='store-name-label'>
                    Digi Stores
                  </label>
                </Row>
                <Row className='center-info-dgn'>
                  <Col sm={4} className="vendor-logo-dsn">
                    <img
                      className="vendor-logo"
                      src="images/10_TechGadgets.jpg"
                    />
                  </Col>
                  <Col sm={8}>
                    <Row className='total-value'>
                      <Col sm={6}>
                        <label className='store-info-product-label' onClick={onProducts} >
                          Products
                        </label>
                        <div className='count-dsn'>
                          41
                        </div>
                      </Col>
                      <Col sm={6}>
                        <label className='store-info-order-label'>
                          Orders
                        </label>
                        <div className='count-dsn'>
                          178
                        </div>
                      </Col>
                    </Row>
                    <div className='card-btm-details'>
                      <div className='card-products-categry' onClick={onProducts}>
                        Products
                      </div>
                      <div className='card-products-categry'>
                        Reviews
                      </div>
                      <div className='card-social-icon-insta'>
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                      </div>
                      <div className='card-social-icon-facebook'>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className='vendor-stores-card'>
                <Row className='store-info-name-label'>
                  <label className='store-name-label'>
                    Digi Stores
                  </label>
                </Row>
                <Row className='center-info-dgn'>
                  <Col sm={4} className="vendor-logo-dsn">
                    <img
                      className="vendor-logo"
                      src="images/10_TechGadgets.jpg"
                    />
                  </Col>
                  <Col sm={8}>
                    <Row className='total-value'>
                      <Col sm={6}>
                        <label className='store-info-product-label' onClick={onProducts} >
                          Products
                        </label>
                        <div className='count-dsn'>
                          41
                        </div>
                      </Col>
                      <Col sm={6}>
                        <label className='store-info-order-label'>
                          Orders
                        </label>
                        <div className='count-dsn'>
                          178
                        </div>
                      </Col>
                    </Row>
                    <div className='card-btm-details'>
                      <div className='card-products-categry' onClick={onProducts}>
                        Products
                      </div>
                      <div className='card-products-categry'>
                        Reviews
                      </div>
                      <div className='card-social-icon-insta'>
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                      </div>
                      <div className='card-social-icon-facebook'>
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default VendorStores;
