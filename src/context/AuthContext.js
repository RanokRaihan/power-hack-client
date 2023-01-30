import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// create a new context for authentication
const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getLoggedIn = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/getAuth`);

    setLoading(false);
    setIsLoggedIn(response.data.isLoggedIn);
    setCurrentUser({ ...response.data.currentUser });
  };
  useEffect(() => {
    getLoggedIn();
  }, []);

  //value object
  const value = {
    isLoggedIn,
    getLoggedIn,
    currentUser,
  };
  return <authContext.Provider value={value}>{!loading && children}</authContext.Provider>;
}
