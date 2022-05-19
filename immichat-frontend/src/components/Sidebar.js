import { Home, Message, AccountCircle, Settings } from "@mui/icons-material";
import LanguageChange from "./translate";
import AuthenticationContext from "../context/AuthenticationContext";
import React from 'react'

const Sidebar = (props) => {
  const {user} = React.useContext(AuthenticationContext)
  return (
    <div className="px-5">
      <h3 className="fw-bolder" style={{ color: "#ae83f4" }}>
        Immichat
      </h3>
      <h6 className="py-3 fw-bolder">Menu</h6>
      <nav className="d-flex flex-column">
        <a href="/" className="py-3">
          <Home className="text-secondary" />
          <span className="px-3">Home</span>
        </a>
        <a href="" className="py-3">
          <Message className="text-secondary" />
          <span className="px-3">Messages</span>
        </a>
        <a href="/profile" className="py-3">
          <AccountCircle className="text-secondary" />
          <span className="px-3">Profile</span>
        </a>
        <a href="" className="py-3">
          <Settings className="text-secondary" />
          <span className="px-3">Settings</span>
        </a>
      </nav>
      <h6 className="py-3 fw-bolder">Account</h6>
      <a href="" className="py-3">
        <AccountCircle className="text-secondary" />
        <span className="px-3">{user.first_name} {user.last_name}</span>
      </a>
      <div className="mt-5">
        <LanguageChange />
      </div>
    </div>
  );
};

export default Sidebar;
