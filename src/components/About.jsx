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
          A Software Developer based in New York. Lover of fast, minimalist
          experiences, aesthetic design, technologies.
          <br /> Always open to work on exciting projects, be part of an awesome
          team or/and work independently. Feel free to reach out.
        </p>
        <p style={{ marginTop: 10 }}>&#9733;Let's build something together</p>

        <p style={{ marginTop: 10 }}>
          Favorites: React | Gatsby | CSS3 | CSS Modules | Responsive Design |
          Debugging | Research
        </p>
      </div>
    </div>
  );
}
