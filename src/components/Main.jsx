import React from "react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Hero from "./Hero";
import About from "./About";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Hero />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </main>
  );
}
