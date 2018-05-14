import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import "./App.css";
import Avatar from "./ourself/avatar";
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
                    {/* <BottomNavigationAction
                      component={({ ...props }) => <Link to="/" {...props} />}
                      label="Home"
                      icon={<HomeIcon />}
                    /> */}

                    <BottomNavigationAction
                      component={({ ...props }) => (
                        <Link to="/profile" {...props} />
                      )}
                      label="Profile"
                      icon={<ProfileIcon />}
                    />

                    <BottomNavigationAction
                      component={({ ...props }) => (
                        <Link to="/activities" {...props} />
                      )}
                      label="Activity"
                      icon={<ActivitiesIcon />}
                    />

                    <BottomNavigationAction
                      component={({ ...props }) => (
                        <Link to="/works" {...props} />
                      )}
                      label="Work"
                      icon={<WorksIcon />}
                    />

                    {/* <BottomNavigationAction
                      component={({ ...props }) => (
                        <Link to="/socials" {...props} />
                      )}
                      label="Social"
                      icon={<SocialsIcon />}
                    /> */}
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
