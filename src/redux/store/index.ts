/**
 * Main store function
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";
import rootReducer from "../reducers";

const middleWares = [logger, thunk, promiseMiddleware];

const initialState: any = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
