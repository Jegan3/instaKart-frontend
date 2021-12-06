import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ProductList';
import { doGet, doDelete } from '../utils/fetchWrapper';

export function* getProductList(data) {
  const { storeId } = data;
  if (storeId) {
    try {
      const response = yield doGet(`${envConfig.apiEndPoints.getProductList}?estoreId=${storeId}`);
      yield put(instakartActionCreators.getProductListSuccess(response));
    } catch (error) {
      yield put(instakartActionCreators.getProductListFailure(error));
    }
  } else {
    try {
      const { productId } = data;
      const response = yield doDelete(`${envConfig.apiEndPoints.getProductList}/${productId}`);
      yield put(instakartActionCreators.getProductDeleteSuccess(response));
    } catch (error) {
      yield put(instakartActionCreators.getProductDeleteFailure(error));
    }
  }
}
export function* productListWatchers() {
  yield [
    takeLatest('PRODUCT_LIST_REQUEST', getProductList),
    takeLatest('PRODUCT_DELETE_REQUEST', getProductList),
  ];
}

