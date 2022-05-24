import {
  Home,
  Message,
  AccountCircle,
  Settings,
  Notifications,
} from "@mui/icons-material";
import LanguageChange from "./translate";
import AuthenticationContext from "../context/AuthenticationContext";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const handleSignOut = (event) => {
    window.localStorage.removeItem("refreshToken");
    setUser({});
  };
  const { user, setUser } = React.useContext(AuthenticationContext);
  return (
    <div className="my-2" style={{ position: "fixed", height: "100%" }}>
      <h3 className="fw-bolder" style={{ color: "#ae83f4" }}>
        Immichat
      </h3>
      <h6 className="py-3 fw-bolder">Menu</h6>
      <nav className="d-flex flex-column">
        <Link to="/" className="py-3">
          <Home className="text-secondary" />
          <span className="ps-3">Home</span>
        </Link>
        <Link to="/messages" className="py-3">
          <Message className="text-secondary" />
          <span className="ps-3">Messages</span>
        </Link>
        <Link to={`/profile/${user.id}`} className="py-3">
          <AccountCircle className="text-secondary" />
          <span className="ps-3">Profile</span>
        </Link>
        <Link to="/notifications" className="py-3">
          <Notifications className="text-secondary" />
          <span className="ps-3">Notifications</span>
        </Link>
      </nav>
      <h6 className="py-3 fw-bolder">Account</h6>
      <Link to={`/profile/${user.id}/edit`} className="py-3">
        <AccountCircle className="text-secondary" />
        <span className="ps-3">
          {user.first_name} {user.last_name}
        </span>
      </Link>
      <div className="mt-5">
        <LanguageChange />
        <button
          className="btn rounded border text-white purpBackground"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
