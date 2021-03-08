import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
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
  Info,
} from "@material-ui/icons";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

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
        <RouterLink
          to="/"
          color="primary"
          underline="none"
          variant="h5"
          className={classes.brand}
        >
          <Logo width={250} />
        </RouterLink>
        <NavLink to="/" className={classes.navLinkLarge}>
          Home Page
        </NavLink>
        <NavLink to="/admin" className={classes.navLinkLarge}>
          User Page
        </NavLink>
        <NavLink to="/aboutus" className={classes.navLinkLarge}>
          About Us
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
            <RouterLink
              to="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.brand}
            >
              <Logo width={190} height={30} />
            </RouterLink>
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
            <NavLink to="/admin" className={classes.navLinkSmall}>
              <ListItem button key="Admin Page">
                <ListItemIcon className={classes.iconWrapper}>
                  <SupervisorAccount className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="User Page" />
              </ListItem>
            </NavLink>
            <NavLink to="/aboutus" className={classes.navLinkSmall}>
              <ListItem button key="About Us">
                <ListItemIcon className={classes.iconWrapper}>
                  <Info className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="About Us" />
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
