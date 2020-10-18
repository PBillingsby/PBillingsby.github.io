import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="main" className="container">
        <header className="mt-3 ml-3">
          <span>
            <h1 className="orange-color">PHIL BILLINGSBY</h1>
            <NavBar />
          </span>
        </header>
        <Routes />
        <footer>Phil Billingsby 2020</footer>
      </div>
    );
  }
}

export default withRouter(App);
