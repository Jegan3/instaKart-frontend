import * as INSTAKART from '../actionTypes/Login';

export function getLogin(loginDetails) {
  return {
    type: INSTAKART.LOGIN_REQUEST,
    loginDetails,
  };
}

export function getLoginSucccess(login) {
  return {
    type: INSTAKART.LOGIN_SUCCESS,
    login,
  };
}

export function getLoginFailure(error) {
  return {
    type: INSTAKART.LOGIN_FAILURE,
    error,
  };
}
