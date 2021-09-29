import React from "react";
import { NavLink } from "react-router-dom";

export default function LoggedInHamburger() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to='/'>
            <li>Logout</li>
          </NavLink>
          <NavLink to=''>
            <li>About</li>
          </NavLink>
          <NavLink to='/contact'>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}