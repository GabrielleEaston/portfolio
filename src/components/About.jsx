import React from "react";
import shot from '../assets/shot.png';
export default function About() {
  return (
    <section className="dark">
    <div className="about-me">
        <h3 id="about-me">About Me</h3>
        <div className="shot">
          <img src={shot} alt="me" />
        </div>
      <p>
        I am a solutions-oriented Software Engineer who holds over five years
        experience solving complex issues in the hospitality space. In creating
        top-notch user experiences, I merge my technical training with my
        service background to build intuitive products that proactively
        anticipate the needs of the users we support. I have deep passion for
        design and smooth functionality for my products. I take my job with
        pride and I care deeply about exceeding my clients expectations. <br />Always eager to learn and grow. 
      </p>
      </div>
      </section>
  );
}
