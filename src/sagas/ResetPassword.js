import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ResetPassword';
import { doGet } from '../utils/fetchWrapper';

export function* getResetPassword(data) {
  const { reset } = data;
  try {
    const response = yield doGet(`${envConfig.apiEndPoints.getResetPassword}?email=${reset}`);
    yield put(instakartActionCreators.getResetPasswordSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getResetPasswordFailure(error));
  }
}

export function* resetPasswordWatchers() {
  yield [
    takeLatest('RESET_PASSWORD_REQUEST', getResetPassword),
  ];
}
