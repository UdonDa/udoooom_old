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

function ProfileButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button}>
        Profile
      </Button>
    </div>
  );
}

ProfileButtons.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(ProfileButtons);
