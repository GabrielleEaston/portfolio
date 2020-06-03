import React, { Component } from "react";
import data from "../data.json";
import { motion } from "framer-motion";
export default class Portfolio extends Component {
  state = {
    projects: data,
    hovered: false
  };

  render() {
    const { projects } = this.state;
    return (
      <section className="projects">
        <h2 id="projects">Projects</h2>
        <div className="grid">
          {projects.map(project => (
            <div className="grid-item" key={project.id}>
              <h3>{project.title}</h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{ duration: 1 }}
                  whileHover={{ scale: 1.1 }}
                  src={project.image}
                  alt={project.title}
                  onMouseOver={e => (e.currentTarget.src = project.gif)}
                  onMouseLeave={e => (e.currentTarget.src = project.image)}
            
                />
              </a>
              <p className="desc">{project.description}</p>
              <p className="technology">{project.technology}</p>
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
            </div>
          ))}
        </div>
      </section>
    );
  }
}
