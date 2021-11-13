import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ListYourAds';
import { doPost, doGet } from '../utils/fetchWrapper';

export function* listYourAds(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getListYourAds, data.advertiseNow);
    yield put(instakartActionCreators.getListYourAdsSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getListYourAdsFailure(error));
  }
}


export function* getYourAds() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getYourAds);
    yield put(instakartActionCreators.getYourAdsSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getYourAdsFailure(error));
  }
}

export function* getListYourAdsWatchers() {
  yield [
    takeLatest('LIST_YOUR_ADS_REQUEST', listYourAds),
    takeLatest('GET_YOUR_ADS_REQUEST', getYourAds),
  ];
}
