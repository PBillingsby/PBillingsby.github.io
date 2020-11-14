import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Routes from "./Routes";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="main" className="container mt-3">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
