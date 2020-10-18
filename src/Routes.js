import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
const Routes = ({ location }) => {
  return (
    <div className="p-3 mb-3 container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          classNames={"fade"}
          key={location.key}
          timeout={{ enter: 100, exit: 300 }}
        >
          <Switch location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default withRouter(Routes);
