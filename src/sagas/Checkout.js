import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Checkout';
import { doPost } from '../utils/fetchWrapper';

export function* getCheckout(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getCheckout, data.checkout);
    yield put(instakartActionCreators.getCheckoutSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getCheckoutFailure(error));
  }
}

export function* checkoutWatchers() {
  yield [
    takeLatest('CHECKOUT_REQUEST', getCheckout),
  ];
}
