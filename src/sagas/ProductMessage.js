import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ProductMessage';
import { doPost } from '../utils/fetchWrapper';

export function* getProductMessage(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getProductMessage, data.productmessage);
    yield put(instakartActionCreators.getProductMessageSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getProductMessageFailure(error));
  }
}

export function* productMessageWatchers() {
  yield [
    takeLatest('PRODUCT_MESSAGE_REQUEST', getProductMessage),
  ];
}
