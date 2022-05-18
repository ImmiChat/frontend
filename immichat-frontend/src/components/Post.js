import {
  AccountCircle,
  ThumbUpAlt,
  Comment,
  Edit,
  Delete,
} from "@mui/icons-material";
import FeedContext from "../context/FeedContext";
import convertTimeStamp from "../utils/convertTimeStamp";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";

const Post = ({ info }) => {

  const { feed, setFeed } = React.useContext(FeedContext);
  const { user } = React.useContext(AuthenticationContext);
  const handleDelete = (event) => {
    async function deletePost(id) {
        const response = await fetch(`http://localhost:9000/posts/${id}`,{
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        });
        const data = await response.json();
        const newFeed = feed.filter(post => post.id !==  parseInt(event.target.id));
        setFeed(newFeed);
    }
    deletePost(event.target.id);
  }
  return (
    <div className="border rounded border-dark px-3 my-5" id={info.id}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <AccountCircle style={{ width: "50px", height: "75px" }} />
          <span className="fw-bold px-2">
            {info.first_name} {info.last_name}
          </span>
        </div>
        {user.id === info.user_id && (
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ...
            </button>

            <ul
              className="dropdown-menu list"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="">
                <button className="btn edit" id={info.id}>
                  <Edit className="mx-2 " />
                  Edit
                </button>
              </li>
              <li>
                <button onClick={handleDelete} className="btn delete" id={info.id}>
                  <Delete className="mx-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p className="px-1">{info.body}</p>
      <p className="px-1 text-secondary small">
        {convertTimeStamp(info.updated_at)}
      </p>

      <div className="d-flex justify-content-between">
        <p id="metric">
          <span className="px-2">23 Likes</span>
          <span>1 Comment</span>
        </p>
        <div>
          <Comment className="px-2 icon" style={{ width: "50px" }} />
          <ThumbUpAlt className="px-2 icon" style={{ width: "50px" }} />
        </div>
      </div>
    </div>
  );
};

export default Post;
