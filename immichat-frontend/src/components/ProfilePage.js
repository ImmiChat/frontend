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
    width: "150px",
    height: "150px",
  };

  return (
    <div>
      <Navbar />
      <div class="container-xl px-4 mt-4">
        <div class="row">
          <div class="col-xl-3">
            <Profile height="400px" />
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value="Valerie"
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value="Luna"
                      />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="Country">
                        Country
                      </label>
                      <input
                        class="form-control"
                        id="Country"
                        type="text"
                        placeholder="Country"
                        value="United States"
                      />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3"></div>

                  <button class="btn btn-primary" type="button">
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
