import {
  DELETE_PRODUCT_PROGRSS,
  GET_PRODUCT_PROGRESS,
  POST_PRODUCT_PROGRSS,
} from "../../Admin/Action/action";
import { handle_Delete_product_api, handle_Get_product_api, handle_Post_product_api } from "../admin/manageProduct";
import { takeLatest } from "@redux-saga/core/effects";


export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api)
}

export function* post_product_saga() {
    yield takeLatest(POST_PRODUCT_PROGRSS, handle_Post_product_api)
}

export function* delete_product_saga() {
  yield takeLatest(DELETE_PRODUCT_PROGRSS, handle_Delete_product_api);
}