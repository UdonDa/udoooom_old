import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import "./App.css";
import Avatar from "./ourself/avatar";
import HomeButton from "./buttons/homeButton";
import ActivitiesButton from "./buttons/activitiesButton";
import ProfileButton from "./buttons/profileButton";
import SocialsButton from "./buttons/socialsButton";
import WorksButton from "./buttons/worksButton";
import Home from "./home";
import Activities from "./acitivity.js";
import Profile from "./profile";
import Socials from "./social";
import Works from "./work";
import BottomNavigation, {
  BottomNavigationAction
} from "material-ui/BottomNavigation";
import HomeIcon from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/AccountBox";
import ActivitiesIcon from "@material-ui/icons/DirectionsRun";
import WorksIcon from "@material-ui/icons/Work";
import SocialsIcon from "@material-ui/icons/Public";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/activities",
    component: Activities
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/works",
    component: Works
  },
  {
    path: "/socials",
    component: Socials
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const styles = {
  buttons: {
    width: 500
  }
};

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <div className="header">
          <Avatar />
          <Router>
            <div>
              <ul className="ButtonContainer">
                <li>
                  <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.buttons}
                  >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />}>
                      <Link to="/">
                        <HomeButton />
                      </Link>
                    </BottomNavigationAction>
                    <BottomNavigationAction
                      label="Profile"
                      icon={<ProfileIcon />}
                    >
                      <Link to="/profile">
                        <ProfileButton />
                      </Link>
                    </BottomNavigationAction>
                    <BottomNavigationAction
                      label="Activity"
                      icon={<ActivitiesIcon />}
                    >
                      <Link to="/activities">
                        <ActivitiesButton />
                      </Link>
                    </BottomNavigationAction>
                    <BottomNavigationAction label="Work" icon={<WorksIcon />}>
                      <Link to="/works">
                        <WorksButton />
                      </Link>
                    </BottomNavigationAction>
                    <BottomNavigationAction
                      label="Social"
                      icon={<SocialsIcon />}
                    >
                      <Link to="/socials">
                        <SocialsButton />
                      </Link>
                    </BottomNavigationAction>
                  </BottomNavigation>
                </li>
              </ul>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
