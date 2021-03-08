import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Dashboard, Add, Games, Group } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    color: "#737373",
  },
}));

export const MainListItems = () => {
  const classes = useStyles();

  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText
          children={
            <Link to="/admin" className={classes.navLink}>
              Dashboard
            </Link>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText
          children={
            <Link to="/admin/addGame" className={classes.navLink}>
              Add game
            </Link>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText
          children={
            <Link to="/admin/users" className={classes.navLink}>
              All users
            </Link>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Games />
        </ListItemIcon>
        <ListItemText
          children={
            <Link to="/admin/games" className={classes.navLink}>
              All games
            </Link>
          }
        />
      </ListItem>
    </>
  );
};
