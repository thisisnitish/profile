import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiDjango,
  SiNodeDotJs,
  SiRedux,
  SiGithubactions
} from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  heading: {
    fontSize: 45,
    fontWeight: "500",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

const TechStack = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Technologies I'm familiar with
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Button
              size="large"
              startIcon={<SiJavascript size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Javascript
            </Button>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Button
              size="large"
              startIcon={<SiPython size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Python
            </Button>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              size="large"
              startIcon={<SiCplusplus size={30} />}
              style={{ color: "#31c1f5" }}
            >
              C++
            </Button>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              size="large"
              startIcon={<SiNodeDotJs size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Node
            </Button>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              size="large"
              startIcon={<SiReact size={30} />}
              style={{ color: "#31c1f5" }}
            >
              ReactJs
            </Button>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Button
              size="large"
              startIcon={<SiReact size={30} />}
              style={{ color: "#31c1f5" }}
            >
              React Native
            </Button>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              size="large"
              startIcon={<SiDjango size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Django
            </Button>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Button
              size="large"
              startIcon={<SiRedux size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Redux
            </Button>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Button
              size="large"
              startIcon={<SiGithubactions size={30} />}
              style={{ color: "#31c1f5" }}
            >
              Github Actions
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TechStack;
