import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "../ourself/avatar";
import Buttons from "../buttons/buttons";

const styles = {};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar />
      <Buttons />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
