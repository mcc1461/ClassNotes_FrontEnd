import React, {createContext, AuthContext} from 'react';

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {
  const values = {};
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>

  );
}

export default AuthContextProvider;