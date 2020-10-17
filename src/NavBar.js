import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = () => {
  return (
    <div>
      <NavLink exact to="/">
        About
      </NavLink>
      <NavLink to="/work">Work</NavLink>
    </div>
  );
};

export default Navlink;
