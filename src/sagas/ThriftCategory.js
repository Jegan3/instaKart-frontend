import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/ThriftCategory';
import { doGet } from '../utils/fetchWrapper';

export function* getThriftCategory() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getThriftCategory);
    yield put(instakartActionCreators.getThriftCategorySuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getThriftCategoryFailure(error));
  }
}

export function* thriftCategoryWatchers() {
  yield [
    takeLatest('THRIFT_CATEGORY_REQUEST', getThriftCategory),
  ];
}
