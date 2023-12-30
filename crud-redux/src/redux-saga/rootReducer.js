import { combineReducers } from "redux";
import productReducer from "./Admin/Reducer/reducer";

const rootReducers = combineReducers({
  productReducer,
});

export default rootReducers;
