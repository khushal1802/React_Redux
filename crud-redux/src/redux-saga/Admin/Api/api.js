import axios from "axios";
import {
  BASE_URL,
  DELETE_PRODUCT_API,
  GET_PRODUCT_API,
  POST_PRODUCT_API,
} from "../../constant";

// get api
export async function get_product() {
  return axios
    .get(BASE_URL + GET_PRODUCT_API)
    .then((res) => {
      console.log(res, "respons for api");
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

// Post api
export async function post_product(action) {
  return axios
    .post(BASE_URL + POST_PRODUCT_API, action.payload)
    .then((res) => {
      console.log(res, "respons for api");
      const data = res.data;
      const status = res.status;
      console.log(data, status, "data state");
      return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
    });
}

// Delete api
export async function delete_product(action) {
  console.log(action);
  return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.id).then((res) => {
    const data = res.action.id
    const status = res.status;
    console.log(data, "data..................api");
    return {
        data,
        status,
      };
    })
    .catch((err) => {
      console.log(err);
  });
}
