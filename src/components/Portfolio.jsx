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
        <h2 style={{ textAlign: "center", paddingBottom: 30, color: "#777" }}>
          This page is being updated!!!! 
        </h2>
        <div className="grid">
          {projects.map(project => (
            <div className="grid-item" key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  transition={{ duration: 0.1 }}
                  whileHover={{ opacity: 0.9 }}
                  src={project.image}
                  alt={project.title}
                  // onMouseOver={e => (e.currentTarget.src = project.gif)}
                  // onMouseLeave={e => (e.currentTarget.src = project.image)}
                />
              </a>
              <h3>{project.title}</h3>
              {/* <span className="hover">Hover the image for DEMO</span> */}
              {/* <p className="desc">{project.description}</p>
              <p className="technology">{project.technology}</p> */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  style={{ color: "rgb(109, 105, 105)" }}
                  className="fab fa-github"
                ></i>
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <i
                  style={{ color: "rgb(109, 105, 105)" }}
                  className="fas fa-globe"
                ></i>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
