import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeStyle={{ color: "#fbeec1" }}
        className="link-style text-decoration-none"
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        activeStyle={{ color: "#fbeec1" }}
        className="link-style text-decoration-none"
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ color: "#fbeec1" }}
        className="link-style text-decoration-none"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navlink;
