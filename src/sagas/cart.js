import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Cart';
import { doGet } from '../utils/fetchWrapper';

export function* getCart() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getCart);
    yield put(instakartActionCreators.getCartSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getCartFailure(error));
  }
}

export function* cartWatchers() {
  yield [
    takeLatest('CART_REQUEST', getCart),
  ];
}
