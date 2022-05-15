import React from "react";
import { setToken } from "../utils/http";
import AuthenticationContext from "./AuthenticationContext";
const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const refreshToken = window.localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return;
    }
    fetch("http://localhost:9000/authenticate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        setUser({ ...data.user[0], isAuth: true });
      });
  }, []);

  const context = {
    user,
    setUser,
  };
  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default AuthenticationContextProvider;
