import "./SearchBar.css";
import React from "react";
import Friend from "./Friend";
import UsersContext from "../context/UsersContext";

export default function SearchBar() {
  const { users } = React.useContext(UsersContext);
  const [showUsers, setShowUsers] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
      <form className="container">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onFocus={() => setShowUsers(!showUsers)}
          // onBlur={() => setShowUsers(!showUsers)}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div className="search" />
      </form>
      {showUsers &&
        inputValue !== "" &&
        users
          .filter(
            (user) =>
              user.first_name
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
              user.last_name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((user) => (
            <Friend
              id={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              isFriend={false}
            />
          ))}
    </div>
  );
}
