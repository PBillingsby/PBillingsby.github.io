import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="w-100">
      <NavLink
        exact
        to="/"
        activeStyle={{ color: "#957055" }}
        className="link-style text-decoration-none"
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        activeStyle={{ color: "#957055" }}
        className="link-style text-decoration-none"
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ color: "#957055" }}
        className="link-style text-decoration-none"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navlink;
