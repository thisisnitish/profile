import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Collapse
} from "@material-ui/core";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';
import proj4 from '../assets/project4.png';
import proj5 from '../assets/project5.png';
import proj6 from '../assets/project6.png';

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
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [project1, setProject1] = React.useState(false);
  const [project2, setProject2] = React.useState(false);
  const [project3, setProject3] = React.useState(false);
  const [project4, setProject4] = React.useState(false);
  const [project5, setProject5] = React.useState(false);
  const [project6, setProject6] = React.useState(false);
  
  const handleExpandProject1 = () => {
    setProject1(!project1)
  };

  const handleExpandProject2 = () => {
    setProject2(!project2);
  };

  const handleExpandProject3 = () => {
    setProject3(!project3);
  };

  const handleExpandProject4 = () => {
    setProject4(!project4);
  };

  const handleExpandProject5 = () => {
    setProject5(!project5);
  };

  const handleExpandProject6 = () => {
    setProject6(!project6);
  };
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className={classes.heading} variant="h5" gutterBottom>
              Projects
            </Typography>
          </Grid>

          {/* -----------------------------------Project-1---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Blog App" />
              <CardMedia
                className={classes.media}
                image={proj1}
                title="Blog App"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web app built for college students for writing blogs, articles, poems, essay etc.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/Blog-App"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://myblogdiaryapp.herokuapp.com"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project1,
                  })}
                  onClick={handleExpandProject1}
                  aria-expanded={project1}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    This web app provides a platform where students can write
                    whatever they want such as articles, essays, poems, thesis,
                    and what not. This web app is built using Django as a backend and
                    HTML, CSS, BootStrap as frontend, infact this web app is using postgresql
                    as a database and it is deployed on Heroku. 
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-2---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Weather App" />
              <CardMedia
                className={classes.media}
                image={proj2}
                title="Weather App"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is web app is build to know the weather of any city, country in the world.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/Weather-App"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://myawesomeweatherapp.herokuapp.com"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project2,
                  })}
                  onClick={handleExpandProject2}
                  aria-expanded={project2}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    This web app creates a platform where you can know the weather
                    of any city or country in the world. This web app is using Django
                    as a backend and it is using open weather map api for
                    displaying the data and it is deployed on Heroku.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-3---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="COVID Tracker" />
              <CardMedia
                className={classes.media}
                image={proj3}
                title="COVID Tracker"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web app which tells you about the current statistics of the
                  CoronaVirus.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/CoronaVirus-Tracker"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://coronavirusstats.netlify.app"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project3,
                  })}
                  onClick={handleExpandProject3}
                  aria-expanded={project3}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    This web app creates a platform where you can gather all basic
                    statistics of about COVID. It tracks every data regarding that and
                    maintains in terms of people who are infected, recovered and people
                    who died because of CoronaVirus. This web app using ReactJS in frontend and
                    it is using axios to fetch data from the api and also it is deployed on netlify.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-4---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Library Management System" />
              <CardMedia
                className={classes.media}
                image={proj4}
                title="Library Management System"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A platform as a mini Library Management System for the students.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/Library-Management-System"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://divinelibrary.herokuapp.com"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project4,
                  })}
                  onClick={handleExpandProject4}
                  aria-expanded={project4}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    A platform as mini Library Management System built for students to manage their
                    books so that they don't have to worry about their books. This web app maintains
                    the list of the books as well as students, also which book is issued for which
                    students. Moreover, students can issue books whenever they want, infact this 
                    platform maintains the profile of every students. This web app is using Django as
                    a backend and HTML, CSS and BootStrap as a frontend and it is deployed on Heroku.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-5---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Sorting Visualizer" />
              <CardMedia
                className={classes.media}
                image={proj5}
                title="Sorting Visualizer"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A platform which is used to visualize the sorting algorithms.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/Sorting-Visualizer"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="https://thisisnitish.github.io/Sorting-Visualizer/"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project5,
                  })}
                  onClick={handleExpandProject5}
                  aria-expanded={project5}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project5} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    A web app which is built to visualize the classic sorting algorithms
                    such as Bubble Sort, Insertion Sort, Selection Sort etc. which makes 
                    easy for students to learn these algorithms even better. This app uses
                    ReactJs in frontend and it is deployed on github pages.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

          {/* -----------------------------------Project-6---------------------------------- */}
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title="Our Institute Website" />
              <CardMedia
                className={classes.media}
                image={proj6}
                title="IIIT, Trichy"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is the new version of our college website with new UI.
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="source code"
                  href="https://github.com/thisisnitish/iiitt"
                  target="_blank"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  aria-label="visit the site"
                  href="http://dev.iiitt.ac.in/"
                  target="_blank"
                >
                  <CgWebsite />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: project6,
                  })}
                  onClick={handleExpandProject6}
                  aria-expanded={project6}
                  aria-label="show more"
                >
                  <IoIosArrowDown />
                </IconButton>
              </CardActions>

              <Collapse in={project6} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Description:</Typography>
                  <Typography paragraph>
                    We have revamped our college website with new UI, new user experience
                    with new tools and tech. This project was done in the collaboration
                    with my seniors and classmates. This website is completely dynamic with 100%
                    configurable json and it is built using ReactJs.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Projects;
