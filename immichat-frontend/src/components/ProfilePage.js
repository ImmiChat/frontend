import React from 'react';
// import { useState } from 'react';
// import AuthenticationContext from "../context/AuthenticationContext";
// import { Navigate } from "react-router-dom";
import './profilepage.css';
import RightSideBar from './RightSideBar';
import Sidebar from './Sidebar';
// import LanguageChange from "./translate";
import AuthenticationContext from '../context/AuthenticationContext';
import './translate.css';
import { useNavigate, Navigate } from 'react-router-dom';
import ProfileCard from './profilecard';

const ProfilePage = () => {
  const { user, setUser } = React.useContext(AuthenticationContext);
  // const [profilePageForm, setProfilePageForm] = useState({
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   language: user.language,
  //   country_of_origin: user.country_of_origin,
  //   bio: user.bio,
  // });
  // const navigate = useNavigate();
  // const handleProfilePageChange = (e) => {
  //   e.preventDefault();
  //   setProfilePageForm({
  //     ...profilePageForm,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   async function updateProfile(userID) {
  //     const response = await fetch(`http://localhost:9000/user/${userID}`, {
  //       method: 'PUT',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(profilePageForm),
  //     });
  //     const data = await response.json();
  //     setUser(data[0]);
  //   }
  //   updateProfile(user.id);
  //   setTimeout(() => {
  //     navigate(`/profile/${user.id}`);
  //   }, 1000);
    /* console.log(profilePageForm.file)
    // const formData = new FormData();
    // formData.append("file", profilePageForm.file);

    // console.log(formData)
    */
  // };

  return !user.first_name ? (
    <Navigate to="/auth" />
  ) : (
    <div id="profile" className="d-flex justify-content-center">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 bg-muted border-start border-end border-secondary">
        <ProfileCard />
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default ProfilePage;