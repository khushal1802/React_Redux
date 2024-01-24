import {
  delete_election_saga,
  update_election_saga,
  get_election_saga,
  post_election_saga,
} from "./root/rootElection";

import { delete_party_saga, get_party_saga, post_party_saga, update_party_saga } from "./root/rootParty";
import { all } from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([get_election_saga(),
    post_election_saga(),
    delete_election_saga(),
    update_election_saga(),
    get_party_saga(),
    post_party_saga(),
    delete_party_saga(),
    update_party_saga()])
}
