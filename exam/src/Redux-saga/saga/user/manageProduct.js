 
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../user/action";
import {   get_product } from "../../user/api";
import { call, put } from "redux-saga/effects";


export function* handle_Get_product_api(action) {
    try {
        const res = yield call(get_product, action);
        const status = res.status;
        const data = res.data; 

        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (error) {
        yield put({type:GET_PRODUCT_ERROR,error})
    }
}
