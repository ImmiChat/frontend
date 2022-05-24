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
      props.setFriendRequests(
        props.friendRequests.filter(
          (request) => parseInt(request.id) !== parseInt(id)
        )
      );
      setFriends([...copy]);
    }
    acceptFriendRequest(id);
  };

  const handleDeleteFriend = (id, requested) => {
    async function deleteFriend(friendId) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: friendId }),
      });
      const data = await response.json();
      const userId = requested ? data[0].friend_two : data[0].friend_one;
      setFriends(
        friends.filter((friend) => parseInt(friend.id) !== parseInt(userId))
      );
      props.setSentRequests(
        props.sentRequests.filter(
          (friend) => parseInt(friend.id) !== parseInt(userId)
        )
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
              {first_name} 
            </h5>
            <h5 className="card-title text-center">
              {last_name}
            </h5>
          </div>
        </div>
      </Link>
      {!props.sent && (
        <div className="d-flex justify-content-around">
          <button
            className="btn purpBackground text-white mb-4 small"
            onClick={() => handleAcceptFriendRequest(id)}
          >
            Accept
          </button>
          <button
            className="btn btn-secondary mb-4 small"
            onClick={() => handleDeleteFriend(id, false)}
          >
            Decline
          </button>
        </div>
      )}
      {props.sent && (
        <div className="d-flex justify-content-center">
          <button
            className="btn col-6 btn-secondary mb-4 small"
            onClick={() => handleDeleteFriend(id, true)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
