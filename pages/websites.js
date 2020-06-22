import React, { Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AboutWebsiteDevelopment from "../src/components/pages/Services/WebsiteDevelopment/AboutWebsiteDevelopment/AboutWebsiteDevelopment";
import WebsiteServices from "../src/components/pages/Services/WebsiteDevelopment/WebsiteServices/WebsiteServices";
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

const WebsiteDevelopment = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Head>
        <title key="title">
          Stunning custom website design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="Stunning custom website design | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://mui.hitrefresh.co.uk/websites"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://mui.hitrefresh.co.uk/websites"
        />
      </Head>
      <Grid item container direction="column" wrap="nowrap">
        <Grid
          item
          container
          direction="row"
          justify={matchesMd ? "center" : undefined}
          className={clsx(classes.rowContainer, classes.headerSpacing)}
        >
          <AboutWebsiteDevelopment
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            matchesMd={matchesMd}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <WebsiteServices matchesSm={matchesSm} />
      </Grid>
      <Grid item>
        <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
      </Grid>
    </Fragment>
  );
};

export default WebsiteDevelopment;
