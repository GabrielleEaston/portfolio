import React from "react";
import logo from "../assets/logo8.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>

      <ul className="nav">
        <li>
          <a href="#about-me">About</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://docdro.id/81wrqzw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
