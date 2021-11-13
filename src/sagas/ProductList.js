import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ProductList';
import { doGet } from '../utils/fetchWrapper';

export function* getProductList(data) {
  try {
    const { storeId } = data;
    const response = yield doGet(`${envConfig.apiEndPoints.getProductList}?estoreId=${storeId}`);
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
