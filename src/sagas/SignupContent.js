import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/SignupContent';
import { doGet } from '../utils/fetchWrapper';

export function* getSignupContent() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getSignupContent);
    yield put(instakartActionCreators.getSignupContentSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getSignupContentFailure(error));
  }
}

export function* signupContentWatchers() {
  yield [
    takeLatest('SIGNUP_CONTENT_REQUEST', getSignupContent),
  ];
}
