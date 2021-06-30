import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/GeneralInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getGeneralInfo() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getGeneralInfo);
    yield put(instakartActionCreators.getGeneralInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getGeneralInfoFailure(error));
  }
}

export function* generalInfoWatchers() {
  yield [
    takeLatest('GENERAL_INFO_REQUEST', getGeneralInfo),
  ];
}
