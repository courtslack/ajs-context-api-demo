
import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // useState stores the user data.
  // setUser updates that data.
  const [user, setUser] = useState({
    name: 'This is your name'
  });

  return (
    // Provider shares user and setUser through Context.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
