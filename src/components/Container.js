import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Landing from './landing/Landing';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 5
  },
  paper: {
    padding: theme.spacing.unit * 2
  }
});

class Container extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item>
          <Landing className={classes.paper} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Container);
