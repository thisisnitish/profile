import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  heading: {
    fontSize: 65,
    fontWeight: "500",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  degree: {
    fontWeight: 500
  }
}));

const Education = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Education
            </Typography>
          </Grid>
          {/* -------------------------------------Bachelor's------------------------------------- */}
          <Grid item xs={12}>
            <Typography className={classes.degree} variant="h5" gutterBottom>
              B.Tech in Computer Science & Engineering
            </Typography>
            <Typography variant="body1" gutterBottom>
              Indian Institute of Information Technology, Tiruchirappalli
            </Typography>
            <Typography variant="body1" gutterBottom>
              2018 - 2022
            </Typography>
          </Grid>
          {/* -------------------------------------Intermediate------------------------------------- */}
          <Grid item xs={12}>
            <Typography className={classes.degree} variant="h5" gutterBottom>
              Intermediate
            </Typography>
            <Typography variant="body1" gutterBottom>
              St. Xavier's Higher Secondary School
            </Typography>
            <Typography variant="body1" gutterBottom>
              2015 - 2017
            </Typography>
          </Grid>
          {/* -------------------------------------High School------------------------------------- */}
          <Grid item xs={12}>
            <Typography className={classes.degree} variant="h5" gutterBottom>
              High School
            </Typography>
            <Typography variant="body1" gutterBottom>
              St. Xavier's Higher Secondary School
            </Typography>
            <Typography variant="body1" gutterBottom>
              2013 - 2015
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Education
