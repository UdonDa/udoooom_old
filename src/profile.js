import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import AccountIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import EmailIcon from "@material-ui/icons/Email";
import BirthdayIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    paddingBottom: "7px",
    paddingTop: "7px",
    // margin: "0 auto",
    position: "relative",
    left: "50%"
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px"
  },
  parent: {
    textAlign: "left"
  },
  items: {
    // margin: "0 auto"
    // textAlign: "center"
    float: "left",
    position: "relative"
  }
};
function Profile(props) {
  const { classes } = props;

  return (
    <div className={classes.parent}>
      <ul className={classes.items}>
        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <AccountIcon />
          </Avatar>
          <div className={classes.text}>うどん</div>
        </li>
        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <AccountIcon />
          </Avatar>
          <div className={classes.text}>堀田 大地 (Daichi Horita)</div>
        </li>
        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <BirthdayIcon />
          </Avatar>
          <div className={classes.text}>
            1997/7/27 ->
            <a
              href="http://amzn.asia/iFrgbB3"
              target="_blank"
              className={classes.text}
            >
              欲しいものリスト
            </a>
          </div>
        </li>

        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <EmailIcon />
          </Avatar>
          <a href="mailto:udooon0727@gmail.com" className={classes.text}>
            udooon0727@gmail.com
          </a>
        </li>
        <li className={classes.container}>
          <Avatar src="/static/images/twitter.png" className={classes.icon} />
          <div className={classes.text}>
            <a
              href="https://twitter.com/udoooom/"
              target="_blank"
              className={classes.text}
            >
              @udoooom
            </a>
          </div>
        </li>
        <li className={classes.container}>
          <Avatar src="/static/images/facebook.png" className={classes.icon} />
          <div className={classes.text}>
            <a
              href="https://www.facebook.com/daichi0727"
              target="_blank"
              className={classes.text}
            >
              @daichi0727
            </a>
          </div>
        </li>
        {/* <div className={classes.container}>
        <Avatar src="/static/images/hatenablog.jpg" className={classes.icon} />
        <div className={classes.text}>
          <a
            href="http://udoooom.hatenablog.com/"
            target="_blank"
            className={classes.text}
          >
            udooom’s diary
          </a>
        </div>
      </div> */}
        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <SchoolIcon />
          </Avatar>
          <div className={classes.text}>
            <a
              href="http://www.uec.ac.jp/"
              target="_blank"
              className={classes.text}
            >
              UEC Tokyo Undergraduate 3nd grade
            </a>
          </div>
        </li>
        <li className={classes.container}>
          <Avatar src="/static/images/labo.png" className={classes.icon} />
          <div className={classes.text}>
            <a
              href="http://mm.cs.uec.ac.jp/e/"
              target="_blank"
              className={classes.text}
            >
              My Laboratory is Yanai Laboratory, <br />Department of Computer
              Science
            </a>
          </div>
        </li>
        <li className={classes.container}>
          <Avatar className={classes.icon}>
            <FavoriteIcon />
          </Avatar>
          <div className={classes.text}>
            DeepLearning, MachineLerning, GAN<br />ComputerVision,
            ObjectDetection,
            <br />DataMining, IntelligentRobotics
          </div>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
