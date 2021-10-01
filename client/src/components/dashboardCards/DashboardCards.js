import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardCards () {
  return (
    <div className="card card-style">
      <div className="card-content">
        <p className="title">
          “There are two hard things in computer science: cache invalidation,
          naming things, and off-by-one errors.”
        </p>
        <p className="subtitle">Jeff Atwood</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <NavLink to='/poll'>
            Vote!
          </NavLink>
        </p>
      </footer>
    </div>
  );
}
