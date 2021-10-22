import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hauptmenü from "./pages/Hauptmenü";
import Spiel from "./pages/Spiel";
import Trophäen from "./pages/Trophäen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/neues_Spiel">
            <Spiel />
          </Route>
          <Route path="/Spiel_fortsetzen">
            <Spiel />
          </Route>
          <Route path="/Trophäen">
            <Trophäen />
          </Route>
          <Route path="/">
            <Hauptmenü />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
