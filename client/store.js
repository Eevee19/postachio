import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducer/postsReducer.js";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
