import React from "react";
import FeedContext from "../context/FeedContext";
import Post from "./Post";

const Feed = (props) => {
  const { feed } = React.useContext(FeedContext);

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
