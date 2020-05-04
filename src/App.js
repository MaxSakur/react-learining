import React from "react";

import { Route } from "react-router-dom";

import DiscontContainer from "./containers/productsContainer";
import GoodsContainer from "./containers/goodsContainer";
import ProfileContainer from "./containers/profileContainer";
import HeaderContainer from "./containers/headerContainer";
import Login from "./containers/singInContainer";

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />

      <div className="app-wrapper-content">
        <Route path="/goods" render={() => <GoodsContainer />} />
        <Route path="/discont" render={() => <DiscontContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route
          path="/profile/:profileID?"
          render={() => <ProfileContainer />}
        />
      </div>
    </div>
  );
};

export default App;
