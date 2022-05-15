import React from "react";
import Post from "./Post";
const Newsfeed = () => {
  const exampleData = [
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
    { body: "This is my first post", user: { name: "Ray", profilePic: "" } },
  ];

  const [feed, setFeed] = React.useState(null);

  React.useEffect(() => {
    async function getFeed() {
      const response = await fetch("http://localhost:9000/feed");
      const data = await response.json();
      const postArray = data.map((post) => ({
        name: `${post.first_name} ${post.last_name}`,
        body: post.body,
        time: post.updated_at,
      }));
      setFeed(postArray);
    }
    getFeed();
  }, []);

  return (
    <div>
      <div>
        {feed ? (
          feed.map((post) => (
            <Post body={post.body} name={post.name} time={post.time} />
          ))
        ) : (
          <h1>Loading.....</h1>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
