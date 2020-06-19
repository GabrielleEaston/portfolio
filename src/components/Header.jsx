import React from "react";
import logo from "../assets/345697.svg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link smooth to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <Link smooth to="/">
        <h1 style={{ color: "#333" }}>Gabrielle Easton</h1>
      </Link>
      <ul className="nav">
        <li>
          <Link smooth to="about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="/contact">
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
