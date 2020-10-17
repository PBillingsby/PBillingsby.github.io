import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="main" className="container">
        <header className="mt-3">
          <NavBar />
        </header>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
