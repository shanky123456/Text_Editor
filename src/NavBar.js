import React, { useState } from "react";
// import React from 'react'

import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function NavBar(params) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${params.mode} bg-${params.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {params.text}
          </Link>

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
                <Link className="nav-link active" aria-current="page" to="/">
                  {params.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {params.AboutUs}
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li> */}
              {/* <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li> */}
            </ul>
            {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
            <div className={`form-check form-switch text-${params.mode==='light'?'dark':'light'}`}>
              <input
                type="checkbox"
                className="form-check-input"
                id="flexSwitchCheckDefault"
                onClick={params.toggleMode}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  text: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  AboutUs: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  text: "TileText",
  home: "Enter Home here",
  AboutUs: "Enter About us here",
};
