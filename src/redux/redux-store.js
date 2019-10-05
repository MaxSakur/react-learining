import { combineReducers, createStore } from 'redux'

import {
  addTextReducer,
  updateTextReducer,
  addInputDataReducer,
} from "./reducers";

let reducers = combineReducers({
  addTextReducer,
  updateTextReducer,
  addInputDataReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

export default store;
