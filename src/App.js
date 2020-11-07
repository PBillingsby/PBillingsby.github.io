import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
