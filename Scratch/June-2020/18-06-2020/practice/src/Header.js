import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => (
  <div className="header">
    <NavLink to="/react" activeClassName="active-Module" className="links">
      React
    </NavLink>
    <NavLink to="/css" activeStyle={{ color: "red" }} className="links">
      CSS
    </NavLink>
    <NavLink to="/html" activeClassName="active-Module" className="links">
      HTML
    </NavLink>
  </div>
);

export default Header;
