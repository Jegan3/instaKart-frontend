import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftDetails';
import { doGet } from '../utils/fetchWrapper';

export function* getThriftDetails() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getThriftDetails);
    yield put(instakartActionCreators.getThriftDetailsSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftDetailsFailure(error));
  }
}

export function* thriftDetailsWatchers() {
  yield [
    takeLatest('THRIFT_DETAILS_REQUEST', getThriftDetails),
  ];
}
