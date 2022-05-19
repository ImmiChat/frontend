import {
  AccountCircle,
  ThumbUpAlt,
  Comment as CommentIcon,
  Edit,
  Delete,
} from "@mui/icons-material";
import FeedContext from "../context/FeedContext";
import React from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import Comment from "./Comment";
const { DateTime } = require("luxon");

const Post = ({ info }) => {
  const { feed, setFeed, feedMetric, setFeedMetric } =
    React.useContext(FeedContext);
  const { user } = React.useContext(AuthenticationContext);
  const [comments, setComments] = React.useState([]);
  const [modalBody, setModalBody] = React.useState("");
  const [commentClicked, setCommentClicked] = React.useState(false);
  const [commentInput, setCommentInput] = React.useState("");

  const handleCommentChange = (event) => setCommentInput(event.target.value);

  const handlePostComment = (event) => {
    event.preventDefault();
    if (commentInput === "") {
      return;
    }
    async function postComment(postId) {
      const response = await fetch(
        `http://localhost:9000/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ body: commentInput, userId: user.id }),
        }
      );
      const data = await response.json();
      data[0].first_name = user.first_name;
      data[0].last_name = user.last_name;
      setComments([...comments, data[0]])
    }
    postComment(info.id);
    const map = { ...feedMetric };
    if (info.id in map) {
      map[info.id][0] += 1;
    } else {
      map[info.id] = [1, 0];
    }
    setFeedMetric(map);
    setCommentInput('');
  };

  const handleUpdatePost = (event) => {
    async function updatePost(postId) {
      const response = await fetch(`http://localhost:9000/posts/${postId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ body: modalBody }),
      });

      const data = await response.json();
      console.log(data[0]);
      const id = data[0].id;
      const index = feed.findIndex((post) => {
        return post.id === id;
      });
      const newFeed = [...feed];
      feed[index].body = data[0].body;
      setFeed(newFeed);
    }
    updatePost(info.id);
  };

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

  const handleCommentClick = (event) => {
    setCommentClicked(!commentClicked);
    async function getCommentsOfPost(postId) {
      const response = await fetch(
        `http://localhost:9000/posts/${postId}/comments`
      );
      const data = await response.json();
      setComments(data);
    }
    getCommentsOfPost(info.id);
  };

  return (
    <div className="border rounded border-secondary px-3 my-5" id={info.id}>
      <div className="d-flex justify-content-between align-items-center ">
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
                <textarea
                  type="text"
                  rows={5}
                  cols={50}
                  value={modalBody}
                  onChange={(event) => setModalBody(event.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUpdatePost}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="px-1">{info.body}</p>
      <p className="px-1 text-secondary small">
        {DateTime.fromISO(info.updated_at).toRelative()}
      </p>

      <div
        className={`d-flex justify-content-between ${
          commentClicked && "border-bottom border-secondary"
        }`}
      >
        <p id="metric">
          {feedMetric[info.id] && feedMetric[info.id][1] > 0 && (
            <span className="px-2">{feedMetric[info.id][1]} Likes</span>
          )}
          {feedMetric[info.id] && feedMetric[info.id][0] > 0 && (
            <span className="px-2">{feedMetric[info.id][0]} Comments</span>
          )}
        </p>
        <div>
          <button className="btn" onClick={handleCommentClick}>
            <CommentIcon className="icon" style={{ width: "50px" }} />
          </button>
          <button className="btn">
            <ThumbUpAlt className="icon" style={{ width: "50px" }} />
          </button>
        </div>
      </div>
      {commentClicked && comments.map((comment) => <Comment info={comment} />)}
      {commentClicked && (
        <form action="" onSubmit={handlePostComment}>
          <div className="mt-2 d-flex">
            <div>
              <AccountCircle style={{ width: "50px", height: "75px" }} />
            </div>
            <input
              value={commentInput}
              onChange={handleCommentChange}
              className="rounded-pill w-100"
              type="text"
              name=""
              id=""
              placeholder="Write a comment.."
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;
