import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ProductInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getProductInfo() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getProductInfo);
    yield put(instakartActionCreators.getProductInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getProductInfoFailure(error));
  }
}

export function* productInfoWatchers() {
  yield [
    takeLatest('PRODUCT_INFO_REQUEST', getProductInfo),
  ];
}
