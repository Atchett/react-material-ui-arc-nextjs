import React, { Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";

import { Typography, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Team from "../src/components/pages/AboutUs/Team/Team";
import History from "../src/components/pages/AboutUs/History/History";
import CallToAction from "../src/components/pages/Reusable/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingRight: "5em",
    paddingLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.5em",
      paddingLeft: "1.5em",
    },
  },
  headerTitle: {
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
  },
  missionStatementItem: {
    marginTop: "3em",
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  historyItem: {
    marginTop: "10em",
    marginBottom: "10em",
  },
  teamItem: {
    marginBottom: "15em",
  },
}));

const AboutUs = (props) => {
  const { setValue } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Head>
        <title key="title">
          About Us - History &amp; Team | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="About Us - History &amp; Team | Arc Development"
          key="og:title"
        />
        <meta property="og:url" content="https://mui.hitrefresh.co.uk/about" key="og:url" />
        <link rel="canonical" key="canonical" href="https://mui.hitrefresh.co.uk/about" />
      </Head>
      <Grid container direction="column">
        <Grid
          item
          className={clsx(classes.rowContainer, classes.headerTitle)}
          align={matchesMd ? "center" : undefined}
        >
          <Typography variant="h1">About Us</Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={clsx(classes.rowContainer, classes.missionStatementItem)}
        >
          <Typography
            variant="h4"
            align="center"
            className={classes.missionStatement}
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
        <Grid
          item
          container
          className={clsx(classes.rowContainer, classes.historyItem)}
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify="space-around"
        >
          <History matchesMd={matchesMd} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={clsx(classes.rowContainer, classes.teamItem)}
          alignItems="center"
        >
          <Team matchesMd={matchesMd} />
        </Grid>
        <Grid item>
          <CallToAction
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AboutUs;
