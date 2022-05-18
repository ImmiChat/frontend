import React from "react";
import FeedContext from "./FeedContext";

const FeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState([]);
  React.useEffect(() => {
    async function getFeed() {
      const response = await fetch("http://localhost:9000/feed");
      const data = await response.json();
      setFeed(data);
    }
    getFeed();
  }, []);
  const context = {
    feed,
    setFeed,
  };
  return (
    <FeedContext.Provider value={context}>{children}</FeedContext.Provider>
  );
};

export default FeedContextProvider;
