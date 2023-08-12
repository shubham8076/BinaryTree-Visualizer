import React from "react";
import PropTypes from "prop-types";
import "../css/Navbar.css";

export default function Navbar({ title, toggle, mode }) {
  return (
    <nav className={`navbar navbar-expand-lg  ${mode === "white"?"Navbar-light":"bg-dark navbar-dark"}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${mode === "white" && "Navbar-base"}` } href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active ${mode === "white" && "Navbar-base"}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active ${mode === "white" && "Navbar-base"}`} href="/">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input text-light"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={toggle}
            />
            <label className={`form-check-label ${mode === "white"?"Navbar-base":"text-light"} pe-3" htmlFor="flexSwitchCheckDefault`}>
              {mode === "white"? "Enable Dark Mode": "Disable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "Set Title Here" };
