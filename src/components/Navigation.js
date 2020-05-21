import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

export default withRouter(({ location: { pathname } }) => (
  <nav>
    <Link
      className={pathname === "/" ? "current" : ""}
      to="/"
    >
      Home
    </Link>
    <Link
      className={pathname === "/about" ? "current" : ""}
      to="/about"
    >
      About
    </Link>
  </nav>
));
