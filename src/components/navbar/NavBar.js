import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
export const NavBar = (props) => {
   const { authTokens, setTokens } = useContext(AuthContext);
  const { classes } = props;

   function logout() {
     setTokens();
   }

  return (
    <>
      <nav className="dark">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Logo
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/admin" }}>Admin</NavLink>
            </li>
            <li>
              <NavLink to="/chat">Chat</NavLink>
            </li>
            <li>
             
              {!authTokens ? (
                <NavLink to="/login" >
                  Login
                </NavLink>
              ) : (
                <Button onClick={logout}>Logout</Button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
