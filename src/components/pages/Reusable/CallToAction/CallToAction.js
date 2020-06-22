import React from "react";
import ReactGA from "react-ga";

import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../../../../Link";
import ButtonArrow from "../../../ui/ButtonArrow/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  learnButtonSpan: {
    marginRight: 5,
  },
  ctaContainer: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "inherit",
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
    },
  },
  ctaContentContainer: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: 0,
    },
  },
  subTitle2: {
    fontSize: "1.5rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = (props) => {
  const { theme, matchesSm, setValue } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.ctaContainer}
      alignItems="center"
      justify={matchesSm ? "center" : "space-between"}
      direction={matchesSm ? "column" : "row"}
    >
      <Grid item className={classes.ctaContentContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software,
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" className={classes.subTitle2}>
              Take advantage of the 21st century.
            </Typography>
            <Grid container justify={matchesSm ? "center" : undefined} item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                <span className={classes.learnButtonSpan}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          href="/estimate"
          onClick={() => {
            setValue(false);
            ReactGA.event({
              category: "Estimate",
              action: "Call To Action button pressed",
            });
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
