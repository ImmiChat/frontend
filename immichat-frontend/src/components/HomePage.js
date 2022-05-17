import React from "react";
import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";

const HomePage = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-4 col-lg-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-lg-6 bg-muted border-start border-end border-secondary">
        <CreatePost />
        <Feed />
      </div>
      <div className="col-lg-3 bg-muted">
        <RightSideBar />
      </div>
    </div>
  );
};

export default HomePage;
