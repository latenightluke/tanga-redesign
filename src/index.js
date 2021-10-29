import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Library from "./containers/Library";
import Play from "./containers/Play";

import "./fontawesome.js";
import "./styles/index.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Play} />
        <Route path="/library" component={Library} />
      </Switch>
    </Router>
  );
}

render(<App />, document.querySelector("#root"));
