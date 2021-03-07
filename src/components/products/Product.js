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
  background: { backgroundColor: "#151a30" },
  whiteText: { color: "#FFFFFF" },
  textColor: { color: "#363636" },
  card: {
    height: 512,
  },
  description: { color: "#707070", width: "70%" },
  creator: { fontSize: "25px", marginBottom: "70px" },
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
      <Container maxWidth="75vw">
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
                    className={classes.textColor}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h3"
                    className={classes.textColor, classes.creator}
                    component="h3"
                    gutterBottom={true}
                  >
                    Created by: {product.creator}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                    className={classes.textColor, classes.description}
                  >
                    Descripton: {product.description}
                  </Typography>
                  <Box component="fieldset" borderColor="transparent">
                    <Typography
                      className={classes.textColor}
                      component="legend"
                    >
                      Average Rating: {product.rating}
                      <Rating
                        name="customized-empty"
                        value={product.rating}
                        precision={0.1}
                        max={10}
                        emptyIcon={<StarBorder fontSize="inherit" />}
                        readOnly
                      />
                    </Typography>
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
                  image={product.image || ""}
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
