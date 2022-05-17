import React from "react";
import Navbar from "./Navbar";
import AuthenticationContext from "../context/AuthenticationContext";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import './profilepage.css'

const ProfilePage = () => {
  const { user, setUser } = React.useContext(AuthenticationContext);
  const { register } = useForm();
  // const [profilePageForm, setProfilePageForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   username: "",
  //   email: "",
  //   country: "",
  // });

  const handleProfilePageChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div>
      <Navbar/>
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=''/>
            <span className="font-weight-bold">John Doe</span><span className="text-black-50">johndoe@example.com</span>
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
                    <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder="First Name" value={user.first_name} onChange={handleProfilePageChange} ref={register({ required: true })}/></div>
                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" value={user.last_name} onChange={handleProfilePageChange} placeholder="Last Name" ref={register({ required: true })}/></div>
                </div>
                <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Username</label><input type="text" className="form-control" value={user.user_name} onChange={handleProfilePageChange} placeholder="Username" ref={register({ required: true })}/></div>
                    <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" value={user.email} onChange={handleProfilePageChange} ref={register({ required: true })}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country of Origin</label><input type="text" className="form-control" placeholder="Country" value={user.country} onChange={handleProfilePageChange} ref={register({ required: true })}/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
};

export default ProfilePage;
