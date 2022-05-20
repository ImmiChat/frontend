import React from "react";
import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import AuthenticationContext from "../context/AuthenticationContext";
import { Navigate } from "react-router-dom";

const HomePage = (props) => {
  const { user } = React.useContext(AuthenticationContext);

  return !user.first_name ? (
    <Navigate to="/auth" />
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 bg-muted border-start border-end border-secondary">
        <CreatePost />
        <div className="border-top border-secondary py- mt-5">
          <Feed />
        </div>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
