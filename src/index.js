import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import state, {methods} from './redux/data';
import ReactDOM from "react-dom";

import App from './App';

ReactDOM.render((
    <BrowserRouter >
        <App state={state} methods={methods}/>
    </BrowserRouter >
), document.getElementById('root'))
