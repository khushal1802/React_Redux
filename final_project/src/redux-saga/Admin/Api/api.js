import axios from "axios";
import {
  BASE_URL,
  DELETE_DATA_API,
  GET_DATA_API,
  POST_DATA_API,
  UPDATE_DATA_API,
} from "../../constant";

export async function get_data_api() {
  return axios
    .get(BASE_URL + GET_DATA_API)
    .then((res) => {
      const data = res.data;
      const status = res.status;
        return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function post_data_api(action) {
  return axios
    .post(BASE_URL + POST_DATA_API, action.paylod)
    .then((res) => {
      const data = res.data;
      const status = res.status;
        return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function delete_data_api(action) {
  return axios
    .delete(BASE_URL + DELETE_DATA_API, action.paylod.id)
    .then((res) => {
      const data = action.paylod.id;
      const status = res.status;
        return { data, status };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function update_data_api(action) {
  return axios
    .put(BASE_URL + UPDATE_DATA_API, action.paylod.id, action.paylod)
    .then((res) => {
      const data = res.data;
      const status = res.status;
        return { data, status };
    })
    .catch((err) => {
      console.log(err);
    });
}
