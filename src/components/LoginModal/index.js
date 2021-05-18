/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Col, Image, Grid } from 'react-bootstrap';
import { history } from '../../routes';

const LoginModal = ({ showPopup, hidePopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termscondition, setTermsCondition] = useState(false);
  const [login, setLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(showPopup);
  const [errorMsg, setErrorMsg] = useState('');
  const [alertError, setAlertError] = useState(false);
  const dispatch = useDispatch();
  const validLogin = useSelector((state) => state.loginState.login);
  const invalidLogin = useSelector((state) => state.loginState.error);

  useEffect(() => {
    setShowLogin(showPopup);
    setErrorMsg('')
    setLogin(false)
    setTermsCondition(false)
  }, [showPopup]);

  useEffect(() => {
    if (login && validLogin) {
      setShowLogin(hidePopup);
      setLogin(false);
      // history.push({
      //   pathname: '/dashboard',
      // });
      // } else if (validLogin && !login && !showOtp) {
      //   sessionStorage.clear();
      //   dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if (login && invalidLogin) {
      setErrorMsg('Please enter the valid credentials')
    }
  })

  const onUserName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onPassword = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setPassword(e.target.value)
    }
  };

  const onTermsCondition = (e) => {
    setTermsCondition(!termscondition)
  }

  const Login = () => {
    if (email === '' || password === '') {
      setAlertError(true);
      setErrorMsg('Please fill all the fields');
    } else if (email === '') {
      setAlertError(true);
    } else if (password === '') {
      setAlertError(true);
    } else if (termscondition === false) {
      setErrorMsg('Please accept the Terms & Conditions and Privacy Policy');
    } else {
      setLogin(true);
      const loginDetails = {
        // email: 'gopinath.chandar@gmail.com',
        // password: 'Football7&',
        email,
        password,
      };
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
  };

  const Signup = () => {
    history.push({
      pathname: '/signup',
    });
  };

  const OpenTermsCondition = () => {
    // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
    // const win = window.open('/termsofcondition', "_blank");
    // win.focus();
    history.push({pathname: '/termsofcondition'});
    window.scrollTo(0, 0);
  };

  return (
    <div className="modal-container" >
      <Modal
        show={showLogin}
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
                      <input type="email"
                        className={alertError && email === '' ? ` form-control my-input` : `form-control formy`}
                        placeholder="Enter username"
                        maxLength={30}
                        value={email}
                        onChange={onUserName}
                      />
                    </Col>
                    <Col md={12} sm={12}>
                      <label >Password</label>
                      <input type="password"
                        className={alertError && password === '' ? ` form-control my-input` : `form-control formy`}
                        placeholder="Enter password"
                        maxLength={15}
                        value={password}
                        onChange={onPassword}
                      />
                    </Col>
                  </Row>
                  <Row className="check-recovery">
                    <Col md={6} sm={12} >
                      <a className="form-recovery" href="www.google.com">Forgot Password</a>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} sm={12} >
                      <label className="form-check-label">
                        <input type="checkbox" className="form-radio" value={termscondition} onChange={onTermsCondition} />
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
                    <Col md={12} sm={12} className="login-error" >
                      <span className="login-error-msg">{errorMsg}</span>
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

export default LoginModal;

