import { all } from "@redux-saga/core/effects";
import { get_product_saga, post_product_saga } from "./root/rootProductSaga";
export function* rootSaga() {
  yield all([get_product_saga(),post_product_saga()]);
}
