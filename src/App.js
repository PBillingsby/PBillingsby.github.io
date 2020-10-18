import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="main" className="container mt-3">
        <header className="ml-3">
          <span>
            <h1 className="orange-color">PHIL BILLINGSBY</h1>
            <NavBar />
          </span>
        </header>
        <Routes />
        <footer className="fixed-bottom pb-2">Phil Billingsby 2020</footer>
      </div>
    );
  }
}

export default withRouter(App);
