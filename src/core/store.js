import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk);
const initialState = {};
const enhancers = [];
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

export default createStore(rootReducer(), initialState, compose(middleware, ...enhancers));
