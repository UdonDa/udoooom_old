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

function SocialsButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" className={classes.button}>
        Socials
      </Button>
    </div>
  );
}

SocialsButtons.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialsButtons);
