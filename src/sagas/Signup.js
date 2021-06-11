import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Signup';
import { doPost } from '../utils/fetchWrapper';

export function* getSignup(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getSignup, data.signup);
    yield put(instakartActionCreators.getSignupSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getSignupFailure(error));
  }
}

export function* signupWatchers() {
  yield [
    takeLatest('SIGNUP_REQUEST', getSignup),
  ];
}
