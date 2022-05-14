import React from "react";
import Post from "./Post";
const Newsfeed = () => {
  const exampleData = [
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
  ];

  return (
    <div>
      <div>
        {exampleData.map((post) => (
          <Post body={post.body} user={post.user} />
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
