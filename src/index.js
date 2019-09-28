import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import store from './redux/data';
import ReactDOM from "react-dom";

import App from './App';

let rerenderPage = () => {
    ReactDOM.render((
        <BrowserRouter >
            <App state={store}/>
        </BrowserRouter >
    ), document.getElementById('root'))
}

// TO BIND CONTEXT TO FUNCTION ( METHOD ) OF STORE - ADD .BIND(store)

rerenderPage(store.getState());

store.subscribe(rerenderPage)

export default rerenderPage;