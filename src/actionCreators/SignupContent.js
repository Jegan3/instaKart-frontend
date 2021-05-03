import * as INSTAKART from '../actionTypes/SignupContent';

export function getSignupContent() {
  return {
    type: INSTAKART.SIGNUP_CONTENT_REQUEST,
  };
}

export function getSignupContentSuccess(signupContent) {
  return {
    type: INSTAKART.SIGNUP_CONTENT_SUCCESS,
    signupContent,
  };
}

export function getSignupContentFailure(error) {
  return {
    type: INSTAKART.SIGNUP_CONTENT_FAILURE,
    error,
  };
}
