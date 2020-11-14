import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="w-100">
      <NavLink
        exact
        to="/"
        activeStyle={{ color: "#ffcb9a" }}
        className="link-style text-decoration-none"
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        activeStyle={{ color: "#ffcb9a" }}
        className="link-style text-decoration-none"
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ color: "#ffcb9a" }}
        className="link-style text-decoration-none"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navlink;
