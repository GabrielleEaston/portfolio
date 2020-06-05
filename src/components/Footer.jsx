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
      <p>© 2020 by Gabrielle Easton All rights reserved.</p>
      <p>This website was built with ReactJs.</p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
    </footer>
  );
}
