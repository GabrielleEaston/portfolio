import React from "react";
import shot from "../assets/shot.png";
export default function About() {
  return (
    <div className="about-me">
      <div className="shot">
        <img src={shot} alt="me" />
      </div>
      <div className="me-info">
        <h3>About Me</h3>
        <p>
          I am Gabrielle Easton and I am a Web Developer. Lover of fast,
          minimalist experiences and aesthetic design. I live and work in NYC
          area. I enjoy coding and the challenge of learning something new
          everyday.
        </p>

        <p style={{ marginTop: 10, color: "#4ea993" }}>
          &#9733;Let's build something together
        </p>

        <p style={{ marginTop: 10 }}>
          Favorites: React | Gatsby | CSS3 | CSS Modules | GraphQL | Responsive
          Design | Debugging | Research
        </p>
      </div>
    </div>
  );
}
