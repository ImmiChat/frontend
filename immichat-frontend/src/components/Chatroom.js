import React from "react";
import Sidebar from "./Sidebar";
import InboxList from "./InboxList";
import AuthenticationContext from "../context/AuthenticationContext";
import { Navigate, useParams } from "react-router-dom";
import Chat from "./Chat";
import io from "socket.io-client";

const socket = io.connect("http://localhost:9000");

const Chatroom = () => {
  const { user } = React.useContext(AuthenticationContext);
  const [message, setMessage] = React.useState("");
  const { id } = useParams();
  const [chat, setChat] = React.useState([]);
  const scrollRef = React.useRef();
  React.useEffect(() => {
    if (!id) return;
    async function getChat() {
      const response = await fetch(
        `http://localhost:9000/user/${user.id}/chat/${id}`
      );
      const data = await response.json();
      console.log(data);
      setChat(data);
    }
    getChat();
    console.log("hello");
  }, [id]);

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  const sendChat = (e) => {
    e.preventDefault();
    if (!message) return;

    async function postChat() {
      const response = await fetch(
        `http://localhost:9000/user/${user.id}/chat/${id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await response.json();
      setChat([...chat, data[0]]);
    }
    postChat();
    socket.emit("chat", { message });
    setMessage("");
  };

  return !user.first_name ? (
    <Navigate to="/" />
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="col-4 col-xl-2 bg-white py-5">
        <Sidebar />
      </div>
      <div
        className="col-8 col-xl-6 bg-muted border-start border-end border-secondary d-flex flex-column justify-content-between"
        style={{ minHeight: "100vh" }}
      >
        <div className="">
          <div className="mt-5 d-flex align-items-center border-bottom w-75 m-auto justify-content-center">
            <img
              className="rounded-circle mx-3"
              style={{ width: "100px", height: "100px" }}
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
            />
            <h4>Matthew Tan</h4>
          </div>
          <div
            className="mt-5 "
            style={{ overflowY: "auto", maxHeight: "65vh" }}
          >
            {chat.length > 0 &&
              chat.map((chat) => (
                <div ref={scrollRef}>
                  <Chat chat={chat} userId={user.id} />
                </div>
              ))}
          </div>
        </div>
        <div className="sticky-bottom">
          <form
            className="d-flex w-100 mb-5 d-flex justify-content-center"
            onSubmit={sendChat}
          >
            <div className="col-8">
              <input
                type="text"
                className="w-100 rounded-pill"
                style={{ minHeight: "50px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn rounded-pill purpBackground"
                style={{ minHeight: "50px", minWidth: "125px" }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xl-3 bg-muted" id="hide">
        <InboxList />
      </div>
    </div>
  );
};
export default Chatroom;
