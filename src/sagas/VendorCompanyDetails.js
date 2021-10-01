import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/VendorCompanyDetails';
import { doGet } from '../utils/fetchWrapper';

export function* getVendorCompanyDetails() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getVendorCompanyDetails);
    yield put(instakartActionCreators.getVendorCompanyDetailsSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getVendorCompanyDetailsFailure(error));
  }
}

export function* vendorCompanyDetailsWatchers() {
  yield [
    takeLatest('VENDOR_COMPANY_DETAILS_REQUEST', getVendorCompanyDetails),
  ];
}
