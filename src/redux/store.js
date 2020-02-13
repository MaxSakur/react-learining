import { combineReducers, createStore } from "redux";
import { productsStoreReducer } from "./reducers/shopPageReducer";

let reducers = combineReducers({
  productsStoreReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

window.store = store;

export default store;
