import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actionCreators/Login';
import { doPost } from '../utils/fetchWrapper';

export function* getLogin(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getLogin, data.login);
    yield put(instakartActionCreators.getLoginSucccess(response));
    sessionStorage.username = response.user.name;
  } catch (error) {
    yield put(instakartActionCreators.getLoginFailure(error));
  }
}

export function* loginWatchers() {
  yield [
    takeLatest('LOGIN_REQUEST', getLogin),
  ];
}
