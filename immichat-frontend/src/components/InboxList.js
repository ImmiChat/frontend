import React from "react";
const InboxList = (props) => {
  return (
    <div className="w-75 mt-2 m-auto">
      <div className="pt-5 border-bottom border-dark">
        <p className=" fs-4 fw-bolder text-center icon">Inbox</p>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="people-nearby"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxList;
