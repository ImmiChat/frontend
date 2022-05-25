import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';
import AuthenticationContext from '../context/AuthenticationContext';
import React from 'react';
import InboxList from './InboxList';
import { Navigate } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
  const { user } = React.useContext(AuthenticationContext);

  return !user.first_name ? (
    <Navigate to="/auth" />
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div
        className="col-8 col-xl-6 bg-muted border-start border-end border-secondary"
        style={{ minHeight: '100vh' }}
      >
        <h1 className="text-center">Messages</h1>
        <div>
          <img src="https://www.caveolearning.com/hubfs/translation.png" alt="" className="chat" />
        </div>
        <div className="chatText">
          <h3>Click on friend to send a message</h3>
          <div className="rightArrow">➜</div>
        </div>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <InboxList />
      </div>
    </div>
  );
};

export default Messages;
