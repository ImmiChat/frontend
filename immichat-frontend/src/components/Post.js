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
  const [modalBody, setModalBody] = React.useState(info.body);

  const handleUpdatePost = (event) => {
    async function updatePost(postId) {
      const response = await fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({body: modalBody})
      });

      const data = await response.json();
      console.log(data[0])
      const id = data[0].id;
      const index = feed.findIndex(post => {
        return post.id === id
      });
      const newFeed = [...feed];
      feed[index].body = data[0].body;
      setFeed(newFeed);
    }
    updatePost(info.id);
  }

  const handleDelete = (event) => {
    async function deletePost(id) {
      const response = await fetch(`http://localhost:9000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      const newFeed = feed.filter(
        (post) => post.id !== parseInt(event.target.id)
      );
      setFeed(newFeed);
    }
    deletePost(event.target.id);
  };
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
                <button
                  className="btn edit"
                  id={info.id}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Edit className="mx-2 " />
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={handleDelete}
                  className="btn delete"
                  id={info.id}
                >
                  <Delete className="mx-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body m-auto">
                <textarea type="text" rows={5} cols={50} value={modalBody} onChange={(event) => setModalBody(event.target.value)} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleUpdatePost} data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
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
