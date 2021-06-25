import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/VendorList';
import { doPost } from '../utils/fetchWrapper';

export function* getVendorList(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getVendorList, data.vendorList);
    yield put(instakartActionCreators.getVendorListSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getVendorListFailure(error));
  }
}

export function* vendorListWatchers() {
  yield [
    takeLatest('VENDOR_LIST_REQUEST', getVendorList),
  ];
}
