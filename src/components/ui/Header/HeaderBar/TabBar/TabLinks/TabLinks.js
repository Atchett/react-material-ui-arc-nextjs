import React from "react";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Link from "../../../../../../Link";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  disableUnderline: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const TabLinks = (props) => {
  const classes = useStyles();

  const tabChangeHandler = (e, newValue) => {
    props.tabChangeHandler(newValue);
  };

  return (
    <Tabs
      value={props.tabValue}
      onChange={tabChangeHandler}
      className={classes.tabContainer}
      indicatorColor="primary"
    >
      {props.routes.map((route, i) => (
        <Tab
          key={i}
          className={classes.tab}
          component={Link}
          href={route.link}
          label={route.name}
          aria-owns={route.ariaOwns}
          aria-haspopup={route.ariaPopup}
          onMouseOver={route.mouseOver}
          className={classes.disableUnderline}
        />
      ))}
    </Tabs>
  );
};

export default TabLinks;
