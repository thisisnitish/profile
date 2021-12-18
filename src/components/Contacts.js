import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaGithub,
  FaStackExchange,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FcLike } from "react-icons/fc";
import { FaCode } from "react-icons/fa";
import { Grid, Typography } from "@material-ui/core";
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    // marginBottom: 30
  },
  heading: {
    fontSize: 50,
    fontWeight: "500",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  degree: {
    fontWeight: 500,
  },
}));

const Contacts = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Let's connect together
            </Typography>
            <Typography variant="h4" gutterBottom>
              I'm always open to talk!
            </Typography>

            <Grid container className="social">
              <Grid item xs={2} sm={1}>
                <a href="mailto: nitishkumargenius@gmail.com" target="_blank">
                  <SiGmail size={35} color="whitesmoke" />
                </a>
              </Grid>

              <Grid item xs={2} sm={1}>
                <a href="https://github.com/thisisnitish" target="_blank">
                  <FaGithub size={35} color="whitesmoke" />
                </a>
              </Grid>

              <Grid item xs={2} sm={1}>
                <a
                  href="https://stackoverflow.com/users/11018674/nitish-kumar"
                  target="_blank"
                >
                  <FaStackExchange size={35} color="whitesmoke" />
                </a>
              </Grid>

              <Grid item xs={2} sm={1}>
                <a
                  href="https://www.linkedin.com/in/thisisnitish/"
                  target="_blank"
                >
                  <FaLinkedin size={35} color="whitesmoke" />
                </a>
              </Grid>

              <Grid item xs={2} sm={1}>
                <a
                  href="https://www.instagram.com/thisisnitish301/"
                  target="_blank"
                >
                  <FaInstagram size={35} color="whitesmoke" />
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            style={{ marginTop: "3%", marginBottom: "2%" }}
            justify="center"
          >
            <Grid item>
              <FaCode size={30} style={{ marginRight: 10 }} />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: 25, marginRight: 10 }}>
                with
              </Typography>
            </Grid>
            <Grid item>
              <FcLike size={30} style={{ marginRight: 10 }} />
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: 25, marginRight: 10 }}>
                by Nitish Kumar
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contacts;
