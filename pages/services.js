import React, { Fragment } from "react";
import Head from "next/head";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import CustomSoftware from "../src/components/pages/Reusable/CustomSoftware/CustomSoftware";
import AppDevelopment from "../src/components/pages/Reusable/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "../src/components/pages/Reusable/WebsiteDevelopment/WebsiteDevelopment";

const useStyles = makeStyles((theme) => ({
  blockTop: {
    marginTop: "-5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-9em",
    },
  },
  blockBottom: {
    marginBottom: "10em",
  },
  headerTitle: {
    marginLeft: "5em",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
  },
}));

const Services = (props) => {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <Fragment>
      <Head>
        <title key="title">
          Top custom software development services | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="Top custom software development services | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://mui.hitrefresh.co.uk/services"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://mui.hitrefresh.co.uk/services"
        />
      </Head>
      <Grid container direction="column">
        <Grid item className={classes.headerTitle}>
          <Typography
            align={matchesSm ? "center" : undefined}
            variant="h1"
            gutterBottom
          >
            Services
          </Typography>
        </Grid>
        <Grid item className={classes.blockTop}>
          <CustomSoftware
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={true}
          />
        </Grid>
        <Grid item>
          <AppDevelopment
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={false}
          />
        </Grid>
        <Grid item className={classes.blockBottom}>
          <WebsiteDevelopment
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={true}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
