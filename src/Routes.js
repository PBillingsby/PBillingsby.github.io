import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Work from "./Work";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
