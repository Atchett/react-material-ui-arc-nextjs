import React, { Fragment } from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  extendAccessIcon: {
    maxWidth: "28em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "15em",
    },
  },
}));

const Icons = (props) => {
  const { matchesSm } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item container direction="column" md alignItems="center">
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Extend Functionality
          </Typography>
        </Grid>
        <Grid item>
          <img
            src="/assets/swissKnife.svg"
            className={classes.extendAccessIcon}
            alt="Swiss Army Knife icon"
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" md alignItems="center">
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Extend Access
          </Typography>
        </Grid>
        <Grid item>
          <img
            src="/assets/extendAccess.svg"
            alt="Tear off Icon"
            className={classes.extendAccessIcon}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" md alignItems="center">
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Increase Engagement
          </Typography>
        </Grid>
        <Grid item>
          <img
            src="/assets/increaseEngagement.svg"
            alt="App with notification icon"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Icons;
