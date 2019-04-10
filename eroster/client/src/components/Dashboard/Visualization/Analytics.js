import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SummaryStastics from "./SummaryStastics";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 100
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  avatar: {
    margin: 10
  }
});

function PersonalRatings(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <br />
      <Typography variant="h4" gutterBottom align="center">
        Performance
      </Typography>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={3} sm={3}>
          <SummaryStastics />
        </Grid>
        <Grid item xs={3} sm={3}>
          <SummaryStastics />
        </Grid>
        <Grid item xs={3} sm={3}>
          <SummaryStastics />
        </Grid>
        <Grid item xs={3} sm={3}>
          <SummaryStastics />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4" gutterBottom align="center">
        Analytics
      </Typography>
    </div>
  );
}

PersonalRatings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalRatings);
