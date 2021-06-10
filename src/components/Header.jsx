import React from "react";
import logo from "../assets/345697.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header({ toggleSideBar }) {
  return (
    <header>
      <button type="button" className="toggle-btn" onClick={toggleSideBar}>
        <FaAlignRight></FaAlignRight>
      </button>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
      </div>
      <Link to="/">
        <h1>Gabrielle Easton</h1>
      </Link>
      <ul className="nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/16od-Rp8fRxlb41OYA5v70sKsQ1e4o-qG/view?usp=sharing"
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
