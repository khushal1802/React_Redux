import {
  DELETE_DATA_ERROR,
  DELETE_DATA_PROGRESS,
  DELETE_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_PROGRESS,
  GET_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_DATA_PROGRESS,
  POST_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_PROGRESS,
  UPDATE_DATA_SUCCESS,
} from "../Action/Action";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const dataReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_DATA_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: action.data,
        isError: null,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_DATA_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data),
        isError: null,
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_DATA_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_DATA_SUCCESS:
      const filterData = state.data.filter((val) => val.id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterData,
        isError: null,
      };
    case DELETE_DATA_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case UPDATE_DATA_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.map((state) => 
          state.id === action.data.id ? action.data : state
        ),
        isError: null,
      };
    case UPDATE_DATA_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };
    default: {
      return { ...state };
    }
  }
};
export default dataReducer;
