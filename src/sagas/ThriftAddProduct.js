import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftAddProduct';
import { doPost } from '../utils/fetchWrapper';

export function* getThriftAddProduct(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getThriftAddProduct, data.thriftAddProduct);
    yield put(instakartActionCreators.getThriftAddProductSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftAddProductFailure(error));
  }
}

export function* thriftAddProductWatchers() {
  yield [
    takeLatest('THRIFT_ADD_PRODUCT_REQUEST', getThriftAddProduct),
  ];
}
