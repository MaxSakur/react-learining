import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StoreContext from "./StoreContext";

let rerenderPage = state => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
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
