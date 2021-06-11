import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/Otp';
import { doPost } from '../utils/fetchWrapper';

export function* getOtp(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getOtp, data.otp);
    yield put(instakartActionCreators.getOtpSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getOtpFailure(error));
  }
}

export function* otpWatchers() {
  yield [
    takeLatest('OTP_REQUEST', getOtp),
  ];
}
