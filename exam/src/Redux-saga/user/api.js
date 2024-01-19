import axios from "axios";
import { BASE_URL, GET_PRODUCT_API } from "../constant";

// get api
export async function get_product() {
  return axios
    .get(BASE_URL + GET_PRODUCT_API)
    .then((res) => { 
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