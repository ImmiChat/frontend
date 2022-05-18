import React from "react";
import { useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { Navigate } from "react-router-dom";
import "./profilepage.css";
import RightSideBar from "./RightSideBar";
import Sidebar from "./Sidebar";

const ProfilePage = () => {
  const { user } = React.useContext(AuthenticationContext);
  const [profilePageForm, setProfilePageForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    language: "",
    country: "",
    bio: "",
  });

  const handleProfilePageChange = (e) => {
    e.preventDefault();
    setProfilePageForm({
      ...profilePageForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="profile" className="d-flex justify-content-center">
      <div className="col-2 py-5 bg-white ">
        <Sidebar />
      </div>
      <div className="rounded bg-white col-6  border-start border-end border-dark d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <span className="font-weight-bold">John Doe</span>
              <span className="text-black-50">johndoe@example.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div id="wrapper">
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      defaultValue={profilePageForm.firstName}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={profilePageForm.lastName}
                      onChange={handleProfilePageChange}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      defaultValue={profilePageForm.email}
                      onChange={handleProfilePageChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Language</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={profilePageForm.language}
                      onChange={handleProfilePageChange}
                      placeholder="Language"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country of Origin</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      defaultValue={profilePageForm.country}
                      onChange={handleProfilePageChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bio"
                    defaultValue={profilePageForm.bio}
                    onChange={handleProfilePageChange}
                  />
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 ">
        <RightSideBar />
      </div>
    </div>
  );
};

export default ProfilePage;
