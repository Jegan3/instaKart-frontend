import * as INSTAKART from '../actionTypes/Signup';

export function getSignup(signupDetails) {
  return {
    type: INSTAKART.SIGNUP_REQUEST,
    signupDetails,
  };
}

export function getSignupSucccess(signup) {
  return {
    type: INSTAKART.SIGNUP_SUCCESS,
    signup,
  };
}

export function getSignupFailure(error) {
  return {
    type: INSTAKART.SIGNUP_FAILURE,
    error,
  };
}
