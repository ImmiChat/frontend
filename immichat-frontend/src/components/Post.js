import { AccountCircle, ThumbUpAlt, Comment } from "@mui/icons-material";

const Post = (props) => {
  return (
    <div className="border rounded border-dark px-3 my-5">
      <div className="d-flex align-items-center">
        <AccountCircle style={{ width: "50px", height: "75px" }} />
        <span className="fw-bold px-2">Name</span>
      </div>
      <p className="px-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo expedita
        laboriosam odit dolores voluptatibus. Necessitatibus fugiat, est veniam
        animi eligendi recusandae rem, ex sint maxime officia sed, cum omnis
        deleniti?
      </p>
      <p className="px-1 text-secondary small">10:13 AM - 8/2/21</p>
      <div className="d-flex justify-content-between">
        <p id="metric"><span className="px-2">23 Likes</span><span>1 Comment</span></p>
        <div>
          <Comment className="px-2 icon"/>
          <ThumbUpAlt className="px-2 icon"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
