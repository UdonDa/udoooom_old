import React from "react";
import propTypes from "prop-types";
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

function ActivitiesButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button}>
        Activity
      </Button>
    </div>
  );
}

ActivitiesButtons.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(ActivitiesButtons);
