import React from "react";
import { Home, Message, AccountCircle } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav
      className="shadow p-3 mb-5 bg-body rounded navbar navbar-expand-lg navbar-light bg-white"
      style={{ height: "50px" }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand fs-5" href="/">
          ImmiChat
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center">
            <a className="nav-link fs-5" aria-current="page" href="/">
              <Home />
              <p>Home</p>
            </a>
            <a className="nav-link fs-5" href="/">
              <Message />
              <p>Messages</p>
            </a>
            <a className="nav-link fs-5" href="/">
              <AccountCircle />
              <p>Profile</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
