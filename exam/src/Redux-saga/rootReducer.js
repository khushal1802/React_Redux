import { combineReducers } from "redux";
import productReducer from "./user/reducer";

const rootReducers = combineReducers({
  productReducer,
});

export default rootReducers;