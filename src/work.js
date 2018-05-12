import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = {
  ul: {},
  li: {},
  text: { paddingTop: "7px" },
  year: {
    fontWeight: "bold"
  }
};

function Works(props) {
  const { classes } = props;
  return (
    <ul className={classes.ul}>
      <li className={classes.li}>
        <div className={classes.text}>
          <div className={classes.year}>2016/4 ~</div> entered
          <a
            href="http://www.uec.ac.jp/"
            target="_blank"
            className={classes.text}
          >
            UEC Tokyo
          </a>
        </div>
      </li>
      <li className={classes.li}>
        <div className={classes.text}>
          <div className={classes.year}>2017/5 ~ 2017/11</div> Drone Software
          Engineer Internship at
          <a
            href="https://corp.t-clue.com/"
            target="_blank"
            className={classes.text}
          >
            CLUE, Inc.
          </a>
        </div>
      </li>
      <li className={classes.li}>
        <div className={classes.text}>
          <div className={classes.year}>2017/12 ~ 2018/4</div> Web Software
          Engineer Internship at
          <a href="https://retty.me/" target="_blank" className={classes.text}>
            Retty
          </a>
        </div>
      </li>
      <li className={classes.li}>
        <div className={classes.text}>
          <div className={classes.year}>2018/3 ~</div> entered
          <a
            href="http://mm.cs.uec.ac.jp/e/"
            target="_blank"
            className={classes.text}
          >
            Yanai Lab in UEC Tokyo
          </a>
        </div>
      </li>
    </ul>
  );
}

http: Works.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Works);
