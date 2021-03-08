import {
  Container,
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import {
  blue,
  yellow,
  green,
  purple,
  pink,
  deepOrange,
} from "@material-ui/core/colors";
import {
  Apartment,
  Dns,
  TapAndPlay,
  Room,
  Email,
  WebAsset,
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
} from "@material-ui/icons";
import clsx from "clsx";
import * as pattern from "../assets/images/pattern1.png";
import { ReactComponent as Banner } from "../assets/images/financial-report.svg";
const useStyles = makeStyles((theme) => ({
  iconWrapper1: {
    backgroundColor: `fade(${(theme.palette.background.emphasis, 0.6)})`,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  section: {
    backgroundImage: `url(${pattern.default})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  iconWrapper2: {
    backgroundColor: theme.palette.primary.light,
  },
  icon1: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  icon2: {
    backgroundColor: yellow[100],
    color: yellow[800],
  },
  icon3: {
    backgroundColor: green[100],
    color: green[600],
  },
  icon4: {
    backgroundColor: purple[100],
    color: purple[600],
  },
  icon5: {
    backgroundColor: pink[100],
    color: pink[600],
  },
  icon6: {
    backgroundColor: deepOrange[100],
    color: deepOrange[600],
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <>
      <section>
        <Container maxWidth="lg">
          <Box py={10}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="overline" color="textSecondary">
                    LOREM IPSUM
                  </Typography>
                  <Typography variant="h3" component="h2" gutterBottom={true}>
                    <Typography color="primary" variant="h3" component="span">
                      Lorem ipsum dolor{" "}
                    </Typography>
                    <Typography variant="h3" component="span">
                      sit amet consectetur.
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Suspendisse aliquam tellus ante, porttitor mattis diam
                    eleifend quis. Pellentesque pulvinar commodo eros sit amet
                    finibus. Aenean et ornare erat.
                  </Typography>
                  <div>
                    <Box mt={3} mb={2} display="flex" alignItems="center">
                      <Box pr={2}>
                        <Avatar
                          className={classes.iconWrapper1}
                          variant="rounded"
                        >
                          <Apartment color="primary" />
                        </Avatar>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom={true}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </Box>
                    <Box mb={2} display="flex" alignItems="center">
                      <Box pr={2}>
                        <Avatar
                          className={classes.iconWrapper1}
                          variant="rounded"
                        >
                          <Dns color="primary" />
                        </Avatar>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom={true}
                      >
                        Donec ut orci justo
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box pr={2}>
                        <Avatar
                          className={classes.iconWrapper1}
                          variant="rounded"
                        >
                          <TapAndPlay color="primary" />
                        </Avatar>
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom={true}
                      >
                        Duis vitae sem turpis
                      </Typography>
                    </Box>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Banner className={classes.img} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <Box py={6}>
            <Box textAlign="center" mb={9}>
              <Container maxWidth="sm">
                <Typography variant="overline" color="textSecondary">
                  LOREM IPSUM
                </Typography>
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography variant="h3" component="span" color="primary">
                    Donec lacinia{" "}
                  </Typography>
                  <Typography variant="h3" component="span">
                    turpis non sapien lobortis pretium
                  </Typography>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph={true}
                >
                  Integer feugiat massa sapien, vitae tristique metus suscipit
                  nec.
                </Typography>
              </Container>
            </Box>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon1))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon2))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon3))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon4))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon5))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar
                      variant="rounded"
                      className={clsx((classes.iconWrapper2, classes.icon6))}
                    >
                      <Apartment />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      In eget ligula ut est interdum finibus. Etiam consectetur,
                      libero tincidunt vulputate fermentum, nisi nulla cursus
                      turpis.
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg">
          <Box py={10}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" component="h2" gutterBottom={true}>
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph={true}
                >
                  Suspendisse aliquam tellus ante, porttitor mattis diam
                  eleifend quis. Pellentesque pulvinar commodo eros sit amet
                  finibus. Aenean et ornare erat.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div className={classes.midColumn}>
                  <Box display="flex" mb={3}>
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <Room color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Address
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        1652 Cordia Cir
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Newton, North Carolina(NC), 28658
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <Email color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Email
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        hello@mui.dev
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <WebAsset color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      Social Media
                    </Typography>
                    <IconButton href="#" color="inherit">
                      <Facebook />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                      <Twitter />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <Phone color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      (318) 285-9856
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
