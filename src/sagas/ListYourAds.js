import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ListYourAds';
import { doPost } from '../utils/fetchWrapper';

export function* getListYourAds(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getListYourAds, data.getListYourAds);
    yield put(instakartActionCreators.getListYourAdsSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getListYourAdsFailure(error));
  }
}

export function* listYourAdsWatchers() {
  yield [
    takeLatest('LIST_YOUR_ADS_REQUEST', getListYourAds),
  ];
}
