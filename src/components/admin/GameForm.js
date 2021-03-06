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
    creator: "",
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
    <form onSubmit={onFormSubmit} className="gameinput">
      <input
        type="text"
        name="creator"
        value={formFields.creator}
        onChange={onFormFieldChange}
        className="inputGame"
        placeholder="Creator"
      />{" "}
      <br />
      <input
        type="text"
        name="name"
        value={formFields.name}
        onChange={onFormFieldChange}
        className="inputGame"
        placeholder="Game name"
      />{" "}
      <br />
      <input
        type="text"
        name="version"
        value={formFields.version}
        onChange={onFormFieldChange}
        className="inputGame"
        placeholder="Version"
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
      <FormControl>
        <InputLabel>Console Type:</InputLabel>
        <Select
        // value={consoleType}
        // onChange={handleChange}
        className="dropdown"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="PS 5">PS 5</MenuItem>
          <MenuItem value="Xbox one">Xbox One</MenuItem>
        </Select>
        {/* <FormHelperText> Select game genre </FormHelperText> */}
      </FormControl>
      <br />
      <input
        type="text"
        name="state"
        value={formFields.state}
        onChange={onFormFieldChange}
        className="inputGame"
        placeholder="State"
      />{" "}
      <br />
      <input
        type="text"
        name="quantity"
        value={formFields.quantity}
        onChange={onFormFieldChange}
        className="inputGame"
        placeholder="Quantity"
      />{" "}
      <br />
      <textarea
        minLength="10"
        type="text"
        name="description"
        value={formFields.description}
        onChange={onFormFieldChange}
        placeholder="Description"
        className="inputGame textarea"
      />{" "}
      <br />
      <br />
      <label>Cover Image:</label>
      <input type="file" name="image" onChange={onFormFieldChange} />
      <br />
      <br />
      <Button type="submit" variant="contained" className="addgame" >
        Add Game
      </Button>
    </form>
  );
};
