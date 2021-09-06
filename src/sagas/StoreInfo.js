import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/StoreInfo';
import { doGet } from '../utils/fetchWrapper';

export function* getStoreInfo(data) {
  try {
    const { storeId } = data;
    const response = yield doGet(`${envConfig.apiEndPoints.getStoreInfo}?estoreId=${storeId}`);
    yield put(instakartActionCreators.getStoreInfoSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getStoreInfoFailure(error));
  }
}

export function* StoreInfoWatchers() {
  yield [
    takeLatest('STORE_INFO_REQUEST', getStoreInfo),
  ];
}
