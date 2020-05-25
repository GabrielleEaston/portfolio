import React, { Component } from "react";
import data from "../data.json";

export default class Portfolio extends Component {
  state = {
    projects: data
  };

  render() {
    const { projects } = this.state;
    return (
      <section className="projects" >
        <h2 id="projects">Projects</h2>
        <div className="grid">
        {projects.map(project => (
          
          <div className="grid-item" key={project.id}>
            <h3>{project.title}</h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
            <p className="desc">{project.description}</p>
            <p className="technology">{project.technology}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href={project.url} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
          </div>
        ))}
          </div>
      </section>
    );
  }
}
