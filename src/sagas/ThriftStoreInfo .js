import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftStoreInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getThriftStoreInfo() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getThriftStoreInfo);
    yield put(instakartActionCreators.getThriftStoreInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftStoreInfoFailure(error));
  }
}

export function* thriftStoreInfoWatchers() {
  yield [
    takeLatest('THRIFT_STORE_INFO_REQUEST', getThriftStoreInfo),
  ];
}
