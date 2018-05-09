import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function RaisedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button}>
        Activity
      </Button>
    </div>
  );
}

RaisedButtons.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RaisedButtons);
