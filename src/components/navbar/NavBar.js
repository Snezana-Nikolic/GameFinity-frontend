import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import {
  Menu,
  Home,
  AccountCircle,
  SupervisorAccount,
  Chat,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70,
  },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  registerButtonLarge: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  registerButtonSmall: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginBottom: 20,
  },
  navLinkLarge: {
    marginRight: theme.spacing(5),
    textDecoration: "none",
    color: "#737373",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLinkSmall: {
    textDecoration: "none",
    color: "#737373",
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 200,
  },
  whiteText: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
}));
export const NavBar = () => {
  const { authTokens, setTokens } = useContext(AuthContext);

  const [toggle, setToggle] = useState(false);

  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Link
          href="/"
          color="primary"
          underline="none"
          variant="h5"
          className={classes.brand}
        >
          <img src="nereus-assets/img/nereus-light.png" alt="" width="110" />
        </Link>
        <NavLink to="/" className={classes.navLinkLarge}>
          Home Page
        </NavLink>
        <NavLink to="/user" className={classes.navLinkLarge}>
          User Page
        </NavLink>
        <NavLink to="/admin" className={classes.navLinkLarge}>
          Admin Page
        </NavLink>
        <NavLink to="/chat" className={classes.navLinkLarge}>
          Chat Room
        </NavLink>
        {!authTokens ? (
          <>
            <Button
              variant="contained"
              color="primary"
              className={classes.registerButtonLarge}
            >
              <NavLink to="/login" className={classes.whiteText}>
                Log in
              </NavLink>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.registerButtonLarge}
            >
              <NavLink to="/signup" className={classes.whiteText}>
                Sign up
              </NavLink>
            </Button>
          </>
        ) : (
          <Button
            className={classes.registerButtonLarge}
            onClick={() => setTokens()}
            variant="contained"
            color="primary"
          >
            Log out
          </Button>
        )}
        <Box ml={2}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => setToggle(true)}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={toggle} onClose={() => setToggle(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.brand}
            >
              <img
                src="nereus-assets/img/nereus-light.png"
                alt=""
                width="110"
              />
            </Link>
          </Box>
          <List>
            <NavLink exact to="/" className={classes.navLinkSmall}>
              <ListItem button key="Home Page">
                <ListItemIcon className={classes.iconWrapper}>
                  <Home className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItem>
            </NavLink>
            <NavLink to="/user" className={classes.navLinkSmall}>
              <ListItem button key="User Page">
                <ListItemIcon className={classes.iconWrapper}>
                  <AccountCircle className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="User Page" />
              </ListItem>
            </NavLink>
            <NavLink to="/admin" className={classes.navLinkSmall}>
              <ListItem button key="Admin Page">
                <ListItemIcon className={classes.iconWrapper}>
                  <SupervisorAccount className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Admin Page" />
              </ListItem>
            </NavLink>
            <NavLink to="/chat" className={classes.navLinkSmall}>
              <ListItem button key="Chat Room">
                <ListItemIcon className={classes.iconWrapper}>
                  <Chat className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Chat Room" />
              </ListItem>
            </NavLink>
          </List>
          <Box
            mt={1}
            ml={2}
            pt={3}
            border={1}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            {!authTokens ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.registerButtonSmall}
                  fullWidth
                >
                  <NavLink to="/login" className={classes.whiteText}>
                    Log in
                  </NavLink>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.registerButtonSmall}
                  fullWidth
                >
                  <NavLink to="/signup" className={classes.whiteText}>
                    Sign up
                  </NavLink>
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setTokens()}
                variant="contained"
                color="primary"
                fullWidth
              >
                Log out
              </Button>
            )}
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
};
