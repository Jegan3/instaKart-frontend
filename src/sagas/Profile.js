import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Profile';
import { doPost } from '../utils/fetchWrapper';

export function* getProfile(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getProfile, data.profile);
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
