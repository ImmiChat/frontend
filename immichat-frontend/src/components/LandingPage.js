import "./LandingPage.css";
import { Navigate, Link } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";
import React from "react";

export default function Mission() {
  const { user } = React.useContext(AuthenticationContext);

  return user.first_name ? (
    <Navigate to="/home" />
  ) : (
    <>
      <body className="body">
        <link rel="stylesheet" href="landingpage1.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <title>Immichat</title>
        <div className="main">
          <nav
            className="navbar  navbar-expand-lg navbar-dark bg-transparent"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            <Link
              to="/"
              className="navbar-brand"
              href="/mission"
              style={{ paddingLeft: 150, fontSize: 40 }}
            >
              <div className="wrapper">
                <div className="typing-demo">Immichat</div>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div
                className="navbar-nav wrapper"
                style={{ marginLeft: "35%", fontSize: 20 }}
              >
                <Link className="nav-item nav-link active" to="/" id="navicon">
                  Home{" "}
                </Link>
                <Link className="nav-item nav-link" to="/auth" id="navicon">
                  Sign Up / Sign In
                </Link>
              </div>
            </div>
          </nav>
          <div className="lefttext">
            <div className="textwrap">
              <h1>Welcome to Immichat!</h1>
              <p className="missiontext">
                Our mission is to cultivate community among immigrants in NYC
                through discussions, live chats, and resource sharing to
                ultimately ease the culture shock of moving to a new country.
              </p>
              <div className="heart">
                <label className="like">
                  <input type="checkbox" className="input" />
                  <div className="hearth" />
                </label>
              </div>
              <span className="message">
                Click on heart to show your support!
              </span>
            </div>
          </div>
          <div className="rightimage">
            <img
              src="https://www1.nyc.gov/assets/immigrants/images/content/pages/Immigrant_New_York_White_600.gif"
              alt="Immigrant New York"
            />
          </div>
        </div>
      </body>
    </>
  );
}
