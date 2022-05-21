import { AccountCircle } from "@mui/icons-material";

const Friend = (props) => {
  function handeReload(e) {
    e.preventDefault();
  }
  const { friend_first_name, friend_last_name } = props.friend;
  return (
    <div className="nearby-user">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <AccountCircle style={{ width: "50px", height: "50px" }} />
        </div>
        <div className="col-md-7 col-sm-7">
          <h5 className="names">
            {/* <a href="#" className="profile-link"> */}
            {friend_first_name} {friend_last_name}
            {/* </a> */}
          </h5>
        </div>
        <div className="friendBtn col-md-3 col-sm-3" onClick={handeReload}>
          <a href="/">
            <button className="bn54">
              <span className="bn54span">Unfriend</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Friend;
