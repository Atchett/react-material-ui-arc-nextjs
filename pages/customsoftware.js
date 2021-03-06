import React, { Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AboutCustomSoftware from "../src/components/pages/Services/CustomSoftware/AboutCustomSoftware/AboutCustomSoftware";
import Icons from "../src/components/pages/Services/CustomSoftware/Icons/Icons";
import DigitalDocumentsScale from "../src/components/pages/Services/CustomSoftware/DigitalDocumentsScale/DigitalDocumentsScale";
import RootCauseAnalysis from "../src/components/pages/Services/CustomSoftware/RootCauseAnalysis/RootCauseAnalysis";
import AutomationUIDesign from "../src/components/pages/Services/CustomSoftware/AutomationUIDesign/AutomationUIDesign";
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

const CustomSoftware = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Head>
        <title key="title">
          Custom Software Development &amp; Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="Custom Software Development &amp; Design | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://mui.hitrefresh.co.uk/customsoftware"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://mui.hitrefresh.co.uk/customsoftware"
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
          <AboutCustomSoftware
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            matchesMd={matchesMd}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={clsx(classes.containerSpacing, classes.rowContainer)}
        >
          <Icons matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify={matchesMd ? "center" : "space-between"}
          className={clsx(classes.containerSpacing, classes.rowContainer)}
          style={{ display: matchesMd ? "grid" : undefined }}
        >
          <DigitalDocumentsScale matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          className={clsx(classes.containerSpacing, classes.rowContainer)}
          wrap="nowrap"
        >
          <RootCauseAnalysis matchesSm={matchesSm} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          alignItems={matchesMd ? "center" : undefined}
          justify={matchesMd ? "center" : "space-between"}
          className={clsx(
            classes.containerSpacing,
            classes.rowContainer,
            classes.preCTASpacing
          )}
          style={{ display: matchesMd ? "grid" : undefined }}
        >
          <AutomationUIDesign matchesMd={matchesMd} matchesSm={matchesSm} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction theme={theme} matchesSm={matchesSm} setValue={setValue} />
      </Grid>
    </Fragment>
  );
};

export default CustomSoftware;
