import { delete_data_api, get_data_saga, post_data_saga, update_data_api } from "./root/rootData";
import { all } from "@redux-saga/core/effects";


export function* rootsaga() {
    yield all([get_data_saga(), post_data_saga(),delete_data_api(),update_data_api()])
}
