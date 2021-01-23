import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as INSTAKART from '../actionTypes/Banner';
import * as instakartActionCreators from '../actionCreators/Banner';
import { doPost } from '../utils/fetchWrapper';


export function* getBannerUpload(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getBanner, data.banner);
    yield put(instakartActionCreators.getBannerUploadSucccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getBannerUploadFailure(error));
  }
}

export function* bannerWatchers() {
  yield [
    takeLatest(INSTAKART.BANNER_UPLOAD_REQUEST, getBannerUpload),
  ];
}
