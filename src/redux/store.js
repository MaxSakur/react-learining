import { combineReducers, createStore } from "redux";
import { productsStoreReducer } from "./reducers/productsReducer";
import clientsReducer from "./reducers/clientsReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
  productsStoreReducer,
  profilePage: profileReducer,
  clientsPage: clientsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

window.store = store;

export default store;
