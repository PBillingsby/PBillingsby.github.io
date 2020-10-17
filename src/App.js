import React from "react";
import { withRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <header className="beer-background-header pt-3">
        <NavBar />
      </header>
      <Routes />
    </div>
  );
}

export default withRouter(App);
