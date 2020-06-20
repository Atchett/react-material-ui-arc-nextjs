import React, { Fragment } from "react";
import Head from "next/head";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import Form from "../src/components/pages/Contact/Form/Form";
import CallToAction from "../src/components/pages/Contact/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
  },
  formContainer: {
    marginBottom: 0,
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      marginBottom: "5em",
      marginTop: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
}));

const Contact = (props) => {
  const { setValue } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fragment>
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="Contact Us | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://arc.com/contact"
          key="og:url"
        />
        <link rel="canonical" key="canonical" href="https://arc.com/contact" />
      </Head>
      <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          lg={4}
          xl={3}
          className={classes.formContainer}
        >
          <Form
            matchesMd={matchesMd}
            matchesXs={matchesXs}
            matchesSm={matchesSm}
          />
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          className={classes.background}
          lg={8}
          xl={9}
          alignItems="center"
          justify={matchesMd ? "center" : undefined}
        >
          <CallToAction
            matchesMd={matchesMd}
            setValue={setValue}
            theme={theme}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Contact;
