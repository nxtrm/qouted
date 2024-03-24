import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextType {
  username: string | null;
  email:string | null
  userId: string | null
  liked_quotes: [] | null
  isLoggedIn: boolean;
  login: (username: string , userId: string, liked_quotes:[], newEmail: string| null) => void;
  update: (newUsername: string| null, newEmail: string |null, newliked_quotes: []| null) =>void
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
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [liked_quotes, setliked_quotes] = useState<[] | null>(null);
  

  const login = (newUsername: string, newUserId:string, newliked_quotes: [] , newEmail: string| null) => {
    setUsername(newUsername);
    setEmail(newEmail)
    setUserId(newUserId);
    setliked_quotes(newliked_quotes)

  };

  const update = (newUsername: string| null, newEmail: string| null, newliked_quotes: []| null) => {
    if (newUsername) {
      setUsername(newUsername);
    }
    if (newEmail) {
      setUsername(newUsername);
    }
    if (newliked_quotes) {
      setliked_quotes(newliked_quotes)
    }

  };

  const logout = () => {
    setUsername(null);
    setEmail(null);
    setUserId(null)
    setliked_quotes(null)
  };

  const isLoggedIn = !!username; 

  return (
    <UserContext.Provider value={{ username, email, isLoggedIn, userId, liked_quotes, login, update, logout }}>
      {children}
    </UserContext.Provider>
  );
};
