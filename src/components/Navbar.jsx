import React from "react";
import logo from "../assests/logo.svg";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function navbarToggler(e) {
  let cls = document.getElementById("navbarNav").classList;
  if (cls.contains("show")) {
    cls.remove("show");
  } else {
    cls.add("show");
  }
}
export default function Navbar() {
  return (
    <div className="navigation-bar p-0 px-2 px-md-5 m-0">
      <nav className="navbar navbar-expand-md navbar-dark p-0">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="200" height="50" />
          </Link>
          <button
            onClick={navbarToggler}
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavLink title="Attendence" to="/attendence" />

              <NavLink title="Todo" to="/todolist" />

              <NavLink title="Add Notes" to="/add-notes" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({ title, to }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "nav-item active" : "nav-item"}>
      <Link
        className="nav-link text-uppercase"
        to={to}
        onClick={() =>
          document.getElementById("navbarNav").classList.remove("show")
        }
      >
        {title}
      </Link>
    </li>
  );
}
