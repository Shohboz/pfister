import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

let middleware = [];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  middleware = [createLogger()];
}

const configureStore = initialState => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunkMiddleware, ...middleware)
  );
};

export { configureStore };
