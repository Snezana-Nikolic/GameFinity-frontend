import { useState, useEffect } from "react";
import { apiCall } from "../../services/api";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { StarBorder, ShoppingCart } from "@material-ui/icons";
// import Loader from "../../components/Loader";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}));

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    user: "",
    creator: "",
    genre: [],
    consoleType: [],
    image: "",
    rating: 0,
    spaceBuck: 0,
  });

  const classes = useStyles();

  useEffect(
    () =>
      setTimeout(
        () =>
          apiCall
            .get(`game/${id}`)
            .then((response) => setProduct({ ...response.data }))
            .catch((err) => console.error(err)),
        1
      ),
    [id]
  );

  return (
    <section>
      <Container className={classes.background} maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="h3"
                    color="primary"
                    component="h3"
                    gutterBottom={true}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    Created by: {product.creator}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Descripton: {product.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Price: {product.spaceBuck} SpaceBucks
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Average Rating: {product.rating}
                  </Typography>
                  <Box>
                    <Rating
                      name="customized-empty"
                      value={product.rating}
                      precision={0.1}
                      max={10}
                      emptyIcon={<StarBorder fontSize="inherit" />}
                      readOnly
                    />
                  </Box>
                  <Box mt={3}>
                    <Button variant="contained" color="primary">
                      <ShoppingCart /> Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image={
                    product.image ||
                    "url(https://i.ytimg.com/vi/vage8rtZGes/maxresdefault.jpg)"
                  }
                  className={classes.card}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Product;
