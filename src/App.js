import React from "react";

import { Header } from "./components";
import { Route } from "react-router-dom";

import ProductsContainer from "./containers/productsContainer";
import ClientsContainer from "./containers/clientsContainer";
import ProfileContainer from "./containers/profileContainer";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper-content">
        <Route path="/clients" render={() => <ClientsContainer />} />
        <Route path="/products" render={() => <ProductsContainer />} />
        <Route
          path="/profile/:profileID?"
          render={() => <ProfileContainer />}
        />
      </div>
    </div>
  );
};

export default App;
