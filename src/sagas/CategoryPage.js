import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig';//eslint-disable-line
import * as instakartActionCreators from '../actions/CategoryPage';
import { doGet } from '../utils/fetchWrapper';

export function* getCategoryPage(data) {
  const { categoryId } = data;

  try {
    const response = yield doGet(`${envConfig.apiEndPoints.getCategoryPage}?catergoryId=${categoryId}`);
    yield put(instakartActionCreators.getCategoryPageSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getCategoryPageFailure(error));
  }
}

export function* categoryPageWatchers() {
  yield [
    takeLatest('CATEGORY_PAGE_REQUEST', getCategoryPage),
  ];
}

