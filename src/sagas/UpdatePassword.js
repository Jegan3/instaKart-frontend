import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/UpdatePassword';
import { doPost } from '../utils/fetchWrapper';

export function* getUpdatePassword(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getUpdatePassword, data.UpdatePassword);
    yield put(instakartActionCreators.getUpdatePasswordSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getUpdatePasswordFailure(error));
  }
}

export function* updatePasswordWatchers() {
  yield [
    takeLatest('UPDATE_PASSWORD_REQUEST', getUpdatePassword),
  ];
}
