import React from "react";
import { setToken } from "../utils/http";
import AuthenticationContext from "./AuthenticationContext";
const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [friends, setFriends] = React.useState([]);

  React.useEffect(() => {
    const refreshToken = window.localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return;
    }
    async function authenticateUser() {
      try {
        const response = await fetch("http://localhost:9000/authenticate", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        });
        const data = await response.json();
        setUser({ ...data.user[0], isAuth: true });
        setToken(data.token);
      } catch (err) {
        console.log(err);
      }
    }
    authenticateUser();
  }, []);

  React.useEffect(() => {
    if (!user.id) return;
    async function fetchFriends(userId) {
      const response = await fetch(
        `http://localhost:9000/user/${userId}/friends`
      );
      const data = await response.json();
      setFriends(data.filter((friend) => friend.accepted));
    }
    fetchFriends(user.id);
  }, [user]);

  const context = {
    user,
    setUser,
    friends,
    setFriends,
  };
  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationContextProvider;
