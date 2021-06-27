import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/IndustryInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getIndustryInfo() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getIndustryInfo);
    yield put(instakartActionCreators.getIndustryInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getIndustryInfoFailure(error));
  }
}

export function* industryInfoWatchers() {
  yield [
    takeLatest('INDUSTRY_INFO_REQUEST', getIndustryInfo),
  ];
}
