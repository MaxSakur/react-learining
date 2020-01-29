import React from "react";

import { Header } from './components'
import { Route } from 'react-router-dom'
import {EntryPage} from './screens'
import ShopPageContainer from "./containers/shopPageContainer";


const App = props => {
    return (
    <div className="app">
        <h1>ONLINE SHOP</h1>
        <Header/>
        <div className="app-wrapper-content">
          <Route path='/entryPage' render={()=><EntryPage/>}/> 
          <Route path='/shopPage' render={()=><ShopPageContainer/>}/> 
        </div>
    </div>
  );
};

export default App;
