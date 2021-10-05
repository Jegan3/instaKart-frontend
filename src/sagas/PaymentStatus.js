import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/PaymentStatus';
import { doPost } from '../utils/fetchWrapper';

export function* getPaymentStatus(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getPaymentStatus, data.paymentStatus);
    yield put(instakartActionCreators.getPaymentStatusSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getPaymentStatusFailure(error));
  }
}

export function* paymentStatusWatchers() {
  yield [
    takeLatest('PAYMENT_STATUS_REQUEST', getPaymentStatus),
  ];
}
