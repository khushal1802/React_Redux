import {  DELETE_DATA_PROGRESS, GET_DATA_PROGRESS, POST_DATA_PROGRESS, UPDATE_DATA_PROGRESS, } from "../../Admin/Action/Action";
import { handle_Get_data_api, handle_delete_data_api, handle_post_data_api, handle_update_data_api } from "../admin/manageData";
import { takeLatest } from "@redux-saga/core/effects";


export function* get_data_saga() {
    yield takeLatest(GET_DATA_PROGRESS,handle_Get_data_api)
}

export function* post_data_saga() {
    yield takeLatest(POST_DATA_PROGRESS,handle_post_data_api)
}

export function* delete_data_api() {
    yield takeLatest(DELETE_DATA_PROGRESS,handle_delete_data_api)
}

export function* update_data_api() {
  yield takeLatest(UPDATE_DATA_PROGRESS, handle_update_data_api);
}