import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import store from './redux/data';
import ReactDOM from "react-dom";

import App from './App';

let rerenderPage = () => {
    ReactDOM.render((
        <BrowserRouter >
            <App state={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter >
    ), document.getElementById('root'))
}


rerenderPage(store.getState());

store.subscribe(rerenderPage)

export default rerenderPage;