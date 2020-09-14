import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login.scene";
import { KittiesPage } from "./scenes/kitties.scene";
import { PuppiesPage } from "./scenes/puppies.scene";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/scenes/kitties.scene">
          <KittiesPage />
        </Route>
        <Route path="/scenes/puppies.scene">
          <PuppiesPage />
        </Route>
      </Switch>
    </Router>
  );
};
