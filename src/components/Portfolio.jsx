import React, { Component } from "react";
import data from "../data.json";
import Modal from "./Modal.jsx";
import Img from "react-cool-img";

export default class Portfolio extends Component {
  state = {
    projects: data,
    hovered: false
  };

  render() {
    const { projects } = this.state;
    return (
      <section className="projects">
        <div className="grid">
          {projects.map(project => (
            <div className="grid-item" key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Img alt={project.title} src={project.image} />
              </a>
              <h3>{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
              <Modal
                title={project.title}
                id={project.id}
                description={project.description}
                image={project.image}
                technology={project.technology}
                url={project.url}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
