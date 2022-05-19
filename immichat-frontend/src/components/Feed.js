import React from "react";
import FeedContext from "../context/FeedContext";
import Post from "./Post";

const Feed = (props) => {
  const { feed } = React.useContext(FeedContext);
  const [filter, setFilter] = React.useState("All");
  const posts =
    filter === "All" ? feed : feed.filter((post) => post.topic === filter);
  const handleClick = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="border-top border-secondary w-75 m-auto mt-5 py-5">
      <div className="d-flex justify-content-end">
        <button
          className={`btn ${filter === "All" && "icon"}`}
          value="All"
          onClick={handleClick}
        >
          All
        </button>
        <button
          className={`btn ${filter === "Jobs" && "icon"}`}
          value="Jobs"
          onClick={handleClick}
        >
          Jobs
        </button>
        <button
          className={`btn ${filter === "Housing" && "icon"}`}
          value="Housing"
          onClick={handleClick}
        >
          Housing
        </button>
        <button
          className={`btn ${filter === "Healthcare" && "icon"}`}
          value="Healthcare"
          onClick={handleClick}
        >
          Healthcare
        </button>
      </div>
      <div>
        {feed.length > 0 &&
          posts.map((info, index) => <Post key={index} info={info} />)}
      </div>
    </div>
  );
};

export default Feed;
