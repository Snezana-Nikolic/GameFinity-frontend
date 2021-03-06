import { createContext, useContext, useEffect, useState } from "react";
import { apiCall } from "../services/api";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);

  useEffect(
    () =>
      (apiCall.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authTokens}`),
    [authTokens]
  );

  const setTokens = (token) => {
    token
      ? localStorage.setItem("tokens", token)
      : localStorage.removeItem("tokens");
    setAuthTokens(token);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setTokens }}>
      {props.children}
    </AuthContext.Provider>
  );
};
