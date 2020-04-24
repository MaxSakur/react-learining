import { combineReducers, applyMiddleware, createStore } from "redux";
import { productsStoreReducer } from "./reducers/productsReducer";
import goodsReducer from "./reducers/goodsReducer";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  productsStoreReducer,
  profilePage: profileReducer,
  goodsReducer,
  auth: authReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, applyMiddleware(thunk));
/* eslint-enable */

window.store = store;

export default store;
