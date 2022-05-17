import { Search } from "@mui/icons-material";
import FriendList from './FriendList';

const RightSideBar = (props) => {
  return (
    <div className="w-75 mt-5 m-auto">
      <div>
        <form className="d-flex">
          <div className="border border-dark w-75 rounded-pill">
            <Search />
            <input
              type="text"
              className="px-2 border-0"
            />
          </div>
          <button className="btn rounded-pill btn-primary mx-2">Search</button>
        </form>
        <div className="pt-5 d-flex flex-wrap justify-content-between border-bottom border-dark">
            <p className=" fs-4 fw-bolder">Friends List</p>
            <p className="icon fs-5 fw-bolder">See All</p>
        </div>
        <div>
            <FriendList />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
