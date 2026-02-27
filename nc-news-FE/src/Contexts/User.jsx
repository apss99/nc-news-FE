import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: null,
    avatar_url: null,
    name: null,
    password: null,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
