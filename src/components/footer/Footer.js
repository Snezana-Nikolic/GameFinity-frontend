import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright &#169;
    <Link color="inherit" href="/">
      {" GameFinity "}
    </Link>
    {new Date().getFullYear()}.
  </Typography>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          GameFinity
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          GameFinity is a console game shop, the purpose of this application is
          to master the skills that we obtained through the Web Development
          course.
        </Typography>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
