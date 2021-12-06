import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Profile';
import { doPut, doGet } from '../utils/fetchWrapper';

export function* getProfile(data) {
  const { profile } = data;
  if (profile) {
    try {
      const response = yield doPut(envConfig.apiEndPoints.getProfile, profile);
      yield put(instakartActionCreators.getProfileUpdateSuccess(response));
    } catch (error) {
      yield put(instakartActionCreators.getProfileUpdateFailure(error));
    }
  } else {
    try {
      const response = yield doGet(envConfig.apiEndPoints.getProfile);
      yield put(instakartActionCreators.getProfileSuccess(response));
    } catch (error) {
      yield put(instakartActionCreators.getProfileFailure(error));
    }
  }
}

export function* profileWatchers() {
  yield [
    takeLatest('PROFILE_REQUEST', getProfile),
    takeLatest('PROFILE_UPDATE_REQUEST', getProfile),
  ];
}

