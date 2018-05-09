import React, { Component } from "react";
import "./Buttons.css";
import ProfileButton from "./profileButton";
import ActivitiesButton from "./activitiesButton";
import WorksButton from "./worksButton";
import SocialsButton from "./socialsButton";
import Avatar from "../ourself/avatar";

class Buttons extends Component {
  render() {
    return (
      <div className="Buttons">
        <div>
          <Avatar />
        </div>
        <div className="ButtonsContainer">
          <ProfileButton />
          <ActivitiesButton />
          <WorksButton />
          <SocialsButton />
        </div>
      </div>
    );
  }
}

export default Buttons;
