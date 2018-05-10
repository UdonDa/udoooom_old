import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
  row: {
    float: "left"
  },
  button: {
    margin: theme.spacing.unit
  }
});

function HomeButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Button variant="raised" className={classes.button}>
        Home
      </Button>
    </div>
  );
}

HomeButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeButtons);
