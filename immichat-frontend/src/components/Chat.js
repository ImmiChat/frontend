import React from "react";
const Chat = (props) => {
  console.log(props);
  return (
    <div
      className={`d-flex align-items-center ${
        props.chat.sender_id === props.userId
          ? `justify-content-start`
          : "justify-content-end"
      } `}
    >
      <div
        className="d-flex align-items-center px-2"
        style={{ minHeight: "50px" }}
      >
        {props.chat.sender_id === props.userId && (
          <img
            className="rounded-circle mx-3"
            style={{ width: "50px", height: "50px" }}
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt=""
          />
        )}
        <p
          className={`rounded-pill d-flex align-items-center p-3`}
          style={{
            minHeight: "50px",
            backgroundColor: `${
              props.chat.sender_id === props.userId ? "#e4e6eb" : "#ae83f4"
            }`,
          }}
        >
          {props.chat.message}
        </p>
      </div>
    </div>
  );
};

export default Chat;
