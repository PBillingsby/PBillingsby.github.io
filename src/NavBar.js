import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="text-center">
      <NavLink
        exact
        to="/"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        className="link-style text-decoration-none"
      >
        About
      </NavLink>
      <NavLink
        to="/work"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        className="link-style text-decoration-none"
      >
        Work
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ color: "rgb(255, 172, 46)" }}
        className="link-style text-decoration-none"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navlink;
