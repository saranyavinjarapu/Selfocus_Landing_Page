import React from "react";
import { Feature } from "../../components";
import "./possibility.css";
import YourSvg from "../../assets/ff.svg";

const possibilityData = [
  {
    title: "New-tab dashboard",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    title: "Minimalistic design",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    title: "Assign daily goals",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    title: "Create work sessions",
    text: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    title: "Block distracting websites",
    text: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    title: "Momentum inspired backgrounds",
    text: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const possibility = () => {
  return (
    <div
      className="selfocus__possibilities section__margin "
      id="possibilities"
    >
      <div className="selfocus__possibilities-possibility ">
        <Feature
          title="Features"
          text="Launched in Chrome Extensions, Productivity, Task Management. Our inspiring nature backgrounds and Zen music keep you calm and focused. These methods are scientifically proven to be efficient in increasing your focus and productivity while reducing stress"
        />
      </div>

      <img
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "#39afa3 !important",
        }}
        src={YourSvg}
        alt="Your SVG"
      />

      <div className="selfocus__possibilities-container">
        {possibilityData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            imagePath=""
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default possibility;
