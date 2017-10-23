import { combineReducers } from "redux";
import posts from "redux/posts/reducers";
import loader from "redux/loader/reducers";

const rootReducer = combineReducers({
  posts,
  loader
});

export default rootReducer;
