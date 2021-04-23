/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Col, Image, Grid } from 'react-bootstrap';
import { history } from '../../routes';

const LoginModal = ({ showPopup, hidePopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(showPopup);
  const dispatch = useDispatch();
  const validLogin = useSelector((state) => state.loginState.login);
  const invalidLogin = useSelector((state) => state.loginState.error);

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);

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
      // email: 'gopinath.chandar@gmail.com',
      // password: 'Football7&',
      email,
      password,
    };
    dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
  };

  const Signup = () => {
    history.push({
      pathname: '/signup',
    });
  };

  const OpenTermsCondition = () => {
    // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
    const win = window.open('/termsofcondition', "_blank");
    win.focus();
    // history.push({pathname: '/termsofcondition'});
    // window.scrollTo(0, 0);
  };

  return (
    <div className="modal-container" >
      <Modal
        show={show}
        onHide={hidePopup}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Body className="mdl-body">
          <Grid className="modal-popup" fluid>
            <Row className="in-body">
              <div className="right-side">
                <Col className="right-pop" md={12} sm={12}>
                  <Row>
                    <Col md={12} className="right-logo" >
                      <Image className="inst-logo" src="images/logo.png" fluid />
                    </Col>
                    <Col md={12} className="right-welcome" >
                      <h3>
                        Welcome To The Caribbean&#39;s
                      </h3>
                      <h3>
                        Unified e-Commerce Portal
                      </h3>
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
                    <Col md={6} sm={12} >
                      <a className="form-recovery" href="www.google.com">Forgot Password</a>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} sm={12} >
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                      <label className="form-check-label">
                        <small >&emsp;&ensp;By clicking Submit, you agree to our <span className="btn-link" onClick={OpenTermsCondition}>Terms & Conditions and Privacy Policy.</span></small>
                      </label>
                    </Col>
                  </Row>
                  <Row className="bnts">
                    <Col md={6} sm={12} className="modal-row" >
                      <button
                        type="button"
                        className="btn btn-primary btn-block modal-button"
                        onClick={Login}
                      >
                        Login
                      </button>
                    </Col>
                    <Col md={6} sm={12} className="modal-row" >
                      <button
                        type="button"
                        className="btn btn-primary btn-block modal-button"
                        onClick={Signup}
                      >
                        Sign Up
                      </button>
                    </Col>
                    {invalidLogin &&
                      <Col md={12} sm={12} >
                        <span className="login-error-msg">Please Check Your Credentials</span>
                      </Col>}
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

export default LoginModal;

