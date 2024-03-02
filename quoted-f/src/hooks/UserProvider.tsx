import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextType {
  username: string | null;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within the UserProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState<string | null>(null);

  const login = (newUsername: string) => {
    setUsername(newUsername);
  };

  const logout = () => {
    setUsername(null);
  };

  const isLoggedIn = !!username; 

  return (
    <UserContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
