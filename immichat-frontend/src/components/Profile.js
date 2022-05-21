import React from "react";
import { AccountCircle } from "@mui/icons-material";
import AuthenticationContext from "../context/AuthenticationContext";

const Profile = (props) => {
  const { user } = React.useContext(AuthenticationContext);

  const style = {
    width: props.width,
    backgroundColor: "white",
    height: props.height,
  };

  const iconStyle = {
    width: "150px",
    height: "150px",
  };

  return (
    <div
      className="rounded border border-dark d-flex align-items-center flex-column"
      style={style}
    >
      <div className="d-flex justify-content-center">
        <AccountCircle className="pt-3" style={iconStyle} />
      </div>

      <h3>
        {user.first_name} {user.last_name}
      </h3>
    </div>
  );
};

export default Profile;
