import React from "react";
import { NavLink } from "react-router-dom";

export default function Hamburger() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to=''>
            <li>Dashboard</li>
          </NavLink>
          <NavLink to='/contact'>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
