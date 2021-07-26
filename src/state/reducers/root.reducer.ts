import { combineReducers } from "redux";
import searchReducer from "./search.reducer";
import sortReducer from "./sort.reducer";
import filterReducer from "./filter.reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  filters: filterReducer,
});

export default rootReducer;
