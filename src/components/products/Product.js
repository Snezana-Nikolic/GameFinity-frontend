import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  detail: {
    width: "100vw",
  },
});
export const Product = () => {
//   const classes = useStyles();

//   const [cards, setCard] = useState([]);
//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "",
//     }).then(function (response) {
//       console.log(response);
//       setCard(response.data);
//     });
//   }, []);

  return (
    <>
      <div >product
        {/* {cards.map((el, index) => (
          <div key={el.id} className={classes.root}>
            <img src={el.residents} alt="games" />
            <p className="legend">opisd</p>
          </div>
        ))} */}
      </div>
    </>
  );
};
