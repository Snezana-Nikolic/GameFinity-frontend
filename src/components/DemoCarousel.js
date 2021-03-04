import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import {apiCall} from '../services/api'
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  slider: {
      width: "100vw"
      
  }
});
export const DemoCarousel = () => {
  const classes = useStyles();

  const [cards, setCard] = useState([]);
  useEffect(() => {
    apiCall({
      method: "get",
       url: "/games",
      // url: "https://rickandmortyapi.com/api/episode",

      
    }).then(function (response) {
         console.log(response)
      setCard(response.data)
     
    });
  }, []);

  return (
     <Carousel className={classes.slider}>
   
    {cards.map((el,index)=><div key={index} className={classes.root}>
        <img src={el.image} alt="games"/>
        <p className="legend">{el.name}</p>
      </div>)}
    
     
    </Carousel>
   
  );
};
