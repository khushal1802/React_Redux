import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS,} from "./action";

const initialState = {
    product: [],
    isLoading: false,
    isError:null
}

const productReducer = (state = {...initialState}, action) => {
    switch (action.type) {
      //get
      case GET_PRODUCT_PROGRESS:
        return {
          ...state,
          isLoading: true, 
          isError: null,
        };
      case GET_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          product: action.data,
          isError: null,
        };
      }
      case GET_PRODUCT_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: action.data,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
}
export default productReducer;