import { AccountCircle } from "@mui/icons-material";
import "./FriendList.css";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import Friend from "./Friend";

const FriendList = () => {
  const { user, friends } = React.useContext(AuthenticationContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="people-nearby">
            {friends.map((friend) => (
              <Friend
                id={friend.id}
                firstName={friend.first_name}
                lastName={friend.last_name}
                isFriend={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
