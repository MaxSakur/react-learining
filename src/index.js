import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderPage = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};  

rerenderPage(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderPage(state);
});

export default rerenderPage;
