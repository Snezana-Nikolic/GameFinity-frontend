import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { apiCall } from "../../services/api";
import ProductCard from "../products/ProductCard";

const useStyles = makeStyles((theme) => ({
  background: { backgroundColor: "#151a30" },
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Products = (props) => {
  const classes = useStyles();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    apiCall("/games").then((response) => {
      console.log(response);
      setCards(response.data);
    });
  }, []);

  return (
    <>
      <main className={classes.background}>
        <div className={classes.heroContent}></div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Products;
