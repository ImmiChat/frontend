import React from "react";
import FriendList from "./FriendList";
const InboxList = (props) => {
  return (
    <div className="w-75 mt-2 m-auto">
      <div className="pt-5 border-bottom border-dark">
        <p className=" fs-4 fw-bolder text-center icon">Friends</p>
      </div>
      <div className="mt-2">
        <FriendList isMessage={true} />
      </div>
    </div>
  );
};

export default InboxList;
