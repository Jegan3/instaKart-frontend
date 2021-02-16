import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as INSTAKART from '../actionTypes/RetrieveBanner';
import * as instakartActionCreators from '../actionCreators/RetrieveBanner';
import { doGet } from '../utils/fetchWrapper';

export function* getBannerRetrieve() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getRetrieveBanner);
    yield put(instakartActionCreators.getBannerRetreiveSucccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getBannerRetrieveFailure(error));
  }
}

export function* retreiveBannerWatchers() {
  yield [
    takeLatest(INSTAKART.BANNER_UPLOAD_REQUEST, getBannerRetrieve),
  ];
}
