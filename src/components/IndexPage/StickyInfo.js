import React from "react";
import { Link } from "react-router-dom";

const StickyInfo = () => {
  return (
    <>
      <div className="fix_option">
        <span className="title is-3">한다영</span>
        <br />
        <span className="is-info is-4">Dayoung Han</span>
        <br />
        <span className="is-4">Seoul, Korea 🇰🇷</span>
        <br />
        <a href="mailto:hdayoungh@gmail.com" className="a_underline">
          hdayoungh@gmail.com
        </a>
        <br />
        <a href="https://github.com/crazy-oung" className="a_underline">
          <i className="fab fa-github"></i> GitHub
        </a>
        <hr />
        <Link
          className="button is-dark is-fullwidth is-large title is-6"
          to="/projects"
        >
          projects
        </Link>
      </div>
    </>
  );
};

export default StickyInfo;
