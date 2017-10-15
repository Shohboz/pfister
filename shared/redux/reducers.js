import { combineReducers } from "redux";
import posts from "redux/posts/reducers";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
