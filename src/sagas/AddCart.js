import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Cart';
import { doPost } from '../utils/fetchWrapper';

export function* getAddCart() {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getAddCart);
    yield put(instakartActionCreators.getAddCartSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getAddCartFailure(error));
  }
}

export function* addCartWatchers() {
  yield [
    takeLatest('ADD_CART_REQUEST', getAddCart),
  ];
}
