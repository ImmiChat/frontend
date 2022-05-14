import React from "react";

import { ThumbUp, Comment, AccountCircle, Send } from "@mui/icons-material";

const postStyle = {
  width: "500px",
  height: "300px",
  backgroundColor: "white",
};

const topStyle = {
  width: "100%",
  height: "50px",
  fontSize: "14px",
  lineHeight: "20px",
};

const accountIcon = {
  height: "48px",
  width: "48px",
};

const textStyle = {
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
};

const Post = (props) => {
  return (
    <div
      className="border border-dark m-auto rounded mt-5 px-3 pt-3"
      style={postStyle}
    >
      <div className="d-flex" style={topStyle}>
        <AccountCircle style={accountIcon} />
        <div className="d-flex flex-column">
          <span className="fw-bolder">{props.user.name} Lu</span>
          <span>5 min ago.....</span>
        </div>
      </div>
      <div className="">
        <p style={textStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          minima sapiente vel eos repellendus sunt ipsam laborum nisi
          repudiandae, nostrum, nobis nesciunt perferendis suscipit magnam
          tempore culpa harum totam. Ullam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur minima sapiente vel eos
          repellendus sunt ipsam laborum nisi repudiandae, nostrum, nobis
          nesciunt perferendis suscipit magnam tempore culpa harum totam. Ullam.
        </p>
      </div>
      <div className="border-bottom border-dark d-flex justify-content-between px-5">
        <p>#ofLikes</p>
        <p>#ofComments</p>
      </div>
      <div className="d-flex justify-content-end pt-3">
        <ThumbUp className="px-3" />
        <Comment className="px-3" />
        <Send className="px-3" />
      </div>
    </div>
  );
};

export default Post;
