import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Avatar />
          <Router>
            <div>
              <ul className="ButtonContainer">
                <li>
                  <Link to="/">
                    <HomeButton />
                  </Link>
                  <Link to="/profile">
                    <ProfileButton />
                  </Link>
                  <Link to="/activities">
                    <ActivitiesButton />
                  </Link>
                  <Link to="/works">
                    <WorksButton />
                  </Link>
                  <Link to="/socials">
                    <SocialsButton />
                  </Link>
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

export default App;
