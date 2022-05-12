import React from 'react';
import AuthenticationContext from './AuthenticationContext'
const AuthenticationContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const context = {
    authenticated,
    setAuthenticated,
  };
  return (
    <AuthenticationContext.Provider value={ context }> 
      {children}
    </AuthenticationContext.Provider>
  );
}
export default AuthenticationContextProvider;