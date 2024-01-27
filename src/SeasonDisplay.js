import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: `let's hit the beach`,
    iconName: "sun",
  },
  winter: {
    text: `Burr it is cold`,
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  const date = new Date();
  const month = date.getMonth();
  const season = getSeason(props.lat, month);

  const { text, iconName } = seasonConfig[season]; //{}

  return (
    <div className={`season-display ${season}`}>
      <i className={`top-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`bottom-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
