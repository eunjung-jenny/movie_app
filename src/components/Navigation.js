import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: { fromNavigation: true },
        }}
      >
        About
      </Link>
    </nav>
  );
}

export default Navigation;
