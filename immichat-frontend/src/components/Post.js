import { AccountCircle, ThumbUpAlt, Comment } from "@mui/icons-material";
import convertTimeStamp from "../utils/convertTimeStamp";

const Post = ({ info }) => {
  return (
    <div className="border rounded border-dark px-3 my-5">
      <div className="d-flex align-items-center">
        <AccountCircle style={{ width: "50px", height: "75px" }} />
        <span className="fw-bold px-2">
          {info.first_name} {info.last_name}
        </span>
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
          <Comment className="px-2 icon" />
          <ThumbUpAlt className="px-2 icon" />
        </div>
      </div>
    </div>
  );
};

export default Post;
