import React from "react";

import { Link } from "react-router-dom";
import sprinterLogo from "../img/sprinter-300.png";
import "./Menu.css";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h1>
          <Link
            to="/#"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img src={sprinterLogo} />
            SkillSprint
          </Link>
        </h1>

        <div className="col-md-3 text-end">
          <button
            type="button"
            className="btn btn-outline-primary me-2"
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Menu;
