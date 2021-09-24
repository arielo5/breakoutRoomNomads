import React from "react";

export default function Hamburger() {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a >
            <li>Home</li>
          </a>
          <a >
            <li>About</li>
          </a>
          <a >
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
