import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Profile';
import { doGet } from '../utils/fetchWrapper';

export function* getProfile() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getProfile);
    yield put(instakartActionCreators.getProfileSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getProfileFailure(error));
  }
}

export function* profileWatchers() {
  yield [
    takeLatest('PROFILE_REQUEST', getProfile),
  ];
}
