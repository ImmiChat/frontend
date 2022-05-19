import React from "react";
import FeedContext from "./FeedContext";

const FeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState([]);
  const [feedMetric, setFeedMetric] = React.useState({});
  React.useEffect(() => {
    async function getFeed() {
      const response = await fetch("http://localhost:9000/feed");
      const data = await response.json();
      setFeed(data);
    }
    async function getMetricsOfPost() {
      const map = {};
      const commentResponse = await fetch("http://localhost:9000/comments");
      const commentData = await commentResponse.json();
      for (let commentMetric of commentData) {
        map[commentMetric.post_id] = [parseInt(commentMetric.numberofcomments), 0];
      }
      const likeResponse = await fetch("http://localhost:9000/likes");
      const likeData = await likeResponse.json();
      for (let likeMetric of likeData) {
        if (likeMetric.post_id in map) {
          map[likeMetric.post_id][1] = parseInt(likeMetric.numberoflikes);
        } else {
          map[likeMetric.post_id] = [0, parseInt(likeMetric.numberoflikes)];
        }
      }
      setFeedMetric(map);
    }

    getFeed();
    getMetricsOfPost();
  }, []);
  const context = {
    feed,
    setFeed,
    feedMetric,
    setFeedMetric,
  };
  return (
    <FeedContext.Provider value={context}>{children}</FeedContext.Provider>
  );
};

export default FeedContextProvider;
