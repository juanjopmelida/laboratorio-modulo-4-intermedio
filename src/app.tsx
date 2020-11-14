import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./scenes/login/login.scene";
import { KittiesPage } from "./scenes/kitties/kitties.scene";
import { PuppiesPage } from "./scenes/puppies/puppies.scene";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/kitties.scene">
          <KittiesPage />
        </Route>
        <Route path="/puppies.scene">
          <PuppiesPage />
        </Route>
      </Switch>
    </Router>
  );
};
