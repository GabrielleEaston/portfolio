import React from "react";
import shot from "../assets/shot.png";
export default function About() {
  return (
    <div className="about-me" id="about">
      <div className="shot">
        <img src={shot} alt="me" />
      </div>
      <div className="me-info">
        <h3>About Me</h3>
        <p>
          Software Developer with a passion for visual design and seamless user
          experience. As a lifelong learner and independent self-starter, I am
          constantly searching for new trends in the industry in order to create
          cutting edge products. I seek the opportunity to leverage my creative
          and analytical skills to build amazing, fast, modern websites and
          applications.
        </p>

        <p style={{ marginTop: 10, color: "#2caeba" }}>
          &#9733;Let's build something together
        </p>

      
        <div className="about-stack">
          <span>Javascript</span>
          <span>React</span>
          <span>Gatsby</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>GraphQL</span>
          <span>Bootstrap</span>
          <span>Debugging</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Ruby on Rails </span>
          <span>PostesQL</span>
          <span>NodeJs</span>
          <span>JQuery</span>
        </div>
      </div>
    </div>
  );
}
