import React, { useEffect, useState }from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import {DemoCarousel} from '../DemoCarousel';
import {apiCall} from "../../services/api";
import ProductCard from '../products/ProductCard'
// import { Router } from "../../Router";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Products(props) {
  const classes = useStyles();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    apiCall('/games').then(function (response) {
        //console.log(response)
      setCards(response.data)


     
    });
  }, []);


  return (
    <React.Fragment>
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <DemoCarousel />
        </div>
        {cards.map((product)=> 
        <ProductCard key={product._id} product={product} />)}
      </main>
      
    </React.Fragment>
  );
}