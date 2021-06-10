import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaDev } from "react-icons/fa"
export default function Footer() {
  return (
    <footer>
      <a
        className="social-media"
        href="https://github.com/GabrielleEaston"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
      <FaGithubSquare />
      </a>
      <a
        className="social-media"
        href="https://www.linkedin.com/in/gabrielle-easton"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaLinkedin />
      </a>
      <a className="social-media" href="mailto:eastongabrielle@gmail.com">
        <FaEnvelope />
      </a>
      <a
        className="social-media"
        href="https://dev.to/gabrielleeaston"
        target="_blank"
        rel="noopener noreferrer"
      >
      <FaDev />
      </a>
      <p>
        © 2020 by Gabrielle Easton All rights reserved.
        <br />
        This website was built with React.
      </p>
    </footer>
  );
}
