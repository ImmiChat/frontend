import {
  Autorenew,
  AccountCircle,
  ImageSearch,
  Tag,
  InsertEmoticon,
} from "@mui/icons-material";
import AuthenticationContext from "../context/AuthenticationContext";
import React from "react";
import FeedContext from "../context/FeedContext";

const CreatePost = (props) => {
  const { user } = React.useContext(AuthenticationContext);
  const { feed, setFeed } = React.useContext(FeedContext);
  const [body, setBody] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const handleChange = (event) => setBody(event.target.value);
  const handleTopicChange = (event) => {
    setTopic(event.target.id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (topic === "Select a topic") {
      return;
    }
    if (topic === "") {
      setTopic("Select a topic");
      return;
    }
    async function createNewPost() {
      console.log(body, user.id);
      const response = await fetch("http://localhost:9000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          content: body,
          id: user.id,
          topic,
        }),
      });
      const data = await response.json();
      data[0].first_name = user.first_name;
      data[0].last_name = user.last_name;
      console.log(data[0]);
      setFeed([data[0], ...feed]);
    }
    createNewPost();
    setBody("");
  };

  return (
    <div className="w-75 m-auto pt-5 px-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fs-4">Home</h5>
        <Autorenew className="icon" />
      </div>
      <div className="d-flex ">
        <AccountCircle
          className="text-secondary col-2"
          style={{ width: "50px", height: "75px" }}
        />
        <form className="col-10 pt-3" onSubmit={handleSubmit}>
          <input
            className="p-5 w-100 placeholder-xl border-light py-4 rounded"
            type="text"
            placeholder="What's on your mind?"
            value={body}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-between align-items-center pt-3">
            <div>
              <div class="btn-group dropend">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topic
                </button>
                {topic === "" || topic === "Select a topic" ? (
                  <span className="px-3 text-danger">{topic}</span>
                ) : (
                  <span className="px-3 icon">#{topic}</span>
                )}
                <ul class="dropdown-menu">
                  <li
                    className="dropdown-item"
                    id="Jobs"
                    onClick={handleTopicChange}
                  >
                    Jobs
                  </li>
                  <li
                    className="dropdown-item"
                    id="Housing"
                    onClick={handleTopicChange}
                  >
                    Housing
                  </li>
                  <li
                    className="dropdown-item"
                    id="Healthcare"
                    onClick={handleTopicChange}
                  >
                    Healthcare
                  </li>
                </ul>
              </div>
            </div>
            <button className="rounded-pill btn post text-white px-5 py-2">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
