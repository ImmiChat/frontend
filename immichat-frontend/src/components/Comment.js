import { AccountCircle } from "@mui/icons-material";
import { DateTime } from "luxon";

const Comment = ({ info }) => {
  console.log(info);
  return (
    <div className="mt-2 d-flex">
      <div>
        <AccountCircle style={{ width: "50px", height: "75px" }} />
      </div>
      <div className="pt-3 px-2">
        <p
          className="border rounded p-2"
          style={{ backgroundColor: "#f0f2f5" }}
        >
          <h6>
            {info.first_name} {info.last_name}
          </h6>
          {info.comment_text}
        </p>
        <p className="text-secondary small">
          {DateTime.fromISO(info.updated_at).toRelative()}
        </p>
      </div>
    </div>
  );
};

export default Comment;
