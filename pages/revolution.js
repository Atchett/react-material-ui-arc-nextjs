import React, { Fragment } from "react";
import clsx from "clsx";
import Head from "next/head";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import Vision from "../src/components/pages/Revolution/Vision/Vision";
import Technology from "../src/components/pages/Revolution/Technology/Technology";
import Consultation from "../src/components/pages/Revolution/Consultation/Consultation";
import Mockup from "../src/components/pages/Revolution/Mockup/Mockup";
import Review from "../src/components/pages/Revolution/Review/Review";
import Design from "../src/components/pages/Revolution/Design/Design";
import Review2 from "../src/components/pages/Revolution/Review2/Review2";
import Build from "../src/components/pages/Revolution/Build/Build";
import Launch from "../src/components/pages/Revolution/Launch/Launch";
import Maintain from "../src/components/pages/Revolution/Maintain/Maintain";
import Iterate from "../src/components/pages/Revolution/Iterate/Iterate";
import GridBlock from "../src/components/pages/Revolution/GridBlock/GridBlock";
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
  contentContainer: {
    maxWidth: "40em",
  },
  headerTop: {
    marginTop: "2em",
  },
  headerFont: {
    fontFamily: "Pacifico",
  },
  visionTop: {
    marginTop: "5em",
  },
  techMargins: {
    marginTop: "10em",
    marginBottom: "10em",
  },
}));

const Revolution = (props) => {
  const { setValue } = props;
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Fragment>
      <Head>
        <title key="title">
          The Revolution - cutting-edge software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="The Revolution - cutting-edge software | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://mui.hitrefresh.co.uk/revolution"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://mui.hitrefresh.co.uk/revolution"
        />
      </Head>
      <Grid container direction="column">
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          className={clsx(classes.rowContainer, classes.headerTop)}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            lg
            className={classes.contentContainer}
          >
            <Grid item>
              <Typography
                align={matchesMd ? "center" : undefined}
                variant="h1"
                className={classes.headerFont}
              >
                The Revolution
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          className={clsx(classes.rowContainer, classes.visionTop)}
          alignItems="center"
        >
          <Vision matchesMd={matchesMd} />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          className={clsx(classes.rowContainer, classes.techMargins)}
          alignItems="center"
        >
          <Technology matchesMd={matchesMd} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          className={classes.rowContainer}
        >
          <Grid item>
            <Typography
              align={matchesMd ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Process
            </Typography>
          </Grid>
        </Grid>

        <GridBlock matchesMd={matchesMd} blockColour="#b3b3b3">
          <Consultation matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#ff7373">
          <Mockup matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#39b54a">
          <Review matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#a67c52">
          <Design matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#39b54a">
          <Review2 matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#fbb03b">
          <Build matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#c1272d">
          <Launch matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#8e45ce">
          <Maintain matchesMd={matchesMd} />
        </GridBlock>

        <GridBlock matchesMd={matchesMd} blockColour="#29abe2">
          <Iterate matchesMd={matchesMd} />
        </GridBlock>
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

export default Revolution;
