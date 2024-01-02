import React from "react";
import people from "../../assets/people.png";
import selfocusLogo from "../../assets/selfocus_logo_128.png";
import "./header.css";
import { useSnackbar } from "notistack";

const Header = () => {
  const { enqueueSnackbar } = useSnackbar();
  const getStartedAction = (e) => {
    e.preventDefault();
    enqueueSnackbar("Thank you for your submission !");
  };
  return (
    <div className="selfocus__header section__padding" id="home">
      <div className="selfocus__header-content">
        <h1 className="gradient__text">
          Increase Your Productivity By Eliminating Distractions
        </h1>
        <p>
          Selfocus replaces your default new tab page with a personal dashboard
          which helps you - assign goals for the day, create work sessions and
          break sessions, create to-do lists, and block distracting websites.{" "}
        </p>

        <div className="selfocus__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button" onClick={getStartedAction}>
            Get Started
          </button>
        </div>

        <div className="selfocus__header-content__people">
          <img src={people} alt="people_access" />
          <p>people who requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="selfocus__header-image">
        <img src={selfocusLogo} alt="selfocus_logo" />
      </div>
    </div>
  );
};

export default Header;
