import React from "react";

import { Header } from "./components";

import { Info, Contacts } from "./components";
import { Route } from "react-router-dom";

const App = props => {

  console.log('props APP -->', props)
  console.log('props APP Disatch -->', props.dispatch)
  console.log('props APP state -->', props.state)
  console.log('props APP store -->', props.store)

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
