import { takeLatest } from "@redux-saga/core/effects";
import { handle_Get_product_api } from "../admin/manageProduct";
import { GET_PRODUCT_PROGRESS } from "../../admin/action/action";



// GET - product saga
export function* get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api);
}
