import { combineReducers, createStore } from "redux";
import {
  addTextReducer,
  updateTextReducer,
  addInputDataReducer
} from "./reducers";

let reducers = combineReducers({
  addTextReducer,
  updateTextReducer,
  addInputDataReducer
});

let store = createStore(reducers);

export default store;
