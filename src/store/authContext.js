import React, { useState, useEffect } from "react";
import axios from "../axios";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onSignup: (data) => {},
  onLogin: (validData) => {},
  onLogout: () => {},
  onDelete: () => {},
});

export const AuthContextProvide = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("isLoggedIn");

    if (storedToken) {
      axios
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  const signupHandler = async (data) => {
    try {
      const response = await axios.post("/users", data);
      const Btoken = response.data.token;
      localStorage.setItem("isLoggedIn", Btoken);
      setIsLoggedIn(true);
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const loginHandler = async (validData) => {
    try {
      const response = await axios.post("/users/login", validData);
      const Btoken = response.data.token;
      localStorage.setItem("isLoggedIn", Btoken);
      setIsLoggedIn(true);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const logoutHandler = async () => {
    const storedToken = localStorage.getItem("isLoggedIn");
    try {
      await axios.post(
        "/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onSignup: signupHandler,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
