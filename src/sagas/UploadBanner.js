import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as INSTAKART from '../actionTypes/UploadBanner';
import * as instakartActionCreators from '../actionCreators/UploadBanner';
import { doPostFile } from '../utils/fetchWrapper';


export function* getBannerUpload(data) {
  try {
    const { formData } = data;
    const response = yield doPostFile(envConfig.apiEndPoints.getUploadBanner, formData);
    yield put(instakartActionCreators.getBannerUploadSucccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getBannerUploadFailure(error));
  }
}

export function* uploadBannerWatchers() {
  yield [
    takeLatest(INSTAKART.BANNER_UPLOAD_REQUEST, getBannerUpload),
  ];
}
