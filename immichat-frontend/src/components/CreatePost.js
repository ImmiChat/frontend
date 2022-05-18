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
  const { setFeed } = React.useContext(FeedContext);
  const [body, setBody] = React.useState("");
  const handleChange = (event) => setBody(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    async function createNewPost() {
      const response = await fetch("http://localhost:9000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          content: body,
          id: user.id,
        }),
      });
      const data = await response.json();
      console.log(data);
    }
    createNewPost();
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
              <ImageSearch className="px-1 icon" />
              <Tag className="px-1 icon" />
              <InsertEmoticon className="px-1 icon" />
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
