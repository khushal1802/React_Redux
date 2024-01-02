import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png"

const Navbar = ({ data }) => {
  console.log(data, "data");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="130"
            height="130"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav mr-auto">
          {data?.map((val, ind) => {
            return (
              <li className="nav-item active" key={ind}>
                <Link to={`${val.path}`} className="nav-link">
                  {val.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
