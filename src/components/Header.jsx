import React from "react";
//import { Link } from "react-router-dom";
import logo from "../assets/logo8.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
  
      <ul className="nav">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        </ul>
  
    </header>
  );
}
