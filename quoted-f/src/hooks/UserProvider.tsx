import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import APIClient from "../services/api-client";

interface UserContextType {
  username: string | null;
  email:string | null
  userId: string | null
  liked_quotes: string[] | null
  isLoggedIn: boolean;
  login: (username: string , userId: string, liked_quotes:[], email: string| null) => void;
  update: (newUsername: string| null, newEmail: string |null, newliked_quotes: []| null) =>void
  logout: () => void;
}

export interface UserDataResponse {
  username: string;
  userId: string;
  email: string;
  liked_quotes: string[]; 
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
  const [liked_quotes, setliked_quotes] = useState<string[] | null>(null);
  

  const login = (username: string, userId:string, liked_quotes: string[] , email: string| null) => {
    setUsername(username);
    setEmail(email)
    setUserId(userId);
    setliked_quotes(liked_quotes)

  };

  const update = (newUsername: string| null, newEmail: string| null, newliked_quotes: string[]| null) => {
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

    Cookies.remove("access_token");
  };

  const isLoggedIn = !!username; 

  const apiClient = new APIClient("/userdata")

  useEffect(() => {
    if (Cookies.get("access_token")) {
        fetchUserData()
    }
}, []);

const fetchUserData = async () => {
  try {
    const token = Cookies.get("access_token");
    if (!token) {
      throw new Error("No access token found");
    }
    if (!userId) {
      apiClient.getUser(token)
      .then((userData) => {
        setUsername(userData.username);
        setEmail(userData.email);
        setUserId(userData.userId);
        setliked_quotes(userData.liked_quotes);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    }

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

  return (
    <UserContext.Provider value={{ username, email, isLoggedIn, userId, liked_quotes, login, update, logout }}>
      {children}
    </UserContext.Provider>
  );
};
