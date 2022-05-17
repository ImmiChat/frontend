import React from "react";
import Post from "./Post";

const Feed = (props) => {
  const array = [
    {
      name: "Ray Lu",
      updated_at: "5 min ago",
      body: "This is dope",
      likes: 10,
      comments: 10,
    },
    {
      name: "Ray Lu",
      updated_at: "5 min ago",
      body: "This is dope",
      likes: 10,
      comments: 10,
    },
    {
      name: "Ray Lu",
      updated_at: "5 min ago",
      body: "This is dope",
      likes: 10,
      comments: 10,
    },
    {
      name: "Ray Lu",
      updated_at: "5 min ago",
      body: "This is dope",
      likes: 10,
      comments: 10,
    },
    {
      name: "Ray Lu",
      updated_at: "5 min ago",
      body: "This is dope",
      likes: 10,
      comments: 10,
    },
  ];
  const [feed, setFeed] = React.useState([]);
  React.useEffect(() => {
    async function getFeed() {
      const response = await fetch("http://localhost:9000/feed");
      const data = await response.json();
      setFeed(data);
    }
    getFeed();
  }, []);

  return (
    <div className="border-top border-secondary w-75 m-auto mt-5 py-5">
      <div>
        {feed.length > 0 &&
          feed.map((info, index) => <Post key={index} info={info} />)}
      </div>
    </div>
  );
};

export default Feed;
