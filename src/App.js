import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./ourself/avatar";
import ActivitiesButton from "./buttons/activitiesButton";
import ProfileButton from "./buttons/profileButton";
import SocialsButton from "./buttons/socialsButton";
import WorksButton from "./buttons/worksButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Avatar />
          <Router>
            <ul>
              <li>
                <Link to="/">
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
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
