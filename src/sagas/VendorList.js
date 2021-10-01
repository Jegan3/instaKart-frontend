import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/VendorList';
import { doGet } from '../utils/fetchWrapper';

export function* getVendorList() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getVendorList);
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
