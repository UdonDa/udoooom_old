import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = {};

function Works(props) {
  const { classes } = props;
  return (
    <div>
      <div>Work</div>
      <div>Work</div>
    </div>
  );
}

http: Works.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Works);
