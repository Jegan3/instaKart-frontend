import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ForgetPassword';
import { doPost } from '../utils/fetchWrapper';

export function* getForgotPassword(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getForgotPassword, data.forgotPassword);
    yield put(instakartActionCreators.getForgotPasswordSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getForgotPasswordFailure(error));
  }
}

export function* forgotPasswordWatchers() {
  yield [
    takeLatest('FORGOT_PASSWORD_REQUEST', getForgotPassword),
  ];
}
