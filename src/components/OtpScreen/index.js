/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { history } from '../../routes';

const OtpScreen = ({ show, handleClose, email, setResendOtp }) => {
  const [otp, setOtp] = useState('');
  const [alert, setAlert] = useState('');
  const [counter, setCounter] = useState(30);
  const [count, setCount] = useState(0);
  const [admin, setAdmin] = useState('');

  const dispatch = useDispatch();
  const validOtp = useSelector((state) => state.otpState.otp);
  const invalidOtp = useSelector((state) => state.otpState.error);
  const validSignup = useSelector((state) => state.signupState.signup);

  const userEmail = validSignup && validSignup.data.email;
  const disabled = otp.length < 6 ? true : false

  const alertClassname = validOtp ? 'otp-msg-success' : 'otp-msg-error';

  useEffect(() => {
    setAdmin(userEmail);
  }, [show]);

  useEffect(() => {
    if (validOtp) {
      setAlert(`Your email ${email} is Verified`);
      setTimeout(() => {
        history.push({
          pathname: '/',
        });
      }, 3000);
    } else if (invalidOtp) {
      setAlert(invalidOtp.message);
    }
  });

  useEffect(() => {
    if (show) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setCounter(30);
      // setAdmin(admin)
      setCount(0);
    }
  });

  const handleChange = (value) => {
    setOtp(value)
  };

  //console.log('value', otp.length)

  const onSubmitOtp = () => {
    if (otp < 6) {
      setAlert('Please enter the valid verification code');
    } else {
      const otpDetails = {
        email,
        verificationCode: otp,
      };
      dispatch({ type: 'OTP_REQUEST', otp: otpDetails });
    }
  };


  const resendOtp = () => {
    setResendOtp();
    setCounter(30);
    setCount(count + 1);
  };

  return (
    <Modal
      className="text-center otp-modal"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      animation
      centered
    >
      <Modal.Header className="otp-close" closeButton />
      <Modal.Body className="justify-content-center">
        <h4 className="enter-otp-text">Please Enter Verification Code</h4>
        <p className="password">We have sent a one time password to<span className="otp-resend">{admin}</span></p>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          isInputNum = {true}
          className="otp-input"
          inputStyle="otp-input-style"
          containerStyle="otp-input-container"
          focusStyle="otp-focus"
          shouldAutoFocus
        />
        <h6 className="mt-3 mb-3 admin">Didn't receive the OTP?
          {counter === 0 ?
            <span>
              {count < 3 ?
                <span className="otp-resend" onClick={resendOtp}>RESEND
                </span>
                :
                <span className="admin">Please Contact admin@gmail.com
                </span>}
            </span>
            :
            <span className="otp-resend">Resend Code In
              <span className="time-left"> {counter}s
              </span>
            </span>}
        </h6>
        <Button className="btn btn-primary btn-otp modal-button" onClick={onSubmitOtp} 
        disabled={disabled}
        >Verify</Button>
        <span className={alertClassname}>{alert}</span>
      </Modal.Body>
    </Modal>
  );
};

export default OtpScreen;
