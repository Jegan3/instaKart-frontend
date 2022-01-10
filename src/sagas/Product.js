import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Product';
import { doPost, doGet, doPut } from '../utils/fetchWrapper';

export function* addProduct(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.addProduct, data.addProduct);
    yield put(instakartActionCreators.addProductSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.addProductFailure(error));
  }
}

export function* getProduct(data) {
  const { productId } = data;
  try {
    const response = yield doGet(`${envConfig.apiEndPoints.getProduct}/${productId}`);
    yield put(instakartActionCreators.getProductSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getProductFailure(error));
  }
}

export function* editProduct(data) {
  const { productId } = data;
  try {
    const response = yield doPut(`${envConfig.apiEndPoints.editProduct}/${productId}`);
    yield put(instakartActionCreators.editProductSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.editProductFailure(error));
  }
}

export function* productWatchers() {
  yield [
    takeLatest('ADD_PRODUCT_REQUEST', addProduct),
    takeLatest('GET_PRODUCT_REQUEST', getProduct),
    takeLatest('EDIT_PRODUCT_REQUEST', editProduct),
  ];
}
