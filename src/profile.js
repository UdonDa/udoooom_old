import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import AccountIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "7px",
    paddingTop: "7px"
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px"
  }
};
function Profile(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.container}>
        <Avatar className={classes.icon}>
          <AccountIcon />
        </Avatar>
        <div className={classes.text}>
          うどん(@udoooom,{" "}
          <a
            href="https://twitter.com/udoooom/"
            target="_blank"
            className={classes.text}
          >
            Twitter
          </a>)
        </div>
      </div>

      <div className={classes.container}>
        <Avatar className={classes.icon}>
          <AccountIcon />
        </Avatar>
        <div className={classes.text}>
          堀田 大地(Daichi Horita,
          <a
            href="https://www.facebook.com/daichi0727"
            target="_blank"
            className={classes.text}
          >
            Facebook
          </a>)
        </div>
      </div>

      <div className={classes.container}>
        <Avatar className={classes.icon}>
          <SchoolIcon />
        </Avatar>
        <div className={classes.text}>
          <a
            href="http://www.uec.ac.jp/"
            target="_blank"
            className={classes.text}
          >
            UEC Tokyo Undergraduate 2nd grade
          </a>)
        </div>
      </div>

      <div className={classes.container}>
        <Avatar className={classes.icon}>
          <EmailIcon />
        </Avatar>
        <a href="mailto:udooon0727@gmail.com" className={classes.text}>
          udooon0727@gmail.com
        </a>
      </div>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
