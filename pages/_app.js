import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import ReactGA from "react-ga";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/components/ui/Theme/Theme";

import Header from "../src/components/ui/Header/Header";
import Footer from "../src/components/ui/Footer/Footer";

ReactGA.initialize("UA-11281702-4");

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [tabValue, setTabValue] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header
          value={tabValue}
          setValue={setTabValue}
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
        <Component
          {...pageProps}
          setSelectedIndex={setSelectedMenuIndex}
          setValue={setTabValue}
        />
        <Footer
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
