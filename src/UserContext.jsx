import React, {createContext, useContext, useMemo, useState} from 'react';

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  const [user, setUser] = context;

  return [user, setUser];
};

export const UserProvider = props => {
  const [user, setUser] = useState({});
  const value = useMemo(() => [user, setUser], [user]);
  return <UserContext.Provider value={value} {...props} />;
};
