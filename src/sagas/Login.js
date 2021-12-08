import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Login';
import { doPost } from '../utils/fetchWrapper';

export function* getLogin(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getLogin, data.login);
    yield put(instakartActionCreators.getLoginSucccess(response));
    sessionStorage.firstName = response.user.firstName;
    sessionStorage.countryName = response.user.countryName;
    sessionStorage.type = response.user.type;
    sessionStorage.access = response.auth;
  } catch (error) {
    yield put(instakartActionCreators.getLoginFailure(error));
  }
}

export function* loginWatchers() {
  yield [
    takeLatest('LOGIN_REQUEST', getLogin),
  ];
}
