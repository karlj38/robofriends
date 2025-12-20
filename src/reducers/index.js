import search from "./searchReducer";
import robots from "./robotsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  search,
  robots,
});
