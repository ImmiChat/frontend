import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import UserCard from "./UserCard";

const Notifications = () => {
  const { user, friends, setFriends } = React.useContext(AuthenticationContext);
  const [friendRequests, setFriendRequests] = React.useState([]);

  React.useState(() => {
    setFriendRequests(
      friends.filter((friend) => !friend.accepted && !friend.requested)
    );
  }, [friends]);

  return !user.first_name ? (
    <Navigate to="/" />
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 bg-muted border-start border-end border-secondary">
        <div className="container-fluid mt-5">
          <h3>Friend Requests</h3>
          <div className="row pt-3 d-flex flex-wrap">
            {friendRequests.map((request) => (
              <UserCard info={request} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Notifications;
