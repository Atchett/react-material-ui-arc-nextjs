import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Link from "../../../../../Link";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <Button
      component={Link}
      href="/"
      className={classes.logoContainer}
      onClick={() => props.clickToHome(0)}
      disableRipple
    >
      <img src="/assets/logo.svg" alt="Logo" className={classes.logo} />
    </Button>
  );
};

export default Logo;
