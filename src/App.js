import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
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
        <footer className="fixed-bottom pb-2">
          <p className="float-left pl-3">Phil Billingsby 2020</p>
          <a href="https://github.com" target="_blank">
            <MarkGithubIcon size={16} />
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
