/* eslint-disable array-callback-return */
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { apiCall } from "../../services/api";
//  import {white} from 'material-ui/styles/colors';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 305,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const GameForm = () => {
  const { _id } = useParams();
  console.log(_id);
  const classes = useStyles();
  const [formFields, setFormFields] = useState({
    creator: "IO Interactive",
    name: "",
    version: "",
    genre: ["action", "stealth"],
    state: "",
    quantity: 1,
    description: "",
    consoleType: ["PS 5"],
    image: null,
  });

  const onFormFieldChange = ({ target }) =>
    setFormFields({
      ...formFields,
      [target.name]: target.type === "file" ? target.files[0] : target.value,
    });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const { image } = formFields;
    if (image) formData.append("image", image, image.name);
    apiCall
      .post("/game", { ...formFields, user: localStorage.getItem("user") })
      .then((response) => console.log(response))
      .catch((error) =>
        console.log({ ...formFields, user: localStorage.getItem("user") })
      );
  };
  
  return (
    <form onSubmit={onFormSubmit}>
      <label>Creator:</label>
      <input
        type="text"
        name="creator"
        value={formFields.creator}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      <label>Name game:</label>
      <input
        type="text"
        name="name"
        value={formFields.name}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      <label>Version:</label>
      <input
        type="text"
        name="version"
        value={formFields.version}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      {/* {<label>Genre:</label>
      <input
        type="text"
        name="genre"
        value={formFields.genre}
        onChange={onFormFieldChange}
      />{" "}
      <br />} */}
      <FormControl className={classes.formControl}>
        <InputLabel>Console Type:</InputLabel>
        <Select
        // value={consoleType}
        // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="PS 5">PS 5</MenuItem>
          <MenuItem value="Xbox one">Xbox One</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <br />
      <label>State:</label>
      <input
        type="text"
        name="state"
        value={formFields.state}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        value={formFields.quantity}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      <label>Description:</label>
      <textarea
        minLength="10"
        type="text"
        name="description"
        value={formFields.description}
        onChange={onFormFieldChange}
      />{" "}
      <br />
      <br />
      <label>Cover Image:</label>
      <input type="file" name="image" onChange={onFormFieldChange} />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Add Blog
      </Button>
    </form>
  );
};
