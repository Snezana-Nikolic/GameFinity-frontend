import React, { useState, useEffect } from 'react'
import {apiCall} from '../../services/api'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'

export default function Product(){
    const { _id } = useParams()
    const url = `https://gamefinity-api.herokuapp.com/game/${_id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        apiCall.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    if(product){
      console.log(product)
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                Name:{product.name}
            </h1>
            <div>
                Img<img
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                 price{product.spaceBuck}
            </div>
            <div>
               description {product.description}
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
};




































































// import React, { useEffect, useState } from "react";
// import { apiCall } from "../../services/api";
// import { useParams } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Loader from '../../components/Loader'
// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     height: "100%",
//   },
//   bigImg: {
//     width: "80%",
//   },
// });
// export const Product = (props) => {
//   const classes = useStyles();
//   const { _id } = useParams();

//   const [card, setCard] = useState();
//   useEffect(() => {
//     apiCall.get(`/game/${_id}`).then(function (response) {
//       console.log(response.data);
//       // setCard(response.data);
//     });
//   }, [_id]);

//   return (
//     <div>
//       Single blog {_id}
//       <div className={classes.root}>
        
//            <div className={classes.bigImg} key={card._id}>
//             <img src={card.image} alt="games" />
//             <p>Opis igrice:{card.description}</p>
//           </div> 
        
//       </div>
//     </div>
//   );
// };


