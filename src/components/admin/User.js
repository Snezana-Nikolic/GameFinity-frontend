import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { StarBorder } from "@material-ui/icons";
import { apiCall } from "../../services/api";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
  },
}));

export const User = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    role: "",
    rating: 0,
    spaceBuck: 0,
    game: [],
  });
  const classes = useStyles();

  useEffect(
    () =>
      setTimeout(
        () =>
          apiCall("/user/Speedwagon")
            .then((res) => {
              console.log(res);
              setUser(res.data);
            })
            .catch((e) => console.log(e)),
        1
      ),
    []
  );

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Avatar
                src={
                  user.profilePic ||
                  "https://www.computerhope.com/jargon/g/guest-user.jpg"
                }
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    {user.username}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Actual name: {user.firstName} {user.lastName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Email: {user.email}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Location: {user.location}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Role: {user.role}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    SpaceBucks: {user.spaceBuck}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Average Rating: {user.rating}
                  </Typography>
                  <Box>
                    <Rating
                      name="customized-empty"
                      value={user.rating}
                      precision={0.1}
                      max={10}
                      emptyIcon={<StarBorder fontSize="inherit" />}
                      readOnly
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};
