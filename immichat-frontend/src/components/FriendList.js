import { AccountCircle } from "@mui/icons-material";
import "./FriendList.css";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import Friend from "./Friend";

const FriendList = (props) => {
  const { user, friends } = React.useContext(AuthenticationContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="people-nearby">
            {friends
              .filter((friend) => friend.accepted)
              .map((friend) => (
                <Friend
                  id={friend.id}
                  firstName={friend.first_name}
                  lastName={friend.last_name}
                  isMessage={props.isMessage}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
