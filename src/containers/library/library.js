import React from "react";
import { Feature } from "../../components";
import "./library.css";
import NewTab from "../../assets/new_tab.svg";
import Design from "../../assets/design.svg";
import Goals from "../../assets/goals.svg";
import Session from "../../assets/session.svg";
import Block from "../../assets/block.svg";
import Background from "../../assets/background.svg";

const libraryData = [
  {
    title: "New-tab dashboard",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    imgPath: NewTab,
    imgAlt: "New Tab Dashboard Icon",
  },
  {
    title: "Minimalistic design",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    imgPath: Design,
    imgAlt: "Minimalistic Design Icon",
  },
  {
    title: "Assign daily goals",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    imgPath: Goals,
    imgAlt: "Daily Goals Icon",
  },
  {
    title: "Create work sessions",
    text: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    imgPath: Session,
    imgAlt: "Work Sessions Icon",
  },
  {
    title: "Block distracting websites",
    text: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    imgPath: Block,
    imgAlt: "Block Distracting Websites Icon",
  },
  {
    title: "Momentum inspired backgrounds",
    text: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    imgPath: Background,
    imgAlt: "Inspirational Backgrounds Icon",
  },
];

const library = () => {
  return (
    <div className="selfocus__library section__margin " id="library">
      <div className="selfocus__library-feature ">
        <Feature
          title="Library"
          text="Launched in Chrome Extensions, Productivity, Task Management. Our inspiring nature backgrounds and Zen music keep you calm and focused. These methods are scientifically proven to be efficient in increasing your focus and productivity while reducing stress"
        />
      </div>

      <div className="selfocus__library-container">
        {libraryData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            imagePath={item.imgPath}
            imageAlt={item.imgAlt}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default library;
