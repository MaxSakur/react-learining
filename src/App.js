import React from "react";

import { Header } from "./components";

import { Info, Contacts } from "./components";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className="App">
      <Header />
      <main>
        <Route
          path="/info"
          render={() => <Info props={props.state} dispatch={props.dispatch} />}
        />
        <Route
          path="/contacts"
          render={() => (
            <Contacts props={props.state} dispatch={props.dispatch} />
          )}
        />
      </main>
    </div>
  );
};

export default App;
