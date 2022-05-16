import React from "react";
import Navbar from "./Navbar";
import { AccountCircle } from "@mui/icons-material";
import Profile from "./Profile";

const ProfilePage = () => {
  const style = {
    width: "50%",
    height: "600px",
  };
  const iconStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <Navbar />
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-3">
            <Profile height="400px" />
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <AccountCircle style={iconStyle} />
                      <input type="file" />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value="Valerie"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value="Luna"
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" for="Country">
                        Country
                      </label>
                      <input
                        className="form-control"
                        id="Country"
                        type="text"
                        placeholder="Country"
                        value="United States"
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3"></div>

                  <button className="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
