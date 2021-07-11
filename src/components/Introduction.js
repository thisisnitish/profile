import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaStackExchange, FaLinkedin, FaInstagram } from "react-icons/fa";
import developer from '../assets/Screenshot 2021-06-07 at 11.56.43 PM.png';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  heading: {
    fontSize: 50,
  },
  name: {
    fontWeight: "500",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sub: {
    fontSize: 45,
    fontWeight: '600'
  },
  '@media only screen and (max-width: 600px)' : {
    // sub: {
    //   fontSize: 38,
    // },
  }
}));

const Introduction = () => {

  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.name} variant="h1" gutterBottom>
              Nitish Kumar
              <Typography variant="body1" className={classes.sub}>
                Software Developer
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h6" gutterBottom>
              A little about me
            </Typography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Typography variant="body1" gutterBottom>
              <strong>Hello,</strong> My name is Nitish. I'm from India. I
              believe that we should have some sense of driving force that keeps
              us inspired to do the work and when it happens, work doesn’t feel
              like work. My passion for engineering and tech has been increased
              day by day, I choose to code because I found that It was fun to
              learn and you can do whatever you want. I'm deeply passionate
              about Software Development and Innovations.
            </Typography>

            {/* ----------------------------------------Social Icons ---------------------------------------- */}
            <Grid container spacing={4}>
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
                  href="https://www.instagram.com/thisisnitish30281/"
                  target="_blank"
                >
                  <FaInstagram size={35} color="whitesmoke" />
                </a>
              </Grid>

              <Grid item xs={3} sm={1}>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://drive.google.com/file/d/1GsxHKKNNWjJk6IJCRLz_WFBxSyFWx6ss/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img
              src={developer}
              style={{
                height: 200,
                width: 200,
                borderRadius: 100,
              }}
              alt="profile_img"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Introduction;
