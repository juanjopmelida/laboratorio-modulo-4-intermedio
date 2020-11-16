import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login/login.scene";
import { NonAlcoholicPage } from "./scenes/non-alcoholic/non-alcoholic.scene";
import { AlcoholicPage } from "./scenes/alcoholic/alcoholic.scene";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/alcoholic.scene">
          <AlcoholicPage />
        </Route>
        <Route path="/non-alcoholic.scene">
          <NonAlcoholicPage />
        </Route>
      </Switch>
    </Router>
  );
};
