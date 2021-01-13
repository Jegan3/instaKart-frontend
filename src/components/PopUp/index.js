/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Row, Col, Image, Grid } from 'react-bootstrap';
import { history } from '../../routes';

const PopUp = ({ show }) => {
  const Login = () => {
    history.push({
      pathname: '/dashboard',
    });
  };

  const Signup = () => {
    history.push({
      pathname: '/signup',
    });
  };

  return (
    <div className="modal-container" >
      <Modal
        show={show}
        // onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Body>
          <Grid className="modal-popup" fluid>
            <Row>
              {/* <left-div> */}
              <Col md={6} sm={12}>
                <Row>
                  <Col md={12} >
                    <Image className="left-login" src="images/images1.jpg" fluid />
                  </Col>
                </Row>
              </Col>
              {/* <right div> */}

              <Col className="right-pop" md={6} sm={11}>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <Row>
                  <Col md={12} className="right-logo" >
                    <Image className="inst-logo" src="images/logo.png" fluid />
                  </Col>
                  <Col md={12} className="right-welcome" >
                    <p>
                      Welcome To the World Largest  Virtual Shopping Mall
                    </p>
                  </Col>
                </Row >
                <Row className="login-details">
                  <Col md={11} sm={12}>
                    <label >User Name </label>
                    <input type="email" className="form-control" placeholder="Enter name" />
                  </Col>
                  <Col md={11} sm={12}>
                    <label >Password</label>
                    <input type="text" className="form-control" placeholder="password" />
                  </Col>
                </Row>
                <Row className="check-recovery">
                  {/* <Col md={5} sm={12} >
                      <label className="form-remember">
                        <input type="checkbox" />Remember Me
                      </label>
                    </Col> */}
                  <Col md={5} sm={12} >
                    <a className="form-recovery" href="www.google.com">Forgot Password?</a>
                  </Col>
                </Row>
                <Row>
                  <Col md={5} sm={12} className="modal-row" >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block modal-button "
                      onClick={Login}
                    >
                      Login
                    </button>
                  </Col>
                  <Col md={5} sm={12} className="modal-row" >
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block modal-button "
                      onClick={Signup}
                    >
                      Sign Up
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default PopUp;
