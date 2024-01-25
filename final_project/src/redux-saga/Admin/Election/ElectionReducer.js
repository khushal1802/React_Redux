import {
  DELETE_ELECTION_ERROR,
  DELETE_ELECTION_PROGRESS,
  DELETE_ELECTION_SUCCESS,

  GET_ELECTION_ERROR,
  GET_ELECTION_PROGRESS,
  GET_ELECTION_SUCCESS,
  
  POST_ELECTION_ERROR,
  POST_ELECTION_PROGRESS,
  POST_ELECTION_SUCCESS,

  UPDATE_ELECTION_ERROR,
  UPDATE_ELECTION_PROGRESS,
  UPDATE_ELECTION_SUCCESS,

} from "../Election/ElectionAction";

const initialState = {
  data: [],
  isLoding: false,
  isError: null,
};

const ElectionReducer = (state = { ...initialState }, action) => {
  console.log(action);
  switch (action.type) {
    case GET_ELECTION_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case GET_ELECTION_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: action.data.Data,
        isError: null,
      };
    case GET_ELECTION_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case POST_ELECTION_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case POST_ELECTION_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.concat(action.data),
        isError: null,
      };
    case POST_ELECTION_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case DELETE_ELECTION_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case DELETE_ELECTION_SUCCESS:
      const filterData = state.data.filter((val) => val._id !== action.data);
      return {
        ...state,
        isLoding: false,
        data: filterData,
        isError: null,
      };
    case DELETE_ELECTION_ERROR:
      return {
        ...state,
        isLoding: false,
        isError: action.data,
      };

    case UPDATE_ELECTION_PROGRESS:
      return {
        ...state,
        isLoding: true,
        isError: null,
      };
    case UPDATE_ELECTION_SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: state.data.map((state) =>
          state.id === action.data.id ? action.data : state
        ),
        isError: null,
      };
    case UPDATE_ELECTION_ERROR:
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
export default ElectionReducer;