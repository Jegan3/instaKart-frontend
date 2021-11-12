import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ProductList';
import { doGet } from '../utils/fetchWrapper';

export function* getProductList() {
  // const { estoreId } = data;

  try {
    const response = yield doGet(`${envConfig.apiEndPoints.getProductList}?estoreId=6177d64b64f59d76a7e1d542`);
    yield put(instakartActionCreators.getProductListSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getProductListFailure(error));
  }
}

export function* productListWatchers() {
  yield [
    takeLatest('PRODUCT_LIST_REQUEST', getProductList),
  ];
}
