import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
const Routes = () => {
  return (
    <div className="p-3 mb-3 container">
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
