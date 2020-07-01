import React from "react";

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
        <i className="fab fa-github footer-icons"></i>
      </a>
      <a
        className="social-media"
        href="https://www.linkedin.com/in/gabrielle-easton"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <i className="fab fa-linkedin footer-icons"></i>
      </a>
      <a className="social-media" href="mailto:eastongabrielle@gmail.com">
        <i className="fas fa-envelope footer-icons"></i>
      </a>
      <p>
        © 2020 by Gabrielle Easton All rights reserved.
        <br />
        This website was built with ReactJs.
      </p>
    </footer>
  );
}
