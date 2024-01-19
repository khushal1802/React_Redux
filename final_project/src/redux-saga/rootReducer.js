import { combineReducers } from "redux";
import dataReducer from "./Admin/Reducer/Reducer"

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer; 