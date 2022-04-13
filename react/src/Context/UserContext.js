import { useContext, useState, createContext } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const noUser = {
    userId: 0,
    username: "",
    email: "",
    bookmark: [""],
  };

  const [user, setUser] = useState(noUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
