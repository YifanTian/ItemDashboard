import React from "react";
import background from "../assets/background/background.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Find the Item to buy.
        </p>
      </div>
    </div>
  );
}

export default About;
