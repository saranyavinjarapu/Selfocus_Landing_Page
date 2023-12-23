import React from "react";
import { Feature } from "../../components";
import selfocusWelcomePage from "../../assets/selfocus_welcomepage.png";
import "./whatSelfocus.css";

const whatSelfocus = () => {
  return (
    <div className="selfocus__whatselfocus section__margin" id="whatselfocus">
      <div className="selfocus__whatselfocus-feature">
        <Feature
          title="What is Selfocus"
          text="Selfocus creates focus work sessions and eliminates distractions based on Pomodoro Technique.
           The Pomodoro Technique is a time management method developed by Francesco Cirillo to achieve productive work/study sessions. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro and it is scientifically proved to be highlly effective in enhancing productivity"
        />
      </div>
      <div className="selfocus__whatselfocus-image">
        <img src={selfocusWelcomePage} alt="selfocus_welcome_page" />
      </div>
    </div>
  );
};

export default whatSelfocus;
