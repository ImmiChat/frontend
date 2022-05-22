import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Friend = (props) => {
  function handeReload(e) {
    e.preventDefault();
  }
  const { firstName, lastName, isFriend, id } = props;
  return (
    <div className="nearby-user">
      <div className="row">
        <Link
          to={`/profile/${id}`}
          style={{ textDecoration: "none", fontSize: "1.25rem" }}
        >
          <div className="col-md-2 col-sm-2">
            <AccountCircle style={{ width: "50px", height: "50px" }} />
          </div>
          <div className="col-md-7 col-sm-7">
            <h5 className="names">
              {/* <a href="#" className="profile-link"> */}
              {firstName} {lastName}
              {/* </a> */}
            </h5>
          </div>
        </Link>
        <div className="friendBtn col-md-3 col-sm-3" onClick={handeReload}>
          <a href="/">
            {isFriend && (
              <button className="bn54">
                <span className="bn54span">Unfriend</span>
              </button>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Friend;
