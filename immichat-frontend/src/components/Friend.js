import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Friend = (props) => {
  function handeReload(e) {
    e.preventDefault();
  }
  const { firstName, lastName, isFriend, id } = props;
  return (
    <div className="m-3 ">
      <Link to={props.isMessage ? `/messages/${id}` : `/profile/${id}`}>
        <div className="d-flex align-items-center">
          <div className="">
            <AccountCircle style={{ width: "50px", height: "50px" }} />
          </div>
          <h5 className="names">
            {firstName} {lastName}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Friend;
