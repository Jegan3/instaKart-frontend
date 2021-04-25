import * as INSTAKART from '../actionTypes/Otp';

export function getOtp(otpDetails) {
  return {
    type: INSTAKART.OTP_REQUEST,
    otpDetails,
  };
}

export function getOtpSuccess(otp) {
  return {
    type: INSTAKART.OTP_SUCCESS,
    otp,
  };
}

export function getOtpFailure(error) {
  return {
    type: INSTAKART.OTP_FAILURE,
    error,
  };
}
