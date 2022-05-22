import React from "react";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import AuthenticationContext from "../context/AuthenticationContext";
import Feed from "./Feed";
import { Navigate, useParams } from "react-router-dom";

const Profile = (props) => {
  const { user, friends } = React.useContext(AuthenticationContext);
  const [userInfo, setUserInfo] = React.useState({});
  const { id } = useParams();

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

  return (
    <div className="d-flex justify-content-center">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 border-start border-end border-secondary">
        <div className="container-fluid purpBackground">
          <div className="py-5 w-75 m-auto text-white d-flex justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <img
                className="rounded-circle mx-3 col-10"
                width="200px"
                height="200px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <p className="col-10 text-center pt-3">
                {userInfo.country_of_origin}
              </p>
            </div>
            <div className="pt-2 px-3">
              <h1 className="font-weight-bold fs-3">
                {userInfo.first_name} {userInfo.last_name}
              </h1>
              <span className="pt-2">{userInfo.email}</span>
              <p className="pt-2">{userInfo.bio}</p>
            </div>
            <div className="d-flex align-items-end justify-content-end ms-5">
              <button className="btn h-25 btn-danger p-4 ">Unfriend</button>
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
