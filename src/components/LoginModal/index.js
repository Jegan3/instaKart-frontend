/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Row, Col, Image, Grid } from 'react-bootstrap';
import { history } from '../../routes';

const LoginModal = ({ showPopup, hidePopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [termscondition, setTermsCondition] = useState(false);
  const [login, setLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(showPopup); const [errorMsg, setErrorMsg] = useState('');
  const [alertError, setAlertError] = useState(false);
  const [successmsg, setSuccessMsg] = useState(false);
  const [failuremsg, setFailureMsg] = useState(false);
  const [validate, setValidate] = useState('');

  const dispatch = useDispatch();
  const validLogin = useSelector((state) => state.loginState.login);
  const invalidLogin = useSelector((state) => state.loginState.error);
  const addCartGlobal = useSelector((state) => state.addCartState.addCartGlobal);
  const resetSuccess = useSelector((state) => state.resetState.resetPassword);
  const resetFailure = useSelector((state) => state.resetState.error);

  useEffect(() => {
    setShowLogin(showPopup);
    setErrorMsg('');
    setLogin(false);
    setTermsCondition(false);
    setForgotPassword(false);
    setResetPassword(false);
    setValidate(false);
  }, [showPopup]);

  useEffect(() => {
    if (resetPassword && resetSuccess) {
      setSuccessMsg(resetSuccess.message)
    }
    else if (resetFailure) {
      setFailureMsg(resetFailure.message)
    }
  });

  useEffect(() => {
    if (login && validLogin) {
      if (sessionStorage.type === 'user' && addCartGlobal) {
        dispatch({ type: 'ADD_CART_REQUEST', addToCart: addCartGlobal });
        history.push({ pathname: '/cart', state: 'addCart' });
      }
      setShowLogin(hidePopup);
      setLogin(false);
      // history.push({
      //   pathname: '/dashboard',
      // });
      // } else if (validLogin && !login && !showOtp) {
      //   sessionStorage.clear();
      //   dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if (login && invalidLogin) {
      setErrorMsg(invalidLogin.error);
    }
  });

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const valid = validateEmail(email);

  const onUserName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onPassword = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setPassword(e.target.value);
    }
  };

  const splitPassword = () => {
    setShowPassword(!showPassword);
  };

  const onForgotPassword = () => {
    setErrorMsg('');
    setForgotPassword(true);
  };

  const onTermsCondition = () => {
    setTermsCondition(!termscondition);
  };

  const Login = () => {
    if (email === '' && password === '') {
      setAlertError(true);
      setErrorMsg('Please fill all the fields');
    } else if (email === '') {
      setAlertError(true);
      setErrorMsg('Please fill all the fields');
    } else if (email && valid === false) {
      setAlertError(true)
      setValidate(true)
      setErrorMsg('Please enter the valid Email');
      //message.error('Please enter the valid Email')
    } else if (password === '') {
      setAlertError(true);
      setErrorMsg('Please fill all the fields');
    } else if (termscondition === false) {
      setErrorMsg('Please accept the Terms & Conditions and Privacy Policy');
    } else {
      setLogin(true);
      const passcode = Buffer.from(password).toString("base64");
      const loginDetails = {
        email,
        password: passcode,
      };
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
  };

  const Signup = () => {
    history.push({
      pathname: '/signup',
    });
  };

  const Reset = () => {
    setResetPassword(true);
    dispatch({ type: 'RESET_PASSWORD_REQUEST', reset: email });
    setSuccessMsg('');
    setFailureMsg('');
  };

  const BackToLogin = () => {
    setForgotPassword(false);
    setResetPassword(false);
    setPassword('');
  };

  const openTermsCondition = () => {
    // window.open(`${window.location.origin}/termsofcondition`, '', 'width=1400,height=1200');
    // const win = window.open('/termsofcondition', "_blank");
    // win.focus();
    history.push({ pathname: '/termsofcondition' });
    window.scrollTo(0, 0);
  };

  return (
    <div className="modal-container" >
      <Modal
        show={showLogin}
        onHide={hidePopup}
        aria-labelledby="contained-modal-title"
        bsSize="medium"
      >
        <Modal.Body className="mdl-body">
          <Grid className="modal-popup" fluid>
            <Row className="in-body">
              <div className="right-side">
                <Col md={12} sm={12}>
                  <Row>
                    <Col md={12} className="right-logo" >
                      <Image className="inst-logo" src="../images/logo.png" fluid />
                    </Col>
                    <Col md={12} className="right-home" >
                      {!forgotPassword ?
                        <div>
                          <h3>
                            The Caribbean&#39;s Unified E-Commerce Website
                          </h3>
                        </div> :
                        <div>
                          {!resetPassword ?
                            <div>
                              <h3>
                                RESET PASSWORD
                              </h3>
                              <h5>
                                Enter your email to receive instructions on how to reset your password.
                              </h5>
                            </div> :
                            <div>
                              <h3>
                                PASSWORD RESET
                              </h3>
                              {successmsg ?
                                <h5 className="reset-success">
                                  {successmsg}
                                </h5>
                                :
                                <h5 className="reset-failure">
                                  {failuremsg}
                                </h5>
                              }
                            </div>}
                        </div>}
                    </Col>
                  </Row >
                  <Row className="login-details">
                    {!resetPassword &&
                      <Col md={12} sm={12}>
                        <label >Email </label>
                        <input
                          type="email"
                          className={alertError && email === '' || validateEmail(email) === false && validate ? ' form-control my-input' : 'form-control formy'}
                          placeholder="Enter Email"
                          maxLength={50}
                          value={email}
                          onChange={onUserName}
                        />
                      </Col>}
                    {!forgotPassword &&
                      <Col md={12} sm={12} className="password">
                        <label >Password</label>
                        <i className={`${showPassword ? 'fa fa-unlock-alt' : 'fa fa-lock'} unlock-login`} onClick={splitPassword}></i>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className={alertError && password === '' ? ' form-control my-input' : 'form-control formy'}
                          placeholder="Enter password"
                          maxLength={15}
                          value={password}
                          onChange={onPassword}
                        />
                      </Col>}
                  </Row>
                  {!forgotPassword &&
                    <Row className="check-recovery">
                      <Col md={6} sm={12} >
                        <a className="form-recovery" onClick={onForgotPassword}>Forgot Password</a>
                      </Col>
                    </Row>}
                  {!forgotPassword &&
                    <Row className="terms">
                      <Col md={12} sm={12} >
                        <label className="form-check-label">
                          <input type="checkbox" className="form-radio" value={termscondition} onChange={onTermsCondition} />
                          <small >&emsp;&ensp;By clicking Submit, you agree to our <span className="btn-link" onClick={openTermsCondition}>Terms & Conditions and Privacy Policy.</span></small>
                        </label>
                      </Col>
                    </Row>}
                  {!forgotPassword ?
                    <Row>
                      <Col md={6} sm={12} className="modal-row" >
                        <button
                          type="button"
                          className="btn btn-primary btn-block modal-button"
                          onClick={Signup}
                        >
                          SIGN UP
                        </button>
                      </Col>
                      <Col md={6} sm={12} className="modal-row" >
                        <button
                          type="button"
                          className="btn btn-primary btn-block modal-button"
                          onClick={Login}
                        >
                          LOGIN
                        </button>
                      </Col>
                    </Row> :
                    <Row>
                      {!resetPassword ?
                        <Col md={6} sm={12} mdOffset={3} className="modal-row" >
                          <button
                            type="button"
                            className="btn btn-primary btn-block modal-button"
                            onClick={Reset}
                          >
                            RESET
                          </button>
                        </Col> :
                        <Col md={6} sm={12} mdOffset={3} className="modal-row" >
                          <button
                            type="button"
                            className="btn btn-primary btn-block modal-button"
                            onClick={BackToLogin}
                          >
                            BACK TO LOGIN
                          </button>
                        </Col>}
                    </Row>}
                  {!forgotPassword && !resetPassword &&
                    <Row>
                      <Col md={12} sm={12} className="login-error" >
                        <span className="login-error-msg">{errorMsg}</span>
                      </Col>
                    </Row>}
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

