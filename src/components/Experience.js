import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";
import experiences from '../json/experiences';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  heading: {
    fontSize: 65,
    fontWeight: "500",
  },
  internshipHeading: {
    fontSize: 40,
  },
  internshipSubHeading: {
    fontSize: 15,
  },
  "@media only screen and (max-width: 600px)": {
    internshipHeading: {
      fontSize: 37
    }
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Experience
            </Typography>
          </Grid>
          {/* -----------------------------------Experiences---------------------------------- */}
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <Typography
                className={classes.internshipHeading}
                variant="h5"
                gutterBottom
              >
                {experience.position}
              </Typography>
              <Typography
                className={classes.internshipSubHeading}
                variant="h5"
                gutterBottom
              >
                <Link
                  target="_blank"
                  rel="noopener"
                  href={experience.url}
                  style={{ color: "#31c1f5" }}
                >
                  {experience.company}
                </Link>
              </Typography>
              <Typography
                className={classes.internshipSubHeading}
                variant="h5"
                gutterBottom
              >
                {experience.timeline}
              </Typography>

              <Grid item xs={12} sm={9}>
                <ul style={{ lineHeight: 1.5 }}>
                  {experience.details.map((detail, index) => (
                    <li key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Experience
