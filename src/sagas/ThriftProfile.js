import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftProfile';
import { doPost } from '../utils/fetchWrapper';

export function* getThriftProfile(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getThriftProfile, data.profileInfo);
    yield put(instakartActionCreators.getThriftProfileSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftProfileFailure(error));
  }
}

export function* thriftProfileWatchers() {
  yield [
    takeLatest('THRIFT_PROFILE_REQUEST', getThriftProfile),
  ];
}
