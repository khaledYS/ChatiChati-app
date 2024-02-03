import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

interface loginWithUsernameProps {
  username: string;
  password: string;
}
interface loginWithEmailProps {
  email: string;
  password: string;
}
const AuthContext = createContext(null);

export const AuthProvider = ({ children, userData }) => {
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  let isLoaded = false;
  useEffect(() => {
    (async () => {
      if (isLoaded) {
        return null;
      }
      try {
        isLoaded = true;
        const request = await verify();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isLoaded]);

  async function loginWithUsername(data: loginWithUsernameProps) {
    const req = await axios({
      method: "POST",
      url: apiBaseUrl + "login/username",
      data: {
        username: data.username,
        password: data.password,
      },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173/",
      },
    });
    if (req.status === 200) {
      setUser(req.data);
      // navigate("/profile", {replace: true});
    } else {
      const error = req;
      console.log(error);
      // throw new Error(error);
      // return req;
    }
  }
  async function loginWithEmail(data: loginWithEmailProps) {
    const req = await axios({
      method: "POST",
      url: apiBaseUrl + "login/email",
      data: {
        email: data.email,
        password: data.password,
      },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173/",
      },
    });
    if (req.status === 200) {
      setUser(req.data);
      navigate("/profile", {replace: true});
    } else {
      const error = req;
    }
  }
  const verify = async () => {
    try {
      const request = await axios.get(apiBaseUrl + "jwt/verify", {
        withCredentials: true,
      });
      if (request.status === 200) {
        setUser(request.data);
        return request.data;
      } else {
        setUser(null);
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    await axios.get(import.meta.env.VITE_API_URL + "/logout", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5173/",
      },
    });
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      loginWithUsername,
      loginWithEmail,
      logout,
      verify,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

type userProps = null | {
  username: string;
  email: string;
};
interface useAuthProps {
  user: userProps;
  loginWithUsername: (data: loginWithUsernameProps) => Promise<void>;
  loginWithEmail: (data: loginWithEmailProps) => Promise<void>;
  logout: () => Promise<void>;
  verify: () => Promise<void>;
}
export const useAuth = (): useAuthProps => {
  return useContext(AuthContext);
};
