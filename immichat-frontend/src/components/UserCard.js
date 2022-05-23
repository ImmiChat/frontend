import React from "react";
import { Link, Navigate } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";

const UserCard = (props) => {
  const { id, first_name, last_name } = props.info;
  const { friends, setFriends, user } = React.useContext(AuthenticationContext);
  const url = `http://localhost:9000/user/${user.id}/friends`;

  const handleAcceptFriendRequest = (id) => {
    async function acceptFriendRequest(friendId) {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: friendId }),
      });
      const data = await response.json();
      const index = friends.findIndex(
        (friend) => parseInt(friend.id) === parseInt(data[0].friend_one)
      );
      const copy = [...friends];
      copy[index].accepted = true;
      setFriends([...copy]);
    }
    acceptFriendRequest(id);
  };

  const handleDeleteFriend = (id) => {
    async function deleteFriend(friendId) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: friendId }),
      });
      const data = await response.json();
      const userId =
        parseInt(user.id) === parseInt(data[0].friend_one)
          ? data[0].friend_two
          : data[0].friend_one;
      setFriends(
        friends.filter((friend) => parseInt(friend.id) !== parseInt(userId))
      );
    }
    deleteFriend(id);
  };
  return !user.first_name ? (
    <Navigate to="/" />
  ) : (
    <div className="col-3 border border-secondary my-3 mx-4">
      <Link to={`/profile/${id}`}>
        <div className="card d-flex justify-content-center border-0">
          <img
            className="rounded-circle mx-5"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              {first_name} {last_name}
            </h5>
          </div>
        </div>
      </Link>
      <div className="">
        <button
          className="btn col-5 purpBackground mx-2 text-white mb-4"
          onClick={() => handleAcceptFriendRequest(id)}
        >
          Accept
        </button>
        <button
          className="btn col-6 btn-secondary mb-4"
          onClick={() => handleDeleteFriend}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default UserCard;
