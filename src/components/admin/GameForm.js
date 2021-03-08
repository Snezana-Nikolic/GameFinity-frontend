import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  IconButton,
  Paper,
  Input,
  Link,
  Grid,
  Box,
  Typography,
  Chip,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Add, PhotoCamera } from "@material-ui/icons";
import { apiCall } from "../../services/api";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  hidden: {
    visibility: "hidden",
  },
  green: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.success.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#FFFFFF",
    backgroundColor: theme.palette.success.main,
  },
}));

export const GameForm = () => {
  const classes = useStyles();
  const [formFields, setFormFields] = useState({
    user: "603023de4639a438d873ce10",
    creator: "",
    name: "",
    version: "1.0.0",
    genre: ["action", "stealth"],
    state: "",
    quantity: 1,
    spaceBuck: 0,
    description: "",
    consoleType: ["PS 5"],
    image: undefined,
  });

  const handleChange = ({ target }) => {
    setFormFields({
      ...formFields,
      [target.name]:
        target.type === "file"
          ? target.files[0]
          : parseInt(target.value) || target.value,
    });
    console.log(target);
  };

  const handleDelete = (array, value) =>
    setFormFields({
      ...formFields,
      [array]: formFields[array].filter((genre) => genre !== value),
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const { image = undefined } = formFields;
    Object.keys(formFields).forEach((item) =>
      item === "image" && image
        ? formData.append(item, image, image.name)
        : formData.append(item, formFields[item])
    );
    apiCall
      .post("/game", formData)
      .then((result) => console.log(result))
      .catch((e) => console.error(e));
  };

  const chips = (state) =>
    formFields[state].map((element, index) => (
      <li key={index}>
        <Chip
          className={classes.chip}
          label={element}
          onDelete={() => handleDelete(state, element)}
        />
      </li>
    ));

  const genre = chips("genre");

  const consoleType = chips("consoleType");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Add />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Game
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Game Name"
                value={formFields.name}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="creator"
                label="Creator Name"
                name="creator"
                autoComplete="creator"
                value={formFields.creator}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="version"
                name="version"
                variant="outlined"
                required
                fullWidth
                id="version"
                label="Version"
                value={formFields.version}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="quantity"
                label="Quantity"
                name="quantity"
                autoComplete="quantity"
                value={formFields.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="genre"
                label="Genres"
                type="genre"
                id="genre"
                autoComplete="genre"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleChange}>
                      <Add />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Paper component="ul" className={classes.list}>
                {genre.length ? (
                  genre
                ) : (
                  <Typography>No genres entered yet</Typography>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="consoleType"
                label="Console Types"
                name="consoleType"
                autoComplete="consoleType"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleChange}>
                      <Add />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Paper component="ul" className={classes.list}>
                {consoleType.length ? (
                  consoleType
                ) : (
                  <Typography>No genres entered yet</Typography>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="spaceBuck"
                name="spaceBuck"
                variant="outlined"
                required
                fullWidth
                id="spaceBuck"
                label="SpaceBucks"
                value={formFields.spaceBuck}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                label="Game's state"
                name="state"
                autoComplete="state"
                value={formFields.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                className={classes.hidden}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="image"
                onChange={handleChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  xs={12}
                  sm={6}
                  className={classes.green}
                  variant="contained"
                  component="span"
                  startIcon={<PhotoCamera />}
                  fullWidth
                >
                  Profile Pic
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                multiline
                rows={3}
                value={formFields.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Game
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
