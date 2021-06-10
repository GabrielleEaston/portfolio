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

        <p style={{ marginTop: 10, color: "#4ea993" }}>
          &#9733;Let's build something together
        </p>

        <p style={{ marginTop: 10 }}>
          Favorites: React | Gatsby | CSS | CSS Modules | GraphQL | Responsive
          Design | Debugging | Research | Bootstrap |
        </p>
        <p style={{ marginTop: 15 }}>
          Express | MongoDB | Ruby | Ruby on Rails | Heroku | JQuery | PHP |
          PostesQL | NodeJs
        </p>
      </div>
    </div>
  );
}
