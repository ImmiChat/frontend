import React from "react";

interface User {
  profilePic: string;
  name: string;
}

interface postdata {
  body: string;
  user: User;
}

const style = {
  width: "800px",
  height: "300px",
};

const Post: React.FC<postdata> = (props) => {
  return (
    <div className="border border-dark m-auto" style={style}>
      <div className="border border-primary d-flex" style={{ height: "25%" }}>
        <img
          className="rounded-circle img-fluid"
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          alt="Profile Pic"
          style={{ width: "14%", height: "100%" }}
        />
        <h4 className="p-4">Username</h4>
      </div>
      <div className="text-center pt-3">
        <h2>This is the title of the post</h2>
      </div>
      <div className="d-flex flex-wrap m-auto pt-2" style={{ width: "60%" }}>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          laboriosam itaque. In officia nihil sequi expedita! Excepturi veniam
          alias maxime ipsum unde aut tenetur laboriosam dignissimos iusto, ut
          temporibus reprehenderit!
        </p>
      </div>
      <img
        className="mx-3"
        src="data:image/png;base64,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"
        alt=""
        style={{ height: "40px", width: "40px" }}
      />
      <img
        src="https://www.pngitem.com/pimgs/m/71-714713_comment-logo-png-comment-icon-transparent-png.png"
        alt=""
        style={{ height: "40px", width: "40px" }}
      />
    </div>
  );
};

export default Post;
