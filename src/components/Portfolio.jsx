import React, { Component } from "react";
import data from "../data.json";

export default class Portfolio extends Component {
  state = {
    projects: data
  };

  render() {
    const { projects } = this.state;
    return (
      <section className="projects">
        <h2>Projects</h2>
        <div className="grid">
        {projects.map(project => (
          
          <div className="grid-item" key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <p>{project.technology}</p>
            <a href={project.github} target="_blank"><i className="fab fa-github"></i></a>
            <a href={project.url} target="_blank"><i className="fas fa-globe"></i></a>
          </div>
        ))}
          </div>
      </section>
    );
  }
}
