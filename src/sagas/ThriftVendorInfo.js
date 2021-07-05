import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftVendorInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getThriftVendorInfo() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getThriftVendorInfo);
    yield put(instakartActionCreators.getThriftVendorInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftVendorInfoFailure(error));
  }
}

export function* ThriftVendorInfoWatchers() {
  yield [
    takeLatest('THRIFT_VENDOR_INFO_REQUEST', getThriftVendorInfo),
  ];
}
