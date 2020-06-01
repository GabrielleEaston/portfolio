import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>Gabrielle Easton</h1>
        <h2>Software Developer</h2>
        <Link smooth to="#projects" className="hero-button">
          View my work
        </Link>
      </div>
    </div>
  );
}
