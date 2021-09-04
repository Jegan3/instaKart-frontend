import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/AddStore';
import { doPost } from '../utils/fetchWrapper';

export function* getAddStore(data) {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getAddStore, data.addStore);
    yield put(instakartActionCreators.getAddStoreSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getAddStoreFailure(error));
  }
}

export function* addStoreWatchers() {
  yield [
    takeLatest('ADD_STORE_REQUEST', getAddStore),
  ];
}
