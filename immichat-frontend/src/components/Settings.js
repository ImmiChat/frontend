import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import AuthenticationContext from "../context/AuthenticationContext";
import React from "react";
import { Navigate } from "react-router-dom";

const Settings = () => {
  const { user } = React.useContext(AuthenticationContext);

  return !user.first_name ? (
    <Navigate to="/auth" />
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 bg-muted border-start border-end border-secondary">
        <h1 className="text-center">Settings</h1>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Settings;
