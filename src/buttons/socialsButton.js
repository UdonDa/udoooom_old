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

function SocialsButtons(props) {
  const { classes } = props;
  return (
    <div className="TopButton">
      <Button variant="raised" className={classes.button}>
        Socials
      </Button>
    </div>
  );
}

SocialsButtons.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(SocialsButtons);
