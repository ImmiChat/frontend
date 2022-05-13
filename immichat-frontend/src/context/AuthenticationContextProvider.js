import React from "react";
import AuthenticationContext from "./AuthenticationContext";
const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  // React.useEffect(() => {
  //   fetch("http://localhost:8000/isAuthenticated")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

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
