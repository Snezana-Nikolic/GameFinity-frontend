import React, { useEffect, useState } from "react";
import { apiCall } from "../../services/api";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
   bigImg: {
     width: "80vw",
   },
});
export const Product = () => {
  const classes = useStyles();
  const { _id } = useParams();

  const [card, setCard] = useState([]);
  useEffect(() => {
    apiCall.get(`/games/${_id}`).then(function (response) {
      console.log(response.data);
       setCard(response.data)
    });
  }, []);

   return (
    
   <div>Single blog {_id}
      <div className= {classes.root}>
      {card.map(item  =>(
        
        <div className= {classes.bigImg} key={item._id} >
         <img src ={item.image} alt="games" />
        </div>
      ))}
      </div></div>
       );
};

