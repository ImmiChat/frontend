import React from "react";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import AuthenticationContext from "../context/AuthenticationContext";
import Feed from "./Feed";
import { Navigate, useParams, Link } from "react-router-dom";
import { Person, PersonAdd } from "@mui/icons-material";

const Profile = (props) => {
  const { user, friends, setFriends } = React.useContext(AuthenticationContext);
  const [userInfo, setUserInfo] = React.useState({});
  const { id } = useParams();
  const [requestState, setRequestState] = React.useState("user");
  // user
  // respond
  // pending
  // friend
  React.useEffect(() => {
    if (parseInt(user.id) === parseInt(id)) {
      setRequestState("user");
    } else if (
      friends.find(
        (friend) => parseInt(friend.id) === parseInt(id) && friend.accepted
      )
    ) {
      setRequestState("friend");
    } else if (
      friends.find(
        (friend) => parseInt(friend.id) === parseInt(id) && !friend.requested
      )
    ) {
      setRequestState("respond");
    } else if (
      friends.find(
        (friend) => parseInt(friend.id) === parseInt(id) && friend.requested
      )
    ) {
      setRequestState("pending");
    } else {
      setRequestState("notFriend");
    }
  }, [id]);

  const url = `http://localhost:9000/user/${user.id}/friends`;

  const handleAcceptFriendRequest = () => {
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
    setRequestState("friend");
  };

  const handleCreateFriendRequest = () => {
    async function createFriendRequest(friendId) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: friendId }),
      });
      const data = await response.json();
      data[0].requested = true;
      data[0].first_name = userInfo.first_name;
      data[0].last_name = userInfo.last_name;
      data[0].id = data[0].friend_two;
      setFriends([...friends, data[0]]);
    }
    createFriendRequest(id);
    setRequestState("pending");
  };
  const handleDeleteFriend = () => {
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
    setRequestState("notFriend");
  };

  React.useEffect(() => {
    if (parseInt(user.id) === parseInt(id)) {
      setUserInfo(user);
      return;
    }
    async function getUserInfo(userId) {
      const response = await fetch(`http://localhost:9000/user/${userId}`);
      const data = await response.json();
      setUserInfo(data[0]);
    }
    getUserInfo(id);
  }, [id]);

  return !user.first_name ? (
    <Navigate to="/" />
  ) : (
    <div className="d-flex justify-content-center">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 border-start border-end border-secondary">
        <div className="container-fluid purpBackground">
          <div className="py-5 w-100 m-auto text-white d-flex justify-content-center row">
            <div className="d-flex flex-wrap justify-content-center col-5  h-100">
              <img
                className="rounded-circle mx-3"
                style={{ width: "60%", height: "50%" }}
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <p className="col-10 text-center pt-3">
                {userInfo.country_of_origin &&
                  userInfo.country_of_origin[0].toUpperCase() +
                    userInfo.country_of_origin.substring(1).toLowerCase()}
              </p>
            </div>
            <div className="col-5 d-flex flex-column justify-content-between">
              <div className="row ">
                <h1 className="fs-2">
                  {userInfo.first_name} {userInfo.last_name}
                </h1>
                <h3>
                  {userInfo.language &&
                    userInfo.language[0].toUpperCase() +
                      userInfo.language.substring(1).toLowerCase()}
                </h3>
                <p>{userInfo.bio}</p>
              </div>
              <div className="row">
                <div className="d-flex justify-content-end">
                  {requestState === "user" ? (
                    <Link to={`/profile/${user.id}/edit`}>
                      <button className="btn btn-secondary">
                        Edit Profile
                      </button>
                    </Link>
                  ) : requestState === "friend" ? (
                    <div class="dropdown d-flex align-items-center">
                      <button
                        className="btn darkPurpleBackground text-white"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Person />
                        Friends
                      </button>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button className="btn" onClick={handleDeleteFriend}>
                            Unfriend
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : requestState === "respond" ? (
                    <div class="dropdown d-flex align-items-center">
                      <button
                        className="btn darkPurpleBackground text-white"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <PersonAdd />
                        Respond
                      </button>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button
                            className="btn"
                            onClick={handleAcceptFriendRequest}
                          >
                            Accept
                          </button>
                        </li>
                        <li>
                          <button className="btn" onClick={handleDeleteFriend}>
                            Decline
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : requestState === "pending" ? (
                    <div class="dropdown d-flex align-items-center">
                      <button
                        className="btn darkPurpleBackground text-white"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <PersonAdd />
                        Pending
                      </button>

                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <button className="btn" onClick={handleDeleteFriend}>
                            Cancel Request
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div class="dropdown d-flex align-items-center">
                      <button
                        className="btn darkPurpleBackground text-white"
                        onClick={handleCreateFriendRequest}
                      >
                        <PersonAdd />
                        Add Friend
                      </button>
                    </div>
                  )}
                  {parseInt(user.id) !== parseInt(id) && (
                    <button className="mx-2 btn btn-secondary">Message</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feed userId={userInfo.id} />
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Profile;
