import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/FirebaseConfig";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
