 
import { GET_PRODUCT_PROGRESS } from "../../user/action";
import {  handle_Get_product_api } from "./manageProduct"; 
import { takeLatest } from "@redux-saga/core/effects";


export function* get_product_saga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handle_Get_product_api)
} 