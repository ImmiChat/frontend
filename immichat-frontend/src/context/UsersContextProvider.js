import React from "react";
import UsersContext from "./UsersContext";

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function getAllUsers() {
      const response = await fetch("http://localhost:9000/user");
      const data = await response.json();
      setUsers(data);
    }
    getAllUsers();
  }, []);
  const context = {
    users,
    setUsers,
  };
  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
