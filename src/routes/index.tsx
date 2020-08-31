import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import Test from "../screens/Test";
import Home from "../screens/Home";

import history from "../services/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
};

export default Routes;
