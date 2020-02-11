import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

let rerenderPage = state => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
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
