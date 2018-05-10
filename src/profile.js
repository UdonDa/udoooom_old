import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import SchoolIcon from "@material-ui/icons/School";

const styles = {
  school: {}
};
function Profile(props) {
  const { classes } = props;

  return (
    <div>
      <Avatar className={classes.school}>
        <SchoolIcon />
      </Avatar>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
