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
          Hello, I am Gabrielle Easton and I am a web developer. I live and work
          in New York, NY. I spend most of my day, experimenting with HTML, CSS
          and Javascript (and it's endless list of frameworks). I enjoy coding
          and the challenge of learning something new everyday.
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
