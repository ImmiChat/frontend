import { AccountCircle } from "@mui/icons-material";
import "./FriendList.css";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import Friend from "./Friend";

const FriendList = () => {
  const [friends, setFriends] = React.useState([]);
  const { user } = React.useContext(AuthenticationContext);

  React.useEffect(() => {
    if (!user.id) return;
    async function fetchFriends(userId) {
      const response = await fetch(
        `http://localhost:9000/user/${userId}/friends`
      );
      const data = await response.json();
      setFriends(data.filter((friend) => friend.accepted));
    }
    fetchFriends(user.id);
  }, [user]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="people-nearby">
            {friends.map((friend) => (
              <Friend
                firstName={friend.friend_first_name}
                lastName={friend.friend_last_name}
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
