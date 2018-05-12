import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import "./avatar.css";
import ProfileLogo from "../images/profile-logo.jpg";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 0 0 0"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 120,
    height: 120
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="udoooom"
        src={ProfileLogo}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <div className="MyName">udoooom</div>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
