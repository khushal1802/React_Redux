import { call, put } from "redux-saga/effects";
import { delete_data_api, get_data_api, post_data_api, update_data_api } from "../../Admin/Api/api";
import { DELETE_DATA_ERROR, DELETE_DATA_SUCCESS, GET_DATA_ERROR, GET_DATA_SUCCESS, POST_DATA_ERROR, POST_DATA_SUCCESS, UPDATE_DATA_ERROR, UPDATE_DATA_SUCCESS } from "../../Admin/Action/Action";

export function* handle_Get_data_api(action) {
  try {
    const res = yield call(get_data_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: GET_DATA_SUCCESS, data });
    } else {
      yield put({ type: GET_DATA_ERROR, data });
    }
  } catch (error) {
    yield put({ type: GET_DATA_ERROR, error });
  }
}

export function* handle_post_data_api(action) {
  try {
    const res = yield call(post_data_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200 || status === 201) {
      yield put({ type: POST_DATA_SUCCESS, data });
    } else {
      yield put({ type: POST_DATA_ERROR, data });
    }
  } catch (error) {
    yield put({ type: POST_DATA_ERROR, error });
  }
}

export function* handle_delete_data_api(action) {
  try {
    const res = yield call(delete_data_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: DELETE_DATA_SUCCESS, data });
    } else {
      yield put({ type: DELETE_DATA_ERROR, data });
    }
  } catch (error) {
    yield put({ type: DELETE_DATA_ERROR, error });
  }
}

export function* handle_update_data_api(action) {
  try {
    const res = yield call(update_data_api, action);
    const data = res.data;
    const status = res.status;
    if (status === 200) {
      yield put({ type: UPDATE_DATA_SUCCESS, data });
    } else {
      yield put({ type: UPDATE_DATA_ERROR, data });
    }
  } catch (error) {
    yield put({ type: UPDATE_DATA_ERROR, error });
  }
}