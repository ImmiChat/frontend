import React from "react";
import { AccountCircle } from "@mui/icons-material";

const Profile = (props) => {
  const style = {
    width: "90%",
    height: "400px",
    backgroundColor: "white",
  };

  const iconStyle = {
    width: "150px",
    height: "150px",
  };

  const imageStyle = {
    backgroundImage:
      "url(https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg)",
    backgroundSize: "80%",
    width: "100%",
    height: "50%",
  };

  return (
    <div
      className="rounded border border-dark d-flex align-items-center flex-column"
      style={style}
    >
      <div style={imageStyle} className="d-flex justify-content-center">
        <AccountCircle className="pt-3" style={iconStyle} />
      </div>

      <h3>Ray Lu</h3>
      <p>Country: China</p>
      <p>Language: Chinese</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
        exercitationem deserunt necessitatibus ipsum voluptates, ullam sunt quam
        recusandae vel quas possimus ex natus esse aut accusamus in optio.
        Totam, numquam.
      </p>
    </div>
  );
};

export default Profile;
