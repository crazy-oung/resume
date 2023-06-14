import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav
        className="navbar is-spaced trans is-top"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link className="title is-5 is-bold" to="/">
                Dayoung Han
              </Link>
            </div>
            <div className="navbar-burger burger" data-target="navBarMobile">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu trans" id="navBarMobile">
            <div className="navbar-end">
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
