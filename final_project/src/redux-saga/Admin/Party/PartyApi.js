import axios from "axios";
import {
  BASE_URL,
  DELETE_PARTY_API,
  GET_PARTY_API,
  POST_PARTY_API,
  UPDATE_PARTY_API,
} from "../../constant";

//PARTY

export async function get_party_api() {
  return axios
    .get(BASE_URL + GET_PARTY_API)
    .then((res) => {
      const data = res.data.Data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_party_api(action) {
  return axios
    .post(BASE_URL + POST_PARTY_API, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_party_api(action) {
  return axios
    .delete(BASE_URL + DELETE_PARTY_API + action.payload._id)
    .then((res) => {
      const data = action.payload._id;
      const status = res.status;
      return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function update_party_api(action) {
  return axios
    .put(BASE_URL + UPDATE_PARTY_API, action.payload.id, action.payload)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return { data, status };
    })
    .catch((err) => {
      console.log(err);
    });
}
