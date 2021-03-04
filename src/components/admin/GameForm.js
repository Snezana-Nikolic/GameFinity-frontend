import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { apiCall } from "../../services/api";
//  import {white} from 'material-ui/styles/colors';
 import { makeStyles } from '@material-ui/core/styles';
 import InputLabel from '@material-ui/core/InputLabel';
 import MenuItem from '@material-ui/core/MenuItem';
 import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
 import Select from '@material-ui/core/Select';

 const useStyles = makeStyles((theme) => ({
   formControl: {
    margin: theme.spacing(1),
     minWidth: 305,
       
   },
   selectEmpty: {
     marginTop: theme.spacing(2),
  },
}));



export  const GameForm = () => {
  const { _id } = useParams();
  console.log(_id);
   const classes = useStyles();
  const [formFields, setFormFields] = useState({ creator: "", name: "",version: "", genre: [], state: "", quantity: "", description: "", consoleType: [] });

  //  const [consoleType, setConsoleType] = useState({ consoleType:""  });
  //  const handleChange = (event) => {
  //    setConsoleType(event.target.value);
  //  };
  const onFormFieldChange = (e) => {
    if (e.target.type === "file") {
      setFormFields({ ...formFields, [e.target.name]: e.target.files });
      
    } else {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
    // console.dir(e)
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileFields = ["image"];
    const data = {};
    Object.keys(formFields).map(function (key, index) {
      if (fileFields.includes(key)) {
        console.log("odje file obraditi", formFields[key].length);
        if (formFields[key].length > 1) {
          for (let i = 0; i < formFields[key].length; i++) {
            const file = formFields[key][i];

            formData.append(`files.${key}`, file, file.name);
          }
        } else {
          const file = formFields[key][0];
          formData.append(`files.${key}`, file, file.name);
        }
      } else {
        console.log("odje tekst");
        data[key] = formFields[key];
      }
    });
    formData.append("data", JSON.stringify(data));
    console.log(formData, data, Array.from(formData));
    apiCall("/game", { method: "POST", data: {...data, user: localStorage.getItem('user')} })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <br></br>
      <label>Name game:</label>
      <input
        type="text"
        name="name"
        value={formFields.name}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      <label>Version:</label>
      <input
        type="text"
        name="version"
        value={formFields.version}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      {/* {<label>Genre:</label>
      <input
        type="text"
        name="genre"
        value={formFields.genre}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>} */}
      <FormControl className={classes.formControl}>
        <InputLabel>Console Type:</InputLabel>
        <Select
          // value={consoleType}
          // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='PS 5'>PS 5</MenuItem>
          <MenuItem value='Xbox one'>Xbox One</MenuItem>
         
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <br></br>
      <label>State:</label>
      <input
        type="text"
        name="state"
        value={formFields.state}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        value={formFields.quantity}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      <label>Description:</label>
      <textarea
        minLength="10"
        type="text"
        name="description"
        value={formFields.description}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      <br></br>
      <label>Cover Image:</label>
      <input type="file" name="image" onChange={onFormFieldChange} />
      <br></br>
      <br></br>
      <Button type="submit" variant="contained" color="primary">
        Add Blog
      </Button>
    </form>
  );
};
