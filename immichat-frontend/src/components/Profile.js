import React from "react";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import AuthenticationContext from "../context/AuthenticationContext";
import Feed from "./Feed";
import { Navigate, useParams } from "react-router-dom";

const Profile = (props) => {
  const { user } = React.useContext(AuthenticationContext);
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
      console.log(data);
    }
    getUserInfo(id);
  });

  return !user.isAuth ? (
    <Navigate to="/auth" />
  ) : (
    <div className="d-flex justify-content-center">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 border-start border-end border-secondary">
        <div className="container-fluid purpBackground">
          <div className="py-5 w-75 m-auto text-white d-flex justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <img
                className="rounded-circle mx-3"
                width="200px"
                height="200px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <p className="pt-3">{user.country_of_origin}</p>
            </div>
            <div className="pt-2 px-3">
              <h1 className="font-weight-bold fs-3">
                {user.first_name} {user.last_name}
              </h1>
              <span className="pt-2">{user.email}</span>
              <p className="pt-2">{user.bio}</p>
            </div>
          </div>
        </div>
        <Feed isUser={true} />
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Profile;
