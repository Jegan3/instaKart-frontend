import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/RetrieveBanner';
import { doGet } from '../utils/fetchWrapper';

export function* getBannerRetrieve(data) {
  try {
    const { email } = data;
    const response = yield doGet(`${envConfig.apiEndPoints.getRetrieveBanner}${email}`);
    yield put(instakartActionCreators.getBannerRetrieveSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getBannerRetrieveFailure(error));
  }
}

export function* retreiveBannerWatchers() {
  yield [
    takeLatest('BANNER_RETRIEVE_REQUEST', getBannerRetrieve),
  ];
}
