import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Calming Zen music",
    text: "Zen music that runs in the background to help achieve a calm and concentrated work/study session",
  },
  {
    title: "Inspirational quotes",
    text: "Hand curated inspirational quotes displayed to help achieve the required motivation to get through the given task or the day",
  },
  {
    title: "Session timer",
    text: "work/break timer to allow work/take breaks without any distractions. The timer can be made custom setting ",
  },
  {
    title: "To-do list",
    text: "List of all the items that need to be worked on for the given user",
  },
  {
    title: "Inbuilt Google search bar",
    text: "Built in google search bar to enable searching of the work/study related topics and keywords",
  },
  {
    title: "More features coming soon",
    text: "Hang in there !! More Such Features Coming in...",
  },
];

const Features = () => (
  <div
    className="selfocus__features section__margin gradient__bg"
    id="features"
  >
    <div className="selfocus__features-feature">
      <Feature
        title="Features"
        text="Launched in Chrome Extensions, Productivity, Task Management. Our inspiring nature backgrounds and Zen music keep you calm and focused. These methods are scientifically proven to be efficient in increasing your focus and productivity while reducing stress"
      />
    </div>

    <div className="selfocus__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
