import { combineReducers } from "redux";
import ElectionReducer from "./Admin/Election/ElectionReducer";
import PartyReducer from "./Admin/Party/PartyReducer"

const rootReducer = combineReducers({
  ElectionReducer,
  PartyReducer,
});

export default rootReducer;