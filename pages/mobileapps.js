import React, { Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AboutAppDevelopment from "../src/components/pages/Services/AppDevelopment/AboutAppDevelopment/AboutAppDevelopment";
import IntegrationPlatform from "../src/components/pages/Services/AppDevelopment/IntegrationPlatform/IntegrationPlatform";
import Icons from "../src/components/pages/Services/AppDevelopment/Icons/Icons";

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
  headerSpacing: {
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  containerSpacing: {
    marginTop: "10em",
  },
  preCTASpacing: {
    marginBottom: "10em",
  },
}));

const AppDevelopment = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Head>
        <title key="title">
          iOS / Android app design &amp; development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="iOS / Android app design &amp; development | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://arc.com/mobileapps"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc.com/mobileapps"
        />
      </Head>
      <Grid container direction="column" wrap="nowrap">
        <Grid
          item
          container
          direction="row"
          justify={matchesMd ? "center" : undefined}
          className={clsx(classes.rowContainer, classes.headerSpacing)}
        >
          <AboutAppDevelopment
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            matchesMd={matchesMd}
          />
        </Grid>
        <Grid
          item
          container
          direction={matchesSm ? "column" : "row"}
          justify={matchesMd ? "center" : undefined}
          className={clsx(classes.rowContainer, classes.containerSpacing)}
        >
          <IntegrationPlatform matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          justify="center"
          className={clsx(
            classes.containerSpacing,
            classes.rowContainer,
            classes.preCTASpacing
          )}
        >
          <Icons matchesSm={matchesSm} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
      </Grid>
    </Fragment>
  );
};

export default AppDevelopment;
