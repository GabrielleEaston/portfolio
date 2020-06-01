import React from "react";
import logo from "../assets/logo8.png";
import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>

      <ul className="nav">
        <li>
          <Link smooth to="#about-me">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
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
