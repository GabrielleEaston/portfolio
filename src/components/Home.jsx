import React from "react";
import Hero from "./Hero";
import Projects from "./Project";
import About from "./About";
import Contact from "./Contact";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}