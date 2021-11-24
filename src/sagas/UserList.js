import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as instakartActionCreators from '../actions/UserList';
import { doGet } from '../utils/fetchWrapper';

export function* getUserList() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getUserList);
    yield put(instakartActionCreators.getUserListSuccess(response));
  } catch (error) {
    yield put(instakartActionCreators.getUserListFailure(error));
  }
}

export function* userListWatchers() {
  yield [
    takeLatest('USER_LIST_REQUEST', getUserList),
  ];
}

