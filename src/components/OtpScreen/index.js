/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { history } from '../../routes';

const OtpScreen = ({ show, handleClose, email }) => {
  const [otp, setOtp] = useState('');
  const [alert, setAlert] = useState('');

  const dispatch = useDispatch();
  const validOtp = useSelector((state) => state.otpState.otp);
  const invalidOtp = useSelector((state) => state.otpState.error);
  // const [showOtp, setShowOtp] = useState(show);

const alertClassname = validOtp ? 'otp-msg-success' : 'otp-msg-error'

  useEffect(() => {
    if (validOtp) {
      setAlert(`Your email ${email} is Verified`);
      setTimeout(() => {
        history.push({
          pathname: '/',
        });
      }, 3000);
    } else if (invalidOtp) {
      setAlert(invalidOtp.message)
    }
  });

  const handleChange = (value) => {
    setOtp(value);
  }

  const onSubmitOtp = () => {
    if (otp < 6) {
      setAlert('Please enter the valid verfication code');
    } else {
      const otpDetails = {
        email,
        verificationCode: otp
      }
      dispatch({ type: 'OTP_REQUEST', otp: otpDetails });
      // history.push({
      //   pathname: '/',
      // });
    }
  }

  const resendOtp = () => {
    window.alert("Verification code resent to your mail ID");
  }

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
        <p>We have sent you one time password to your mail</p>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          className="otp-input"
          inputStyle="otp-input-style"
          containerStyle="otp-input-container"
          focusStyle="otp-focus"
          shouldAutoFocus
        />
        <h6 className="mt-3 mb-3 text-secondary">Didn't receive the OTP?
          <span className="otp-resend" onClick={resendOtp}>RESEND</span>
        </h6>
        <Button className="btn btn-primary btn-otp modal-button" onClick={onSubmitOtp}>Verify</Button>
        <span className={alertClassname}>{alert}</span>
      </Modal.Body>
    </Modal>
  );
};

export default OtpScreen;
