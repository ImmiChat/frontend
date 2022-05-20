import React from "react";
import { useState } from "react";
// import AuthenticationContext from "../context/AuthenticationContext";
// import { Navigate } from "react-router-dom";
import "./profilepage.css";
import RightSideBar from "./RightSideBar";
import Sidebar from "./Sidebar";
import LanguageChange from "./translate";
import AuthenticationContext from "../context/AuthenticationContext";
import "./translate.css";
import { AccountCircle } from "@mui/icons-material";

const ProfilePage = () => {
  const { user, setUser } = React.useContext(AuthenticationContext);
  const [profilePageForm, setProfilePageForm] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    language: user.language,
    country_of_origin: user.country_of_origin,
    bio: user.bio,
  });

  const handleProfilePageChange = (e) => {
    e.preventDefault();
    setProfilePageForm({
      ...profilePageForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function updateProfile(userID) {
      const response = await fetch(`http://localhost:9000/user/${userID}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profilePageForm),
      });
      const data = await response.json();
      setUser(data[0]);
    }
    updateProfile(user.id);
    /* console.log(profilePageForm.file)
    // const formData = new FormData();
    // formData.append("file", profilePageForm.file);
    
    // console.log(formData)
    */
  };

  return (
    <div id="profile" className="d-flex justify-content-center">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div className="col-8 col-xl-6 bg-muted border-start border-end border-secondary">
        <form action="" onSubmit={handleSubmit}>
          <div id="container">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt=""
                  />
                  <span className="font-weight-bold">
                    {user.first_name} {user.last_name}
                  </span>
                  <span className="text-black-50">{user.email}</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right fs-2">Profile Settings</h4>
                  </div>
                  <div id="wrapper">
                    {/* <div className="row mb-2">
                      <div className="col-md-2">
                        <AccountCircle
                          style={{ width: "75px", height: "50px" }}
                        />
                      </div>
                      <div className="col-md-8 pt-2">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                          onChange={(event) => {
                            setProfilePageForm({
                              ...profilePageForm,
                              file: event.target.files[0],
                              fileName: event.target.files[0].name,
                            });
                          }}
                        />
                      </div> 
                        </div>*/}
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="first_name"
                          placeholder="First Name"
                          value={profilePageForm.first_name}
                          onChange={handleProfilePageChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          name="last_name"
                          value={profilePageForm.last_name}
                          onChange={handleProfilePageChange}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="labels">Language</label>
                        <input
                          type="text"
                          className="form-control"
                          id="language"
                          name="language"
                          value={profilePageForm.language}
                          onChange={handleProfilePageChange}
                          placeholder="Language"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="labels">Country of Origin</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="Country"
                          name="country_of_origin"
                          value={profilePageForm.country_of_origin}
                          onChange={handleProfilePageChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-3"></div>
                    <div className="col-md-12">
                      <label className="labels">Bio</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="bio"
                        name="bio"
                        placeholder="Bio"
                        value={profilePageForm.bio}
                        onChange={handleProfilePageChange}
                        rows={5}
                      ></textarea>
                    </div>
                  </div>
                  <LanguageChange/>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <RightSideBar />
      </div>
    </div>
  );
};

export default ProfilePage;
