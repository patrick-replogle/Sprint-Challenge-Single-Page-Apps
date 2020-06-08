import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="locations">Locations</NavLink>
      <NavLink to="search">Search</NavLink>
    </div>
  );
};

export default Nav;
