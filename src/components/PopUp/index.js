/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Col, Image, Grid } from 'react-bootstrap';
import { history } from '../../routes';

const PopUp = ({ show }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const validLogin = useSelector((state) => state.loginState.login);

  if (validLogin && login) {
    history.push({
      pathname: '/dashboard',
    });
  } else if (validLogin && login === false) {
    sessionStorage.clear();
    dispatch({ type: 'LOGOUT_SUCCESS' });
  }

  const Login = () => {
    setLogin(true);
    const loginDetails = {
      email: 'gopinath.chandar@gmail.com',
      password: 'Football7&',
    //   email,
    //   password,
    };
    dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
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
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Body className="mdl-body">
          <Grid className="modal-popup" fluid>
            <Row className="in-body">
              <Col md={6} sm={12} className="login-img">
                <Col md={12} className="login-img" >
                  <Image className="left-login" src="images/images1.jpg" fluid />
                </Col>
              </Col>
              <div className="right-side">
                <Col className="right-pop" md={6} sm={12}>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <Row>
                    <Col md={12} className="right-logo" >
                      <Image className="inst-logo" src="images/logo.png" fluid />
                    </Col>
                    <Col md={12} className="right-welcome" >
                      <p>
                        WELCOME TO THE WORLD&apos;S
                      </p>
                      <p>
                        LARGEST VIRTUAL SHOPPING
                      </p>
                      <p>
                        MALL
                      </p>
                    </Col>
                  </Row >
                  <Row className="login-details">
                    <Col md={12} sm={12}>
                      <label >User Name </label>
                      <input type="email" className="form-control" placeholder="Enter name" onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Col md={12} sm={12}>
                      <label >Password</label>
                      <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                  </Row>
                  <Row className="check-recovery">
                    <Col md={5} sm={12} >
                      <a className="form-recovery" href="www.google.com">Forgot Password</a>
                    </Col>
                  </Row>
                  <Row className="bnts">
                    <Col md={6} sm={12} className="modal-row" >
                      <button
                        type="button"
                        className="btn btn-primary btn-block modal-button "
                        onClick={Login}
                      >
                        Login
                      </button>
                    </Col>
                    <Col md={6} sm={12} className="modal-row" >
                      <button
                        type="button"
                        className="btn btn-primary btn-block modal-button "
                        onClick={Signup}
                      >
                        Sign Up
                      </button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Grid>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopUp;

