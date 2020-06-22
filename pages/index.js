import React, { Fragment } from "react";
import Head from "next/head";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import HeroBlock from "../src/components/pages/Landing/HeroBlock/HeroBlock";
import CustomSoftware from "../src/components/pages/Reusable/CustomSoftware/CustomSoftware";
import AppDevelopment from "../src/components/pages/Reusable/AppDevelopment/AppDevelopment";
import WebsiteDevelopment from "../src/components/pages/Reusable/WebsiteDevelopment/WebsiteDevelopment";
import Revolution from "../src/components/pages/Landing/Revolution/Revolution";
import InformationBlock from "../src/components/pages/Landing/InformationBlock/InformationBlock";
import CallToAction from "../src/components/pages/Reusable/CallToAction/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

const Landing = (props) => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fragment>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Approx 160 chars!"
        />
        <meta
          property="og:title"
          content="Custom Software, Mobile Apps and Websites | Arc Development"
          key="og:title"
        />
        <meta
          property="og:url"
          content="https://mui.hitrefresh.co.uk"
          key="og:url"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://mui.hitrefresh.co.uk"
        />
      </Head>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <HeroBlock theme={theme} setValue={setValue} />
        </Grid>
        <Grid item>
          <CustomSoftware
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={false}
          />
        </Grid>
        <Grid item>
          <AppDevelopment
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={true}
          />
        </Grid>
        <Grid item>
          <WebsiteDevelopment
            theme={theme}
            matchesSm={matchesSm}
            setValue={setValue}
            setSelectedIndex={setSelectedIndex}
            floatRight={false}
          />
        </Grid>
        <Grid item>
          <Revolution theme={theme} setValue={setValue} />
        </Grid>
        <Grid item>
          <InformationBlock matchesXS={matchesXS} setValue={setValue} />
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

export default Landing;
