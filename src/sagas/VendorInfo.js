import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/VendorInfo';
import { doPost } from '../utils/fetchWrapper';

export function* getVendorInfo(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getVendorInfo, data.vendorInfo);
    yield put(instakartActionCreators.getVendorInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getVendorInfoFailure(error));
  }
}

export function* vendorInfoWatchers() {
  yield [
    takeLatest('VENDOR_INFO_REQUEST', getVendorInfo),
  ];
}
