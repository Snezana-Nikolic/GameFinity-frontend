import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.svg";

const useStyles = makeStyles((theme) => ({
  background: { backgroundColor: "#151a30" },
  contentBox: {
    maxWidth: theme.breakpoints.values["md"],
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    color: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
      maxHeight: 512,
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      marginRight: 0,
      textAlign: "left",
    },
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 512,
    width: "100%",
  },
}));

export const NotFound = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.background}>
      <Grid item xs={12} lg={6}>
        <Box className={classes.contentBox}>
          <Container maxWidth="sm">
            <Typography variant="h3" color="primary">
              Whoops!
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom={true}>
              Something went wrong!
            </Typography>
            <Typography variant="subtitle1">
              The URL is broken or the page has been moved, press the button
              bellow to go back to home page.
            </Typography>
            <Box mt={3}>
              <Button variant="contained" color="primary">
                <Link to="/" className={classes.link}>
                  Return to the homepage
                </Link>
              </Button>
            </Box>
          </Container>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box position="relative" height={512} bgcolor="grey.100">
          <img className={classes.img} src={errorImg} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};
