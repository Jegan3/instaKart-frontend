import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as INSTAKART from '../actionTypes/Login';
import * as instakartActionCreators from '../actionCreators/Login';
import { doPost } from '../utils/fetchWrapper';


export function* getLogin(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getLogin, data.login);
    yield put(instakartActionCreators.getLoginSucccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getLoginFailure(error));
  }
}

export function* loginWatchers() {
  yield [
    takeLatest(INSTAKART.LOGIN_REQUEST, getLogin),
  ];
}
