import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/VendorStatus';
import { doPatch } from '../utils/fetchWrapper';

export function* getVendorStatus(data) {
  try {
    const response = yield doPatch(envConfig.apiEndPoints.getVendorStatus, data.status);
    yield put(instakartActionCreators.getVendorStatusSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getVendorStatusFailure(error));
  }
}

export function* vendorStatusWatchers() {
  yield [
    takeLatest('VENDOR_STATUS_REQUEST', getVendorStatus),
  ];
}
