import { AccountCircle } from '@mui/icons-material';
import './FriendList.css';

const FriendList = () => {
  function handeReload(e){
    e.preventDefault();
  }
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="people-nearby">
          <div className="nearby-user">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <AccountCircle style={{ width: '50px', height: '50px' }} />
              </div>
              <div className="col-md-7 col-sm-7">
                <h5 className="names">
                  {/* <a href="#" className="profile-link"> */}
                  Sophia Page
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
          <div className="nearby-user">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <AccountCircle style={{ width: '50px', height: '50px' }} />
              </div>
              <div className="col-md-7 col-sm-7">
                <h5 className="names">
                  {/* <a href="#" className="profile-link"> */}
                  Emma Johnson
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
          <div className="nearby-user">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <AccountCircle style={{ width: '50px', height: '50px' }} />
              </div>
              <div className="col-md-7 col-sm-7">
                <h5 className="names">
                  {/* <a href="#" className="profile-link"> */}
                  Nora Wilson
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
          <div className="nearby-user">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <AccountCircle style={{ width: '50px', height: '50px' }} />
              </div>
              <div className="col-md-7 col-sm-7">
                <h5 className="names">
                  {/* <a href="#" className="profile-link"> */}
                  Diana Amber
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
        </div>
      </div>
    </div>
  </div>
  )
};

export default FriendList;
