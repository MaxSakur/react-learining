import React from "react";

import { Header } from "./components";
import { Route } from "react-router-dom";

import ProductsContainer from "./containers/productsContainer";
import ClientsContainer from "./containers/clientsContainer";

const App = props => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper-content">
        <Route path="/clients" render={() => <ClientsContainer />} />
        <Route path="/products" render={() => <ProductsContainer />} />
      </div>
    </div>
  );
};

export default App;
