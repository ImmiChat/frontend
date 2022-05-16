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
